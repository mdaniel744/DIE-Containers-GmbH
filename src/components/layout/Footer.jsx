"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const legalLinks = [
{ label: "Impressum", path: "/impressum" },
{ label: "Datenschutzerklärung", path: "/datenschutz" },
{ label: "Cookie Policy", path: "/cookie-policy" },
{ label: "AGB", path: "/agb" },
{ label: "Widerrufsrecht", path: "/widerrufsrecht" },
{ label: "Rückgabe & Erstattung", path: "/rueckgabe" },
{ label: "Versand & Lieferung", path: "/versand" },
{ label: "Zahlungsbedingungen", path: "/zahlungsbedingungen" },
{ label: "Allgemeine Geschäftsbedingungen (EN)", path: "/general-terms" },
{ label: "Mehrwertsteuer & Zölle", path: "/vat-duties" },
];


const shopLinks = [
{ label: "Seecontainer kaufen", path: "/seecontainer-kaufen" },
{ label: "10 Fuß Container", path: "/10-fuss-container-kaufen" },
{ label: "20 Fuß Container", path: "/20-fuss-container-kaufen" },
{ label: "40 Fuß Container", path: "/40-fuss-container-kaufen" },
{ label: "Open Side Container", path: "/open-side-container-kaufen" },
{ label: "Double Door Container", path: "/double-door-container-kaufen" },
{ label: "Lagercontainer", path: "/lagercontainer-kaufen" },
{ label: "Bürocontainer", path: "/buerocontainer-kaufen" },
{ label: "Kühlcontainer", path: "/kuehlcontainer-kaufen" },
{ label: "Wohncontainer", path: "/wohncontainer-kaufen" },
{ label: "Alle Container", path: "/shop" }];


const ratgeberLinks = [
{ label: "Container Maße", path: "/container-masse" },
{ label: "Container Gewicht", path: "/container-gewicht" },
{ label: "Container Kosten", path: "/container-kosten" },
{ label: "Container Fundament", path: "/container-fundament" },
{ label: "Container Lieferung", path: "/container-lieferung" },
{ label: "Container Genehmigung", path: "/container-genehmigung" }];


const infoLinks = [
{ label: "Über uns", path: "/ueber-uns" },
{ label: "Kontakt", path: "/kontakt" },
{ label: "FAQ", path: "/faq" },
{ label: "Container Kaufberater", path: "/kaufberater" }];


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/1f0c99f16_csav-germany.png"

              alt="CSAV Container Logo"
              className="w-11 h-11 rounded-full object-cover" />
              
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none">CSAV</span>
                <span className="font-heading text-[10px] font-semibold tracking-[0.25em] text-primary-foreground/60 uppercase">
                  Container
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">Seit 2014 Ihr zuverlässiger Partner für neue und gebrauchte Seecontainer – deutschlandweit lieferbar innerhalb von 72 Stunden.

            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:+491512437142" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> +49 151 243 71427
              </a>
              <a href="mailto:verkauf@csavcontainers.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> verkauf@csavcontainers.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Ballindamm 27, 20095 Hamburg
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">Container Katalog</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Ratgeber */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">Ratgeber</h4>
            <ul className="space-y-2.5">
              {ratgeberLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">Informationen</h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">Rechtliches</h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {legalLinks.map((link) =>
              <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/60 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-primary-foreground/50 font-mono">
              © {new Date().getFullYear()} CSAV Container. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-primary-foreground/40 font-mono">
              Preise zzgl. Transport · Alle Angaben ohne Gewähr
            </p>
          </div>
        </div>
      </div>
    </footer>);

}