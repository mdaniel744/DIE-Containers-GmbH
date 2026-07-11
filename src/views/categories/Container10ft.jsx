"use client";
import React from "react";
import CategoryPageLayout from "./CategoryPageLayout";
import Container10Fuss from "@/views/seo/Container10Fuss";

const CROSS_LINKS = [
  { key: "20ft", href: "/kategorien/20ft" },
  { key: "40ft", href: "/kategorien/40ft" },
  { key: "kuehl", href: "/kategorien/kuehlcontainer" },
  { key: "buero", href: "/kategorien/buerocontainer" },
  { key: "openside", href: "/kategorien/open-side" },
];

export default function Container10ftCategory() {
  return (
    <CategoryPageLayout
      filterKey="size"
      filterValue={["10ft", "10ft HC"]}
      i18nSection="cat10ft"
      crossLinks={CROSS_LINKS}
      seoContent={<Container10Fuss />}
    />
  );
}
