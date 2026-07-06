"use client";
import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await base44.auth.loginViaEmailPassword(email, password);
      window.location.href = "/admin";
    } catch (err) {
      setError("Ungültige E-Mail oder Passwort.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F28C28" }}>
            <Container className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-white">DIE Container Admin</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h1 className="font-heading font-bold text-white text-xl mb-1">Anmelden</h1>
          <p className="text-slate-400 text-sm mb-6">Zugang zum Admin-Dashboard</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">E-Mail</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@diecontainers.com"
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block">Passwort</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-950/50 border border-red-900 rounded-lg px-3 py-2">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 font-heading font-semibold text-slate-900 hover:opacity-90"
              style={{ backgroundColor: "#F28C28" }}
            >
              {loading ? "Anmelden..." : "Anmelden"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
