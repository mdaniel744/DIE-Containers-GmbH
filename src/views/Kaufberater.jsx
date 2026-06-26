"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, ArrowLeft, Package, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    title: "Wofür möchten Sie den Container nutzen?",
    key: "use",
    options: [
      { value: "storage", label: "Lagerung", desc: "Waren, Möbel, Materialien" },
      { value: "workshop", label: "Werkstatt / Büro", desc: "Arbeitsraum oder Büro" },
      { value: "transport", label: "Transport", desc: "Verschiffung oder Umzug" },
      { value: "special", label: "Spezialeinsatz", desc: "Kühlung, Events, Gastronomie" },
    ],
  },
  {
    title: "Wie viel Platz benötigen Sie?",
    key: "space",
    options: [
      { value: "small", label: "Wenig (ca. 7 m²)", desc: "10 Fuß – für kleine Mengen" },
      { value: "medium", label: "Mittel (ca. 14 m²)", desc: "20 Fuß – der Standard" },
      { value: "large", label: "Viel (ca. 28 m²)", desc: "40 Fuß – maximaler Platz" },
    ],
  },
  {
    title: "Welches Budget haben Sie eingeplant?",
    key: "budget",
    options: [
      { value: "low", label: "Bis 2.500 €", desc: "Gebrauchte Container" },
      { value: "mid", label: "2.500 – 5.000 €", desc: "Neue Standard-Container" },
      { value: "high", label: "Über 5.000 €", desc: "Spezial- oder Bürocontainer" },
    ],
  },
];

function getRecommendation(answers) {
  const { use, space, budget } = answers;
  if (use === "special") return { type: "Kühlcontainer", size: "20ft", reason: "Für Spezialeinsätze empfehlen wir einen 20 Fuß Kühlcontainer oder Bürocontainer." };
  if (use === "workshop") return { type: "Bürocontainer", size: space === "large" ? "40ft" : "20ft", reason: "Für Büro- oder Werkstattnutzung empfehlen wir einen vorbereiteten Bürocontainer." };
  if (space === "small") return { type: "Standard", size: "10ft", reason: "Für Ihren Bedarf ist ein kompakter 10 Fuß Container ideal – platzsparend und effizient." };
  if (space === "large") return { type: "High Cube", size: "40ft", reason: "Maximaler Platz mit zusätzlicher Höhe – der 40 Fuß High Cube ist die beste Wahl." };
  return { type: budget === "low" ? "Standard" : "High Cube", size: "20ft", reason: "Der 20 Fuß Container ist der vielseitigste Allrounder – ideal für Lagerung und Transport." };
}

export default function Kaufberater() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value) => {
    setAnswers({ ...answers, [questions[step].key]: value });
  };

  const handleNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const result = showResult ? getRecommendation(answers) : null;

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">Kaufberater</span>
          <h1 className="font-heading font-bold text-3xl mt-3 tracking-tight">Welcher Container passt zu Ihnen?</h1>
          <p className="text-muted-foreground mt-2">Beantworten Sie 3 kurze Fragen und erhalten Sie eine Empfehlung.</p>
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
                Frage {step + 1} von {questions.length}
              </div>
              <h2 className="font-heading font-bold text-xl mb-6">{questions[step].title}</h2>

              <RadioGroup
                value={answers[questions[step].key] || ""}
                onValueChange={handleSelect}
                className="space-y-3"
              >
                {questions[step].options.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      answers[questions[step].key] === opt.value
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
                  <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[questions[step].key]}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold"
                >
                  {step < questions.length - 1 ? "Weiter" : "Empfehlung erhalten"}
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
              <h2 className="font-heading font-bold text-xl mb-2">Unsere Empfehlung</h2>
              <p className="text-lg font-heading font-semibold text-secondary mb-2">
                {result.size} {result.type}
              </p>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">{result.reason}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={`/shop?size=${result.size}&type=${result.type}`}>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold w-full sm:w-auto">
                    <Package className="w-4 h-4 mr-2" /> Container ansehen
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => { setShowResult(false); setStep(0); setAnswers({}); }}>
                  Nochmal starten
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}