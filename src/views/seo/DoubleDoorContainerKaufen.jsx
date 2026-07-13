"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const IMG_HERO = "/images/double-door-40hc-ral5013-open.jpg";
const IMG_OPEN_GREY = "/images/double-door-40hc-ral7005-open.jpg";
const IMG_CLOSED_BLUE = "/images/double-door-40hc-ral5010-closed.jpg";
const IMG_OPEN_BLUE = "/images/double-door-40hc-ral5010-open.jpg";

function IL({ to, children }) {
  return <Link to={to} className="text-orange-500 hover:underline font-semibold">{children}</Link>;
}

function BulletList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ src, alt, title, text, className = "" }) {
  return (
    <div className={`rounded-2xl border border-border bg-card overflow-hidden ${className}`}>
      <div className="h-64 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {(title || text) && (
        <div className="p-5">
          {title && <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{title}</h3>}
          {text && <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>}
        </div>
      )}
    </div>
  );
}

const STANDARD_USES = [
  "einfache Lagerung",
  "seltenes Öffnen",
  "langfristige Aufbewahrung",
  "günstige Standardlösung",
];

const DOUBLE_DOOR_USES = [
  "häufiges Be- und Entladen",
  "Zugriff von beiden Seiten",
  "sortierte Lagerung",
  "Baustellen und Gewerbe",
  "Materialfluss durch den Container",
  "schnelle Entnahme von Werkzeugen oder Waren",
];

const USED_CHECKS = [
  "Zustand der Türen an beiden Seiten",
  "Funktion der Verschlüsse",
  "Dichtungen und Türrahmen",
  "Dach und Seitenwände",
  "Bodenstabilität",
  "Roststellen und Undichtigkeiten",
  "Wind- und Wasserdichtigkeit",
];

const USE_CASES = [
  "Baustellenlager",
  "Werkzeuglager",
  "Materialcontainer",
  "Gewerbliche Lagerung",
  "Maschinen und Ersatzteile",
  "Landwirtschaftliche Geräte",
  "Palettenware",
  "Event- und Messelogistik",
  "Durchgangslager",
  "Sortierte Warenlagerung",
];

const DELIVERY_CHECKS = [
  "genaue Lieferadresse",
  "gewünschte Containergröße",
  "Zufahrtsbreite",
  "Untergrund am Aufstellort",
  "Platz zum Öffnen beider Türseiten",
  "mögliche Hindernisse",
  "gewünschter Lieferzeitraum",
];

const ADVANTAGES = [
  "Türen an beiden Stirnseiten",
  "schneller Zugriff von zwei Seiten",
  "ideal für Baustellen und Gewerbe",
  "bessere Organisation im Innenraum",
  "leichteres Be- und Entladen",
  "als 20 Fuß oder 40 Fuß Variante möglich",
  "neu oder gebraucht erhältlich",
  "robuste Stahlkonstruktion",
  "wind- und wasserdicht bei gutem Zustand",
];

const FAQS = [
  {
    q: "Was ist ein Doppeltüren Container?",
    a: "Ein Doppeltüren Container ist ein Container mit Türen an beiden Stirnseiten. Dadurch kann er von zwei Seiten geöffnet werden. Diese Bauweise wird auch als Double Door Container oder Tunnelcontainer bezeichnet.",
  },
  {
    q: "Was ist der Vorteil eines Doppeltüren Containers?",
    a: "Der größte Vorteil ist der flexible Zugang. Waren, Werkzeuge oder Materialien können von beiden Seiten erreicht werden. Das erleichtert das Be- und Entladen und spart Zeit im täglichen Einsatz.",
  },
  {
    q: "Gibt es Doppeltüren Container gebraucht?",
    a: "Ja, Doppeltüren Container sind auch gebraucht erhältlich. Beim Kauf sollte besonders auf Türen, Verschlüsse, Dichtungen, Boden, Dach und Wasserdichtigkeit geachtet werden.",
  },
  {
    q: "Welche Größen gibt es bei Doppeltüren Containern?",
    a: "Häufige Größen sind 20 Fuß und 40 Fuß. Ein 20 Fuß Doppeltüren Container ist kompakt und vielseitig. Ein 40 Fuß Doppeltüren Container bietet deutlich mehr Stauraum.",
  },
  {
    q: "Ist ein Doppeltüren Container wasserdicht?",
    a: "Ein technisch intakter Doppeltüren Container ist in der Regel wind- und wasserdicht. Bei gebrauchten Containern sollten besonders die Dichtungen an beiden Türseiten geprüft werden.",
  },
  {
    q: "Wofür eignet sich ein Doppeltüren Container?",
    a: "Er eignet sich besonders für Baustellen, Lagerflächen, Werkzeuge, Maschinen, Landwirtschaft, Gewerbe und alle Anwendungen, bei denen schneller Zugriff von beiden Seiten wichtig ist.",
  },
  {
    q: "Wird ein Doppeltüren Container geliefert?",
    a: "Ja, Doppeltüren Container können direkt zum gewünschten Standort geliefert werden. Wichtig sind eine geeignete Zufahrt, ausreichend Platz und ein tragfähiger Untergrund.",
  },
  {
    q: "Was ist der Unterschied zwischen Doppeltüren Container und Seecontainer?",
    a: "Ein klassischer Seecontainer hat meist Türen an einer Stirnseite. Ein Doppeltüren Container basiert häufig ebenfalls auf einer robusten Seecontainer-Bauweise, besitzt aber Türen an beiden Stirnseiten.",
  },
];

