"use client";
import React from "react";
import CategoryPageLayout from "./CategoryPageLayout";

const CROSS_LINKS = [
  { key: "10ft", href: "/kategorien/10ft" },
  { key: "20ft", href: "/kategorien/20ft" },
  { key: "40ft", href: "/kategorien/40ft" },
  { key: "buero", href: "/kategorien/buerocontainer" },
  { key: "openside", href: "/kategorien/open-side" },
];

export default function KuehlcontainerCategory() {
  return (
    <CategoryPageLayout
      filterKey="container_type"
      filterValue="Kühlcontainer"
      i18nSection="catKuehl"
      crossLinks={CROSS_LINKS}
      seoContent={null}
    />
  );
}
