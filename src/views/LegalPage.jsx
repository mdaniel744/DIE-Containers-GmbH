"use client";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, CheckCircle, Truck, Shield, CreditCard, Lock, FileText, Building, AlertTriangle } from "lucide-react";
import ContactBanner from "@/components/shared/ContactBanner";

const BRAND_BLUE = "#46C54B";
const NAVY = "#176B20";

const legalContent = {
  impressum: {
    title: "Impressum",
    content: "**Angaben gemäß § 5 TMG:**\n\nDie Container GmbH\nHermann-Oberth-Str 23\n85640 Putzbrunn\nDeutschland\n\n**Kontakt:**\nTel.: 015901014410\nE-Mail: contact@containers.com\n\n**Registereintrag:**\nRegistergericht: Amtsgericht München\nRegisternummer: HRB 256757\n\n**Vertreten durch:**\nGeschäftsführer: Julian Hallal\n\n**Umsatzsteuer-Identifikationsnummer:**\nDE330443785",
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
        <p key={i} className="mb-4 text-base leading-8">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={i} className="mb-4 list-disc space-y-2 pl-5 text-base leading-7">
          {block.split("\n").map((item, j) => (
            <li key={j}>{item.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="mb-4 text-base leading-8">{block}</p>;
  });
}

function Section({ number, title, children }) {
  return (
    <div className="mb-6 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm sm:p-7">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white font-heading" style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }}>
          {number}
        </span>
        <h2 className="font-heading text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3 text-base leading-7 text-muted-foreground sm:pl-10">
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
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }} />
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
      <div className="p-1" style={{ background: `linear-gradient(135deg, ${NAVY}, #0B3D13)` }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch">
          <a href="mailto:contact@diecontainers.com"
            className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-4">
            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
            <div className="min-w-0">
              <p className="text-xs text-white/60 font-mono uppercase tracking-wide">E-Mail</p>
              <p className="text-sm font-semibold text-white leading-tight break-all">contact@diecontainers.com</p>
            </div>
          </a>
          <a href="https://wa.me/4989277808979" target="_blank" rel="noopener noreferrer"
            className="flex items-start gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-4">
            <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
            <div className="min-w-0">
              <p className="text-xs text-white/60 font-mono uppercase tracking-wide">WhatsApp</p>
              <p className="text-sm font-semibold text-white leading-tight">+49 (0) 89 277 808 979</p>
            </div>
          </a>
          <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-4">
            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Zahlungsbedingungen & Zahlungsrichtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bei DIE Container GmbH legen wir großen Wert auf transparente, sichere und nachvollziehbare Zahlungsprozesse – ohne versteckte Gebühren oder zwischengeschaltete Zahlungsdienstleister.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Verfügbare Zahlungsmethoden">
              <div className="bg-muted/50 rounded-xl px-4 py-4 flex items-start gap-3">
                <Building className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
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
              <div className="mt-3 flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-blue-700" aria-hidden="true" />
                <p className="text-xs text-blue-800"><strong>Wichtiger Hinweis:</strong> Zahlungen sind ausschließlich auf das offizielle Firmenkonto von DIE Container GmbH zu leisten, das Ihnen im Rechnungsdokument mitgeteilt wird.</p>
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
              <div className="mt-3 flex items-start gap-2 bg-muted/50 rounded-xl px-4 py-3">
                <FileText className="w-4 h-4 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Rechnung & Beleg:</strong> Nach Zahlungseingang erhalten Sie die Rechnung im Originalformat per E-Mail. Auf Wunsch stellen wir Ihnen zusätzlich einen Zahlungsbeleg als PDF mit Stempel und Unterschrift für Ihre Buchhaltung zur Verfügung.</p>
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
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
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
                "Alle Preise sind in Euro (\u20AC) angegeben und beinhalten – sofern nicht anders angegeben – die gesetzliche Mehrwertsteuer (derzeit 19 %).",
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
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 14 Tagen ab Erhalt der Ware.",
                "Zusätzlich bieten wir freiwillig eine verlängerte Rückgabemöglichkeit von 30 Tagen für neue Container an (siehe unsere Rückgabe- und Erstattungsrichtlinie).",
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
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

            <Section number="5" title="Meta Pixel">
              <p>Nach Ihrer ausdrücklichen Einwilligung verwenden wir auf dieser Website das Meta Pixel von Meta Platforms Ireland Limited. Das Pixel hilft uns, Seitenaufrufe zu messen, die Wirksamkeit unserer Werbung auf Facebook und Instagram auszuwerten und Zielgruppen für relevante Werbung zu bilden.</p>
              <p className="mt-2">Dabei können Meta und wir Informationen über Ihren Besuch verarbeiten, darunter aufgerufene Seiten, Browser- und Geräteinformationen, IP-Adresse sowie über Cookies erzeugte Kennungen. Eine Datenübermittlung in Drittländer, insbesondere die USA, kann nicht ausgeschlossen werden. Rechtsgrundlage ist ausschließlich Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>
              <p className="mt-2">Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ im Footer widerrufen. Weitere Informationen finden Sie in der <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Datenschutzrichtlinie von Meta</a>.</p>
            </Section>

            <Section number="6" title="Ihr Einverständnis">
              <p>Durch die Nutzung dieser Website und der auf unserer Website verfügbaren Dienste erklären Sie sich mit der Erfassung und Verwendung Ihrer Daten wie oben beschrieben einverstanden. Wenn wir uns entscheiden, unsere Datenschutzpolitik zu ändern, werden wir die Änderungen auf dieser Seite veröffentlichen, damit Sie immer über unsere Politik informiert sind.</p>
              <p className="mt-2">Vielen Dank für Ihren Besuch bei der DIE Container GmbH. Sollten Sie Fragen zu diesen Richtlinien haben, können Sie uns gerne kontaktieren.</p>
            </Section>

            <Section number="7" title="Kontaktieren Sie uns">
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rückgabe & Erstattung</span>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }}>
                  Reklamation einreichen <span aria-hidden="true">&rarr;</span>
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
  const deliveryFactors = [
    "Lieferadresse und Region",
    "Containertyp und Containergröße",
    "Gewählter Transportweg",
    "Geografische, logistische oder klimatische Bedingungen",
  ];

  const costDetails = [
    "Versandkosten sind nicht im Produktpreis enthalten.",
    "Alle Transportkosten werden für den konkreten Auftrag individuell berechnet.",
    "Die endgültigen Versandkosten werden im Angebot und auf der Rechnung ausgewiesen.",
    "Der Versand wird erst nach Ihrer Bestätigung der Transportkosten beauftragt.",
  ];

  const deliverySteps = [
    {
      title: "Lieferadresse prüfen",
      description: "Wir prüfen die Adresse, Zufahrt und individuellen Anforderungen am Lieferort.",
    },
    {
      title: "Transportlösung auswählen",
      description: "Wir ermitteln eine passende, wirtschaftliche Route und die benötigte Technik.",
    },
    {
      title: "Termin abstimmen",
      description: "Der Liefertermin wird vor der Anfahrt verbindlich mit Ihnen koordiniert.",
    },
    {
      title: "Container anliefern",
      description: "Der Container wird an die vereinbarte Lieferadresse transportiert.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white pb-20 pt-20 lg:pt-24">
      <section className="relative bg-[#46C54B] py-16 text-white sm:py-20 lg:py-28">
        <div className="absolute inset-0 blueprint-line opacity-[0.035]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              Lieferung & Versand
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Ihre Containerlieferung klar geplant.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Hier finden Sie alle wichtigen Informationen zu Liefergebiet, Lieferzeiten, Transportkosten und dem Ablauf Ihrer Containerlieferung.
            </p>
            <Link
              to="/angebot"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-bold text-[#176B20] transition-transform hover:-translate-y-0.5"
            >
              Transportangebot anfordern
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="overflow-hidden rounded-[2rem] border-4 border-white/75 bg-white shadow-[0_28px_70px_-34px_rgba(13,42,18,0.55)]"
          >
            <img
              src="/images/shipping/container-truck-delivery.webp"
              alt="LKW mit blauem Seecontainer auf dem Weg zum Lieferort"
              className="h-[340px] w-full object-cover sm:h-[430px] lg:h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { value: "Deutschland", label: "Liefergebiet ohne Inseln" },
            { value: "3–9 Werktage", label: "übliche Lieferzeit nach Auftragsannahme" },
            { value: "Individuell", label: "berechnete Transportkosten" },
          ].map((fact, index) => (
            <motion.div
              key={fact.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[#CDEBCD] bg-[#F4FBF4] p-6"
            >
              <p className="font-heading text-xl font-bold text-[#176B20] lg:text-2xl">{fact.value}</p>
              <p className="mt-1 text-sm leading-6 text-[#34533A]">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[#DDF4DF] p-7 sm:p-9 lg:p-10"
          >
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#23832B]">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">01 · Liefergebiet</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0D2A12] sm:text-4xl">
              Deutschlandweite Lieferung
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#34533A]">
              <p>Wir liefern ausschließlich innerhalb Deutschlands. Lieferungen auf deutsche Inseln sind derzeit leider nicht möglich.</p>
              <p>Die Anlieferung erfolgt grundsätzlich bis zur Bordsteinkante an der von Ihnen angegebenen Lieferadresse.</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-[#CDEBCD] bg-white p-7 sm:p-9 lg:p-10"
          >
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46C54B] text-white">
              <Truck className="h-6 w-6" />
            </div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">02 · Lieferzeiten</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0D2A12] sm:text-4xl">
              Üblicherweise 3–9 Werktage
            </h2>
            <p className="mt-5 text-base leading-8 text-[#34533A]">
              Die Standardlieferzeit beträgt 3–9 Werktage nach Auftragsannahme. Die tatsächliche Lieferzeit kann von folgenden Faktoren abhängen:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {deliveryFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-3 rounded-2xl bg-[#F4FBF4] p-4 text-sm leading-6 text-[#34533A]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#23832B]" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="bg-[#DDF4DF] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">03 · Kosten</p>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0D2A12] sm:text-5xl lg:text-6xl">
              Transportkosten werden individuell berechnet.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#34533A] sm:text-lg">
              Entfernung, Containergröße, Stückzahl und Entladeart beeinflussen den Aufwand. Deshalb nennen wir die endgültigen Kosten erst nach Prüfung des konkreten Lieferauftrags.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_-38px_rgba(13,42,18,0.5)] sm:p-9"
          >
            <ul className="space-y-4">
              {costDetails.map((detail) => (
                <li key={detail} className="flex items-start gap-4 text-base leading-7 text-[#34533A]">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#46C54B] text-white">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">04 · Lieferablauf</p>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0D2A12] sm:text-5xl lg:text-6xl">
              Vier klare Schritte bis zum Lieferort.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[1.75rem] border border-[#CDEBCD] bg-[#F4FBF4] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#46C54B] font-heading text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#0D2A12]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#34533A]">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#46C54B] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-7 sm:p-9"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">05 · Kombinierte Transportlösungen</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Wenn eine Strecke mehr als einen Verkehrsträger braucht.</h2>
            <p className="mt-5 text-base leading-8 text-[#34533A]">
              Für komplexere Routen können verschiedene Transportarten kombiniert werden.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Bahn + LKW", "Binnenschiff + LKW"].map((route) => (
                <div key={route} className="rounded-2xl bg-[#DDF4DF] px-5 py-4 font-heading font-bold text-[#176B20]">
                  {route}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] bg-white p-7 sm:p-9"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#23832B]">06 · Ihre Vorbereitung</p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-[-0.03em] sm:text-4xl">Was wir vor der Lieferung von Ihnen benötigen.</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Eine korrekte und vollständige Lieferadresse",
                "Ausreichende Zugänglichkeit zum vorgesehenen Lieferort",
                "Frühzeitige Hinweise zu Zufahrtsbeschränkungen, Bodenverhältnissen oder besonderen Gegebenheiten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#34533A]">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#23832B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactBanner />
        </div>
      </section>
    </div>
  );
}

function GeneralTermsPage() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
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
                "Alle Preise sind in Euro (\u20AC) angegeben und beinhalten – sofern nicht anders angegeben – die gesetzliche Mehrwertsteuer (derzeit 19 %).",
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
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 14 Tagen ab Erhalt der Ware.",
                "Zusätzlich bieten wir freiwillig eine verlängerte Rückgabemöglichkeit von 30 Tagen für neue Container an.",
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
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
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                <p className="text-xs text-blue-800"><strong>Hinweis:</strong> Bitte kontaktieren Sie uns vor der Bestellung, damit wir die Voraussetzungen prüfen und die steuerfreie Lieferung korrekt dokumentieren können.</p>
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Rechtliches</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Cookie-Richtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Cookie-Richtlinie erläutert, wie <strong className="text-foreground">DIE Container GmbH</strong> (Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland) Cookies und ähnliche Tracking-Technologien einsetzt, wenn Sie unsere Website diecontainers.com besuchen. Nicht notwendige Technologien werden erst nach Ihrer ausdrücklichen Einwilligung aktiviert.
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
                  { type: "Analyse- / Performance-Cookies", desc: "Diese Cookies erfassen anonyme Informationen darüber, wie Besucher unsere Website nutzen, z. B. welche Seiten am häufigsten aufgerufen werden. So können wir die Leistung und Benutzerfreundlichkeit der Website verbessern.", color: "bg-blue-50 border-blue-200", text: "text-blue-800" },
                  { type: "Marketing-Cookies", desc: "Nach Ihrer Einwilligung verwenden wir das Meta Pixel, um Seitenaufrufe zu messen, die Wirksamkeit unserer Werbung auf Facebook und Instagram auszuwerten und relevante Zielgruppen zu bilden. Ohne Ihre Einwilligung wird das Meta Pixel nicht geladen.", color: "bg-rose-50 border-rose-200", text: "text-rose-800" },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl border px-4 py-4 ${item.color}`}>
                    <p className={`font-heading font-semibold text-sm mb-1 ${item.text}`}>{item.type}</p>
                    <p className={`text-xs leading-relaxed ${item.text} opacity-80`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section number="3" title="Cookies von Drittanbietern">
              <p>Bei erteilter Einwilligung laden wir das Meta Pixel (Pixel-ID 1324522606105588) von Meta Platforms Ireland Limited. Meta kann dabei Cookies oder vergleichbare Kennungen verwenden und Informationen zu Ihrem Besuch verarbeiten. Weitere Informationen finden Sie in der <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Datenschutzrichtlinie von Meta</a>.</p>
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
                "Einwilligung: Beim ersten Besuch unserer Website wird ein Cookie-Einwilligungsbanner angezeigt. Nicht notwendige Technologien werden nur nach Ihrer Zustimmung aktiviert.",
                "Widerruf: Über den Link „Cookie-Einstellungen“ im Footer können Sie Ihre Auswahl jederzeit ändern oder eine erteilte Einwilligung widerrufen.",
              ]} />
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                <p className="text-xs text-blue-800"><strong>Bitte beachten:</strong> Das Deaktivieren bestimmter Cookies kann die Funktionalität unserer Website beeinträchtigen und den Zugang zu einigen Funktionen einschränken.</p>
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
              <p className="mt-2 text-xs text-muted-foreground">Zuletzt aktualisiert: Juli 2026</p>
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
    <div className="dc-page">
      <div className="dc-reading-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="dc-page-hero">
            <span className="dc-kicker">Rechtliches</span>
            <h1 className="dc-page-title">{page.title}</h1>
          </div>
          <div className="dc-panel p-6 text-muted-foreground sm:p-9">
            {renderTextContent(page.content)}
          </div>
          <ContactBanner />
        </motion.div>
      </div>
    </div>
  );
}

