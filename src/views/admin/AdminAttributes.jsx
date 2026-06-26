"use client";
import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Plus, Pencil, Trash2, ChevronDown, ChevronRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AttributeValueRow({ value, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800/40 group rounded-lg">
      {/* Color swatch */}
      <div
        className="w-7 h-7 rounded-full border-2 border-slate-600 shrink-0"
        style={{ backgroundColor: value.hex_code || "#374151" }}
        title={value.hex_code}
      />
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium">{value.label}</p>
        <p className="text-slate-500 text-xs font-mono">{value.hex_code || "–"} · value: {value.value}</p>
      </div>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={() => onEdit(value)} className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md">
          <Pencil className="w-3.5 h-3.5" />
        </button>
        <button onClick={() => onDelete(value.id)} className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-md">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function ValueForm({ attributeId, attributeSlug, initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { label: "", value: "", hex_code: "", swatch_url: "" });
  const [saving, setSaving] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = async () => {
    if (!form.label || !form.value) return;
    setSaving(true);
    const payload = { ...form, attribute_id: attributeId, attribute_slug: attributeSlug };
    if (initial?.id) {
      await base44.entities.AttributeValue.update(initial.id, payload);
    } else {
      await base44.entities.AttributeValue.create(payload);
    }
    setSaving(false);
    onSave();
  };

  return (
    <div className="mx-4 my-2 bg-slate-800 rounded-xl p-4 space-y-3 border border-slate-700">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Bezeichnung *</label>
          <Input value={form.label} onChange={e => set("label", e.target.value)} placeholder="z.B. Blau" className="bg-slate-700 border-slate-600 text-white h-8 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Interner Wert *</label>
          <Input value={form.value} onChange={e => set("value", e.target.value)} placeholder="z.B. Blau" className="bg-slate-700 border-slate-600 text-white h-8 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Hex-Code (Farbe)</label>
          <div className="flex gap-2 items-center">
            <input type="color" value={form.hex_code || "#374151"} onChange={e => set("hex_code", e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-slate-700 border border-slate-600" />
            <Input value={form.hex_code} onChange={e => set("hex_code", e.target.value)} placeholder="#2563eb" className="bg-slate-700 border-slate-600 text-white h-8 text-sm font-mono" />
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Swatch-Bild URL</label>
          <Input value={form.swatch_url} onChange={e => set("swatch_url", e.target.value)} placeholder="https://..." className="bg-slate-700 border-slate-600 text-white h-8 text-sm" />
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="ghost" size="sm" onClick={onCancel} className="text-slate-400 hover:text-white h-7 text-xs">
          <X className="w-3 h-3 mr-1" /> Abbrechen
        </Button>
        <Button size="sm" disabled={saving || !form.label || !form.value} onClick={handleSave} className="h-7 text-xs text-slate-900" style={{ backgroundColor: "#F28C28" }}>
          <Check className="w-3 h-3 mr-1" /> {saving ? "Speichern..." : "Speichern"}
        </Button>
      </div>
    </div>
  );
}

function AttributeRow({ attr, allValues, onDeleteAttr, onRefreshValues }) {
  const [open, setOpen] = useState(false);
  const [addingValue, setAddingValue] = useState(false);
  const [editingValue, setEditingValue] = useState(null);

  const values = allValues.filter(v => v.attribute_id === attr.id).sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

  const handleDeleteValue = async (id) => {
    if (!window.confirm("Wert wirklich löschen?")) return;
    await base44.entities.AttributeValue.delete(id);
    onRefreshValues();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      {/* Attribute header */}
      <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-800/30 transition-colors">
        <button onClick={() => setOpen(o => !o)} className="flex items-center gap-3 flex-1 text-left">
          {open ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
          <div>
            <p className="text-white font-semibold text-sm">{attr.name}</p>
            <p className="text-slate-500 text-xs font-mono">slug: {attr.slug} · {values.length} Werte</p>
          </div>
        </button>
        <div className="flex gap-1">
          <button
            onClick={() => { setOpen(true); setAddingValue(true); }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-orange-400 hover:text-orange-300 hover:bg-orange-950/20 rounded-lg transition-colors"
          >
            <Plus className="w-3 h-3" /> Wert hinzufügen
          </button>
          <button onClick={() => onDeleteAttr(attr.id)} className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Values list */}
      {open && (
        <div className="border-t border-slate-800 py-2">
          {values.length === 0 && !addingValue && (
            <p className="text-slate-500 text-xs text-center py-4">Noch keine Werte. Klicken Sie auf "Wert hinzufügen".</p>
          )}
          {values.map(v =>
            editingValue?.id === v.id ? (
              <ValueForm
                key={v.id}
                attributeId={attr.id}
                attributeSlug={attr.slug}
                initial={editingValue}
                onSave={() => { setEditingValue(null); onRefreshValues(); }}
                onCancel={() => setEditingValue(null)}
              />
            ) : (
              <AttributeValueRow
                key={v.id}
                value={v}
                onEdit={setEditingValue}
                onDelete={handleDeleteValue}
              />
            )
          )}
          {addingValue && (
            <ValueForm
              attributeId={attr.id}
              attributeSlug={attr.slug}
              onSave={() => { setAddingValue(false); onRefreshValues(); }}
              onCancel={() => setAddingValue(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminAttributes() {
  const [attributes, setAttributes] = useState([]);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewForm, setShowNewForm] = useState(false);
  const [newAttr, setNewAttr] = useState({ name: "", slug: "", description: "" });
  const [saving, setSaving] = useState(false);

  const loadAll = async () => {
    const [attrs, vals] = await Promise.all([
      base44.entities.Attribute.list(),
      base44.entities.AttributeValue.list(),
    ]);
    setAttributes(attrs);
    setValues(vals);
    setLoading(false);
  };

  useEffect(() => { loadAll(); }, []);

  const handleDeleteAttr = async (id) => {
    if (!window.confirm("Attribut und alle zugehörigen Werte wirklich löschen?")) return;
    await base44.entities.Attribute.delete(id);
    loadAll();
  };

  const handleCreateAttr = async () => {
    if (!newAttr.name || !newAttr.slug) return;
    setSaving(true);
    await base44.entities.Attribute.create({ ...newAttr, is_active: true });
    setNewAttr({ name: "", slug: "", description: "" });
    setShowNewForm(false);
    setSaving(false);
    loadAll();
  };

  const autoSlug = (name) => name.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading font-bold text-white text-2xl">Attribute</h1>
          <p className="text-slate-400 text-sm mt-1">Verwalten Sie Produktattribute und deren Werte</p>
        </div>
        <Button onClick={() => setShowNewForm(true)} className="font-heading font-semibold text-slate-900 hover:opacity-90" style={{ backgroundColor: "#F28C28" }}>
          <Plus className="w-4 h-4 mr-2" /> Neues Attribut
        </Button>
      </div>

      {/* New attribute form */}
      {showNewForm && (
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 space-y-4">
          <h3 className="text-white font-semibold text-sm">Neues Attribut</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Name *</label>
              <Input
                value={newAttr.name}
                onChange={e => setNewAttr(f => ({ ...f, name: e.target.value, slug: autoSlug(e.target.value) }))}
                placeholder="z.B. Farbe"
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Slug *</label>
              <Input
                value={newAttr.slug}
                onChange={e => setNewAttr(f => ({ ...f, slug: e.target.value }))}
                placeholder="z.B. color"
                className="bg-slate-800 border-slate-700 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Beschreibung</label>
              <Input
                value={newAttr.description}
                onChange={e => setNewAttr(f => ({ ...f, description: e.target.value }))}
                placeholder="Optional"
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => setShowNewForm(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4 mr-1" /> Abbrechen
            </Button>
            <Button disabled={saving || !newAttr.name || !newAttr.slug} onClick={handleCreateAttr} className="text-slate-900" style={{ backgroundColor: "#F28C28" }}>
              <Check className="w-4 h-4 mr-1" /> {saving ? "Speichern..." : "Erstellen"}
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-slate-700 border-t-orange-500 rounded-full animate-spin" />
        </div>
      ) : attributes.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p>Noch keine Attribute. Erstellen Sie Ihr erstes Attribut.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {attributes.map(attr => (
            <AttributeRow
              key={attr.id}
              attr={attr}
              allValues={values}
              onDeleteAttr={handleDeleteAttr}
              onRefreshValues={loadAll}
            />
          ))}
        </div>
      )}
    </div>
  );
}