const RELATED_LINKS = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Alle Containerarten vergleichen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische robuste ISO-Container" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Kompakte Containerlösung" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Viel Stauraum und High Cube Varianten" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer", desc: "Sichere Lagerfläche direkt vor Ort" },
  { href: "/container-masse", title: "Container Maße", desc: "Maße, Türöffnungen und Volumen" },
];

export default function DoubleDoorContainerKaufen() {
  return (
    <SeoPageLayout
      breadcrumb={[
        { label: "Container kaufen", href: "/container-kaufen" },
        { label: "Doppeltüren Container kaufen" }
      ]}
      label="Produkt-Ratgeber"
      title="Doppeltüren Container kaufen"
      intro="Doppeltüren Container kaufen – Double Door Container mit Türen an beiden Stirnseiten für Lagerung, Baustelle, Gewerbe und schnellen Zugriff. Neu, gebraucht und mit Lieferung."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      })}} />

      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ImageCard
            src={IMG_HERO}
            alt="40 Fuß High Cube Doppeltüren Container mit geöffneten Türen"
            title="Zugang von beiden Stirnseiten"
            text="Double Door Container lassen sich von vorne und hinten öffnen – ideal für schnellen Zugriff und sortierte Lagerung."
          />
          <ImageCard
            src={IMG_CLOSED_BLUE}
            alt="Blauer 40 Fuß High Cube Double Door Container geschlossen"
            title="Robuste High Cube Ausführung"
            text="Geeignet für Gewerbe, Baustelle, Industrie und Logistik – neu oder gebraucht mit Lieferung."
          />
        </div>
      </section>

      <SeoSection title="Doppeltüren Container als flexible Lösung mit Zugang von beiden Seiten">
        <p>
          Ein Doppeltüren Container ist eine besonders praktische Lösung, wenn ein Container von beiden Seiten zugänglich sein soll. Im Gegensatz zu einem Standardcontainer, der meist nur an einer Stirnseite Türen besitzt, verfügt ein Doppeltüren Container über Türen an beiden Enden. Deshalb wird er auch häufig als Double Door Container oder Tunnelcontainer bezeichnet.
        </p>
        <p>
          Diese Bauweise erleichtert das Be- und Entladen deutlich, besonders wenn Waren, Werkzeuge, Maschinen oder Materialien schnell erreichbar sein müssen. Doppeltüren Container eignen sich ideal für Baustellen, Lagerflächen, Gewerbe, Industrie, Landwirtschaft und Projekte, bei denen ein schneller Zugriff von beiden Seiten wichtig ist.
        </p>
        <p>
          Wenn Sie zunächst verschiedene Containerarten vergleichen möchten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Überblick über Lagercontainer, Seecontainer, Bürocontainer, Wohncontainer und Kühlcontainer.
        </p>
      </SeoSection>

      <SeoSection title="Warum einen Doppeltüren Container kaufen?">
        <p>
          Ein Doppeltüren Container bietet mehr Flexibilität beim Zugang. Waren müssen nicht immer von einer Seite aus ein- oder ausgeladen werden. Das spart Zeit und macht die Nutzung deutlich komfortabler, besonders wenn der Container häufig geöffnet oder von mehreren Personen genutzt wird.
        </p>
        <p>
          Auf Baustellen können Werkzeuge und Materialien von beiden Seiten entnommen werden. In der Industrie oder im Gewerbe lassen sich Waren besser sortieren und schneller erreichen. Auch als Lagercontainer ist diese Ausführung sehr praktisch, weil der Innenraum einfacher organisiert werden kann.
        </p>
        <p>
          Für klassische Lagerzwecke kann auch die Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL> sinnvoll sein. Wenn jedoch schneller Zugriff von beiden Enden benötigt wird, ist ein Doppeltüren Container die bessere Wahl.
        </p>
      </SeoSection>

      <SeoSection title="Doppeltüren Container oder Standardcontainer?">
        <p>
          Der wichtigste Unterschied liegt im Zugang. Ein Standardcontainer hat in der Regel Türen an einer Stirnseite. Ein Doppeltüren Container besitzt dagegen Türen an beiden Stirnseiten. Dadurch kann der Container wie ein Durchgang genutzt werden und wird deshalb auch Tunnelcontainer genannt.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-3">Ein Standardcontainer eignet sich gut für:</h3>
            <BulletList items={STANDARD_USES} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-3">Ein Doppeltüren Container eignet sich besser für:</h3>
            <BulletList items={DOUBLE_DOOR_USES} />
          </div>
        </div>
        <p>
          Wenn der Container nur als einfacher Lagerraum genutzt wird, reicht oft ein klassischer <IL to="/lagercontainer-kaufen">Lagercontainer</IL>. Wenn der Zugang eine wichtige Rolle spielt, bietet der Doppeltüren Container klare Vorteile.
        </p>
      </SeoSection>

      <SeoSection title="20 Fuß Doppeltüren Container">
        <p>
          Ein 20 Fuß Doppeltüren Container ist eine beliebte Größe, weil er kompakt bleibt und trotzdem ausreichend Stauraum bietet. Er eignet sich besonders für Baustellen, Handwerksbetriebe, kleine Unternehmen, Landwirtschaft und private Lagerung.
        </p>
        <p>
          Der große Vorteil liegt darin, dass der Container von beiden Seiten geöffnet werden kann. So können Materialien besser getrennt gelagert oder schneller erreicht werden. Zum Beispiel können häufig benötigte Werkzeuge auf einer Seite und größere Materialien auf der anderen Seite gelagert werden.
        </p>
        <p>
          Wenn Sie eine klassische 20 Fuß Lösung suchen, finden Sie weitere Informationen auf unserer Seite <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL>.
        </p>
      </SeoSection>

      <SeoSection title="40 Fuß Doppeltüren Container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-3">
            <p>
              Ein 40 Fuß Doppeltüren Container bietet besonders viel Stauraum und ist ideal für große Warenmengen, sperrige Güter, Maschinen, Paletten oder umfangreiche Materiallager. Durch die Türen an beiden Enden bleibt der Zugriff auch bei voller Beladung deutlich einfacher.
            </p>
            <p>
              Diese Variante eignet sich besonders für Industrie, Logistik, Bauunternehmen, Landwirtschaft und größere Gewerbebetriebe. Bei einem langen Container ist der Zugang von beiden Seiten ein großer Vorteil, weil Waren nicht durch den gesamten Container bewegt werden müssen.
            </p>
            <p>
              Für maximale Lagerfläche können Sie auch unsere Seite <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL> besuchen.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_OPEN_BLUE}
              alt="40 Fuß High Cube Double Door Container geöffnet"
              title="40 Fuß High Cube Double Door"
              text="Viel Stauraum mit Zugang an beiden Stirnseiten."
              className="h-full"
            />
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Doppeltüren Container gebraucht kaufen">
        <p>
          Ein gebrauchter Doppeltüren Container kann eine wirtschaftliche Lösung sein, wenn Sie eine robuste und flexible Lagerlösung zu einem günstigeren Preis suchen. Gebrauchsspuren wie Kratzer, Dellen oder leichte Roststellen sind bei gebrauchten Containern normal. Wichtig ist jedoch, dass der Container technisch in gutem Zustand ist.
        </p>
        <p>Beim gebrauchten Doppeltüren Container sollten Sie prüfen:</p>
        <BulletList items={USED_CHECKS} />
        <p>
          Ein gebrauchter Container lohnt sich besonders, wenn Funktion und Preis wichtiger sind als ein neuwertiges Erscheinungsbild.
        </p>
      </SeoSection>

      <SeoSection title="Einsatzbereiche für Doppeltüren Container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-5">
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_OPEN_GREY}
              alt="Grauer Double Door Container geöffnet im Containerlager"
              title="Schneller Zugriff im Alltag"
              text="Besonders praktisch für sortierte Warenlagerung, Werkzeuglager und Materialfluss."
              className="h-full"
            />
          </div>
          <div className="lg:col-span-3 space-y-3">
            <p>
              Doppeltüren Container sind überall dort sinnvoll, wo ein schneller und flexibler Zugang wichtig ist. Besonders auf Baustellen, in Werkstätten, in der Landwirtschaft und in gewerblichen Lagern kann diese Containerart die tägliche Arbeit erleichtern.
            </p>
            <p>Typische Einsatzbereiche:</p>
            <BulletList items={USE_CASES} />
            <p>
              Wenn zusätzlich ein Arbeitsraum benötigt wird, kann ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> eine passende Ergänzung sein. Für temperaturempfindliche Waren ist dagegen ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> besser geeignet.
            </p>
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Doppeltüren Container Maße">
        <p>
          Doppeltüren Container sind häufig in gängigen Größen wie 20 Fuß und 40 Fuß erhältlich. Die Grundmaße ähneln klassischen Seecontainern, jedoch kann die genaue Ausführung je nach Modell leicht abweichen.
        </p>
        <p>
          Für die Planung sind Außenmaße, Innenmaße, Türöffnungen, Eigengewicht und nutzbares Volumen wichtig. Besonders die Türöffnungen an beiden Enden sollten geprüft werden, wenn große Maschinen, Paletten oder sperrige Güter eingelagert werden sollen.
        </p>
        <p>
          Eine vollständige Übersicht zu Containergrößen finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
        </p>
      </SeoSection>

      <SeoSection title="Lieferung und Aufstellung">
        <p>
          Doppeltüren Container können direkt zum gewünschten Standort geliefert werden. Die Lieferung erfolgt in der Regel per LKW. Je nach Größe, Standort und Entladesituation kann ein LKW mit Kran erforderlich sein.
        </p>
        <p>
          Vor der Lieferung sollten Zufahrt, Rangierfläche und Untergrund geprüft werden. Wichtig ist außerdem, dass an beiden Enden des Containers ausreichend Platz zum Öffnen der Türen vorhanden ist. Gerade bei Doppeltüren Containern sollte der Aufstellort so geplant werden, dass beide Zugänge sinnvoll genutzt werden können.
        </p>
        <p>Vor der Lieferung klären:</p>
        <BulletList items={DELIVERY_CHECKS} />
      </SeoSection>

      <SeoSection title="Vorteile eines Doppeltüren Containers">
        <p>
          Ein Doppeltüren Container bietet mehr Komfort und Flexibilität als ein Standardcontainer. Der Zugriff von beiden Seiten spart Zeit, erleichtert die Organisation und verbessert den Materialfluss.
        </p>
        <p>Die wichtigsten Vorteile:</p>
        <BulletList items={ADVANTAGES} />
      </SeoSection>

      <SeoSection title="Jetzt Doppeltüren Container anfragen">
        <p>
          Ob Sie einen neuen Doppeltüren Container kaufen möchten, einen gebrauchten Double Door Container suchen oder eine Lieferung direkt zum Standort benötigen – die passende Lösung hängt von Größe, Zustand, Nutzung und Lieferort ab.
        </p>
        <p>
          Teilen Sie uns mit, welche Größe Sie benötigen, wofür der Container genutzt werden soll und wohin geliefert werden soll. Auf dieser Grundlage erhalten Sie ein passendes Angebot mit verfügbaren Modellen, Preisen und Liefermöglichkeiten.
        </p>
      </SeoSection>

      <CtaBanner text="Doppeltüren Container kaufen – Angebot mit Lieferung erhalten" btnLabel="Jetzt anfragen" btnHref="/angebot" />

      <SeoSection title="Weitere passende Seiten">
        <p>Diese Seiten helfen beim Vergleich von Containerarten, Größen und Lagerlösungen:</p>
      </SeoSection>
      <InternalLinkGrid links={RELATED_LINKS} />

      <SeoSection title="FAQ – Doppeltüren Container">
        <FaqAccordion items={FAQS} />
      </SeoSection>
    </SeoPageLayout>
  );
}
