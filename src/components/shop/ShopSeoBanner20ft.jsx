"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const ORANGE = "#F28C28";

const massRows = [
  ["Länge", "6.058 mm", "5.898 mm"],
  ["Breite", "2.438 mm", "2.352 mm"],
  ["Höhe (Standard)", "2.591 mm", "2.393 mm"],
  ["Höhe (High Cube)", "2.896 mm", "2.698 mm"],
  ["Ladevolumen Standard", "–", "ca. 33 m³"],
];

const gewichtRows = [
  ["Eigengewicht (Tara)", "ca. 2.200 kg"],
  ["Maximale Zuladung", "ca. 21.700 kg"],
  ["Maximalgewicht (MGW)", "24.000 kg"],
];

const faqs = [
  { q: "Wie groß ist ein 20 Fuß Container?", a: "Außenmaße: 6,058 m × 2,438 m × 2,591 m. Innenlänge ca. 5,9 m, Innenbreite 2,35 m." },
  { q: "Was passt in einen 20 Fuß Container?", a: "Ca. 33 m³ – entspricht dem Inhalt einer 3–4-Zimmer-Wohnung, 10–11 Europaletten oder ca. 25 t Schüttgut." },
  { q: "Was kostet ein 20 Fuß Container?", a: "Gebrauchte Einheiten starten ab ca. 1.990 â‚¬, neue ab ca. 2.490 â‚¬. Transportkosten werden separat kalkuliert." },
  { q: "Kann ich einen 20 Fuß Container stapeln?", a: "Ja, bis zu 8 beladene Container können gestapelt werden. Die Eckbeschläge sind nach ISO 1161 ausgelegt." },
];

const relatedLinks = [
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Doppelter Stauraum" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer", desc: "Günstige Lagerlösung" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer", desc: "Mobiles Büro" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer", desc: "Temperaturgeführt" },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors">
        <span className="font-heading font-semibold text-sm">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-border pt-3">{a}</div>
      )}
    </div>
  );
}

export default function ShopSeoBanner20ft() {
  return (
    <div className="mt-16 border-t border-border pt-12 space-y-10">
      {/* Intro */}
      <div>
        <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Ratgeber</span>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mb-3">20 Fuß Container kaufen – Maße, Gewicht & Preise</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Alles zum 20 Fuß Container: genaue Außen- und Innenmaße, Eigengewicht, maximale Zuladung,
          aktuelle Kaufpreise und was in einen 20 Fuß Container passt.
        </p>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">Maße & Abmessungen</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Merkmal", "Außenmaß", "Innenmaß"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-heading font-semibold text-foreground text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {massRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-3">Gewicht & Zuladung</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Merkmal", "Wert"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-heading font-semibold text-foreground text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gewichtRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What fits */}
          <div className="mt-4 bg-muted/50 rounded-xl p-4">
            <p className="font-heading font-semibold text-sm mb-2">Was passt rein? (~33 m³)</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
              <li>10–11 Europaletten nebeneinander</li>
              <li>Inhalt einer 3–4-Zimmer-Wohnung</li>
              <li>Ca. 25 t Schüttgut (Kies, Sand)</li>
              <li>2–3 Pkw (je nach Modell)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 justify-between"
        style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
        <p className="font-heading font-bold text-white text-lg sm:text-xl">20 Fuß Container anfragen – Lieferung in 72 h</p>
        <Link to="/shop"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}>
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Available types */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">Verfügbare Typen im 20-Fuß-Format</h3>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li><strong className="text-foreground">Standard (DC):</strong> Der Klassiker, 2,59 m Außenhöhe – ideal als <Link to="/lagercontainer-kaufen" className="text-orange-500 hover:underline">Lagercontainer</Link></li>
          <li><strong className="text-foreground">High Cube (HC):</strong> 2,90 m Außenhöhe, 30 cm mehr Innenhöhe – empfohlen für <Link to="/wohncontainer-kaufen" className="text-orange-500 hover:underline">Wohncontainer</Link></li>
          <li><strong className="text-foreground">Open Side:</strong> Komplette Seitenwandöffnung für einfaches Be- und Entladen</li>
          <li><strong className="text-foreground"><Link to="/kuehlcontainer-kaufen" className="text-orange-500 hover:underline">Kühlcontainer (Reefer):</Link></strong> Mit integriertem Kühlaggregat</li>
          <li><strong className="text-foreground"><Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">Bürocontainer:</Link></strong> Ausgebaut mit Strom & Dämmung</li>
        </ul>
      </div>

      {/* Related links */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Weitere Container-Typen entdecken</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedLinks.map((link) => (
            <Link key={link.href} to={link.href}
              className="flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-xl hover:border-orange-300 hover:shadow-sm transition-all group">
              <div>
                <p className="font-heading font-semibold text-sm group-hover:text-orange-600 transition-colors">{link.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-4">Häufige Fragen zum 20 Fuß Container</h3>
        <div className="space-y-2">
          {faqs.map((item, i) => <FaqItem key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}
