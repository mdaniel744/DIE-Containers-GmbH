"use client";
import React from "react";
import CategoryPageLayout from "./CategoryPageLayout";
import Container20Fuss from "@/views/seo/Container20Fuss";

const CROSS_LINKS = [
  { key: "10ft", href: "/kategorien/10ft" },
  { key: "40ft", href: "/kategorien/40ft" },
  { key: "kuehl", href: "/kategorien/kuehlcontainer" },
  { key: "buero", href: "/kategorien/buerocontainer" },
  { key: "openside", href: "/kategorien/open-side" },
];

export default function Container20ftCategory() {
  return (
    <CategoryPageLayout
      filterKey="size"
      filterValue={["20ft", "20ft HC"]}
      i18nSection="cat20ft"
      crossLinks={CROSS_LINKS}
      seoContent={<Container20Fuss />}
    />
  );
}
