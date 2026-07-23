"use client";
import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Plus, Pencil, Trash2, X, Check, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EMPTY_FORM = { name: "", slug: "", description: "", image_url: "", icon: "", sort_order: 0, is_active: true };

function CategoryForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const autoSlug = (name) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");

  const handleSave = async () => {
    if (!form.name || !form.slug) return;
    setSaving(true);
    if (initial?.id) {
      await base44.entities.Category.update(initial.id, form);
    } else {
      await base44.entities.Category.create(form);
    }
    setSaving(false);
    onSave();
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 space-y-4">
      <h3 className="text-white font-semibold text-sm">{initial?.id ? "Kategorie bearbeiten" : "Neue Kategorie"}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Name *</label>
          <Input
            value={form.name}
            onChange={e => set("name", e.target.value) || (!initial?.id && set("slug", autoSlug(e.target.value)))}
            placeholder="z.B. Bürocontainer"
            className="bg-slate-700 border-slate-600 text-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Slug *</label>
          <Input
            value={form.slug}
            onChange={e => set("slug", e.target.value)}
            placeholder="z.B. buerocontainer"
            className="bg-slate-700 border-slate-600 text-white font-mono"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs text-slate-400 mb-1 block">Beschreibung</label>
          <Input
            value={form.description}
            onChange={e => set("description", e.target.value)}
            placeholder="Kurze Beschreibung der Kategorie"
            className="bg-slate-700 border-slate-600 text-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Bild URL</label>
          <Input
            value={form.image_url}
            onChange={e => set("image_url", e.target.value)}
            placeholder="https://..."
            className="bg-slate-700 border-slate-600 text-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Icon (Lucide Name)</label>
          <Input
            value={form.icon}
            onChange={e => set("icon", e.target.value)}
            placeholder="z.B. Package"
            className="bg-slate-700 border-slate-600 text-white font-mono"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Reihenfolge</label>
          <Input
            type="number"
            value={form.sort_order}
            onChange={e => set("sort_order", parseInt(e.target.value) || 0)}
            className="bg-slate-700 border-slate-600 text-white"
          />
        </div>
        <div className="flex items-center gap-3 mt-5">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={form.is_active} onChange={e => set("is_active", e.target.checked)} className="sr-only peer" />
            <div className="w-9 h-5 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
          <span className="text-sm text-slate-300">Aktiv</span>
        </div>
      </div>
      {form.image_url && (
        <div className="flex items-center gap-3">
          <img src={form.image_url} alt="Preview" className="w-20 h-14 object-cover rounded-lg border border-slate-600" />
          <span className="text-xs text-slate-500">Bildvorschau</span>
        </div>
      )}
      <div className="flex gap-2 justify-end">
        <Button variant="ghost" onClick={onCancel} className="text-slate-400 hover:text-white">
          <X className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <Button disabled={saving || !form.name || !form.slug} onClick={handleSave} className="text-white" style={{ backgroundColor: "#1E5FAE" }}>
          <Check className="w-4 h-4 mr-1" /> {saving ? "Speichern..." : "Speichern"}
        </Button>
      </div>
    </div>
  );
}

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const load = async () => {
    const cats = await base44.entities.Category.list("-sort_order");
    setCategories(cats.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)));
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Kategorie wirklich löschen?")) return;
    await base44.entities.Category.delete(id);
    load();
  };

  const editingCategory = categories.find(c => c.id === editingId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading font-bold text-white text-2xl">Kategorien</h1>
          <p className="text-slate-400 text-sm mt-1">{categories.length} Container-Kategorien</p>
        </div>
        <Button onClick={() => { setShowForm(true); setEditingId(null); }} className="font-heading font-semibold text-white hover:opacity-90" style={{ backgroundColor: "#1E5FAE" }}>
          <Plus className="w-4 h-4 mr-2" /> Neue Kategorie
        </Button>
      </div>

      {showForm && !editingId && (
        <CategoryForm
          onSave={() => { setShowForm(false); load(); }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : categories.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p>Noch keine Kategorien. Erstellen Sie Ihre erste Kategorie.</p>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide w-8"></th>
                  <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide">Kategorie</th>
                  <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide hidden md:table-cell">Slug</th>
                  <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide hidden lg:table-cell">Beschreibung</th>
                  <th className="text-left px-5 py-3 text-slate-400 font-medium text-xs uppercase tracking-wide">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  editingId === cat.id ? (
                    <tr key={cat.id}>
                      <td colSpan={6} className="px-4 py-3">
                        <CategoryForm
                          initial={editingCategory}
                          onSave={() => { setEditingId(null); load(); }}
                          onCancel={() => setEditingId(null)}
                        />
                      </td>
                    </tr>
                  ) : (
                    <tr key={cat.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="px-3 py-3 text-slate-600">
                        <GripVertical className="w-4 h-4" />
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          {cat.image_url ? (
                            <img src={cat.image_url} alt={cat.name} className="w-12 h-9 rounded-lg object-cover bg-slate-800 shrink-0" />
                          ) : (
                            <div className="w-12 h-9 rounded-lg bg-slate-800 shrink-0 flex items-center justify-center">
                              <span className="text-slate-600 text-xs">–</span>
                            </div>
                          )}
                          <p className="text-white font-medium">{cat.name}</p>
                        </div>
                      </td>
                      <td className="px-5 py-3 hidden md:table-cell">
                        <span className="text-slate-400 font-mono text-xs bg-slate-800 px-2 py-0.5 rounded">{cat.slug}</span>
                      </td>
                      <td className="px-5 py-3 text-slate-400 hidden lg:table-cell text-xs max-w-xs truncate">
                        {cat.description || "–"}
                      </td>
                      <td className="px-5 py-3">
                        <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                          cat.is_active ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        }`}>
                          {cat.is_active ? "Aktiv" : "Inaktiv"}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-1 justify-end">
                          <button onClick={() => setEditingId(cat.id)} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(cat.id)} className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}