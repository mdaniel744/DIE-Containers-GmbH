"use client";
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteStep1 from "@/components/quote/QuoteStep1";
import QuoteStep2 from "@/components/quote/QuoteStep2";
import QuoteStep3 from "@/components/quote/QuoteStep3";
import { useSection } from "@/lib/i18n";

const ORANGE = "#F28C28";
// stepLabels are now read from i18n inside the component
const isPositiveInteger = (value) => {
  const numericValue = Number(value);
  return Number.isInteger(numericValue) && numericValue > 0;
};

export default function QuoteRequest() {
  const T = useSection("quote");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const qty = parseInt(searchParams.get("qty"), 10) || 1;
  const productSize = searchParams.get("size") || "";

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [data, setData] = useState({
    container_size: productSize,
    container_type: "",
    main_category: "",
    modified_subtype: "",
    condition: "",
    color: "",
    quantity: qty,
    product_id: productId || "",
    country: "Deutschland",
    unloading_method: "",
    desired_delivery_date: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    additional_notes: "",
    accepted_terms: false,
  });
  const [prefilledProduct, setPrefilledProduct] = useState(null);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      quantity: qty,
      product_id: productId || "",
      container_size: productSize || prev.container_size,
    }));
    if (productId) setStep(1);
  }, [productId, productSize, qty]);

  // Auto-continue: when arriving from a product page, fetch & pre-select it
  useEffect(() => {
    if (!productId) return;
    let cancelled = false;
    (async () => {
      try {
        const product = await base44.entities.Product.get(productId);
        if (cancelled || !product) return;
        const typeMap = {
          Standard: "Seecontainer",
          "High Cube": "Seecontainer",
          "Open Side": "Modifizierter Container",
          "Doppeltür": "Modifizierter Container",
          Werkstattcontainer: "Modifizierter Container",
          Kühlcontainer: "Kühlcontainer",
          Bürocontainer: "Bürocontainer",
        };
        const mainCat = typeMap[product.container_type] || "Seecontainer";
        const isModified = mainCat === "Modifizierter Container";
        const subtype = isModified ? product.container_type : "";
        setData((prev) => ({
          ...prev,
          product_id: productId,
          main_category: mainCat,
          container_type: isModified ? subtype : mainCat,
          modified_subtype: subtype,
          container_size: product.size || productSize || prev.container_size,
          condition: product.condition || prev.condition,
          quantity: qty,
        }));
        setPrefilledProduct(product);
        setStep(1);
      } catch (e) {
        // product not found – stay on step 0
      }
    })();
    return () => { cancelled = true; };
  }, [productId, productSize, qty]);

  const canAdvance = () => {
    if (step === 0) {
      if (!data.main_category) return false;
      if (data.main_category === "Modifizierter Container" && !data.modified_subtype) return false;
      return true;
    }
    if (step === 1) {
      return data.container_size && data.condition && data.unloading_method && isPositiveInteger(data.quantity);
    }
    if (step === 2) {
      return data.first_name && data.last_name && data.email && data.phone && data.accepted_terms;
    }
    return false;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      await base44.entities.QuoteRequest.create({ ...data, quantity: Number(data.quantity) });
      setSubmitted(true);
    } catch (err) {
      console.error("[quote] submit failed:", err);
      setSubmitError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-4 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Check className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="font-heading font-bold text-2xl mb-3">{T.successTitle}</h1>
          <p className="text-muted-foreground mb-8">{T.successText}</p>
          <Button
            onClick={() => navigate("/")}
            className="font-heading font-semibold text-[#1a1a1a] hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            {T.backToHome}
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-heading font-bold text-3xl tracking-tight mb-2">{T.title}</h1>
          <p className="text-muted-foreground">{T.subtitle}</p>
        </motion.div>

        {prefilledProduct && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 p-4 rounded-xl border border-[#F28C28]/30 bg-[#F28C28]/5"
          >
            <img src={prefilledProduct.image_url} alt={prefilledProduct.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono uppercase tracking-wide" style={{ color: ORANGE }}>{T.selectedProduct}</p>
              <p className="font-heading font-semibold text-sm text-foreground truncate">{prefilledProduct.title}</p>
            </div>
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
          </motion.div>
        )}

        {/* Progress stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {T.steps.map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i < step
                      ? "text-white"
                      : i === step
                      ? "text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                  style={i <= step ? { backgroundColor: ORANGE } : {}}
                >
                  {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors hidden sm:block ${
                    i <= step ? "text-foreground" : "text-muted-foreground/50"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: ORANGE }}
              animate={{ width: `${((step + 1) / 3) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === 0 && <QuoteStep1 data={data} setData={setData} />}
              {step === 1 && <QuoteStep2 data={data} setData={setData} />}
              {step === 2 && <QuoteStep3 data={data} setData={setData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
            className="font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {T.back}
          </Button>

          {step < 2 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canAdvance()}
              className="font-heading font-semibold text-[#1a1a1a] hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              {T.next} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canAdvance() || submitting}
              className="font-heading font-semibold text-[#1a1a1a] hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#1a1a1a]/30 border-t-[#1a1a1a] rounded-full animate-spin" />
                  {T.submitting}
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {T.submit}
                </>
              )}
            </Button>
          )}
        </div>

        {submitError && (
          <div className="mt-4 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-sm text-rose-700 dark:text-rose-400">
            {submitError}{" "}
            <button
              className="underline font-medium hover:no-underline"
              onClick={() => setSubmitError(null)}
            >
              Erneut versuchen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
