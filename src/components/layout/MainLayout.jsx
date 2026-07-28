"use client";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "@/components/shared/CookieConsent";
import MetaPixel from "@/components/shared/MetaPixel";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <MetaPixel />
      </Suspense>
      <CookieConsent />
    </div>
  );
}
