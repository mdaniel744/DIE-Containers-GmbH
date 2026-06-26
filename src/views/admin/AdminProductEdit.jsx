"use client";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft, Save, Upload, X, Plus, Loader2, Image as ImageIcon, Eye
} from "lucide-react";

const EMPTY = {
  title: "", slug: "", short_description: "", description: "",
  price_from: "", size: "20ft", condition: "Neu", container_type: "Standard",
  color: "Anthrazit", badge: "", is_available: true, is_featured: false,
  image_url: "", gallery_urls: [],
  outer_length: "", outer_width: "", outer_height: "",
  weight: "", payload: "", material: "Corten-Stahl", floor: "", doors: "",
  csc_certified: true, weather_resistant: true,
};

const SIZES = ["10ft", "20ft", "40ft"];
const CONDITIONS = ["Neu", "Gebraucht", "Generalüberholt"];
const TYPES = ["Standard", "High Cube", "Open Side", "Doppeltür", "Kühlcontainer", "Bürocontainer"];
const COLORS = ["Blau", "Anthrazit", "Grün", "Weiß"];
const BADGES = ["", "Neu", "Gebraucht", "Bestseller", "Angebot"];

export default function AdminProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "neu";

  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploadingMain, setUploadingMain] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isNew) {
      base44.entities.Product.filter({ id }).then(([p]) => {
        if (p) setForm({ ...EMPTY, ...p, gallery_urls: p.gallery_urls || [] });
        setLoading(false);
      });
    }
  }, [id]);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const autoSlug = (title) => title.toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const handleTitleChange = (val) => {
    setForm(f => ({ ...f, title: val, slug: f.slug || autoSlug(val) }));
  };

  const handleMainImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingMain(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    set("image_url", file_url);
    setUploadingMain(false);
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploadingGallery(true);
    const urls = await Promise.all(files.map(f => base44.integrations.Core.UploadFile({ file: f }).then(r => r.file_url)));
    setForm(f => ({ ...f, gallery_urls: [...(f.gallery_urls || []), ...urls] }));
    setUploadingGallery(false);
  };

  const removeGalleryImage = (idx) => {
    setForm(f => ({ ...f, gallery_urls: f.gallery_urls.filter((_, i) => i !== idx) }));
  };

  const handleSave = async () => {
    setSaving(true);
    const data = {
      ...form,
      price_from: form.price_from ? parseFloat(form.price_from) : null,
      slug: form.slug || autoSlug(form.title),
    };
    if (isNew) {
      await base44.entities.Product.create(data);
    } else {
      await base44.entities.Product.update(id, data);
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    if (isNew) navigate("/admin/produkte");
  };

  if (loading) return (
    <div className="flex items-center justify-center h-48">
      <div className="w-8 h-8 border-4 border-slate-700 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Link to="/admin/produkte" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="font-heading font-bold text-white text-xl">
              {isNew ? "Neues Produkt" : "Produkt bearbeiten"}
            </h1>
            {!isNew && form.slug && (
              <a href={`/produkt/${form.slug}`} target="_blank"
                className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 mt-0.5">
                <Eye className="w-3 h-3" /> Vorschau
              </a>
            )}
          </div>
        </div>
        <Button
          onClick={handleSave}
          disabled={saving || !form.title}
          className="font-heading font-semibold text-slate-900 hover:opacity-90 min-w-[120px]"
          style={{ backgroundColor: saved ? "#10b981" : "#F28C28" }}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          {saved ? "Gespeichert!" : saving ? "Speichern..." : "Speichern"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: main form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Basic info */}
          <Section title="Grunddaten">
            <Field label="Titel *">
              <Input value={form.title} onChange={e => handleTitleChange(e.target.value)}
                placeholder="z.B. 20 Fuß High Cube Seecontainer"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
            </Field>
            <Field label="URL-Slug">
              <Input value={form.slug} onChange={e => set("slug", e.target.value)}
                placeholder="wird automatisch generiert"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm" />
            </Field>
            <Field label="Kurzbeschreibung">
              <Input value={form.short_description} onChange={e => set("short_description", e.target.value)}
                placeholder="Kurze Beschreibung für Produktkarten"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
            </Field>
            <Field label="Beschreibung">
              <Textarea value={form.description} onChange={e => set("description", e.target.value)}
                placeholder="Vollständige Produktbeschreibung..."
                rows={5}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 resize-none" />
            </Field>
          </Section>

          {/* Specs */}
          <Section title="Technische Daten">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Außenlänge">
                <Input value={form.outer_length} onChange={e => set("outer_length", e.target.value)}
                  placeholder="z.B. 6.058 mm"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Außenbreite">
                <Input value={form.outer_width} onChange={e => set("outer_width", e.target.value)}
                  placeholder="z.B. 2.438 mm"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Außenhöhe">
                <Input value={form.outer_height} onChange={e => set("outer_height", e.target.value)}
                  placeholder="z.B. 2.591 mm"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Eigengewicht">
                <Input value={form.weight} onChange={e => set("weight", e.target.value)}
                  placeholder="z.B. 2.200 kg"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Nutzlast">
                <Input value={form.payload} onChange={e => set("payload", e.target.value)}
                  placeholder="z.B. 21.700 kg"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Material">
                <Input value={form.material} onChange={e => set("material", e.target.value)}
                  placeholder="z.B. Corten-Stahl"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Bodenbelag">
                <Input value={form.floor} onChange={e => set("floor", e.target.value)}
                  placeholder="z.B. Marineboden 28mm"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
              <Field label="Türen">
                <Input value={form.doors} onChange={e => set("doors", e.target.value)}
                  placeholder="z.B. Doppelflügeltüren"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
              </Field>
            </div>
          </Section>

          {/* Gallery */}
          <Section title="Galerie-Bilder">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {(form.gallery_urls || []).map((url, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-slate-800 group">
                  <img src={url} alt="" className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeGalleryImage(i)}
                    className="absolute top-1 right-1 w-6 h-6 bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-3 h-3 text-white" />
                  </button>
                </div>
              ))}
              <label className={`aspect-square rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-orange-500 transition-colors ${uploadingGallery ? "opacity-50" : ""}`}>
                {uploadingGallery ? (
                  <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
                ) : (
                  <>
                    <Plus className="w-5 h-5 text-slate-400" />
                    <span className="text-[10px] text-slate-400">Hinzufügen</span>
                  </>
                )}
                <input type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="hidden" disabled={uploadingGallery} />
              </label>
            </div>
          </Section>
        </div>

        {/* Right: sidebar */}
        <div className="space-y-5">
          {/* Main image */}
          <Section title="Hauptbild">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 mb-3 relative">
              {form.image_url ? (
                <>
                  <img src={form.image_url} alt="" className="w-full h-full object-cover" />
                  <button onClick={() => set("image_url", "")}
                    className="absolute top-2 right-2 w-7 h-7 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors">
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                  <ImageIcon className="w-8 h-8 mb-2" />
                  <p className="text-xs">Kein Bild</p>
                </div>
              )}
            </div>
            <label className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-sm text-slate-300 cursor-pointer hover:bg-slate-800 transition-colors ${uploadingMain ? "opacity-50" : ""}`}>
              {uploadingMain ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {uploadingMain ? "Hochladen..." : "Bild hochladen"}
              <input type="file" accept="image/*" onChange={handleMainImageUpload} className="hidden" disabled={uploadingMain} />
            </label>
            <div className="mt-3">
              <label className="text-xs text-slate-400 mb-1.5 block">Oder Bild-URL eingeben</label>
              <Input value={form.image_url} onChange={e => set("image_url", e.target.value)}
                placeholder="https://..."
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 text-xs" />
            </div>
          </Section>

          {/* Classification */}
          <Section title="Klassifizierung">
            <Field label="Preis ab (€) *">
              <Input type="number" value={form.price_from} onChange={e => set("price_from", e.target.value)}
                placeholder="1990"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500" />
            </Field>
            <Field label="Größe">
              <SelectField value={form.size} onChange={v => set("size", v)} options={SIZES} />
            </Field>
            <Field label="Zustand">
              <SelectField value={form.condition} onChange={v => set("condition", v)} options={CONDITIONS} />
            </Field>
            <Field label="Typ">
              <SelectField value={form.container_type} onChange={v => set("container_type", v)} options={TYPES} />
            </Field>
            <Field label="Farbe">
              <SelectField value={form.color} onChange={v => set("color", v)} options={COLORS} />
            </Field>
            <Field label="Badge">
              <SelectField value={form.badge || ""} onChange={v => set("badge", v)} options={BADGES} />
            </Field>
          </Section>

          {/* Toggles */}
          <Section title="Einstellungen">
            <Toggle label="Verfügbar" value={form.is_available} onChange={v => set("is_available", v)} />
            <Toggle label="Featured (Startseite)" value={form.is_featured} onChange={v => set("is_featured", v)} />
            <Toggle label="CSC-Zertifiziert" value={form.csc_certified} onChange={v => set("csc_certified", v)} />
            <Toggle label="Wasser- & Winddicht" value={form.weather_resistant} onChange={v => set("weather_resistant", v)} />
          </Section>
        </div>
      </div>

      {/* Save bottom */}
      <div className="flex justify-end pt-2">
        <Button
          onClick={handleSave}
          disabled={saving || !form.title}
          className="font-heading font-semibold text-slate-900 hover:opacity-90 min-w-[140px]"
          style={{ backgroundColor: saved ? "#10b981" : "#F28C28" }}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          {saved ? "Gespeichert!" : saving ? "Speichern..." : "Änderungen speichern"}
        </Button>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
      <h2 className="font-heading font-semibold text-white text-sm border-b border-slate-800 pb-3">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs text-slate-400 font-medium mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

function SelectField({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full h-9 rounded-md bg-slate-800 border border-slate-700 text-white text-sm px-3 focus:outline-none focus:border-orange-500"
    >
      {options.map(o => <option key={o} value={o}>{o || "– Kein Badge –"}</option>)}
    </select>
  );
}

function Toggle({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-300">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-10 h-5 rounded-full transition-colors ${value ? "bg-orange-500" : "bg-slate-700"}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${value ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  );
}