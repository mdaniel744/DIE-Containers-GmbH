"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const ORANGE = "#F28C28";

const massRows = [
  ["AuÃŸenlÃ¤nge", "12.192 mm", "12.192 mm"],
  ["AuÃŸenhÃ¶he", "2.591 mm", "2.896 mm"],
  ["InnenhÃ¶he", "2.393 mm", "2.698 mm"],
  ["Ladevolumen", "ca. 67 mÂ³", "ca. 76 mÂ³"],
];

const gewichtRows = [
  ["Eigengewicht (Tara)", "ca. 3.800 kg", "ca. 4.000 kg"],
  ["Maximale Zuladung", "ca. 26.500 kg", "ca. 26.300 kg"],
  ["Maximalgewicht (MGW)", "30.480 kg", "30.480 kg"],
];

const faqs = [
  { q: "Wie groÃŸ ist ein 40 FuÃŸ Container?", a: "12,192 m lang, 2,438 m breit und 2,591 m hoch (Standard) bzw. 2,896 m (High Cube). Entspricht in etwa der LÃ¤nge eines LKW-Aufliegers." },
  { q: "Was ist der Unterschied zwischen Standard und High Cube?", a: "Der High Cube ist 30 cm hÃ¶her (2,90 m statt 2,59 m). Dadurch passen grÃ¶ÃŸere GÃ¼ter rein und es ist mehr Stauraum vorhanden (76 mÂ³ statt 67 mÂ³)." },
  { q: "Was kostet ein 40 FuÃŸ Container?", a: "Gebraucht ab ca. 2.990 â‚¬, High Cube ab ca. 3.490 â‚¬. Neue Einheiten ab ca. 3.990 â‚¬ bzw. 4.490 â‚¬. Transportkosten werden separat kalkuliert." },
  { q: "Kann ich einen 40 FuÃŸ Container als Wohnraum nutzen?", a: "Ja, 40 FuÃŸ High Cube Container sind besonders beliebt fÃ¼r Wohnprojekte, da die extra DeckenhÃ¶he ein angenehmes RaumgefÃ¼hl erzeugt. Baugenehmigung beachten." },
  { q: "Wie schwer ist ein 40 FuÃŸ Container?", a: "Eigengewicht ca. 3.800â€“4.000 kg. Maximale Zuladung ca. 26.300â€“26.500 kg." },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container", desc: "Kompaktere Alternative ab 1.990 â‚¬" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer", desc: "40 HC beliebt fÃ¼r Wohnprojekte" },
  { href: "/buerocontainer-kaufen", title: "BÃ¼rocontainer", desc: "Mobiles BÃ¼ro schlÃ¼sselfertig" },
  { href: "/kuehlcontainer-kaufen", title: "KÃ¼hlcontainer", desc: "40 FuÃŸ Reefer ab 6.500 â‚¬" },
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

export default function ShopSeoBanner40ft() {
  return (
    <div className="mt-16 border-t border-border pt-12 space-y-10">
      {/* Intro */}
      <div>
        <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Ratgeber</span>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mb-3">40 FuÃŸ Container kaufen â€“ MaÃŸe, High Cube & Preise</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Alles zum 40 FuÃŸ Container und 40 FuÃŸ High Cube: genaue MaÃŸe, Vergleich Standard vs. HC,
          Eigengewicht, Zuladung, aktuelle Kaufpreise und EinsatzmÃ¶glichkeiten.
        </p>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">MaÃŸe: Standard vs. High Cube</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Merkmal", "Standard (DC)", "High Cube (HC)"].map(h => (
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
                  {["Merkmal", "Standard", "High Cube"].map(h => (
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

          {/* High Cube tip */}
          <div className="mt-4 bg-muted/50 rounded-xl p-4">
            <p className="font-heading font-semibold text-sm mb-2">Wann lohnt sich der High Cube?</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
              <li>GÃ¼ter Ã¼ber 2,39 m HÃ¶he</li>
              <li>Ausbau zum <Link to="/wohncontainer-kaufen" className="text-orange-500 hover:underline">Wohn-</Link> oder <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">BÃ¼rocontainer</Link></li>
              <li>Maximum Volumen (76 mÂ³ vs. 67 mÂ³)</li>
              <li>Preisaufschlag nur ca. 300â€“500 â‚¬</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 justify-between"
        style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
        <p className="font-heading font-bold text-white text-lg sm:text-xl">40 FuÃŸ Container anfragen â€“ in 72 Stunden geliefert</p>
        <Link to="/shop"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}>
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Available types */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">VerfÃ¼gbare Typen im 40-FuÃŸ-Format</h3>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li><strong className="text-foreground">Standard (DC):</strong> 2,59 m AuÃŸenhÃ¶he, 67 mÂ³ â€“ bewÃ¤hrte LÃ¶sung fÃ¼r Lager & Transport</li>
          <li><strong className="text-foreground">High Cube (HC):</strong> 2,90 m AuÃŸenhÃ¶he, 76 mÂ³ â€“ ideal fÃ¼r <Link to="/wohncontainer-kaufen" className="text-orange-500 hover:underline">Wohncontainer</Link> & GroÃŸlager</li>
          <li><strong className="text-foreground">Open Side:</strong> Komplette SeitenwandÃ¶ffnung fÃ¼r einfaches Be- und Entladen</li>
          <li><strong className="text-foreground"><Link to="/kuehlcontainer-kaufen" className="text-orange-500 hover:underline">KÃ¼hlcontainer (Reefer):</Link></strong> 40 FuÃŸ mit integriertem KÃ¼hlaggregat</li>
          <li><strong className="text-foreground"><Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">BÃ¼rocontainer:</Link></strong> Ausgebaut mit Strom, DÃ¤mmung & Innenausbau</li>
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
        <h3 className="font-heading font-bold text-lg mb-4">HÃ¤ufige Fragen zum 40 FuÃŸ Container</h3>
        <div className="space-y-2">
          {faqs.map((item, i) => <FaqItem key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}
