"use client";
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import {
  LayoutDashboard, Package, FileText, LogOut, Menu, Container, ChevronRight, ExternalLink, Tag, Layers
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/produkte", label: "Produkte", icon: Package },
  { href: "/admin/anfragen", label: "Anfragen", icon: FileText },
  { href: "/admin/attribute", label: "Attribute", icon: Tag },
  { href: "/admin/kategorien", label: "Kategorien", icon: Layers },
];

export default function AdminLayout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (item) =>
    item.exact ? location.pathname === item.href : location.pathname.startsWith(item.href);

  const handleLogout = () => {
    base44.auth.logout("/admin/login");
  };

  const Sidebar = () => (
    <nav className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-slate-800">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#1E5FAE" }}>
          <Container className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="font-heading font-bold text-white text-sm leading-none">DIE Container Admin</p>
          <p className="text-slate-500 text-[10px] mt-0.5">Container Management</p>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 px-3 py-4 space-y-1">
        {NAV.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive(item)
                ? "text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
            style={isActive(item) ? { backgroundColor: "rgba(30,95,174,0.15)", color: "#1E5FAE" } : {}}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-slate-800 space-y-1">
        <a
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Website ansehen
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-red-400 hover:bg-red-950/30 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Abmelden
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-slate-900 border-r border-slate-800 shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-60 bg-slate-900 border-r border-slate-800">
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile topbar */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800">
          <button onClick={() => setMobileOpen(true)} className="text-slate-400 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-heading font-bold text-white text-sm">DIE Container Admin</span>
        </header>

        {/* Breadcrumb bar */}
        <div className="hidden lg:flex items-center gap-2 px-6 py-3 bg-slate-900/50 border-b border-slate-800 text-xs text-slate-500">
          <span>Admin</span>
          {location.pathname !== "/admin" && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="text-slate-300">
                {NAV.find(n => location.pathname.startsWith(n.href) && n.href !== "/admin")?.label || ""}
              </span>
            </>
          )}
        </div>

        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
