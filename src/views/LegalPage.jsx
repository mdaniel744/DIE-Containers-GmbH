"use client";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, CheckCircle, Truck, Shield, CreditCard, Lock, FileText, Building } from "lucide-react";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

const legalContent = {
  impressum: {
    title: "Impressum",
    content: "**Angaben gemäß § 5 TMG:**\n\nDIE Container GmbH\nHermann-Oberth-Str. 23\n85640 Putzbrunn\nDeutschland\n\n**Kontakt:**\nTelefon: 0049 163 5393 159\nE-Mail: contact@diecontainers.com\n\n**Handelsregister / EUID:**\nHRB256757\n\n**Umsatzsteuer-ID:**\nUmsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:\nDE 330443785\n\n**Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:**\nDIE Container GmbH\nHermann-Oberth-Str. 23\n85640 Putzbrunn\nDeutschland",
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: "**Cookie-Richtlinie**\n\nDiese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.\n\n**Was sind Cookies?**\nCookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.\n\n**Welche Cookies verwenden wir?**\n- Notwendige Cookies: Für die grundlegende Funktion der Website\n- Funktionale Cookies: Für erweiterte Funktionen und Personalisierung\n- Analytische Cookies: Zur Analyse der Websitenutzung\n\n**Ihre Einstellungen**\nSie können Cookies jederzeit in Ihren Browser-Einstellungen deaktivieren.",
  },
  widerrufsrecht: {
    title: "Widerrufsrecht",
    content: "**Widerrufsbelehrung**\n\n**Widerrufsrecht**\nSie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.\n\n**Folgen des Widerrufs**\nWenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen zurückzuzahlen.\n\nBitte beachten Sie, dass das Widerrufsrecht bei individuell angefertigten oder maßgeschneiderten Containern ausgeschlossen sein kann.",
  },
  rueckgabe: null,
  zahlungsbedingungen: null,
  agb: null,
  datenschutz: null,
};

