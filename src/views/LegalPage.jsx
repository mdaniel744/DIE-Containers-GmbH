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
    content: "**Angaben gemÃ¤ÃŸ Â§ 5 TMG:**\n\nDIE Container GmbH\nHermann-Oberth-Str. 23\n85640 Putzbrunn\nDeutschland\n\n**Kontakt:**\nTelefon: 0049 163 5393 159\nE-Mail: contact@diecontainers.com\n\n**Handelsregister / EUID:**\nHRB256757\n\n**Umsatzsteuer-ID:**\nUmsatzsteuer-Identifikationsnummer gemÃ¤ÃŸ Â§ 27a Umsatzsteuergesetz:\nDE 330443785\n\n**Verantwortlich fÃ¼r den Inhalt nach Â§ 55 Abs. 2 RStV:**\nDIE Container GmbH\nHermann-Oberth-Str. 23\n85640 Putzbrunn\nDeutschland",
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: "**Cookie-Richtlinie**\n\nDiese Website verwendet Cookies, um Ihnen die bestmÃ¶gliche Erfahrung zu bieten.\n\n**Was sind Cookies?**\nCookies sind kleine Textdateien, die auf Ihrem EndgerÃ¤t gespeichert werden.\n\n**Welche Cookies verwenden wir?**\n- Notwendige Cookies: FÃ¼r die grundlegende Funktion der Website\n- Funktionale Cookies: FÃ¼r erweiterte Funktionen und Personalisierung\n- Analytische Cookies: Zur Analyse der Websitenutzung\n\n**Ihre Einstellungen**\nSie kÃ¶nnen Cookies jederzeit in Ihren Browser-Einstellungen deaktivieren.",
  },
  widerrufsrecht: {
    title: "Widerrufsrecht",
    content: "**Widerrufsbelehrung**\n\n**Widerrufsrecht**\nSie haben das Recht, binnen vierzehn Tagen ohne Angabe von GrÃ¼nden diesen Vertrag zu widerrufen. Die Widerrufsfrist betrÃ¤gt vierzehn Tage ab dem Tag des Vertragsabschlusses.\n\n**Folgen des Widerrufs**\nWenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzÃ¼glich und spÃ¤testens binnen vierzehn Tagen zurÃ¼ckzuzahlen.\n\nBitte beachten Sie, dass das Widerrufsrecht bei individuell angefertigten oder maÃŸgeschneiderten Containern ausgeschlossen sein kann.",
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
    ["See- & Binnenschifffahrt (Barge)", "Containertransport per Binnenschiff oder Flussbarke", "20 ft, 40 ft", "Ãœber schiffbare BinnenwasserstraÃŸen"],
    ["Schienentransport (Bahn)", "Containertransport per GÃ¼terzug, Depot-zu-Depot", "20 ft, 40 ft", "AbhÃ¤ngig von Bahnterminals"],
    ["StraÃŸentransport (LKW)", "Lieferung per Flatbed- oder Sattelzug", "2 Ã— 20 ft oder 1 Ã— 40 ft", "Europaweite Lieferung"],
    ["Kran-LKW", "LKW mit integriertem Kran fÃ¼r Be- und Entladung", "2 Ã— 20 ft oder 1 Ã— 40 ft", "Transport & Entladung europaweit"],
    ["Mobiler Kran", "Separater Mobilkran zur Containerentladung", "Alle ContainergrÃ¶ÃŸen", "FÃ¼r schwierige StellplÃ¤tze"],
    ["Gabelstapler (inkl. Fahrer)", "Entladung vom Flatbed per Gabelstapler", "Alle geeigneten Container", "Europaweit verfÃ¼gbar"],
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-border mt-3">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border" style={{ backgroundColor: NAVY }}>
            {["Transport- / Umschlagsart", "Beschreibung", "ContainergrÃ¶ÃŸen", "Einsatzgebiet"].map(h => (
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
              Bei DIE Container GmbH legen wir groÃŸen Wert auf transparente, sichere und nachvollziehbare Zahlungsprozesse â€“ ohne versteckte GebÃ¼hren oder zwischengeschaltete Zahlungsdienstleister.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="VerfÃ¼gbare Zahlungsmethoden">
              <div className="bg-muted/50 rounded-xl px-4 py-4 flex items-start gap-3">
                <Building className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm mb-1">BankÃ¼berweisung (SEPA â€“ Vorkasse)</p>
                  <p>Die Zahlung erfolgt per SEPA-BankÃ¼berweisung auf unser offizielles GeschÃ¤ftskonto.</p>
                </div>
              </div>
              <p className="mt-3 font-medium text-foreground">So funktioniert der Zahlungsablauf:</p>
              <NumberedList items={[
                "Sie erhalten von uns ein detailliertes Angebot oder eine Proforma-Rechnung",
                "Nach Ihrer BestÃ¤tigung zur Fortsetzung der Bestellung erhalten Sie die Rechnung mit unseren Bankdaten",
                "Die Zahlung ist sofort und ohne Abzug fÃ¤llig",
                "Nach Zahlungseingang wird der Container fÃ¼r die Lieferung freigegeben",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>âš ï¸ Wichtiger Hinweis:</strong> Zahlungen sind ausschlieÃŸlich auf das offizielle Firmenkonto von DIE Container GmbH zu leisten, das Ihnen im Rechnungsdokument mitgeteilt wird.</p>
              </div>
            </Section>

            <Section number="2" title="Zahlungsprozess">
              <p>Der Zahlungsprozess ist klar strukturiert und erfolgt in folgenden Schritten:</p>
              <NumberedList items={[
                "Bestellung oder Anfrage Ã¼ber unsere Website",
                "Zusendung eines detaillierten Angebots inklusive aller relevanten Informationen",
                "BestÃ¤tigung des Angebots durch den Kunden",
                "Ausstellung der Rechnung mit Bankverbindung",
                "Zahlung per SEPA-Ãœberweisung",
                "Versand bzw. Disposition des Containers erst nach Zahlungseingang",
                "Organisation der Lieferung",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">ðŸ“„ Rechnung & Beleg:</strong> Nach Zahlungseingang erhalten Sie die Rechnung im Originalformat per E-Mail. Auf Wunsch stellen wir Ihnen zusÃ¤tzlich einen Zahlungsbeleg als PDF mit Stempel und Unterschrift fÃ¼r Ihre Buchhaltung zur VerfÃ¼gung.</p>
              </div>
            </Section>

            <Section number="3" title="Zahlungsfreigabe & Versand">
              <BulletList items={[
                "Container werden ausschlieÃŸlich nach vollstÃ¤ndigem Zahlungseingang versendet",
                "Der Zahlungseingang muss auf unserem Firmenkonto gutgeschrieben sein",
                "Eine Reservierung oder Lieferung vor Zahlungseingang ist ausgeschlossen",
              ]} />
              <p className="mt-2">Dies dient der Absicherung beider Parteien und gewÃ¤hrleistet eine reibungslose Abwicklung.</p>
            </Section>

            <Section number="4" title="Sicherheit & Vertraulichkeit">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { icon: Lock, text: "Wir arbeiten ohne externe Zahlungsdienstleister" },
                  { icon: Shield, text: "Ihre Bankdaten verbleiben vollstÃ¤ndig bei Ihnen" },
                  { icon: CreditCard, text: "Zahlungen erfolgen auf unser intern verwaltetes GeschÃ¤ftskonto" },
                  { icon: FileText, text: "Alle Daten werden gemÃ¤ÃŸ Datenschutzbestimmungen verarbeitet" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3 bg-muted/50 rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="5" title="UnterstÃ¼tzung & Kontakt">
              <p>Bei Fragen zu Zahlungen, Rechnungen oder ZahlungsbestÃ¤tigungen erreichen Sie uns jederzeit:</p>
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
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Allgemeine GeschÃ¤ftsbedingungen (AGB)</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Allgemeinen GeschÃ¤ftsbedingungen gelten fÃ¼r alle VertrÃ¤ge zwischen DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland und ihren Kunden fÃ¼r den Verkauf von neuen und gebrauchten Containern einschlieÃŸlich Lieferung und optionaler Dienstleistungen. Mit der Bestellung erklÃ¤rt der Kunde sein EinverstÃ¤ndnis mit diesen Bedingungen.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Vertragsabschluss">
              <BulletList items={[
                "Alle Angebote auf unserer Website oder per E-Mail sind freibleibend und unverbindlich.",
                "Ein verbindlicher Kaufvertrag kommt erst durch unsere schriftliche AuftragsbestÃ¤tigung oder durch Lieferung der Ware zustande.",
                "Ã„nderungen oder SonderwÃ¼nsche bedÃ¼rfen der schriftlichen Zustimmung von DIE Container GmbH.",
              ]} />
            </Section>

            <Section number="2" title="Preise & Zahlung">
              <BulletList items={[
                "Alle Preise sind in Euro (â‚¬) angegeben und beinhalten â€“ sofern nicht anders angegeben â€“ die gesetzliche Mehrwertsteuer (derzeit 19 %).",
                "Lieferkosten variieren je nach Bestellmenge und Lieferadresse innerhalb Deutschlands.",
                "Die Zahlung erfolgt ausschlieÃŸlich per Vorkasse (100 %) via BankÃ¼berweisung.",
                "Die Lieferung erfolgt erst nach vollstÃ¤ndigem Zahlungseingang.",
              ]} />
            </Section>

            <Section number="3" title="Lieferung & Versand">
              <BulletList items={[
                "Die Lieferung erfolgt an die vom Kunden angegebene Adresse innerhalb Deutschlands.",
                "Lieferzeit: in der Regel 7â€“14 Werktage nach Zahlungseingang.",
                "Die Entladung per Kran oder Gabelstapler ist im Lieferpreis enthalten.",
                "Der Kunde muss sicherstellen, dass die Lieferadresse ebenerdig zugÃ¤nglich ist und ausreichend Platz zum Entladen vorhanden ist.",
                "Bei Annahmeverweigerung oder gescheiterter Lieferung behalten wir uns vor, Kosten fÃ¼r RÃ¼cktransport und Wiedereinlagerung in Rechnung zu stellen.",
              ]} />
            </Section>

            <Section number="4" title="Eigentumsvorbehalt">
              <BulletList items={[
                "Die gelieferte Ware bleibt bis zur vollstÃ¤ndigen Zahlung Eigentum von DIE Container GmbH.",
                "Bei Zahlungsverzug behalten wir uns das Recht vor, die Ware auf Kosten des KÃ¤ufers zurÃ¼ckzufordern.",
              ]} />
            </Section>

            <Section number="5" title="Widerrufsrecht & RÃ¼ckgabe">
              <BulletList items={[
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 14 Tagen ab Erhalt der Ware.",
                "ZusÃ¤tzlich bieten wir freiwillig eine verlÃ¤ngerte RÃ¼ckgabemÃ¶glichkeit von 30 Tagen fÃ¼r neue Container an (siehe unsere RÃ¼ckgabe- und Erstattungsrichtlinie).",
                "Gebrauchte Container sind vom RÃ¼ckgaberecht ausgenommen, sofern kein nachweisbarer Mangel vorliegt.",
                "RÃ¼ckgaben mÃ¼ssen vorab mit uns abgestimmt werden. Wir organisieren die Abholung â€“ der KÃ¤ufer trÃ¤gt die RÃ¼cksendekosten (auÃŸer bei mangelhafter Ware).",
              ]} />
            </Section>

            <Section number="6" title="GewÃ¤hrleistung & Garantie">
              <p>Es gelten die gesetzlichen GewÃ¤hrleistungsrechte fÃ¼r Verbraucher. ZusÃ¤tzlich bieten wir:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {[
                  { label: "Neue Container", desc: "24 Monate Garantie" },
                  { label: "Gebrauchte Container", desc: "90 Tage Garantie (geprÃ¼ft)" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <BulletList items={[
                "MÃ¤ngel mÃ¼ssen bei Erhalt unverzÃ¼glich schriftlich gemeldet werden.",
                "SchÃ¤den durch unsachgemÃ¤ÃŸen Gebrauch oder unerlaubte Umbauten sind von der Garantie ausgeschlossen.",
              ]} />
            </Section>

            <Section number="7" title="Haftung">
              <BulletList items={[
                "Wir haften nur bei Vorsatz oder grober FahrlÃ¤ssigkeit.",
                "Bei leichter FahrlÃ¤ssigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.",
                "Haftung fÃ¼r entgangenen Gewinn, Produktionsausfall oder mittelbare SchÃ¤den ist ausgeschlossen.",
              ]} />
            </Section>

            <Section number="8" title="Datenschutz">
              <p>Es gilt unsere DatenschutzerklÃ¤rung. Kundendaten werden ausschlieÃŸlich zur Vertragsabwicklung verwendet und nicht an Dritte weitergegeben â€“ es sei denn, dies ist fÃ¼r die Lieferung erforderlich oder gesetzlich vorgeschrieben.</p>
            </Section>

            <Section number="9" title="Urheberrecht & geistiges Eigentum">
              <p>Alle Inhalte dieser Website (Texte, Bilder, Logos, Dokumente) sind urheberrechtlich geschÃ¼tzt. Eine Nutzung ohne ausdrÃ¼ckliche schriftliche Genehmigung ist untersagt.</p>
            </Section>

            <Section number="10" title="Schlussbestimmungen">
              <BulletList items={[
                "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
                "Gerichtsstand ist MÃ¶nchengladbach, sofern der Kunde Kaufmann im Sinne des HGB ist.",
                "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der Ã¼brigen Bestimmungen unberÃ¼hrt.",
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
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">DatenschutzerklÃ¤rung</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Wir bei DIE Container GmbH verstehen, dass einige Ihrer persÃ¶nlichen Daten sensibler Natur sind und Sie vielleicht Bedenken haben, diese persÃ¶nlichen Daten mit uns zu teilen. Wenn Sie sich jedoch dafÃ¼r entscheiden, mit uns zu interagieren oder uns Ihre Daten mitzuteilen, werden wir Ihre PrivatsphÃ¤re auf die in dieser Richtlinie aufgefÃ¼hrte Weise schÃ¼tzen. Diese Richtlinie kann sich von Zeit zu Zeit Ã¤ndern, daher sollten Sie sich Ã¼ber Ã„nderungen informieren.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="Die von uns gesammelten Informationen">
              <p>Wenn Sie Informationen von DIE Container GmbH anfordern, benÃ¶tigen wir hÃ¤ufig Informationen wie den Namen Ihres Unternehmens, die Namen der autorisierten Benutzer Ihres Unternehmens, Ihre Adresse, Telefonnummer, Faxnummer und E-Mail-Adresse. Derzeit benÃ¶tigen wir Ihre Postanschrift.</p>
              <p className="mt-2">Wir sammeln diese Informationen auf der Ebene der Angebotsanfrage, damit wir Ihnen ein formelles Angebot unterbreiten kÃ¶nnen, das Sie fÃ¼r Ihre Kaufentscheidung nutzen kÃ¶nnen. In der Regel sind nicht alle diese Informationen erforderlich. Die einzigen erforderlichen Informationen sind in der Regel die E-Mail-Adresse und der Ort oder die Postleitzahl der Lieferung.</p>
            </Section>

            <Section number="2" title="Wie wir Informationen weitergeben">
              <p>Wir sind stets bemÃ¼ht, Ihnen ein wertvolles Online-Erlebnis und die besten Preise und die beste QualitÃ¤t beim Kauf, der Miete und dem Leasing von mobilen Lager- und Versandcontainern zu bieten.</p>
              <p className="mt-2">Wir behalten uns das Recht vor, Informationen innerhalb von DIE Container GmbH weiterzugeben, soweit dies fÃ¼r die Bearbeitung Ihrer Anfrage und die Erbringung unserer Leistungen erforderlich ist.</p>
              <p className="mt-2">Wir behalten uns das Recht vor, Informationen Ã¼ber jeden Besucher oder jedes Mitglied freizugeben, wenn dieser gegen die Nutzungsbedingungen verstÃ¶ÃŸt oder an illegalen AktivitÃ¤ten teilnimmt, auch ohne eine Vorladung, einen Haftbefehl oder einen anderen Gerichtsbeschluss. Wir kooperieren mit den StrafverfolgungsbehÃ¶rden bei der Identifizierung von Personen, die unsere Server oder Dienste fÃ¼r illegale AktivitÃ¤ten nutzen kÃ¶nnten.</p>
            </Section>

            <Section number="3" title="Empfangene E-Mail">
              <p>DIE Container GmbH wird sich mit Ihnen per E-Mail in Verbindung setzen, wenn Sie sich registrieren und um auf Fragen zu antworten, die Sie uns per E-Mail schicken. Wenn Sie ein bestehender Kunde oder ein registrierter Benutzer sind, senden wir Ihnen auch E-Mail-Nachrichten mit Informationen, von denen wir glauben, dass sie fÃ¼r Sie nÃ¼tzlich sind, einschlieÃŸlich AnkÃ¼ndigungen Ã¼ber neue Produkte und Dienstleistungen. Wir verwenden Ihre E-Mail-Adresse in der vorgenannten Weise, bis Sie sich ausdrÃ¼cklich abmelden.</p>
            </Section>

            <Section number="4" title="Vom System generierte E-Mail">
              <p>Wenn Sie sich entscheiden, unsere Website zu nutzen, um ein Angebot oder andere Informationen anzufordern, erhalten Sie von uns BestÃ¤tigungs-E-Mails. Systemgenerierte E-Mails wie diese betrachten wir als angefordert und fallen nicht unter unsere Opt-out-Option.</p>
            </Section>

            <Section number="5" title="Ihr EinverstÃ¤ndnis">
              <p>Durch die Nutzung dieser Website und der auf unserer Website verfÃ¼gbaren Dienste erklÃ¤ren Sie sich mit der Erfassung und Verwendung Ihrer Daten wie oben beschrieben einverstanden. Wenn wir uns entscheiden, unsere Datenschutzpolitik zu Ã¤ndern, werden wir die Ã„nderungen auf dieser Seite verÃ¶ffentlichen, damit Sie immer Ã¼ber unsere Politik informiert sind.</p>
              <p className="mt-2">Vielen Dank fÃ¼r Ihren Besuch bei der DIE Container GmbH. Sollten Sie Fragen zu diesen Richtlinien haben, kÃ¶nnen Sie uns gerne kontaktieren.</p>
            </Section>

            <Section number="6" title="Kontaktieren Sie uns">
              <p>Haben Sie Fragen dazu, wie wir Ihrem Unternehmen helfen kÃ¶nnen? Senden Sie uns eine E-Mail, und wir melden uns in KÃ¼rze bei Ihnen.</p>
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
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>RÃ¼ckgabe & Erstattung</span>
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">RÃ¼ckgabe- und Erstattungsrichtlinie</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alle Informationen zu RÃ¼ckgaberecht, Reklamationen, Erstattungsverfahren und Ausnahmen beim Kauf von Containern Ã¼ber unseren Online-Shop.
            </p>
          </div>

          <div className="divide-y divide-border">
            <Section number="1" title="RÃ¼ckgaberecht fÃ¼r Verbraucher">
              <p>Verbraucher haben gemÃ¤ÃŸ den gesetzlichen Bestimmungen grundsÃ¤tzlich das Recht, innerhalb von <strong className="text-foreground">14 Tagen nach Erhalt der Ware</strong> den Vertrag zu widerrufen.</p>
              <p className="mt-2">Weitere Informationen hierzu finden Sie in unserer <strong className="text-foreground">Widerrufsbelehrung</strong>.</p>
            </Section>

            <Section number="2" title="Bedingungen fÃ¼r RÃ¼ckgaben">
              <p>Damit eine RÃ¼ckgabe akzeptiert werden kann, mÃ¼ssen folgende Voraussetzungen erfÃ¼llt sein:</p>
              <BulletList items={[
                "Der Container darf nicht dauerhaft genutzt oder verÃ¤ndert worden sein",
                "Der Container muss sich im gleichen Zustand befinden, in dem er geliefert wurde",
                "Alle zugehÃ¶rigen Dokumente mÃ¼ssen vorhanden sein",
              ]} />
              <p className="mt-3">Der KÃ¤ufer trÃ¤gt grundsÃ¤tzlich die Kosten der RÃ¼cksendung, sofern nichts anderes vereinbart wurde. Aufgrund der GrÃ¶ÃŸe und des Gewichts von Containern erfolgt eine RÃ¼cksendung in der Regel Ã¼ber eine <strong className="text-foreground">individuell organisierte TransportlÃ¶sung</strong>.</p>
            </Section>

            <Section number="3" title="Ausschluss der RÃ¼ckgabe">
              <p>Das RÃ¼ckgaberecht besteht <strong className="text-foreground">nicht</strong> bei:</p>
              <BulletList items={[
                "Individuell angefertigten Containern",
                "Containern, die nach Kundenspezifikation modifiziert wurden",
                "Bereits genutzten oder verÃ¤nderten Containern",
                "Containern mit beschÃ¤digten oder fehlenden Dokumenten",
              ]} />
            </Section>

            <Section number="4" title="Reklamationen & MÃ¤ngel">
              <p>Sollte der gelieferte Container nicht der vereinbarten Beschreibung entsprechen oder MÃ¤ngel aufweisen, gehen Sie bitte wie folgt vor:</p>
              <NumberedList items={[
                "MÃ¤ngel innerhalb von 7 Tagen nach Lieferung schriftlich melden",
                "MÃ¤ngel mit Fotos und einer detaillierten Beschreibung dokumentieren",
                "Reklamation per E-Mail oder WhatsApp an uns senden",
                "Wir prÃ¼fen die Reklamation und melden uns innerhalb von 5 Werktagen",
              ]} />
            </Section>

            <Section number="5" title="Erstattungsverfahren">
              <p>Nach Genehmigung einer RÃ¼ckgabe oder Reklamation erfolgt die Erstattung wie folgt:</p>
              <BulletList items={[
                "Erstattung innerhalb von 14 Tagen nach bestÃ¤tigter RÃ¼cknahme",
                "RÃ¼ckzahlung auf das ursprÃ¼nglich verwendete Zahlungsmittel",
                "Bei Teilerstattungen wird der vereinbarte Betrag separat kommuniziert",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Hinweis:</strong> Transportkosten fÃ¼r die RÃ¼cksendung werden in der Regel nicht erstattet, es sei denn, der Mangel ist auf einen Fehler unsererseits zurÃ¼ckzufÃ¼hren.</p>
              </div>
            </Section>

            <Section number="6" title="GewÃ¤hrleistung">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { label: "Neue Container", desc: "Gesetzliche GewÃ¤hrleistungsfrist von 2 Jahren gemÃ¤ÃŸ Â§ 437 BGB" },
                  { label: "Gebrauchte Container", desc: "Verkauf im beschriebenen Zustand; GewÃ¤hrleistung auf 1 Jahr verkÃ¼rzt" },
                  { label: "GeneralÃ¼berholte Container", desc: "12 Monate GewÃ¤hrleistung auf Ã¼berholte Komponenten" },
                  { label: "Individuelle Umbauten", desc: "GewÃ¤hrleistung gemÃ¤ÃŸ individueller Vereinbarung im Angebot" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section number="7" title="Kontakt fÃ¼r RÃ¼ckgaben & Reklamationen">
              <p>FÃ¼r RÃ¼ckgaben, Reklamationen oder Fragen zur Erstattung kontaktieren Sie uns direkt:</p>
              <ContactBlock />
              <div className="mt-4">
                <Link to="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: ORANGE }}>
                  Reklamation einreichen â†’
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
    { icon: CheckCircle, text: "Sichere, zuverlÃ¤ssige Containerlieferung" },
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
              <p>Wir liefern ausschlieÃŸlich innerhalb Deutschlands. Ein Versand auf deutsche Inseln ist leider nicht mÃ¶glich.</p>
              <p>Die Lieferung erfolgt <strong className="text-foreground">bis zur Bordsteinkante</strong> an der angegebenen Lieferadresse.</p>
            </Section>

            <Section number="2" title="Lieferzeiten">
              <div className="bg-muted/50 rounded-xl px-4 py-3 flex items-center gap-3">
                <Truck className="w-5 h-5 flex-shrink-0" style={{ color: ORANGE }} />
                <span><strong className="text-foreground">Standardlieferzeit:</strong> 3â€“9 Werktage nach Auftragsannahme</span>
              </div>
              <p className="mt-2">Lieferzeiten kÃ¶nnen abhÃ¤ngig von folgenden Faktoren variieren:</p>
              <BulletList items={["Lieferadresse und Region", "Containertyp und -grÃ¶ÃŸe", "GewÃ¤hlter Transportweg", "Geografische, logistische oder klimatische Bedingungen"]} />
            </Section>

            <Section number="3" title="Versand- und Transportkosten">
              <BulletList items={[
                "Versandkosten sind nicht pauschal im Produktpreis enthalten",
                "Alle Transportkosten werden individuell berechnet",
                "Die endgÃ¼ltigen Versandkosten werden im Angebot / auf der Rechnung mitgeteilt",
                "Der Versand erfolgt erst nach BestÃ¤tigung der Transportkosten durch den Kunden",
              ]} />
            </Section>

            <Section number="4" title="Ablauf der Lieferung">
              <NumberedList items={[
                "PrÃ¼fung der Lieferadresse und individuellen Anforderungen",
                "Auswahl der schnellsten und wirtschaftlichsten TransportlÃ¶sung",
                "Terminabstimmung mit dem Kunden",
                "Lieferung des Containers an den vereinbarten Standort",
              ]} />
            </Section>

            <Section number="5" title="Transport- und Umschlagsarten">
              <p>AbhÃ¤ngig vom Lieferort und Containertyp wÃ¤hlt unser Logistikteam den optimalen Transportweg:</p>
              <TransportTable />
            </Section>

            <Section number="6" title="Kombinierte TransportlÃ¶sungen">
              <p>Bei komplexeren Routen kÃ¶nnen kombinierte Transportarten eingesetzt werden:</p>
              <BulletList items={["Bahn + LKW", "Binnenschiff + LKW"]} />
            </Section>

            <Section number="7" title="Pflichten des Kunden">
              <BulletList items={[
                "Eine korrekte und vollstÃ¤ndige Lieferadresse anzugeben",
                "FÃ¼r ausreichende ZugÃ¤nglichkeit des Lieferortes zu sorgen",
                "Uns vorab Ã¼ber ZufahrtsbeschrÃ¤nkungen, BodenverhÃ¤ltnisse oder besondere Gegebenheiten zu informieren",
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
              <p>Bei Fragen zur Lieferung oder fÃ¼r ein individuelles Transportangebot kontaktieren Sie uns:</p>
              <ContactBlock />
              <div className="mt-4">
                <Link to="/shop"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: ORANGE }}>
                  Transportangebot anfordern â†’
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
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Allgemeine GeschÃ¤ftsbedingungen (AGB)</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Diese Allgemeinen GeschÃ¤ftsbedingungen gelten fÃ¼r alle VertrÃ¤ge zwischen <strong className="text-foreground">DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland</strong> und ihren Kunden fÃ¼r den Verkauf von neuen und gebrauchten Containern einschlieÃŸlich Lieferung und optionaler Dienstleistungen. Mit der Bestellung erklÃ¤rt der Kunde sein EinverstÃ¤ndnis mit diesen Bedingungen.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Vertragsabschluss">
              <BulletList items={[
                "Alle Angebote auf unserer Website oder per E-Mail sind freibleibend und unverbindlich.",
                "Ein verbindlicher Kaufvertrag kommt erst durch unsere schriftliche AuftragsbestÃ¤tigung oder durch Lieferung der Ware zustande.",
                "Ã„nderungen oder SonderwÃ¼nsche bedÃ¼rfen der schriftlichen Zustimmung von DIE Container GmbH.",
              ]} />
            </Section>
            <Section number="2" title="Preise & Zahlung">
              <BulletList items={[
                "Alle Preise sind in Euro (â‚¬) angegeben und beinhalten â€“ sofern nicht anders angegeben â€“ die gesetzliche Mehrwertsteuer (derzeit 19 %).",
                "Lieferkosten variieren je nach Bestellmenge und Lieferadresse innerhalb Deutschlands.",
                "Die Zahlung erfolgt ausschlieÃŸlich per Vorkasse (100 %) via BankÃ¼berweisung.",
                "Die Lieferung erfolgt erst nach vollstÃ¤ndigem Zahlungseingang.",
              ]} />
            </Section>
            <Section number="3" title="Lieferung & Versand">
              <BulletList items={[
                "Die Lieferung erfolgt an die vom Kunden angegebene Adresse innerhalb Deutschlands.",
                "Lieferzeit: in der Regel 7â€“14 Werktage nach Zahlungseingang.",
                "Die Entladung per Kran oder Gabelstapler ist im Lieferpreis enthalten.",
                "Der Kunde muss sicherstellen, dass die Lieferadresse ebenerdig zugÃ¤nglich ist und ausreichend Platz zum Entladen vorhanden ist.",
                "Bei Annahmeverweigerung oder gescheiterter Lieferung behalten wir uns vor, Kosten fÃ¼r RÃ¼cktransport und Wiedereinlagerung in Rechnung zu stellen.",
              ]} />
            </Section>
            <Section number="4" title="Eigentumsvorbehalt">
              <BulletList items={[
                "Die gelieferte Ware bleibt bis zur vollstÃ¤ndigen Zahlung Eigentum von DIE Container GmbH.",
                "Bei Zahlungsverzug behalten wir uns das Recht vor, die Ware auf Kosten des KÃ¤ufers zurÃ¼ckzufordern.",
              ]} />
            </Section>
            <Section number="5" title="Widerrufsrecht & RÃ¼ckgabe">
              <BulletList items={[
                "Privatkunden (Verbraucher) haben ein gesetzliches Widerrufsrecht von 14 Tagen ab Erhalt der Ware.",
                "ZusÃ¤tzlich bieten wir freiwillig eine verlÃ¤ngerte RÃ¼ckgabemÃ¶glichkeit von 30 Tagen fÃ¼r neue Container an.",
                "Gebrauchte Container sind vom RÃ¼ckgaberecht ausgenommen, sofern kein nachweisbarer Mangel vorliegt.",
                "RÃ¼ckgaben mÃ¼ssen vorab mit uns abgestimmt werden. Wir organisieren die Abholung â€“ der KÃ¤ufer trÃ¤gt die RÃ¼cksendekosten (auÃŸer bei mangelhafter Ware).",
              ]} />
            </Section>
            <Section number="6" title="GewÃ¤hrleistung & Garantie">
              <p>Es gelten die gesetzlichen GewÃ¤hrleistungsrechte fÃ¼r Verbraucher. ZusÃ¤tzlich bieten wir:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {[
                  { label: "Neue Container", desc: "24 Monate Garantie" },
                  { label: "GeprÃ¼fte Gebrauchtcontainer", desc: "90 Tage Garantie" },
                ].map((item, i) => (
                  <div key={i} className="bg-muted/50 rounded-xl px-4 py-3">
                    <p className="font-heading font-semibold text-sm text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <BulletList items={[
                "MÃ¤ngel mÃ¼ssen bei Erhalt unverzÃ¼glich schriftlich gemeldet werden.",
                "SchÃ¤den durch unsachgemÃ¤ÃŸen Gebrauch oder unerlaubte Umbauten sind von der Garantie ausgeschlossen.",
              ]} />
            </Section>
            <Section number="7" title="Haftung">
              <BulletList items={[
                "Wir haften nur bei Vorsatz oder grober FahrlÃ¤ssigkeit.",
                "Bei leichter FahrlÃ¤ssigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.",
                "Haftung fÃ¼r entgangenen Gewinn, Produktionsausfall oder mittelbare SchÃ¤den ist ausgeschlossen.",
              ]} />
            </Section>
            <Section number="8" title="Datenschutz">
              <p>Es gilt unsere DatenschutzerklÃ¤rung. Kundendaten werden ausschlieÃŸlich zur Vertragsabwicklung verwendet und nicht an Dritte weitergegeben â€“ es sei denn, dies ist fÃ¼r die Lieferung erforderlich oder gesetzlich vorgeschrieben.</p>
            </Section>
            <Section number="9" title="Urheberrecht & geistiges Eigentum">
              <p>Alle Inhalte dieser Website (Texte, Bilder, Logos, Dokumente) sind urheberrechtlich geschÃ¼tzt. Eine Nutzung ohne ausdrÃ¼ckliche schriftliche Genehmigung ist untersagt.</p>
            </Section>
            <Section number="10" title="Schlussbestimmungen">
              <BulletList items={[
                "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.",
                "Gerichtsstand ist MÃ¶nchengladbach, sofern der Kunde Kaufmann im Sinne des HGB ist.",
                "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der Ã¼brigen Bestimmungen unberÃ¼hrt.",
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
            <h1 className="font-heading font-bold text-3xl tracking-tight mb-3">Mehrwertsteuer & ZÃ¶lle</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alle Preise beinhalten 19 % MwSt. und werden klar ausgewiesen. DIE Container GmbH gewÃ¤hrleistet eine transparente Preisgestaltung und stellt jedem Kunden eine detaillierte Rechnung mit allen steuerlichen Informationen zur VerfÃ¼gung.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Umsatzsteuerpflicht">
              <p>DIE Container GmbH mit Sitz in Putzbrunn unterliegt der Umsatzsteuer gemÃ¤ÃŸ Â§ 1 UStG.</p>
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-4 space-y-1 text-sm">
                <p><strong className="text-foreground">Handelsregister / EUID:</strong> HRB256757</p>
                <p><strong className="text-foreground">USt-IdNr.:</strong> DE 330443785</p>
              </div>
              <p className="mt-3">Alle VerkÃ¤ufe unterliegen der gesetzlich vorgeschriebenen Mehrwertsteuer von <strong className="text-foreground">19 %</strong>.</p>
            </Section>
            <Section number="2" title="Preise & Steuerliche Transparenz">
              <BulletList items={[
                "Alle auf unserer Website ausgewiesenen Preise enthalten 19 % MwSt., sofern nicht anders angegeben.",
                "In unseren Angeboten und Rechnungen wird die Mehrwertsteuer separat ausgewiesen, um volle Transparenz zu gewÃ¤hrleisten.",
                "GeschÃ¤ftskunden mit einer gÃ¼ltigen Steuernummer kÃ¶nnen die Mehrwertsteuer als Vorsteuer geltend machen.",
              ]} />
            </Section>
            <Section number="3" title="Rechnungen & Steuerdokumente">
              <p>Nach jedem Kauf erhalten Sie eine rechtskonforme Rechnung mit folgenden Angaben:</p>
              <BulletList items={[
                "Namen und Adressen von KÃ¤ufer und VerkÃ¤ufer",
                "Netto- & BruttobetrÃ¤ge",
                "Mehrwertsteuerbetrag",
                "Zahlungsart & Transaktionsdatum",
                "USt-IdNr. (sofern angegeben)",
              ]} />
              <div className="mt-3 bg-muted/50 rounded-xl px-4 py-3">
                <p className="text-xs text-muted-foreground">Die Rechnung wird Ihnen per E-Mail als PDF zugesandt. Auf Wunsch kann ein Papierdokument per Post versandt werden.</p>
              </div>
            </Section>
            <Section number="4" title="Steuerfreie innergemeinschaftliche Lieferung (EU)">
              <p>Unter bestimmten Voraussetzungen kÃ¶nnen EU-Unternehmen bei uns steuerfrei einkaufen:</p>
              <BulletList items={[
                "Der KÃ¤ufer verfÃ¼gt Ã¼ber eine gÃ¼ltige USt-IdNr.",
                "Die Ware wird physisch in andere EU-LÃ¤nder geliefert.",
                "Der KÃ¤ufer hat seinen Sitz auÃŸerhalb Deutschlands.",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>Hinweis:</strong> Bitte kontaktieren Sie uns vor der Bestellung, damit wir die Voraussetzungen prÃ¼fen und die steuerfreie Lieferung korrekt dokumentieren kÃ¶nnen.</p>
              </div>
            </Section>
            <Section number="5" title="Steuerfreie Exporte auÃŸerhalb der EU">
              <p>FÃ¼r Kunden auÃŸerhalb der EU (z. B. Schweiz, GroÃŸbritannien, Norwegen) kann die Lieferung ohne Mehrwertsteuer erfolgen, wenn der Export durch DIE Container GmbH selbst durchgefÃ¼hrt wird oder der Kunde einen gÃ¼ltigen Ausfuhrnachweis vorlegt.</p>
              <p className="mt-2 font-medium text-foreground">Erforderliche Dokumente:</p>
              <BulletList items={[
                "Offizielle Ausfuhranmeldung",
                "Versanddokumente mit Zollstempel oder BestÃ¤tigung der Zollabfertigung",
              ]} />
            </Section>
            <Section number="6" title="HÃ¤ufig gestellte Fragen (FAQ)">
              <div className="space-y-4">
                {[
                  { q: "Sind die Preise auf Ihrer Website inklusive Mehrwertsteuer?", a: "Ja, alle Preise beinhalten 19 % MwSt., sofern nicht anders angegeben." },
                  { q: "Erhalte ich eine Rechnung mit separat ausgewiesener Mehrwertsteuer?", a: "Ja, selbstverstÃ¤ndlich. Jede Rechnung enthÃ¤lt alle gesetzlich vorgeschriebenen Angaben â€“ ideal fÃ¼r Ihre Buchhaltung." },
                  { q: "Kann ich als EU-Unternehmen steuerfrei einkaufen?", a: "Ja, mit einer gÃ¼ltigen USt-IdNr. und Lieferung in ein anderes EU-Land erhalten Sie eine Nettorechnung ohne Mehrwertsteuer." },
                  { q: "Wie funktioniert steuerfreie Lieferung auÃŸerhalb der EU?", a: "Bitte kontaktieren Sie uns im Voraus. Wir benÃ¶tigen die entsprechenden Ausfuhrdokumente, bevor wir steuerfrei liefern kÃ¶nnen." },
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
              Diese Cookie-Richtlinie erlÃ¤utert, wie <strong className="text-foreground">DIE Container GmbH</strong> (Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland) Cookies und Ã¤hnliche Tracking-Technologien einsetzt, wenn Sie unsere Website diecontainers.com besuchen. Durch die weitere Nutzung unserer Website stimmen Sie dem Einsatz von Cookies gemÃ¤ÃŸ dieser Richtlinie zu.
            </p>
          </div>
          <div className="divide-y divide-border">
            <Section number="1" title="Was sind Cookies?">
              <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem EndgerÃ¤t (Computer, Smartphone oder Tablet) gespeichert werden. Sie helfen der Website dabei, Ihre Einstellungen zu speichern, Sie eingeloggt zu halten und Analysedaten zur Verbesserung der Nutzererfahrung zu erheben.</p>
            </Section>
            <Section number="2" title="Arten der von uns verwendeten Cookies">
              <div className="space-y-3 mt-2">
                {[
                  { type: "Notwendige Cookies", desc: "Diese Cookies sind fÃ¼r den ordnungsgemÃ¤ÃŸen Betrieb der Website unerlÃ¤sslich. Sie ermÃ¶glichen grundlegende Funktionen wie Seitennavigation, Sicherheit und FormularÃ¼bermittlungen. Sie kÃ¶nnen diese Cookies nicht ablehnen.", color: "bg-blue-50 border-blue-200", text: "text-blue-800" },
                  { type: "Funktionale Cookies", desc: "Diese Cookies ermÃ¶glichen es der Website, Ihre Einstellungen (z. B. SprachprÃ¤ferenzen) zu speichern und erweiterte, personalisierte Funktionen bereitzustellen. Sie kÃ¶nnen von uns oder von Drittanbietern gesetzt werden.", color: "bg-green-50 border-green-200", text: "text-green-800" },
                  { type: "Analyse- / Performance-Cookies", desc: "Diese Cookies erfassen anonyme Informationen darÃ¼ber, wie Besucher unsere Website nutzen, z. B. welche Seiten am hÃ¤ufigsten aufgerufen werden. So kÃ¶nnen wir die Leistung und Benutzerfreundlichkeit der Website verbessern.", color: "bg-amber-50 border-amber-200", text: "text-amber-800" },
                  { type: "Marketing-Cookies", desc: "Diese Cookies verfolgen Ihre SurfaktivitÃ¤ten, um relevante Werbung auszuspielen. Wir verwenden derzeit keine Marketing-Cookies von Drittanbietern. Sollte sich dies Ã¤ndern, werden wir diese Richtlinie aktualisieren und Ihre Einwilligung einholen.", color: "bg-rose-50 border-rose-200", text: "text-rose-800" },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl border px-4 py-4 ${item.color}`}>
                    <p className={`font-heading font-semibold text-sm mb-1 ${item.text}`}>{item.type}</p>
                    <p className={`text-xs leading-relaxed ${item.text} opacity-80`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section number="3" title="Cookies von Drittanbietern">
              <p>Unsere Website kann Inhalte oder Funktionen von Drittanbietern enthalten (z. B. eingebettete Karten oder Analyse-Tools). Diese Drittanbieter kÃ¶nnen eigene Cookies auf Ihrem GerÃ¤t setzen, die deren eigenen Datenschutz- und Cookie-Richtlinien unterliegen. Wir haben keinen Einfluss auf Cookies von Drittanbietern.</p>
            </Section>
            <Section number="4" title="Wie lange werden Cookies gespeichert?">
              <BulletList items={[
                "Sitzungscookies: werden automatisch gelÃ¶scht, wenn Sie Ihren Browser schlieÃŸen.",
                "Persistente Cookies: werden fÃ¼r einen bestimmten Zeitraum (von Tagen bis Jahren) auf Ihrem GerÃ¤t gespeichert oder bis Sie diese manuell lÃ¶schen.",
              ]} />
            </Section>
            <Section number="5" title="Ihre Cookie-Einstellungen">
              <p>Sie haben das Recht, die Verwendung von Cookies auf Ihrem GerÃ¤t zu steuern:</p>
              <BulletList items={[
                "Browser-Einstellungen: Die meisten Browser ermÃ¶glichen es Ihnen, Cookies einzusehen, zu verwalten, zu blockieren oder zu lÃ¶schen. Weitere Informationen finden Sie im Hilfebereich Ihres Browsers.",
                "Einwilligung: Beim ersten Besuch unserer Website kann Ihnen ein Cookie-Einwilligungsbanner angezeigt werden. Sie kÃ¶nnen Ihre Einstellungen jederzeit Ã¤ndern.",
                "Opt-out-Tools: FÃ¼r Analyse-Dienste kÃ¶nnen Sie verfÃ¼gbare Opt-out-Tools nutzen (z. B. Google Analytics Opt-out-Browser-Add-on).",
              ]} />
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <p className="text-xs text-amber-800"><strong>Bitte beachten:</strong> Das Deaktivieren bestimmter Cookies kann die FunktionalitÃ¤t unserer Website beeintrÃ¤chtigen und den Zugang zu einigen Funktionen einschrÃ¤nken.</p>
              </div>
            </Section>
            <Section number="6" title="Rechtsgrundlage">
              <p>Die Verwendung von Cookies auf unserer Website basiert auf:</p>
              <BulletList items={[
                "Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) fÃ¼r nicht notwendige Cookies.",
                "Unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) fÃ¼r technisch notwendige Cookies, die fÃ¼r den Betrieb der Website erforderlich sind.",
              ]} />
            </Section>
            <Section number="7" title="Ã„nderungen dieser Cookie-Richtlinie">
              <p>Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu aktualisieren. Ã„nderungen werden auf dieser Seite mit einem aktualisierten Datum verÃ¶ffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmÃ¤ÃŸig zu prÃ¼fen.</p>
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

