"use client";
import React from "react";
import CategoryPageLayout from "./CategoryPageLayout";
import Container40Fuss from "@/views/seo/Container40Fuss";

const CROSS_LINKS = [
  { key: "10ft", href: "/kategorien/10ft" },
  { key: "20ft", href: "/kategorien/20ft" },
  { key: "kuehl", href: "/kategorien/kuehlcontainer" },
  { key: "buero", href: "/kategorien/buerocontainer" },
  { key: "openside", href: "/kategorien/open-side" },
];

export default function Container40ftCategory() {
  return (
    <CategoryPageLayout
      filterKey="size"
      filterValue="40ft"
      i18nSection="cat40ft"
      crossLinks={CROSS_LINKS}
      seoContent={<Container40Fuss />}
    />
  );
}