function renderTextContent(content) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      return <h3 key={i} className="font-heading font-semibold text-foreground text-base mt-6 mb-2">{block.replace(/\*\*/g, "")}</h3>;
    }
    if (block.includes("**")) {
      const parts = block.split(/\*\*/);
      return (
        <p key={i} className="mb-3 leading-relaxed text-sm">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={i} className="list-disc pl-5 mb-3 space-y-1 text-sm">
          {block.split("\n").map((item, j) => (
            <li key={j}>{item.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="mb-3 leading-relaxed text-sm">{block}</p>;
  });
}

function Section({ number, title, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white font-heading" style={{ backgroundColor: ORANGE }}>
          {number}
        </span>
        <h2 className="font-heading font-bold text-base text-foreground">{title}</h2>
      </div>
      <div className="pl-10 text-sm text-muted-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-1.5 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ORANGE }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="mt-2 space-y-2 list-none">
      {items.map((step, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white font-heading" style={{ backgroundColor: NAVY }}>
            {i + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

function ContactBlock() {
  return (
    <div className="mt-4 rounded-2xl overflow-hidden border border-border">
      <div className="p-1" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch">
          <a href="mailto:contact@diecontainers.com"
            className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-4">
            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
            <div className="min-w-0">
              <p className="text-xs text-white/60 font-mono uppercase tracking-wide">E-Mail</p>
              <p className="text-sm font-semibold text-white leading-tight break-all">contact@diecontainers.com</p>
            </div>
          </a>
          <a href="https://wa.me/491635393159" target="_blank" rel="noopener noreferrer"
            className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-4">
            <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
            <div className="min-w-0">
              <p className="text-xs text-white/60 font-mono uppercase tracking-wide">WhatsApp</p>
              <p className="text-sm font-semibold text-white leading-tight">0049 163 5393 159</p>
            </div>
          </a>
          <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-4">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
            <div className="min-w-0">
              <p className="text-xs text-white/60 font-mono uppercase tracking-wide">Adresse</p>
              <p className="text-sm font-semibold text-white leading-tight">Hermann-Oberth-Str. 23, 85640 Putzbrunn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransportTable() {
  const rows = [
    ["See- & Binnenschifffahrt (Barge)", "Containertransport per Binnenschiff oder Flussbarke", "20 ft, 40 ft", "Über schiffbare Binnenwasserstraßen"],
    ["Schienentransport (Bahn)", "Containertransport per Güterzug, Depot-zu-Depot", "20 ft, 40 ft", "Abhängig von Bahnterminals"],
    ["Straßentransport (LKW)", "Lieferung per Flatbed- oder Sattelzug", "2 × 20 ft oder 1 × 40 ft", "Europaweite Lieferung"],
    ["Kran-LKW", "LKW mit integriertem Kran für Be- und Entladung", "2 × 20 ft oder 1 × 40 ft", "Transport & Entladung europaweit"],
    ["Mobiler Kran", "Separater Mobilkran zur Containerentladung", "Alle Containergrößen", "Für schwierige Stellplätze"],
    ["Gabelstapler (inkl. Fahrer)", "Entladung vom Flatbed per Gabelstapler", "Alle geeigneten Container", "Europaweit verfügbar"],
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border mt-3">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border" style={{ backgroundColor: NAVY }}>
            {["Transport- / Umschlagsart", "Beschreibung", "Containergrößen", "Einsatzgebiet"].map(h => (
              <th key={h} className="px-4 py-3 text-left font-heading font-semibold text-white">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
              <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
              <td className="px-4 py-3 text-muted-foreground">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ZahlungsbedingungenPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Zahlungsbedingungen & Zahlungsrichtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bei DIE Container GmbH legen wir großen Wert auf transparente, sichere und nachvollziehbare Zahlungsprozesse – ohne versteckte Gebühren oder zwischengeschaltete Zahlungsdienstleister.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Verfügbare Zahlungsmethoden">
              <div className="bg-muted/50 rounded-xl px-4 py-4 flex items-start gap-3">
                <Building className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm mb-1">Banküberweisung (SEPA – Vorkasse)</p>
                  <p>Die Zahlung erfolgt per SEPA-Banküberweisung auf unser offizielles Geschäftskonto.</p>
                </div>
              </div>
              <p className="mt-3 font-medium text-foreground">So funktioniert der Zahlungsablauf:</p>
              <NumberedList items={[
                "Sie erhalten von uns ein detailliertes Angebot oder eine Proforma-Rechnung",
                "Nach Ihrer Bestätigung zur Fortsetzung der Bestellung erhalten Sie die Rechnung mit unseren Bankdaten",
                "Die Zahlung ist sofort und ohne Abzug fällig",
                "Nach Zahlungseingang wird der Container für die Lieferung freigegeben",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>⚠️ Wichtiger Hinweis:</strong> Zahlungen sind ausschließlich auf das offizielle Firmenkonto von DIE Container GmbH zu leisten, das Ihnen im Rechnungsdokument mitgeteilt wird.</p>
              </div>
            </Section>

            <Section number="2" title="Zahlungsprozess">
              <p>Der Zahlungsprozess ist klar strukturiert und erfolgt in folgenden Schritten:</p>
              <NumberedList items={[
                "Bestellung oder Anfrage über unsere Website",
                "Zusendung eines detaillierten Angebots inklusive aller relevanten Informationen",
                "Bestätigung des Angebots durch den Kunden",
                "Ausstellung der Rechnung mit Bankverbindung",
                "Zahlung per SEPA-Überweisung",
                "Versand bzw. Disposition des Containers erst nach Zahlungseingang",
                "Organisation der Lieferung",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">📄 Rechnung & Beleg:</strong> Nach Zahlungseingang erhalten Sie die Rechnung im Originalformat per E-Mail. Auf Wunsch stellen wir Ihnen zusätzlich einen Zahlungsbeleg als PDF mit Stempel und Unterschrift für Ihre Buchhaltung zur Verfügung.</p>
              </div>
            </Section>

            <Section number="3" title="Zahlungsfreigabe & Versand">
              <BulletList items={[
                "Container werden ausschließlich nach vollständigem Zahlungseingang versendet",
                "Der Zahlungseingang muss auf unserem Firmenkonto gutgeschrieben sein",
                "Eine Reservierung oder Lieferung vor Zahlungseingang ist ausgeschlossen",
              ]} />
              <p className="mt-2">Dies dient der Absicherung beider Parteien und gewährleistet eine reibungslose Abwicklung.</p>
            </Section>

            <Section number="4" title="Sicherheit & Vertraulichkeit">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { icon: Lock, text: "Wir arbeiten ohne externe Zahlungsdienstleister" },
                  { icon: Shield, text: "Ihre Bankdaten verbleiben vollständig bei Ihnen" },
                  { icon: CreditCard, text: "Zahlungen erfolgen auf unser intern verwaltetes Geschäftskonto" },
                  { icon: FileText, text: "Alle Daten werden gemäß Datenschutzbestimmungen verarbeitet" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 bg-muted/50 rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="5" title="Unterstützung & Kontakt">
              <p>Bei Fragen zu Zahlungen, Rechnungen oder Zahlungsbestätigungen erreichen Sie uns jederzeit:</p>
              <ContactBlock />
            </Section>
          </div>
          <ContactBanner />
        </motion.div>
      </div>
    </div>
  );
}

function AgbPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland und ihren Kunden für den Verkauf von neuen und gebrauchten Containern einschließlich Lieferung und optionaler Dienstleistungen. Mit der Bestellung erklärt der Kunde sein Einverständnis mit diesen Bedingungen.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Vertragsabschluss">
              <BulletList items={[
                "Alle Angebote auf unserer Website oder per E-Mail sind freibleibend und unverbindlich.",
                "Ein verbindlicher Kaufvertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Lieferung der Ware zustande.",
                "Änderungen oder Sonderwünsche bedürfen der schriftlichen Zustimmung von DIE Container GmbH.",
              ]} />
            </Section>

            <Section number="2" title="Preise & Zahlung">
              <BulletList items={[
                "Alle Preise sind in Euro (€) angegeben und beinhalten – sofern nicht anders angegeben – die gesetzliche Mehrwertsteuer (derzeit 19 %).",
                "Lieferkosten variieren je nach Bestellmenge und Lieferadresse innerhalb Deutschlands.",
                "Die Zahlung erfolgt ausschließlich per Vorkasse (100 %) via Banküberweisung.",
                "Die Lieferung erfolgt erst nach vollständigem Zahlungseingang.",
              ]} />
            </Section>

            <Section number="3" title="Lieferung & Versand">
              <BulletList items={[
                "Die Lieferung erfolgt an die vom Kunden angegebene Adresse innerhalb Deutschlands.",
                "Lieferzeit: in der Regel 7–14 Werktage nach Zahlungseingang.",
                "Die Entladung per Kran oder Gabelstapler ist im Lieferpreis enthalten.",
                "Der Kunde muss sicherstellen, dass die Lieferadresse ebenerdig zugänglich ist und ausreichend Platz zum Entladen vorhanden ist.",
                "Bei Annahmeverweigerung oder gescheiterter Lieferung behalten wir uns vor, Kosten für Rücktransport und Wiedereinlagerung in Rechnung zu stellen.",
              ]} />
            </Section>

            <Section number="4" title="Eigentumsvorbehalt">
              <BulletList items={[
                "Die gelieferte Ware bleibt bis zur vollständigen Zahlung Eigentum von DIE Container GmbH.",
                "Bei Zahlungsverzug behalten wir uns das Recht vor, die Ware auf Kosten des Käufers zurückzufordern.",
              ]} />
            </Section>

            <Section number="5" title="Widerrufsrecht & Rückgabe">
              <BulletList items={[
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 30 Tagen.",
                "Zusätzlich bieten wir eine freiwillige 30-tägige Rückgabegarantie für neue Container (siehe unsere Rückgabe- und Erstattungsrichtlinie).",
                "Gebrauchte Container sind vom Rückgaberecht ausgenommen, sofern kein nachweisbarer Mangel vorliegt.",
                "Rückgaben müssen vorab mit uns abgestimmt werden. Wir organisieren die Abholung – der Käufer trägt die Rücksendekosten (außer bei mangelhafter Ware).",
              ]} />
            </Section>

            <Section number="6" title="Gewährleistung & Garantie">
              <p>Es gelten die gesetzlichen Gewährleistungsrechte für Verbraucher. Zusätzlich bieten wir:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {[
                  { label: "Neue Container", desc: "24 Monate Garantie" },
                  { label: "Gebrauchte Container", desc: "90 Tage Garantie (geprüft)" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <BulletList items={[
                "Mängel müssen bei Erhalt unverzüglich schriftlich gemeldet werden.",
                "Schäden durch unsachgemäßen Gebrauch oder unerlaubte Umbauten sind von der Garantie ausgeschlossen.",
              ]} />
            </Section>

            <Section number="7" title="Haftung">
              <BulletList items={[
                "Wir haften nur bei Vorsatz oder grober Fahrlässigkeit.",
                "Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.",
                "Haftung für entgangenen Gewinn, Produktionsausfall oder mittelbare Schäden ist ausgeschlossen.",
              ]} />
            </Section>

            <Section number="8" title="Datenschutz">
              <p>Es gilt unsere Datenschutzerklärung. Kundendaten werden ausschließlich zur Vertragsabwicklung verwendet und nicht an Dritte weitergegeben – es sei denn, dies ist für die Lieferung erforderlich oder gesetzlich vorgeschrieben.</p>
            </Section>

            <Section number="9" title="Urheberrecht & geistiges Eigentum">
              <p>Alle Inhalte dieser Website (Texte, Bilder, Logos, Dokumente) sind urheberrechtlich geschützt. Eine Nutzung ohne ausdrückliche schriftliche Genehmigung ist untersagt.</p>
            </Section>

            <Section number="10" title="Schlussbestimmungen">
              <BulletList items={[
                "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
                "Gerichtsstand ist Mönchengladbach, sofern der Kunde Kaufmann im Sinne des HGB ist.",
                "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
              ]} />
            </Section>
          </div>
          <ContactBanner />
        </motion.div>
      </div>
    </div>
  );
}

function DatenschutzPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Datenschutzerklärung</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Wir bei DIE Container GmbH verstehen, dass einige Ihrer persönlichen Daten sensibler Natur sind und Sie vielleicht Bedenken haben, diese persönlichen Daten mit uns zu teilen. Wenn Sie sich jedoch dafür entscheiden, mit uns zu interagieren oder uns Ihre Daten mitzuteilen, werden wir Ihre Privatsphäre auf die in dieser Richtlinie aufgeführte Weise schützen. Diese Richtlinie kann sich von Zeit zu Zeit ändern, daher sollten Sie sich über Änderungen informieren.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Die von uns gesammelten Informationen">
              <p>Wenn Sie Informationen von DIE Container GmbH anfordern, benötigen wir häufig Informationen wie den Namen Ihres Unternehmens, die Namen der autorisierten Benutzer Ihres Unternehmens, Ihre Adresse, Telefonnummer, Faxnummer und E-Mail-Adresse. Derzeit benötigen wir Ihre Postanschrift.</p>
              <p className="mt-2">Wir sammeln diese Informationen auf der Ebene der Angebotsanfrage, damit wir Ihnen ein formelles Angebot unterbreiten können, das Sie für Ihre Kaufentscheidung nutzen können. In der Regel sind nicht alle diese Informationen erforderlich. Die einzigen erforderlichen Informationen sind in der Regel die E-Mail-Adresse und der Ort oder die Postleitzahl der Lieferung.</p>
            </Section>

            <Section number="2" title="Wie wir Informationen weitergeben">
              <p>Wir sind stets bemüht, Ihnen ein wertvolles Online-Erlebnis und die besten Preise und die beste Qualität beim Kauf, der Miete und dem Leasing von mobilen Lager- und Versandcontainern zu bieten.</p>
              <p className="mt-2">Wir behalten uns das Recht vor, Informationen innerhalb von DIE Container GmbH weiterzugeben, soweit dies für die Bearbeitung Ihrer Anfrage und die Erbringung unserer Leistungen erforderlich ist.</p>
              <p className="mt-2">Wir behalten uns das Recht vor, Informationen über jeden Besucher oder jedes Mitglied freizugeben, wenn dieser gegen die Nutzungsbedingungen verstößt oder an illegalen Aktivitäten teilnimmt, auch ohne eine Vorladung, einen Haftbefehl oder einen anderen Gerichtsbeschluss. Wir kooperieren mit den Strafverfolgungsbehörden bei der Identifizierung von Personen, die unsere Server oder Dienste für illegale Aktivitäten nutzen könnten.</p>
            </Section>

            <Section number="3" title="Empfangene E-Mail">
              <p>DIE Container GmbH wird sich mit Ihnen per E-Mail in Verbindung setzen, wenn Sie sich registrieren und um auf Fragen zu antworten, die Sie uns per E-Mail schicken. Wenn Sie ein bestehender Kunde oder ein registrierter Benutzer sind, senden wir Ihnen auch E-Mail-Nachrichten mit Informationen, von denen wir glauben, dass sie für Sie nützlich sind, einschließlich Ankündigungen über neue Produkte und Dienstleistungen. Wir verwenden Ihre E-Mail-Adresse in der vorgenannten Weise, bis Sie sich ausdrücklich abmelden.</p>
            </Section>

            <Section number="4" title="Vom System generierte E-Mail">
              <p>Wenn Sie sich entscheiden, unsere Website zu nutzen, um ein Angebot oder andere Informationen anzufordern, erhalten Sie von uns Bestätigungs-E-Mails. Systemgenerierte E-Mails wie diese betrachten wir als angefordert und fallen nicht unter unsere Opt-out-Option.</p>
            </Section>

            <Section number="5" title="Ihr Einverständnis">
              <p>Durch die Nutzung dieser Website und der auf unserer Website verfügbaren Dienste erklären Sie sich mit der Erfassung und Verwendung Ihrer Daten wie oben beschrieben einverstanden. Wenn wir uns entscheiden, unsere Datenschutzpolitik zu ändern, werden wir die Änderungen auf dieser Seite veröffentlichen, damit Sie immer über unsere Politik informiert sind.</p>
              <p className="mt-2">Vielen Dank für Ihren Besuch bei der DIE Container GmbH. Sollten Sie Fragen zu diesen Richtlinien haben, können Sie uns gerne kontaktieren.</p>
            </Section>

            <Section number="6" title="Kontaktieren Sie uns">
              <p>Haben Sie Fragen dazu, wie wir Ihrem Unternehmen helfen können? Senden Sie uns eine E-Mail, und wir melden uns in Kürze bei Ihnen.</p>
              <ContactBlock />
            </Section>
          </div>
          <ContactBanner />
        </motion.div>
      </div>
    </div>
  );
}

function RueckgabePage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rückgabe & Erstattung</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Rückgabe- und Erstattungsrichtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alle Informationen zu Rückgaberecht, Reklamationen, Erstattungsverfahren und Ausnahmen beim Kauf von Containern über unseren Online-Shop.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Rückgaberecht für Verbraucher">
              <p>Verbraucher haben gemäß den gesetzlichen Bestimmungen grundsätzlich das Recht, innerhalb von <strong className="text-foreground">14 Tagen nach Erhalt der Ware</strong> den Vertrag zu widerrufen.</p>
              <p className="mt-2">Weitere Informationen hierzu finden Sie in unserer <strong className="text-foreground">Widerrufsbelehrung</strong>.</p>
            </Section>

            <Section number="2" title="Bedingungen für Rückgaben">
              <p>Damit eine Rückgabe akzeptiert werden kann, müssen folgende Voraussetzungen erfüllt sein:</p>
              <BulletList items={[
                "Der Container darf nicht dauerhaft genutzt oder verändert worden sein",
                "Der Container muss sich im gleichen Zustand befinden, in dem er geliefert wurde",
                "Alle zugehörigen Dokumente müssen vorhanden sein",
              ]} />
              <p className="mt-3">Der Käufer trägt grundsätzlich die Kosten der Rücksendung, sofern nichts anderes vereinbart wurde. Aufgrund der Größe und des Gewichts von Containern erfolgt eine Rücksendung in der Regel über eine <strong className="text-foreground">individuell organisierte Transportlösung</strong>.</p>
            </Section>

            <Section number="3" title="Ausschluss der Rückgabe">
              <p>Das Rückgaberecht besteht <strong className="text-foreground">nicht</strong> bei:</p>
              <BulletList items={[
                "Individuell angefertigten Containern",
                "Containern, die nach Kundenspezifikation modifiziert wurden",
                "Bereits genutzten oder veränderten Containern",
                "Containern mit beschädigten oder fehlenden Dokumenten",
              ]} />
            </Section>

            <Section number="4" title="Reklamationen & Mängel">
              <p>Sollte der gelieferte Container nicht der vereinbarten Beschreibung entsprechen oder Mängel aufweisen, gehen Sie bitte wie folgt vor:</p>
              <NumberedList items={[
                "Mängel innerhalb von 7 Tagen nach Lieferung schriftlich melden",
                "Mängel mit Fotos und einer detaillierten Beschreibung dokumentieren",
                "Reklamation per E-Mail oder WhatsApp an uns senden",
                "Wir prüfen die Reklamation und melden uns innerhalb von 5 Werktagen",
              ]} />
            </Section>

            <Section number="5" title="Erstattungsverfahren">
              <p>Nach Genehmigung einer Rückgabe oder Reklamation erfolgt die Erstattung wie folgt:</p>
              <BulletList items={[
                "Erstattung innerhalb von 14 Tagen nach bestätigter Rücknahme",
                "Rückzahlung auf das ursprünglich verwendete Zahlungsmittel",
                "Bei Teilerstattungen wird der vereinbarte Betrag separat kommuniziert",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Hinweis:</strong> Transportkosten für die Rücksendung werden in der Regel nicht erstattet, es sei denn, der Mangel ist auf einen Fehler unsererseits zurückzuführen.</p>
              </div>
            </Section>

            <Section number="6" title="Gewährleistung">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { label: "Neue Container", desc: "Gesetzliche Gewährleistungsfrist von 2 Jahren gemäß § 437 BGB" },
                  { label: "Gebrauchte Container", desc: "Verkauf im beschriebenen Zustand; Gewährleistung auf 1 Jahr verkürzt" },
                  { label: "Generalüberholte Container", desc: "12 Monate Gewährleistung auf überholte Komponenten" },
                  { label: "Individuelle Umbauten", desc: "Gewährleistung gemäß individueller Vereinbarung im Angebot" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="7" title="Kontakt für Rückgaben & Reklamationen">
              <p>Für Rückgaben, Reklamationen oder Fragen zur Erstattung kontaktieren Sie uns direkt:</p>
              <ContactBlock />
              <div className="mt-4">
                <Link to="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: ORANGE }}>
                  Reklamation einreichen →
                </Link>
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function VersandPage() {
  const promises = [
    { icon: Shield, text: "Transparente Lieferzeiten" },
    { icon: Truck, text: "Professionelle Logistikplanung" },
    { icon: CheckCircle, text: "Klar kommunizierte Versandkosten" },
    { icon: CheckCircle, text: "Sichere, zuverlässige Containerlieferung" },
  ];

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Versand</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Liefer- & Versandrichtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alle Informationen zu Liefergebiet, Lieferzeiten, Transportkosten und dem Ablauf Ihrer Containerlieferung.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Liefergebiet">
              <p>Wir liefern ausschließlich innerhalb Deutschlands. Ein Versand auf deutsche Inseln ist leider nicht möglich.</p>
              <p>Die Lieferung erfolgt <strong className="text-foreground">bis zur Bordsteinkante</strong> an der angegebenen Lieferadresse.</p>
            </Section>

            <Section number="2" title="Lieferzeiten">
              <div className="bg-muted/50 rounded-xl px-4 py-3 flex items-center gap-3">
                <Truck className="w-5 h-5 flex-shrink-0" style={{ color: ORANGE }} />
                <span><strong className="text-foreground">Standardlieferzeit:</strong> 3–9 Werktage nach Auftragsannahme</span>
              </div>
              <p className="mt-2">Lieferzeiten können abhängig von folgenden Faktoren variieren:</p>
              <BulletList items={["Lieferadresse und Region", "Containertyp und -größe", "Gewählter Transportweg", "Geografische, logistische oder klimatische Bedingungen"]} />
            </Section>

            <Section number="3" title="Versand- und Transportkosten">
              <BulletList items={[
                "Versandkosten sind nicht pauschal im Produktpreis enthalten",
                "Alle Transportkosten werden individuell berechnet",
                "Die endgültigen Versandkosten werden im Angebot / auf der Rechnung mitgeteilt",
                "Der Versand erfolgt erst nach Bestätigung der Transportkosten durch den Kunden",
              ]} />
            </Section>

            <Section number="4" title="Ablauf der Lieferung">
              <NumberedList items={[
                "Prüfung der Lieferadresse und individuellen Anforderungen",
                "Auswahl der schnellsten und wirtschaftlichsten Transportlösung",
                "Terminabstimmung mit dem Kunden",
                "Lieferung des Containers an den vereinbarten Standort",
              ]} />
            </Section>

            <Section number="5" title="Transport- und Umschlagsarten">
              <p>Abhängig vom Lieferort und Containertyp wählt unser Logistikteam den optimalen Transportweg:</p>
              <TransportTable />
            </Section>

            <Section number="6" title="Kombinierte Transportlösungen">
              <p>Bei komplexeren Routen können kombinierte Transportarten eingesetzt werden:</p>
              <BulletList items={["Bahn + LKW", "Binnenschiff + LKW"]} />
            </Section>

            <Section number="7" title="Pflichten des Kunden">
              <BulletList items={[
                "Eine korrekte und vollständige Lieferadresse anzugeben",
                "Für ausreichende Zugänglichkeit des Lieferortes zu sorgen",
                "Uns vorab über Zufahrtsbeschränkungen, Bodenverhältnisse oder besondere Gegebenheiten zu informieren",
              ]} />
            </Section>

            <Section number="8" title="Unser Liefer-Versprechen">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {promises.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: ORANGE }} />
                    <span className="font-medium text-foreground text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="9" title="Kontakt & Support">
              <p>Bei Fragen zur Lieferung oder für ein individuelles Transportangebot kontaktieren Sie uns:</p>
              <ContactBlock />
              <div className="mt-4">
                <Link to="/angebot"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: ORANGE }}>
                  Transportangebot anfordern →
                </Link>
              </div>
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function GeneralTermsPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen <strong className="text-foreground">DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland</strong> und ihren Kunden für den Verkauf von neuen und gebrauchten Containern einschließlich Lieferung und optionaler Dienstleistungen. Mit der Bestellung erklärt der Kunde sein Einverständnis mit diesen Bedingungen.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Vertragsabschluss">
              <BulletList items={[
                "Alle Angebote auf unserer Website oder per E-Mail sind freibleibend und unverbindlich.",
                "Ein verbindlicher Kaufvertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Lieferung der Ware zustande.",
                "Änderungen oder Sonderwünsche bedürfen der schriftlichen Zustimmung von DIE Container GmbH.",
              ]} />
            </Section>
            <Section number="2" title="Preise & Zahlung">
              <BulletList items={[
                "Alle Preise sind in Euro (€) angegeben und beinhalten – sofern nicht anders angegeben – die gesetzliche Mehrwertsteuer (derzeit 19 %).",
                "Lieferkosten variieren je nach Bestellmenge und Lieferadresse innerhalb Deutschlands.",
                "Die Zahlung erfolgt ausschließlich per Vorkasse (100 %) via Banküberweisung.",
                "Die Lieferung erfolgt erst nach vollständigem Zahlungseingang.",
              ]} />
            </Section>
            <Section number="3" title="Lieferung & Versand">
              <BulletList items={[
                "Die Lieferung erfolgt an die vom Kunden angegebene Adresse innerhalb Deutschlands.",
                "Lieferzeit: in der Regel 7–14 Werktage nach Zahlungseingang.",
                "Die Entladung per Kran oder Gabelstapler ist im Lieferpreis enthalten.",
                "Der Kunde muss sicherstellen, dass die Lieferadresse ebenerdig zugänglich ist und ausreichend Platz zum Entladen vorhanden ist.",
                "Bei Annahmeverweigerung oder gescheiterter Lieferung behalten wir uns vor, Kosten für Rücktransport und Wiedereinlagerung in Rechnung zu stellen.",
              ]} />
            </Section>
            <Section number="4" title="Eigentumsvorbehalt">
              <BulletList items={[
                "Die gelieferte Ware bleibt bis zur vollständigen Zahlung Eigentum von DIE Container GmbH.",
                "Bei Zahlungsverzug behalten wir uns das Recht vor, die Ware auf Kosten des Käufers zurückzufordern.",
              ]} />
            </Section>
            <Section number="5" title="Widerrufsrecht & Rückgabe">
              <BulletList items={[
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 30 Tagen.",
                "Zusätzlich bieten wir eine freiwillige 30-tägige Rückgabegarantie für neue Container.",
                "Gebrauchte Container sind vom Rückgaberecht ausgenommen, sofern kein nachweisbarer Mangel vorliegt.",
                "Rückgaben müssen vorab mit uns abgestimmt werden. Wir organisieren die Abholung – der Käufer trägt die Rücksendekosten (außer bei mangelhafter Ware).",
              ]} />
            </Section>
            <Section number="6" title="Gewährleistung & Garantie">
              <p>Es gelten die gesetzlichen Gewährleistungsrechte für Verbraucher. Zusätzlich bieten wir:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {[
                  { label: "Neue Container", desc: "24 Monate Garantie" },
                  { label: "Geprüfte Gebrauchtcontainer", desc: "90 Tage Garantie" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <BulletList items={[
                "Mängel müssen bei Erhalt unverzüglich schriftlich gemeldet werden.",
                "Schäden durch unsachgemäßen Gebrauch oder unerlaubte Umbauten sind von der Garantie ausgeschlossen.",
              ]} />
            </Section>
            <Section number="7" title="Haftung">
              <BulletList items={[
                "Wir haften nur bei Vorsatz oder grober Fahrlässigkeit.",
                "Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.",
                "Haftung für entgangenen Gewinn, Produktionsausfall oder mittelbare Schäden ist ausgeschlossen.",
              ]} />
            </Section>
            <Section number="8" title="Datenschutz">
              <p>Es gilt unsere Datenschutzerklärung. Kundendaten werden ausschließlich zur Vertragsabwicklung verwendet und nicht an Dritte weitergegeben – es sei denn, dies ist für die Lieferung erforderlich oder gesetzlich vorgeschrieben.</p>
            </Section>
            <Section number="9" title="Urheberrecht & geistiges Eigentum">
              <p>Alle Inhalte dieser Website (Texte, Bilder, Logos, Dokumente) sind urheberrechtlich geschützt. Eine Nutzung ohne ausdrückliche schriftliche Genehmigung ist untersagt.</p>
            </Section>
            <Section number="10" title="Schlussbestimmungen">
              <BulletList items={[
                "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
                "Gerichtsstand ist Mönchengladbach, sofern der Kunde Kaufmann im Sinne des HGB ist.",
                "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
              ]} />
            </Section>
          </div>
          <div className="mt-8">
            <ContactBanner />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function VatDutiesPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Mehrwertsteuer & Zölle</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alle Preise beinhalten 19 % MwSt. und werden klar ausgewiesen. DIE Container GmbH gewährleistet eine transparente Preisgestaltung und stellt jedem Kunden eine detaillierte Rechnung mit allen steuerlichen Informationen zur Verfügung.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Umsatzsteuerpflicht">
              <p>DIE Container GmbH mit Sitz in Putzbrunn unterliegt der Umsatzsteuer gemäß § 1 UStG.</p>
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-4 space-y-1 text-sm">
                <p><strong className="text-foreground">Handelsregister / EUID:</strong> HRB256757</p>
                <p><strong className="text-foreground">USt-IdNr.:</strong> DE 330443785</p>
              </div>
              <p className="mt-3">Alle Verkäufe unterliegen der gesetzlich vorgeschriebenen Mehrwertsteuer von <strong className="text-foreground">19 %</strong>.</p>
            </Section>
            <Section number="2" title="Preise & Steuerliche Transparenz">
              <BulletList items={[
                "Alle auf unserer Website ausgewiesenen Preise enthalten 19 % MwSt., sofern nicht anders angegeben.",
                "In unseren Angeboten und Rechnungen wird die Mehrwertsteuer separat ausgewiesen, um volle Transparenz zu gewährleisten.",
                "Geschäftskunden mit einer gültigen Steuernummer können die Mehrwertsteuer als Vorsteuer geltend machen.",
              ]} />
            </Section>
            <Section number="3" title="Rechnungen & Steuerdokumente">
              <p>Nach jedem Kauf erhalten Sie eine rechtskonforme Rechnung mit folgenden Angaben:</p>
              <BulletList items={[
                "Namen und Adressen von Käufer und Verkäufer",
                "Netto- & Bruttobeträge",
                "Mehrwertsteuerbetrag",
                "Zahlungsart & Transaktionsdatum",
                "USt-IdNr. (sofern angegeben)",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground">Die Rechnung wird Ihnen per E-Mail als PDF zugesandt. Auf Wunsch kann ein Papierdokument per Post versandt werden.</p>
              </div>
            </Section>
            <Section number="4" title="Steuerfreie innergemeinschaftliche Lieferung (EU)">
              <p>Unter bestimmten Voraussetzungen können EU-Unternehmen bei uns steuerfrei einkaufen:</p>
              <BulletList items={[
                "Der Käufer verfügt über eine gültige USt-IdNr.",
                "Die Ware wird physisch in andere EU-Länder geliefert.",
                "Der Käufer hat seinen Sitz außerhalb Deutschlands.",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>Hinweis:</strong> Bitte kontaktieren Sie uns vor der Bestellung, damit wir die Voraussetzungen prüfen und die steuerfreie Lieferung korrekt dokumentieren können.</p>
              </div>
            </Section>
            <Section number="5" title="Steuerfreie Exporte außerhalb der EU">
              <p>Für Kunden außerhalb der EU (z. B. Schweiz, Großbritannien, Norwegen) kann die Lieferung ohne Mehrwertsteuer erfolgen, wenn der Export durch DIE Container GmbH selbst durchgeführt wird oder der Kunde einen gültigen Ausfuhrnachweis vorlegt.</p>
              <p className="mt-2 font-medium text-foreground">Erforderliche Dokumente:</p>
              <BulletList items={[
                "Offizielle Ausfuhranmeldung",
                "Versanddokumente mit Zollstempel oder Bestätigung der Zollabfertigung",
              ]} />
            </Section>
            <Section number="6" title="Häufig gestellte Fragen (FAQ)">
              <div className="space-y-4">
                {[
                  { q: "Sind die Preise auf Ihrer Website inklusive Mehrwertsteuer?", a: "Ja, alle Preise beinhalten 19 % MwSt., sofern nicht anders angegeben." },
                  { q: "Erhalte ich eine Rechnung mit separat ausgewiesener Mehrwertsteuer?", a: "Ja, selbstverständlich. Jede Rechnung enthält alle gesetzlich vorgeschriebenen Angaben – ideal für Ihre Buchhaltung." },
                  { q: "Kann ich als EU-Unternehmen steuerfrei einkaufen?", a: "Ja, mit einer gültigen USt-IdNr. und Lieferung in ein anderes EU-Land erhalten Sie eine Nettorechnung ohne Mehrwertsteuer." },
                  { q: "Wie funktioniert steuerfreie Lieferung außerhalb der EU?", a: "Bitte kontaktieren Sie uns im Voraus. Wir benötigen die entsprechenden Ausfuhrdokumente, bevor wir steuerfrei liefern können." },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-4">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.q}</p>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section number="7" title="Kontakt">
              <p>Bei steuerlichen Fragen oder zur Vereinbarung eines steuerfreien Kaufs kontaktieren Sie uns bitte:</p>
              <ContactBlock />
            </Section>
          </div>
          <div className="mt-8">
            <ContactBanner />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CookiePolicyPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Cookie-Richtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Cookie-Richtlinie erläutert, wie <strong className="text-foreground">DIE Container GmbH</strong> (Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland) Cookies und ähnliche Tracking-Technologien einsetzt, wenn Sie unsere Website csavcontainer.de besuchen. Durch die weitere Nutzung unserer Website stimmen Sie dem Einsatz von Cookies gemäß dieser Richtlinie zu.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Was sind Cookies?">
              <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät (Computer, Smartphone oder Tablet) gespeichert werden. Sie helfen der Website dabei, Ihre Einstellungen zu speichern, Sie eingeloggt zu halten und Analysedaten zur Verbesserung der Nutzererfahrung zu erheben.</p>
            </Section>
            <Section number="2" title="Arten der von uns verwendeten Cookies">
              <div className="space-y-3 mt-2">
                {[
                  { type: "Notwendige Cookies", desc: "Diese Cookies sind für den ordnungsgemäßen Betrieb der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation, Sicherheit und Formularübermittlungen. Sie können diese Cookies nicht ablehnen.", color: "bg-blue-50 border-blue-200", text: "text-blue-800" },
                  { type: "Funktionale Cookies", desc: "Diese Cookies ermöglichen es der Website, Ihre Einstellungen (z. B. Sprachpräferenzen) zu speichern und erweiterte, personalisierte Funktionen bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden.", color: "bg-green-50 border-green-200", text: "text-green-800" },
                  { type: "Analyse- / Performance-Cookies", desc: "Diese Cookies erfassen anonyme Informationen darüber, wie Besucher unsere Website nutzen, z. B. welche Seiten am häufigsten aufgerufen werden. So können wir die Leistung und Benutzerfreundlichkeit der Website verbessern.", color: "bg-amber-50 border-amber-200", text: "text-amber-800" },
                  { type: "Marketing-Cookies", desc: "Diese Cookies verfolgen Ihre Surfaktivitäten, um relevante Werbung auszuspielen. Wir verwenden derzeit keine Marketing-Cookies von Drittanbietern. Sollte sich dies ändern, werden wir diese Richtlinie aktualisieren und Ihre Einwilligung einholen.", color: "bg-rose-50 border-rose-200", text: "text-rose-800" },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl border px-4 py-4 ${item.color}`}>
                    <p className={`font-heading font-semibold text-sm mb-1 ${item.text}`}>{item.type}</p>
                    <p className={`text-xs leading-relaxed ${item.text} opacity-80`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section number="3" title="Cookies von Drittanbietern">
              <p>Unsere Website kann Inhalte oder Funktionen von Drittanbietern enthalten (z. B. eingebettete Karten oder Analyse-Tools). Diese Drittanbieter können eigene Cookies auf Ihrem Gerät setzen, die deren eigenen Datenschutz- und Cookie-Richtlinien unterliegen. Wir haben keinen Einfluss auf Cookies von Drittanbietern.</p>
            </Section>
            <Section number="4" title="Wie lange werden Cookies gespeichert?">
              <BulletList items={[
                "Sitzungscookies: werden automatisch gelöscht, wenn Sie Ihren Browser schließen.",
                "Persistente Cookies: werden für einen bestimmten Zeitraum (von Tagen bis Jahren) auf Ihrem Gerät gespeichert oder bis Sie diese manuell löschen.",
              ]} />
            </Section>
            <Section number="5" title="Ihre Cookie-Einstellungen">
              <p>Sie haben das Recht, die Verwendung von Cookies auf Ihrem Gerät zu steuern:</p>
              <BulletList items={[
                "Browser-Einstellungen: Die meisten Browser ermöglichen es Ihnen, Cookies einzusehen, zu verwalten, zu blockieren oder zu löschen. Weitere Informationen finden Sie im Hilfebereich Ihres Browsers.",
                "Einwilligung: Beim ersten Besuch unserer Website kann Ihnen ein Cookie-Einwilligungsbanner angezeigt werden. Sie können Ihre Einstellungen jederzeit ändern.",
                "Opt-out-Tools: Für Analyse-Dienste können Sie verfügbare Opt-out-Tools nutzen (z. B. Google Analytics Opt-out-Browser-Add-on).",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>Bitte beachten:</strong> Das Deaktivieren bestimmter Cookies kann die Funktionalität unserer Website beeinträchtigen und den Zugang zu einigen Funktionen einschränken.</p>
              </div>
            </Section>
            <Section number="6" title="Rechtsgrundlage">
              <p>Die Verwendung von Cookies auf unserer Website basiert auf:</p>
              <BulletList items={[
                "Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für nicht notwendige Cookies.",
                "Unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) für technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind.",
              ]} />
            </Section>
            <Section number="7" title="Änderungen dieser Cookie-Richtlinie">
              <p>Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu prüfen.</p>
              <p className="mt-2 text-xs text-muted-foreground">Zuletzt aktualisiert: Juni 2026</p>
            </Section>
            <Section number="8" title="Kontakt">
              <p>Wenn Sie Fragen zur Verwendung von Cookies oder zu dieser Richtlinie haben, kontaktieren Sie uns bitte:</p>
              <ContactBlock />
            </Section>
          </div>
          <div className="mt-8">
            <ContactBanner />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function LegalPage() {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");

  if (slug === "versand") return <VersandPage />;
  if (slug === "rueckgabe") return <RueckgabePage />;
  if (slug === "zahlungsbedingungen") return <ZahlungsbedingungenPage />;
  if (slug === "agb") return <AgbPage />;
  if (slug === "datenschutz") return <DatenschutzPage />;
  if (slug === "general-terms") return <GeneralTermsPage />;
  if (slug === "vat-duties") return <VatDutiesPage />;
  if (slug === "cookie-policy") return <CookiePolicyPage />;

  const page = legalContent[slug];

  if (!page) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading font-bold text-2xl">Seite nicht gefunden</h1>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading font-bold text-3xl tracking-tight mb-8">{page.title}</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            {renderTextContent(page.content)}
          </div>
          <ContactBanner />
        </motion.div>
      </div>
    </div>
  );
}
