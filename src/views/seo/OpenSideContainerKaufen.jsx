"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const preisTable = {
  headers: ["Größe", "Zustand", "Preis (netto)"],
  rows: [
    ["20 Fuß Open Side", "Gebraucht", "ab 2.490 €"],
    ["20 Fuß Open Side", "Generalüberholt", "ab 2.990 €"],
    ["20 Fuß Open Side", "Neu", "ab 3.490 €"],
    ["40 Fuß Open Side", "Gebraucht", "ab 3.990 €"],
    ["40 Fuß Open Side", "Generalüberholt", "ab 4.690 €"],
    ["40 Fuß Open Side", "Neu", "ab 5.490 €"],
  ],
};

const vergleichTable = {
  headers: ["Merkmal", "Standardcontainer", "Open Side Container"],
  rows: [
    ["Zugang", "Nur Stirnseite (Türen)", "Stirnseite + vollständige Seite"],
    ["Öffnungsbreite", "Ca. 2,29 m", "Ca. 5,8 m (20 Fuß) / 11,5 m (40 Fuß)"],
    ["Beladung mit Stapler", "Eingeschränkt", "Optimal – direkt von der Seite"],
    ["Gabelstapler-Zugang", "Nein", "Ja, vollflächig"],
    ["Paletten nebeneinander", "Einreihig", "Mehrreihig gleichzeitig"],
    ["Preis", "Standard", "Ca. 300–600 € Aufschlag"],
  ],
};

const faqs = [
  {
    q: "Was ist ein Open Side Container?",
    a: "Ein Open Side Container (auch: seitlich zu öffnender Container) ist ein ISO-Seecontainer, bei dem eine oder beide Längsseiten vollständig geöffnet werden können. Die Wandpaneele oder Türflügel lassen sich nach oben klappen oder herausschwenken, wodurch eine nahezu vollständige Seitenzugänglichkeit entsteht."
  },
  {
    q: "Welche Größen gibt es beim Open Side Container?",
    a: "Open Side Container sind in 20 Fuß (6,06 m Länge) und 40 Fuß (12,19 m Länge) erhältlich, jeweils als Standard- und High-Cube-Variante. Die 40 Fuß High Cube Version bietet mit über 76 m³ das größte nutzbare Volumen."
  },
  {
    q: "Was kostet ein Open Side Container?",
    a: "Gebrauchte 20 Fuß Open Side Container starten ab ca. 2.490 € netto, 40 Fuß Varianten ab ca. 3.990 €. Der Aufschlag gegenüber einem Standardcontainer beträgt typischerweise 300–600 €."
  },
  {
    q: "Ist ein Open Side Container wasserdicht?",
    a: "Ja. Die Seitenwand-Türflügel oder Paneele sind mit Gummidichtungen ausgestattet und gewährleisten im geschlossenen Zustand die gleiche Wasserdichtheit wie ein Standardcontainer."
  },
  {
    q: "Kann ich einen Open Side Container als Lager verwenden?",
    a: "Absolut. Open Side Container eignen sich hervorragend als Außenlager für Baustellen, im Einzelhandel oder der Industrie – überall dort, wo häufiges und schnelles Be- und Entladen erforderlich ist."
  },
  {
    q: "Wie wird ein Open Side Container geliefert?",
    a: "Die Lieferung erfolgt per Kranwagen deutschlandweit innerhalb von 3–7 Werktagen. Für die Aufstellung sind die gleichen Untergrundanforderungen wie für Standardcontainer zu beachten."
  },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Der meistverkaufte Standardcontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximaler Stauraum für große Güter" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Alle Lagercontainer im Überblick" },
  { href: "/double-door-container-kaufen", title: "Double Door Container", desc: "Zugang von beiden Stirnseiten" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Übersicht aller Typen & Preise" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Aktuelle Preisübersicht 2024" },
];

const ratgeberLinks = [
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Aufstellung erklärt" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Den richtigen Untergrund wählen" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Wann ist eine Genehmigung nötig?" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Abmessungen auf einen Blick" },
];

