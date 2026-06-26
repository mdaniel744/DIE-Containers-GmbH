"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Package, FileText, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      base44.entities.Product.list(),
      base44.entities.QuoteRequest.list("-created_date", 5),
    ]).then(([p, q]) => {
      setProducts(p);
      setQuotes(q);
      setLoading(false);
    });
  }, []);

  const pendingQuotes = quotes.filter(q => q.status === "pending").length;
  const availableProducts = products.filter(p => p.is_available).length;

  const stats = [
    { label: "Produkte gesamt", value: products.length, icon: Package, color: "#F28C28", href: "/admin/produkte" },
    { label: "Verfügbar", value: availableProducts, icon: CheckCircle2, color: "#10b981", href: "/admin/produkte" },
    { label: "Anfragen gesamt", value: quotes.length, icon: FileText, color: "#6366f1", href: "/admin/anfragen" },
    { label: "Offene Anfragen", value: pendingQuotes, icon: Clock, color: "#f59e0b", href: "/admin/anfragen" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-8 h-8 border-4 border-slate-700 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading font-bold text-white text-2xl">Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">Übersicht über Produkte und Anfragen</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link key={stat.label} to={stat.href}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </div>
            <p className="font-heading font-bold text-white text-2xl">{stat.value}</p>
            <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent quotes */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-semibold text-white">Neueste Anfragen</h2>
            <Link to="/admin/anfragen" className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1">
              Alle <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {quotes.length === 0 ? (
            <p className="text-slate-500 text-sm">Noch keine Anfragen eingegangen.</p>
          ) : (
            <div className="space-y-3">
              {quotes.slice(0, 5).map((q) => (
                <div key={q.id} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                  <div>
                    <p className="text-white text-sm font-medium">{q.first_name} {q.last_name}</p>
                    <p className="text-slate-400 text-xs">{q.container_size} · {q.container_type}</p>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                    q.status === "pending" ? "bg-amber-500/10 text-amber-400" :
                    q.status === "quoted" ? "bg-blue-500/10 text-blue-400" :
                    "bg-emerald-500/10 text-emerald-400"
                  }`}>
                    {q.status === "pending" ? "Offen" : q.status === "quoted" ? "Angeboten" : q.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Products list */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-heading font-semibold text-white">Produkte</h2>
            <Link to="/admin/produkte" className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1">
              Alle <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {products.length === 0 ? (
            <p className="text-slate-500 text-sm">Noch keine Produkte vorhanden.</p>
          ) : (
            <div className="space-y-3">
              {products.slice(0, 5).map((p) => (
                <Link key={p.id} to={`/admin/produkte/${p.id}`}
                  className="flex items-center gap-3 py-2 border-b border-slate-800 last:border-0 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                    {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium truncate">{p.title}</p>
                    <p className="text-slate-400 text-xs">{p.size} · ab {p.price_from?.toLocaleString("de-DE")} €</p>
                  </div>
                  <span className={`text-[10px] shrink-0 font-medium px-2 py-1 rounded-full ${
                    p.is_available ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                  }`}>
                    {p.is_available ? "Verfügbar" : "Nicht verfügbar"}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}