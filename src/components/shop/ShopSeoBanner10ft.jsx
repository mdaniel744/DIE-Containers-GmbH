"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const ORANGE = "#F28C28";

const massRows = [
  ["Länge", "2.991 mm", "2.802 mm"],
  ["Breite", "2.438 mm", "2.352 mm"],
  ["Höhe (Standard)", "2.591 mm", "2.393 mm"],
  ["Türöffnung Breite", "–", "2.286 mm"],
  ["Ladevolumen", "–", "ca. 15,7 m³"],
];

const faqs = [
  { q: "Wie groß ist ein 10 Fuß Container?", a: "Außenmaße: 2,991 m lang, 2,438 m breit, 2,591 m hoch. Das nutzbare Innenvolumen beträgt ca. 15,7 m³ – ideal für kompakte Lagerlösungen." },
  { q: "Was kostet ein 10 Fuß Container?", a: "Gebrauchte 10 Fuß Container starten ab ca. 990 € netto. Neue Einheiten ab ca. 1.890 €. Transportkosten werden separat kalkuliert." },
  { q: "Wofür eignet sich ein 10 Fuß Container?", a: "Als Gartencontainer, Baustellenlager, Werkzeugcontainer, Archivcontainer oder als Basismodul für individuelle Containergebäude." },
  { q: "Kann ein 10 Fuß Container gestapelt werden?", a: "Ja, dank ISO-genormter Eckbeschläge können 10 Fuß Container mit kompatiblen Containern gestapelt werden." },
  { q: "Wie wird ein 10 Fuß Container geliefert?", a: "Per Kranwagen deutschlandweit innerhalb von 3–7 Werktagen. Express-Lieferung innerhalb von 72 Stunden auf Anfrage möglich." },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Der meistverkaufte Standardcontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Maximaler Stauraum – ab 2.990 €" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer", desc: "Alle Lagercontainer im Überblick" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer", desc: "Mobiles Büro – schlüsselfertig" },
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

export default function ShopSeoBanner10ft() {
  return (
    <div className="mt-16 border-t border-border pt-12 space-y-10">
      {/* Intro */}
      <div>
        <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Ratgeber</span>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mb-3">10 Fuß Container kaufen – Maße, Preise & Anwendungen</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Der 10 Fuß Container ist die kompakteste ISO-Seecontainer-Einheit – ideal für begrenzte Platzverhältnisse.
          Alle wichtigen Maße, Preise und Einsatzmöglichkeiten auf einen Blick.
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
          <h3 className="font-heading font-bold text-lg mb-3">Preisübersicht</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  {["Zustand", "Typ", "Preis (netto)"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-heading font-semibold text-foreground text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Gebraucht", "Standard", "ab 990 €"],
                  ["Generalüberholt", "Standard", "ab 1.390 €"],
                  ["Neu", "Standard", "ab 1.890 €"],
                  ["Gebraucht", "High Cube", "ab 1.190 €"],
                  ["Neu", "High Cube", "ab 2.190 €"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    {row.map((cell, j) => <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-muted/50 rounded-xl p-4">
            <p className="font-heading font-semibold text-sm mb-2">Typische Einsatzbereiche</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
              <li>Gartenlager – Fahrräder, Werkzeug, Möbel</li>
              <li>Baustellendepot – diebstahlsicher vor Ort</li>
              <li>Archiv & Aktenlager – trocken & dicht</li>
              <li>Pop-up Store & Event-Stand</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 justify-between"
        style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
        <p className="font-heading font-bold text-white text-lg sm:text-xl">10 Fuß Container anfragen – kostenlos & unverbindlich</p>
        <Link to="/angebot"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}>
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Vorteile */}
      <div>
        <h3 className="font-heading font-bold text-lg mb-3">Vorteile des 10 Fuß Containers</h3>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li><strong className="text-foreground">Platzsparend:</strong> Passt auch auf beengte Grundstücke und schmale Gärten</li>
          <li><strong className="text-foreground">Leicht:</strong> Ca. 1.300–1.500 kg Eigengewicht – weniger Anforderungen an den Untergrund</li>
          <li><strong className="text-foreground">Günstig:</strong> Preisgünstigste Einstiegslösung für witterungsbeständige Lagerung</li>
          <li><strong className="text-foreground">Stapelbar:</strong> ISO-genormte Eckbeschläge – kombinierbar mit <Link to="/kategorien/20ft" className="text-orange-500 hover:underline">20 Fuß</Link> und <Link to="/kategorien/40ft" className="text-orange-500 hover:underline">40 Fuß Containern</Link></li>
          <li><strong className="text-foreground">Schnell lieferbar:</strong> Deutschlandweit innerhalb von 72 Stunden</li>
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
        <h3 className="font-heading font-bold text-lg mb-4">Häufige Fragen zum 10 Fuß Container</h3>
        <div className="space-y-2">
          {faqs.map((item, i) => <FaqItem key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}