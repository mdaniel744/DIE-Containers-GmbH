"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Plus, Pencil, Trash2, Search, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState(null);

  const load = () => {
    base44.entities.Product.list().then(p => {
      setProducts(p);
      setLoading(false);
    });
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Produkt wirklich löschen?")) return;
    setDeleting(id);
    await base44.entities.Product.delete(id);
    load();
    setDeleting(null);
  };

  const filtered = products.filter(p =>
    !search || p.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading font-bold text-white text-2xl">Produkte</h1>
          <p className="text-slate-400 text-sm mt-1">{products.length} Container im System</p>
        </div>
        <Link to="/admin/produkte/neu">
          <Button className="font-heading font-semibold text-white hover:opacity-90" style={{ backgroundColor: "#1E5FAE" }}>
            <Plus className="w-4 h-4 mr-2" /> Neues Produkt
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Produkt suchen..."
          className="pl-9 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <p>Keine Produkte gefunden.</p>
              <Link to="/admin/produkte/neu" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                Jetzt erstes Produkt anlegen →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide">Produkt</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide hidden md:table-cell">Typ</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide hidden lg:table-cell">Zustand</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide">Preis</th>
                    <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide hidden sm:table-cell">Status</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-10 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                            {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white font-medium truncate max-w-[160px]">{p.title}</p>
                            <p className="text-slate-400 text-xs">{p.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-slate-300 hidden md:table-cell">{p.container_type}</td>
                      <td className="px-5 py-3 text-slate-300 hidden lg:table-cell">{p.condition}</td>
                      <td className="px-5 py-3 text-white font-medium">
                        {p.price_from ? `${p.price_from.toLocaleString("de-DE")} €` : "–"}
                      </td>
                      <td className="px-5 py-3 hidden sm:table-cell">
                        <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                          p.is_available ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        }`}>
                          {p.is_available ? "Verfügbar" : "Nicht verfügbar"}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-1 justify-end">
                          <a href={`/produkt/${p.slug || p.id}`} target="_blank"
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </a>
                          <Link to={`/admin/produkte/${p.id}`}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                            <Pencil className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(p.id)}
                            disabled={deleting === p.id}
                            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-colors disabled:opacity-50">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}