export default function OpenSideContainerKaufen() {
  return (
    <SeoPageLayout
      breadcrumb={[
        { label: "Seecontainer kaufen", href: "/seecontainer-kaufen" },
        { label: "Open Side Container kaufen" }
      ]}
      label="Produkt-Ratgeber"
      title="Open Side Container kaufen – Maximale Zugänglichkeit für sperrige Güter"
      intro="Open Side Container bieten eine vollständige Seitenwandöffnung für direkten Gabelstapler- und Palettenzugang. Erfahren Sie alles über Größen, Preise, typische Einsatzgebiete und was Open Side Container von Standardcontainern unterscheidet."
    >
      {/* Was ist ein Open Side Container */}
      <SeoSection title="Was ist ein Open Side Container?">
        <p>
          Ein Open Side Container – zu Deutsch „seitlich zu öffnender Container" – ist ein spezieller ISO-Seecontainer, bei dem eine Längsseite vollständig geöffnet werden kann. Im Gegensatz zum klassischen <Link to="/seecontainer-kaufen" className="text-orange-500 hover:underline">Seecontainer</Link>, der ausschließlich über Stirnseitentüren zugänglich ist, ermöglicht der Open Side Container einen direkten, breiten Zugang über die gesamte Containerseite.
        </p>
        <p>
          Die Öffnungsmechanismen variieren je nach Hersteller: Bei einigen Modellen lassen sich die Seitenwandpaneele nach oben klappen, bei anderen sind vollwertige Türflügel integriert, die sich zur Seite oder nach oben öffnen. Im geschlossenen Zustand bietet der Container dieselbe Stabilität, Dichtigkeit und Sicherheit wie ein konventioneller Standardcontainer.
        </p>
        <p>
          DIE Container GmbH führt Open Side Container in 20 Fuß und 40 Fuß, jeweils in Standard- und High-Cube-Höhe, in verschiedenen Zustandsklassen. Alle Einheiten sind CSC-zertifiziert und wurden auf Dichtigkeit geprüft.
        </p>
      </SeoSection>

      {/* Vorteile */}
      <SeoSection title="Vorteile gegenüber Standardcontainern">
        <p>
          Warum entscheiden sich Logistiker, Händler und Handwerksbetriebe für den Open Side Container? Der direkte Vergleich zeigt die entscheidenden Unterschiede:
        </p>
        <SeoTable headers={vergleichTable.headers} rows={vergleichTable.rows} />
        <p>
          Der größte Vorteil liegt in der Effizienz beim Be- und Entladen: Wo ein <Link to="/20-fuss-container-kaufen" className="text-orange-500 hover:underline">20 Fuß Standardcontainer</Link> nur einreihiges Einfahren des Gabelstaplers erlaubt, können beim Open Side Container mehrere Paletten gleichzeitig quer eingebracht werden. Das reduziert Ladezeiten erheblich und verringert das Unfallrisiko beim engen Rangieren.
        </p>
        <p>
          Die vollständige Öffnung ermöglicht außerdem den Einbau von Regalsystemen, Regalboden-Einlagen und anderen Einbauten, die bei konventionellen Containern kaum realisierbar sind. Für umfangreichere Umbauprojekte – etwa als mobiler <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">Bürocontainer</Link> oder Werkstatt – ist der Open Side besonders praktisch.
        </p>
      </SeoSection>

      {/* Verfügbare Größen */}
      <SeoSection title="Verfügbare Größen und Varianten">
        <p>
          Open Side Container folgen den gleichen ISO-Normen wie Standardcontainer. Alle genauen <Link to="/container-masse" className="text-orange-500 hover:underline">Container Maße</Link> finden Sie in unserem Ratgeber. Im Überblick:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">20 Fuß Open Side Standard:</strong> Außenmaße 6.058 × 2.438 × 2.591 mm, Ladevolumen ca. 33 m³. Seitenöffnung ca. 5,8 m Breite. Ideal für mittelgroße Güter und begrenzte Stellfläche.
          </li>
          <li>
            <strong className="text-foreground">20 Fuß Open Side High Cube:</strong> Wie Standard, jedoch 2.896 mm hoch – 30 cm mehr Innenhöhe für voluminöse Güter.
          </li>
          <li>
            <strong className="text-foreground">40 Fuß Open Side Standard:</strong> Außenmaße 12.192 × 2.438 × 2.591 mm, Ladevolumen ca. 67 m³. Seitenöffnung ca. 11,5 m – entspricht in etwa der Länge eines LKW-Aufliegers.
          </li>
          <li>
            <strong className="text-foreground">40 Fuß Open Side High Cube:</strong> Maximale Version mit ca. 76 m³ Ladevolumen. Empfehlenswert für große Einzelhandelslager, Ausstellungsflächen und Werkstätten. Vergleichen Sie auch mit dem <Link to="/40-fuss-container-kaufen" className="text-orange-500 hover:underline">40 Fuß Standardcontainer</Link>.
          </li>
        </ul>
      </SeoSection>

      {/* Einsatzgebiete */}
      <SeoSection title="Typische Einsatzgebiete des Open Side Containers">
        <p>
          Dank seiner einzigartigen Zugänglichkeit ist der Open Side Container in einer Vielzahl von Branchen und Anwendungen im Einsatz:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Logistik und Lager:</strong> Schnelles Be- und Entladen per Gabelstapler, ohne mühsames Rangieren durch enge Stirnseiten-Öffnungen. Besonders effizient in Verbindung mit Palettenregalen.
          </li>
          <li>
            <strong className="text-foreground">Baustellen und Handwerk:</strong> Baumaterialien, Betonelemente, Rohre, Gerüstbauteile und andere sperrige Güter lassen sich problemlos von der Seite ein- und auslagern.
          </li>
          <li>
            <strong className="text-foreground">Einzelhandel und Messebau:</strong> Als temporärer Pop-up-Store oder Messestand mit attraktiver, vollständig geöffneter Schaufläche zur Straßenseite.
          </li>
          <li>
            <strong className="text-foreground">Landwirtschaft:</strong> Landmaschinen, Erntegut und Betriebsmittel effizient lagern und schützen – ohne die Flächenverluste konventioneller Schuppen.
          </li>
          <li>
            <strong className="text-foreground">Fahrzeuge und Maschinen:</strong> Motorräder, Quads, Kleinmaschinen und Geräte können problemlos seitlich eingefahren werden – kein aufwendiges Rangieren erforderlich.
          </li>
          <li>
            <strong className="text-foreground">Gastronomie & Events:</strong> Schneller Auf- und Abbau als Mobile Bar, Foodstand oder Eventküche – die Seitenwand als natürliche Theke oder Ausgabefläche nutzbar.
          </li>
        </ul>
      </SeoSection>

      {/* Preise */}
      <SeoSection title="Open Side Container Preise – Aktuelle Übersicht">
        <p>
          Die Preise für Open Side Container liegen geringfügig über denen vergleichbarer Standardcontainer, da die zusätzliche Öffnungsmechanik aufwendiger in der Herstellung ist. Eine vollständige Übersicht aller <Link to="/container-kosten" className="text-orange-500 hover:underline">Container Kosten</Link> finden Sie in unserem Preisratgeber:
        </p>
        <SeoTable headers={preisTable.headers} rows={preisTable.rows} />
        <p>
          Alle Preise verstehen sich netto ab Lager, zuzüglich Transportkosten. Die Lieferkosten richten sich nach Entfernung und Abladeaufwand. Sie erhalten diese Angaben zusammen mit Ihrem individuellen Angebot.
        </p>
      </SeoSection>

      <CtaBanner text="Open Side Container anfragen – kostenlos & unverbindlich" btnHref="/angebot" />

      {/* Lieferung */}
      <SeoSection title="Lieferung und Transport in Deutschland">
        <p>
          DIE Container GmbH liefert Open Side Container deutschlandweit per Kranwagen direkt an Ihren Wunschort. Da Open Side Container die gleichen Außenmaße wie Standardcontainer aufweisen, gelten auch die gleichen Transportanforderungen.
        </p>
        <p>
          Wichtige Voraussetzungen für eine reibungslose Lieferung:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Zufahrtsbreite min. 3,5 m, Höhenfreiheit min. 4,5 m</li>
          <li>Ebener, tragfähiger Unterstellplatz (Pflaster, Beton, Schotter)</li>
          <li>Ausreichend Rangierraum für den Kranwagen</li>
        </ul>
        <p>
          Unser <Link to="/container-lieferung" className="text-orange-500 hover:underline">Ratgeber zur Container Lieferung</Link> erklärt den gesamten Ablauf von der Auftragsbestätigung bis zur Aufstellung. Für Fragen zum optimalen Untergrund lesen Sie unseren <Link to="/container-fundament" className="text-orange-500 hover:underline">Leitfaden zu Container-Fundamenten</Link>.
        </p>
        <p>
          Für eine dauerhafte Aufstellung empfehlen wir die vorherige Klärung der Genehmigungspflicht mit Ihrer Gemeindeverwaltung. Unser <Link to="/container-genehmigung" className="text-orange-500 hover:underline">Ratgeber zur Container Genehmigung</Link> gibt einen Überblick nach Nutzungsart und Bundesland.
        </p>
      </SeoSection>

      <SeoSection title="Weitere Container-Typen entdecken">
        <p>Nicht das Richtige dabei? Hier weitere Spezialcontainer und Standardgrößen im Überblick:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Ratgeber: Wichtige Informationen vor dem Kauf">
        <p>Alles, was Sie für eine reibungslose Planung und Aufstellung wissen müssen:</p>
      </SeoSection>
      <InternalLinkGrid links={ratgeberLinks} />

      <SeoSection title="Häufig gestellte Fragen zum Open Side Container">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}