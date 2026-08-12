"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import {
  COOKIE_CONSENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  getStoredCookieConsent,
  setStoredCookieConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const openSettings = () => setVisible(true);

    if (!getStoredCookieConsent()) setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const accept = () => {
    setStoredCookieConsent(COOKIE_CONSENT.ALL);
    setVisible(false);
  };

  const decline = () => {
    setStoredCookieConsent(COOKIE_CONSENT.ESSENTIAL);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Cookie className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#46C54B" }} />
            <div>
              <p id="cookie-consent-title" className="font-heading font-semibold text-sm mb-1">
                Wir verwenden Cookies
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Technisch notwendige Cookies werden immer verwendet. Mit Ihrer Einwilligung nutzen wir außerdem
                Analyse- und Marketing-Technologien, einschließlich des Meta Pixels, um Seitenaufrufe und die
                Wirksamkeit unserer Werbung zu messen. Weitere Informationen finden Sie in unserer{" "}
                <Link to="/cookie-policy" className="underline hover:text-foreground transition-colors">
                  Cookie-Richtlinie
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex gap-2 shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={decline}
              className="flex-1 sm:flex-none text-xs h-9 border-border"
            >
              Nur notwendige
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="flex-1 sm:flex-none text-xs h-9 font-semibold text-white"
              style={{ backgroundColor: "#46C54B", color: "#0D2A12" }}
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
