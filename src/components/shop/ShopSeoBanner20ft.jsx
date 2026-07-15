"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const ORANGE = "#F28C28";

const massRows = [
  ["LÃ¤nge", "6.058 mm", "5.898 mm"],
  ["Breite", "2.438 mm", "2.352 mm"],
  ["HÃ¶he (Standard)", "2.591 mm", "2.393 mm"],
  ["HÃ¶he (High Cube)", "2.896 mm", "2.698 mm"],
  ["Ladevolumen Standard", "â€“", "ca. 33 mÂ³"],
];

const gewichtRows = [
  ["Eigengewicht (Tara)", "ca. 2.200 kg"],
  ["Maximale Zuladung", "ca. 21.700 kg"],
  ["Maximalgewicht (MGW)", "24.000 kg"],
];

const faqs = [
  { q: "Wie groÃŸ ist ein 20 FuÃŸ Container?", a: "AuÃŸenmaÃŸe: 6,058 m Ã— 2,438 m Ã— 2,591 m. InnenlÃ¤nge ca. 5,9 m, Innenbreite 2,35 m." },
  { q: "Was passt in einen 20 FuÃŸ Container?", a: "Ca. 33 mÂ³ â€“ entspricht dem Inhalt einer 3â€“4-Zimmer-Wohnung, 10â€“11 Europaletten oder ca. 25 t SchÃ¼ttgut." },
  { q: "Was kostet ein 20 FuÃŸ Container?", a: "Gebrauchte Einheiten starten ab ca. 1.990 â‚¬, neue ab ca. 2.490 â‚¬. Transportkosten werden separat kalkuliert." },
  { q: "Kann ich einen 20 FuÃŸ Container stapeln?", a: "Ja, bis zu 8 beladene Container kÃ¶nnen gestapelt werden. Die EckbeschlÃ¤ge sind nach ISO 1161 ausgelegt." },
];

const relatedLinks = [
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container", desc: "Doppelter Stauraum" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer", desc: "GÃ¼nstige LagerlÃ¶sung" },
  { href: "/buerocontainer-kaufen", title: "BÃ¼rocontainer", desc: "Mobiles BÃ¼ro" },
  { href: "/kuehlcontainer-kaufen", title: "KÃ¼hlcontainer", desc: "TemperaturgefÃ¼hrt" },
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
        <h2 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mb-3">20 FuÃŸ Container kaufen â€“ MaÃŸe, Gewicht & Preise</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Alles zum 20 FuÃŸ Container: genaue AuÃŸen- und InnenmaÃŸe, Eigengewicht, maximale Zuladung,
          aktuelle Kaufpreise und was in einen 20 FuÃŸ Container passt.
        </p>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">MaÃŸe & Abmessungen</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Merkmal", "AuÃŸenmaÃŸ", "InnenmaÃŸ"].map(h => (
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
            <p className="font-heading font-semibold text-sm mb-2">Was passt rein? (~33 mÂ³)</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
              <li>10â€“11 Europaletten nebeneinander</li>
              <li>Inhalt einer 3â€“4-Zimmer-Wohnung</li>
              <li>Ca. 25 t SchÃ¼ttgut (Kies, Sand)</li>
              <li>2â€“3 Pkw (je nach Modell)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 justify-between"
        style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
        <p className="font-heading font-bold text-white text-lg sm:text-xl">20 FuÃŸ Container anfragen â€“ Lieferung in 72 h</p>
        <Link to="/shop"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}>
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Available types */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">VerfÃ¼gbare Typen im 20-FuÃŸ-Format</h3>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li><strong className="text-foreground">Standard (DC):</strong> Der Klassiker, 2,59 m AuÃŸenhÃ¶he â€“ ideal als <Link to="/lagercontainer-kaufen" className="text-orange-500 hover:underline">Lagercontainer</Link></li>
          <li><strong className="text-foreground">High Cube (HC):</strong> 2,90 m AuÃŸenhÃ¶he, 30 cm mehr InnenhÃ¶he â€“ empfohlen fÃ¼r <Link to="/wohncontainer-kaufen" className="text-orange-500 hover:underline">Wohncontainer</Link></li>
          <li><strong className="text-foreground">Open Side:</strong> Komplette SeitenwandÃ¶ffnung fÃ¼r einfaches Be- und Entladen</li>
          <li><strong className="text-foreground"><Link to="/kuehlcontainer-kaufen" className="text-orange-500 hover:underline">KÃ¼hlcontainer (Reefer):</Link></strong> Mit integriertem KÃ¼hlaggregat</li>
          <li><strong className="text-foreground"><Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">BÃ¼rocontainer:</Link></strong> Ausgebaut mit Strom & DÃ¤mmung</li>
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
        <h3 className="font-heading font-bold text-lg mb-4">HÃ¤ufige Fragen zum 20 FuÃŸ Container</h3>
        <div className="space-y-2">
          {faqs.map((item, i) => <FaqItem key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}
