"use client";
import React from "react";
import CategoryPageLayout from "./CategoryPageLayout";

const CROSS_LINKS = [
  { key: "10ft", href: "/kategorien/10ft" },
  { key: "20ft", href: "/kategorien/20ft" },
  { key: "40ft", href: "/kategorien/40ft" },
  { key: "kuehl", href: "/kategorien/kuehlcontainer" },
  { key: "buero", href: "/kategorien/buerocontainer" },
];

export default function OpenSideCategory() {
  return (
    <CategoryPageLayout
      filterKey="container_type"
      filterValue="Open Side"
      i18nSection="catOpenSide"
      crossLinks={CROSS_LINKS}
      seoContent={null}
    />
  );
}
