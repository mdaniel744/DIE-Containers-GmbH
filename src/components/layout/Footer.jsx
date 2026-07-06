"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useT, useSection } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  // All link arrays now read from i18n.js — labels translate per locale
  const shopLinks = useSection("footerShopLinks");
  const ratgeberLinks = useSection("footerGuideLinks");
  const legalLinks = useSection("footerLegalLinks");
  const infoLinks = useSection("footerInfoLinks");

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 block w-fit" aria-label="DIE Container GmbH – Startseite">
              <div className="relative h-16 w-36 overflow-hidden">
                <img
                  src="/images/die-container-logo-white.png"
                  alt="DIE Container GmbH Logo"
                  className="absolute left-1/2 top-1/2 h-36 w-36 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
            </Link>
            <p className="font-heading font-semibold text-white mb-3">DIE Container GmbH</p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">{t("footer.tagline")}</p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:+491635393159" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> 0049 163 5393 159
              </a>
              <a href="mailto:contact@diecontainers.com" className="flex items-center gap-2 text-xs xl:text-sm hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> contact@diecontainers.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">{t("footer.catalog")}</h4>
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
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">{t("footer.guide")}</h4>
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
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">{t("footer.info")}</h4>
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
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5">{t("footer.legal")}</h4>
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
              © {new Date().getFullYear()} DIE Container GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-primary-foreground/40 font-mono">
              {t("footer.disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
