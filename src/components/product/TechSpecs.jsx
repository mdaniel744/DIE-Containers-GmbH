"use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function TechSpecs({ product }) {
  const specs = [
    { label: "Außenlänge", value: product.outer_length },
    { label: "Außenbreite", value: product.outer_width },
    { label: "Außenhöhe", value: product.outer_height },
    { label: "Eigengewicht", value: product.weight },
    { label: "Nutzlast", value: product.payload },
    { label: "Material", value: product.material },
    { label: "Boden", value: product.floor },
    { label: "Türen", value: product.doors },
    { label: "CSC Zertifizierung", value: product.csc_certified },
    { label: "Wetterbeständigkeit", value: product.weather_resistant },
  ];

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={spec.label} className={i % 2 === 0 ? "bg-muted/50" : "bg-card"}>
              <td className="px-5 py-3.5 text-sm font-medium text-muted-foreground w-2/5">
                {spec.label}
              </td>
              <td className="px-5 py-3.5 text-sm font-medium">
                {typeof spec.value === "boolean" ? (
                  spec.value ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-muted-foreground/40" />
                  )
                ) : (
                  spec.value || "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}