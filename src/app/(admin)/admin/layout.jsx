"use client";

import { Navigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProtectedAdminLayout({ children }) {
  return (
    <ProtectedRoute
      requireAdmin
      unauthenticatedElement={<Navigate to="/admin/login" replace />}
    >
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}
