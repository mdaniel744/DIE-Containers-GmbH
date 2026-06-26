"use client";
import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Search, Mail, Phone, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const STATUS_OPTS = ["pending", "reviewed", "quoted", "accepted", "declined"];
const STATUS_LABELS = {
  pending: "Offen", reviewed: "Geprüft", quoted: "Angeboten",
  accepted: "Akzeptiert", declined: "Abgelehnt"
};
const STATUS_COLORS = {
  pending: "bg-amber-500/10 text-amber-400",
  reviewed: "bg-blue-500/10 text-blue-400",
  quoted: "bg-purple-500/10 text-purple-400",
  accepted: "bg-emerald-500/10 text-emerald-400",
  declined: "bg-red-500/10 text-red-400",
};

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const load = () => {
    base44.entities.QuoteRequest.list("-created_date").then(q => {
      setQuotes(q);
      setLoading(false);
    });
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    await base44.entities.QuoteRequest.update(id, { status });
    setQuotes(qs => qs.map(q => q.id === id ? { ...q, status } : q));
  };

  const filtered = quotes.filter(q => {
    const matchSearch = !search ||
      `${q.first_name} ${q.last_name} ${q.email} ${q.company}`.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || q.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-bold text-white text-2xl">Anfragen</h1>
        <p className="text-slate-400 text-sm mt-1">{quotes.length} Anfragen total · {quotes.filter(q => q.status === "pending").length} offen</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Name, E-Mail suchen..."
            className="pl-9 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500" />
        </div>
        <div className="flex gap-1 flex-wrap">
          {["all", ...STATUS_OPTS].map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                filter === s ? "bg-orange-500 text-slate-900" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              }`}>
              {s === "all" ? "Alle" : STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-slate-700 border-t-orange-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-500 bg-slate-900 border border-slate-800 rounded-2xl">
              Keine Anfragen gefunden.
            </div>
          ) : filtered.map(q => (
            <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              {/* Header row */}
              <button
                onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-800/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-white font-medium">{q.first_name} {q.last_name}</p>
                    {q.company && <p className="text-slate-400 text-sm">{q.company}</p>}
                  </div>
                  <p className="text-slate-400 text-sm mt-0.5">{q.container_size} · {q.container_type} · {q.quantity}x</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[q.status]}`}>
                    {STATUS_LABELS[q.status]}
                  </span>
                  <p className="text-slate-500 text-xs hidden sm:block">
                    {new Date(q.created_date).toLocaleDateString("de-DE")}
                  </p>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expanded === q.id ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Expanded */}
              {expanded === q.id && (
                <div className="border-t border-slate-800 p-5 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Contact */}
                    <InfoBlock title="Kontakt">
                      <InfoRow icon={Mail} label="E-Mail" value={q.email} link={`mailto:${q.email}`} />
                      {q.phone && <InfoRow icon={Phone} label="Telefon" value={q.phone} link={`tel:${q.phone}`} />}
                    </InfoBlock>
                    {/* Container */}
                    <InfoBlock title="Container">
                      <InfoLine label="Größe" value={q.container_size} />
                      <InfoLine label="Typ" value={q.container_type} />
                      <InfoLine label="Zustand" value={q.condition} />
                      <InfoLine label="Farbe" value={q.color} />
                      <InfoLine label="Menge" value={q.quantity} />
                    </InfoBlock>
                    {/* Delivery */}
                    <InfoBlock title="Lieferadresse">
                      <InfoLine label="Straße" value={q.street} />
                      <InfoLine label="PLZ / Ort" value={`${q.postal_code || ""} ${q.city || ""}`.trim()} />
                      <InfoLine label="Land" value={q.country} />
                      <InfoLine label="Entlademethode" value={q.unloading_method} />
                    </InfoBlock>
                  </div>

                  {q.additional_notes && (
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <p className="text-xs text-slate-400 mb-1">Anmerkungen</p>
                      <p className="text-slate-300 text-sm">{q.additional_notes}</p>
                    </div>
                  )}

                  {/* Status updater */}
                  <div className="flex items-center gap-3 flex-wrap pt-2 border-t border-slate-800">
                    <p className="text-xs text-slate-400 font-medium">Status ändern:</p>
                    {STATUS_OPTS.map(s => (
                      <button key={s} onClick={() => updateStatus(q.id, s)}
                        disabled={q.status === s}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-40 ${
                          q.status === s ? STATUS_COLORS[s] + " cursor-default" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        }`}>
                        {STATUS_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoBlock({ title, children }) {
  return (
    <div>
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-2">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function InfoLine({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <span className="text-slate-500 text-xs w-24 shrink-0">{label}</span>
      <span className="text-slate-200 text-xs">{value}</span>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, link }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
      {link ? (
        <a href={link} className="text-orange-400 hover:underline text-xs truncate">{value}</a>
      ) : (
        <span className="text-slate-200 text-xs truncate">{value}</span>
      )}
    </div>
  );
}