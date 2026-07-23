"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "die-containers-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Cookie className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#1E5FAE" }} />
            <div>
              <p className="font-heading font-semibold text-sm mb-1">Wir verwenden Cookies</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Wir nutzen Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. Technisch notwendige Cookies werden immer gesetzt. Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz" className="underline hover:text-foreground transition-colors">
                  Datenschutzerklärung
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
              style={{ backgroundColor: "#1E5FAE" }}
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
