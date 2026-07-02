"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, Package, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSection } from "@/lib/i18n";

// Recommendation logic — uses answer value keys (language-neutral)
function getRecommendation(answers, T) {
  const { use, space, budget } = answers;
  if (use === "special") return { type: "Kühlcontainer", size: "20ft", reason: T.questions[0].options.find(o => o.value === "special")?.desc || "" };
  if (use === "office") return { type: "Bürocontainer", size: space === "large" ? "40ft" : "20ft", reason: "" };
  if (space === "small") return { type: "Standard", size: "10ft", reason: "" };
  if (space === "large") return { type: "High Cube", size: "40ft", reason: "" };
  return { type: budget === "low" ? "Standard" : "High Cube", size: "20ft", reason: "" };
}

// Recommendation reasons by key — kept in i18n.js, referenced here by result key
const REASON_MAP = {
  special: (T) => T.questions?.[0]?.options?.[3]?.desc || "",
  office: () => "",
  small: () => "",
  large: () => "",
  default: () => "",
};

export default function Kaufberater() {
  const T = useSection("kaufberater");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questionKeys = ["use", "space", "budget"];

  const handleSelect = (value) => {
    setAnswers({ ...answers, [questionKeys[step]]: value });
  };

  const handleNext = () => {
    if (step < T.questions.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const result = showResult ? getRecommendation(answers, T) : null;

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">{T.label}</span>
          <h1 className="font-heading font-bold text-3xl mt-3 tracking-tight">{T.title}</h1>
          <p className="text-muted-foreground mt-2">{T.subtitle}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-xl border border-border p-6 sm:p-8"
            >
              <div className="mb-4 text-xs text-muted-foreground font-mono">
                {T.questionOf(step + 1, T.questions.length)}
              </div>
              <h2 className="font-heading font-bold text-xl mb-6">{T.questions[step].q}</h2>

              <RadioGroup
                value={answers[questionKeys[step]] || ""}
                onValueChange={handleSelect}
                className="space-y-3"
              >
                {T.questions[step].options.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      answers[questionKeys[step]] === opt.value
                        ? "border-secondary bg-secondary/5"
                        : "border-border hover:border-secondary/40"
                    }`}
                  >
                    <RadioGroupItem value={opt.value} className="sr-only" />
                    <div>
                      <p className="font-heading font-semibold text-sm">{opt.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> {T.back}
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[questionKeys[step]]}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold"
                >
                  {step < T.questions.length - 1 ? T.next : T.getRecommendation}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-xl border border-border p-6 sm:p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-heading font-bold text-xl mb-2">{T.ourRecommendation}</h2>
              <p className="text-lg font-heading font-semibold text-secondary mb-2">
                {result.size} {result.type}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Link to={`/shop?size=${result.size}&type=${result.type}`}>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold w-full sm:w-auto">
                    <Package className="w-4 h-4 mr-2" /> {T.viewContainer}
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => { setShowResult(false); setStep(0); setAnswers({}); }}>
                  {T.restart}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
