"use client";

import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { AuthProvider } from "@/lib/AuthContext";
import { CartProvider } from "@/lib/CartContext";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }) {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CartProvider>
          <QueryClientProvider client={queryClientInstance}>
            {children}
            <Toaster />
          </QueryClientProvider>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
