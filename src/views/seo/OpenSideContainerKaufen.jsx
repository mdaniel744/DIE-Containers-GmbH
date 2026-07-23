"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";
import ProductListingSection from "@/components/shop/ProductListingSection";

const IMG_SIDE_BLUE_1 = "/images/open-side-40hc-ral5010-side-door-1.jpg";
const IMG_SIDE_BLUE_2 = "/images/open-side-40hc-ral5010-side-door-4.jpg";
const IMG_SIDE_BLUE_OPEN = "/images/open-side-40hc-ral5010-side-door-5.jpg";
const IMG_GREY_FRONT = "/images/open-side-40hc-ral7042-front.jpg";
const IMG_20HC_OPEN = "/images/open-side-20hc-ral7016-open-3.jpg";
const IMG_20HC_FRONT = "/images/open-side-20hc-ral7016-open-11.jpg";

function IL({ to, children }) {
  return <Link to={to} className="text-blue-500 hover:underline font-semibold">{children}</Link>;
}

function BulletList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
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
  "langfristige Aufbewahrung",
  "seltenes Be- und Entladen",
  "günstige Standardlösung",
];

const OPEN_SIDE_USES = [
  "sperrige Güter",
  "Palettenware",
  "Maschinen und Geräte",
  "häufiges Be- und Entladen",
  "Zugriff mit Stapler oder Hubwagen",
  "Baustellen, Gewerbe und Events",
];

const USED_CHECKS = [
  "Funktion der seitlichen Türen",
  "Zustand der Scharniere",
  "Dichtungen an Seitenwand und Stirntüren",
  "Bodenstabilität",
  "Dach und Seitenrahmen",
  "Roststellen und Undichtigkeiten",
  "sichere Verriegelung",
  "wind- und wasserdichter Zustand",
];

const USE_CASES = [
  "Baustellenlager",
  "Maschinenlager",
  "Palettenlager",
  "Möbel und sperrige Güter",
  "Messe- und Eventmaterial",
  "landwirtschaftliche Geräte",
  "Werkzeuge und Baumaterialien",
  "mobile Verkaufs- oder Ausstellungsflächen",
  "gewerbliche Zwischenlagerung",
  "Lagerung mit Staplerzugang",
];

const DELIVERY_CHECKS = [
  "genaue Lieferadresse",
  "gewünschte Containergröße",
  "Zufahrtsbreite",
  "tragfähiger Untergrund",
  "Platz zum Öffnen der Seitenwand",
  "Platz zum Rangieren",
  "mögliche Hindernisse",
  "gewünschter Lieferzeitraum",
];

const ADVANTAGES = [
  "komplette Seitenwand öffnbar",
  "einfacher Zugriff auf den Innenraum",
  "ideal für sperrige Waren",
  "leichteres Be- und Entladen mit Stapler oder Hubwagen",
  "als 20 Fuß oder 40 Fuß Variante möglich",
  "für Baustelle, Gewerbe, Industrie und Events geeignet",
  "neu oder gebraucht erhältlich",
  "robuste Stahlkonstruktion",
  "flexible Nutzung als Lager- oder Spezialcontainer",
];

const FAQS = [
  {
    q: "Was ist ein Container mit offener Seite?",
    a: "Ein Container mit offener Seite ist ein Container, bei dem sich eine komplette Seitenwand öffnen lässt. Dadurch kann der Innenraum nicht nur über die Stirntüren, sondern auch seitlich beladen und genutzt werden.",
  },
  {
    q: "Was ist ein Open Side Container?",
    a: "Open Side Container ist die englische Bezeichnung für einen Container mit seitlich öffnender Wand. Diese Bauweise erleichtert das Be- und Entladen von sperrigen Gütern, Paletten, Maschinen und Materialien.",
  },
  {
    q: "Welche Vorteile hat ein Container mit offener Seite?",
    a: "Der wichtigste Vorteil ist der breite Zugang zum Innenraum. Waren können einfacher geladen, sortiert und entnommen werden. Besonders bei häufiger Nutzung, gewerblicher Lagerung oder Staplerbeladung ist das sehr praktisch.",
  },
  {
    q: "Gibt es Container mit offener Seite gebraucht?",
    a: "Ja, Open Side Container sind auch gebraucht erhältlich. Beim Kauf sollte besonders auf Türen, Scharniere, Dichtungen, Boden, Dach und Wasserdichtigkeit geachtet werden.",
  },
  {
    q: "Welche Größen gibt es bei Open Side Containern?",
    a: "Häufige Größen sind 20 Fuß und 40 Fuß. Ein 20 Fuß Open Side Container ist kompakter, während ein 40 Fuß Open Side Container deutlich mehr Stauraum bietet.",
  },
  {
    q: "Ist ein Container mit offener Seite wasserdicht?",
    a: "Ein technisch intakter Container mit offener Seite ist in der Regel wind- und wasserdicht. Bei gebrauchten Modellen sollten vor allem die Dichtungen an der seitlichen Öffnung geprüft werden.",
  },
  {
    q: "Wofür eignet sich ein Container mit offener Seite?",
    a: "Er eignet sich für Baustellen, Lagerflächen, Maschinen, Palettenware, Möbel, Landwirtschaft, Messebau, Events, Gewerbe und alle Anwendungen, bei denen seitlicher Zugriff wichtig ist.",
  },
  {
    q: "Was ist besser: Doppeltüren Container oder Container mit offener Seite?",
    a: "Ein Doppeltüren Container bietet Zugang von beiden Stirnseiten. Ein Container mit offener Seite bietet dagegen Zugang über die lange Seitenwand. Welche Variante besser ist, hängt davon ab, ob Sie den Container von vorne und hinten oder seitlich beladen möchten.",
  },
  {
    q: "Wird ein Container mit offener Seite geliefert?",
    a: "Ja, Open Side Container können direkt zum gewünschten Standort geliefert werden. Wichtig sind eine geeignete Zufahrt, ein tragfähiger Untergrund und ausreichend Platz zum Öffnen der Seitenwand.",
  },
];

const RELATED_LINKS = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Alle Containerarten im Überblick" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer", desc: "Robuste Lagerlösungen vergleichen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO-Container für Lagerung und Transport" },
  { href: "/double-door-container-kaufen", title: "Doppeltüren Container", desc: "Zugang von beiden Stirnseiten" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Kompakte Standard- und High-Cube-Varianten" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Große Container mit viel Stauraum" },
  { href: "/container-masse", title: "Container Maße", desc: "Außenmaße, Innenmaße und Türöffnungen" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer", desc: "Temperaturgeführte Lagerung" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer", desc: "Mobile Arbeitsräume und Baustellenbüros" },
];

export default function OpenSideContainerKaufen({ embedded = false, showProducts = true }) {
  return (
    <SeoPageLayout
      breadcrumb={[
        { label: "Container kaufen", href: "/container-kaufen" },
        { label: "Container mit offener Seite kaufen" }
      ]}
      label="Produkt-Ratgeber"
      title="Container mit offener Seite kaufen"
      intro="Container mit offener Seite kaufen – Open Side Container für Lagerung, Baustelle, Gewerbe und sperrige Güter. 20 Fuß und 40 Fuß Modelle, neu oder gebraucht mit Lieferung."
      embedded={embedded}
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

      {showProducts && <ProductListingSection
        id="verfuegbare-open-side-container"
        className="mb-14 scroll-mt-28"
        title="Verfügbare Container mit offener Seite"
        description="Open Side Container mit vollständig öffnender Seitenwand für einen besonders breiten Zugriff auf den Innenraum."
        filterValue="Open Side"
      />}

      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ImageCard
            src={IMG_SIDE_BLUE_1}
            alt="Blauer 40 Fuß High Cube Container mit offener Seite im Containerlager"
            title="Breiter seitlicher Zugriff"
            text="Open Side Container öffnen die lange Seitenwand und erleichtern das Beladen von Paletten, Maschinen und sperrigen Gütern."
          />
          <ImageCard
            src={IMG_20HC_OPEN}
            alt="20 Fuß High Cube Container mit offener Seite und vollständig geöffneter Seitenwand"
            title="20 Fuß und 40 Fuß Varianten"
            text="Kompakte und große Ausführungen sind je nach Stellfläche, Nutzung und benötigtem Stauraum möglich."
          />
        </div>
      </section>

      <SeoSection title="Open Side Container als flexible Lösung für breite Beladung">
        <p>
          Ein <strong className="text-foreground">Container mit offener Seite</strong> ist die ideale Lösung, wenn ein normaler Containerzugang über die Stirnseite nicht ausreicht. Bei dieser Containerart lässt sich eine komplette Seitenwand öffnen, sodass Waren, Maschinen, Paletten oder sperrige Güter deutlich einfacher be- und entladen werden können.
        </p>
        <p>
          Diese Bauweise wird auch als Open Side Container bezeichnet. Sie eignet sich besonders für Baustellen, Gewerbe, Industrie, Landwirtschaft, Eventlogistik und Lagerflächen, bei denen ein schneller und breiter Zugriff auf den Innenraum wichtig ist.
        </p>
        <p>
          Wenn Sie verschiedene Containerarten vergleichen möchten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Überblick über Lagercontainer, Seecontainer, Bürocontainer, Wohncontainer, Kühlcontainer und Spezialcontainer.
        </p>
      </SeoSection>

      <SeoSection title="Warum einen Container mit offener Seite kaufen?">
        <p>
          Der größte Vorteil eines Containers mit offener Seite ist der einfache Zugang. Statt Waren nur durch die Stirntüren ein- und auszuladen, kann die gesamte Seitenwand geöffnet werden. Das spart Zeit und erleichtert die Arbeit besonders bei breiten, schweren oder unhandlichen Gütern.
        </p>
        <p>
          Ein Open Side Container ist besonders praktisch, wenn mit Gabelstapler, Hubwagen oder Kran gearbeitet wird. Auch bei häufigem Be- und Entladen ist die seitliche Öffnung ein großer Vorteil, weil der Innenraum besser erreichbar bleibt.
        </p>
        <p>
          Für klassische Lagerzwecke reicht oft ein normaler <IL to="/lagercontainer-kaufen">Lagercontainer</IL> oder ein robuster <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>. Wenn jedoch die Beladung von der Seite wichtig ist, ist ein Container mit offener Seite die komfortablere Lösung.
        </p>
      </SeoSection>

      <SeoSection title="Container mit offener Seite oder Standardcontainer?">
        <p>
          Ein Standardcontainer besitzt in der Regel Türen an einer Stirnseite. Das ist für viele Lagerzwecke ausreichend. Bei langen oder sperrigen Gütern kann das Beladen jedoch umständlich sein, weil alles von vorne in den Container geschoben werden muss.
        </p>
        <p>
          Ein Container mit offener Seite bietet deutlich mehr Flexibilität. Die seitliche Öffnung ermöglicht direkten Zugriff auf fast die gesamte Innenfläche. Dadurch können Waren besser organisiert, schneller entnommen und einfacher geladen werden.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-3">Ein Standardcontainer eignet sich gut für:</h3>
            <BulletList items={STANDARD_USES} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-3">Ein Container mit offener Seite eignet sich besser für:</h3>
            <BulletList items={OPEN_SIDE_USES} />
          </div>
        </div>
        <p>
          Wenn Sie Zugang von beiden Stirnseiten benötigen, kann auch ein <IL to="/double-door-container-kaufen">Doppeltüren Container</IL> eine sinnvolle Alternative sein.
        </p>
      </SeoSection>

      <SeoSection title="20 Fuß Container mit offener Seite">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-3">
            <p>
              Ein 20 Fuß Container mit offener Seite ist eine kompakte und flexible Lösung für Kunden, die viel Zugriff, aber nicht zu viel Stellfläche benötigen. Er eignet sich besonders für Baustellen, Handwerksbetriebe, Gewerbe, Eventlogistik und private Lagerung.
            </p>
            <p>
              Durch die seitlich öffnende Wand können Werkzeuge, Maschinen, Möbel, Baumaterialien oder Paletten deutlich einfacher ein- und ausgeladen werden. Das macht diese Variante besonders praktisch, wenn der Container regelmäßig genutzt wird.
            </p>
            <p>
              Wenn Sie eine klassische 20 Fuß Lösung vergleichen möchten, finden Sie weitere Informationen auf unserer Seite <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL>.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_20HC_FRONT}
              alt="20 Fuß High Cube Open Side Container von vorne geöffnet"
              title="20 Fuß Open Side"
              text="Kompakte Stellfläche mit breiter seitlicher Öffnung."
              className="h-full"
            />
          </div>
        </div>
      </SeoSection>

      <SeoSection title="40 Fuß Container mit offener Seite">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_SIDE_BLUE_OPEN}
              alt="40 Fuß Open Side Container mit weit geöffneter Seitenwand"
              title="40 Fuß Open Side"
              text="Viel Stauraum und komfortabler Zugriff entlang der langen Seite."
              className="h-full"
            />
          </div>
          <div className="lg:col-span-3 space-y-3">
            <p>
              Ein 40 Fuß Container mit offener Seite bietet besonders viel Stauraum und gleichzeitig sehr komfortablen Zugang. Diese Variante eignet sich ideal für große Warenmengen, sperrige Produkte, Maschinen, Industriebedarf, Messebau, Eventmaterial oder umfangreiche Lagerflächen.
            </p>
            <p>
              Bei einem langen Container ist der seitliche Zugang besonders wertvoll, weil Waren nicht durch den gesamten Container bewegt werden müssen. Stattdessen kann direkt an der passenden Stelle geladen oder entnommen werden.
            </p>
            <p>
              Für größere Lagerprojekte lohnt sich auch ein Vergleich mit der Seite <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL>. Wenn zusätzlich mehr Innenhöhe benötigt wird, kann ein 40 Fuß High Cube Open Side Container besonders interessant sein.
            </p>
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Container mit offener Seite gebraucht kaufen">
        <p>
          Ein gebrauchter Container mit offener Seite kann eine wirtschaftliche Wahl sein, wenn Sie eine flexible Lagerlösung zu einem günstigeren Preis suchen. Gebrauchsspuren wie Kratzer, Dellen oder leichte Roststellen sind bei gebrauchten Containern normal. Entscheidend ist jedoch, dass die Türen, Scharniere und Dichtungen zuverlässig funktionieren.
        </p>
        <p>Beim Kauf eines gebrauchten Open Side Containers sollten Sie prüfen:</p>
        <BulletList items={USED_CHECKS} />
        <p>
          Ein gebrauchter Container lohnt sich besonders, wenn Funktion, Zugänglichkeit und Preis wichtiger sind als ein neuwertiges Erscheinungsbild.
        </p>
      </SeoSection>

      <SeoSection title="Einsatzbereiche für Open Side Container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-5">
          <div className="lg:col-span-3 space-y-3">
            <p>
              Container mit offener Seite sind überall dort sinnvoll, wo Waren schnell, breitflächig oder seitlich geladen werden müssen. Sie werden häufig von Bauunternehmen, Industrie, Handel, Messebau, Landwirtschaft und Eventbetrieben genutzt.
            </p>
            <p>Typische Einsatzbereiche:</p>
            <BulletList items={USE_CASES} />
            <p>
              Wenn zusätzlich gekühlte Lagerung erforderlich ist, ist ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> die bessere Lösung. Wenn Arbeitsräume benötigt werden, eignet sich ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> besser.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_SIDE_BLUE_2}
              alt="Blauer High Cube Open Side Container mit geöffneter Seite"
              title="Gewerbe, Logistik und Events"
              text="Die seitliche Öffnung erleichtert schnelle Entnahme und übersichtliche Lagerorganisation."
              className="h-full"
            />
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Maße und technische Daten">
        <p>
          Container mit offener Seite sind häufig als 20 Fuß und 40 Fuß Variante erhältlich. Die genauen Maße können je nach Hersteller, Baujahr und Ausführung leicht variieren. Besonders wichtig sind Außenmaße, Innenmaße, Türöffnungen, Eigengewicht und nutzbares Volumen.
        </p>
        <p>
          Da die seitliche Öffnung ein zentrales Merkmal ist, sollte vor dem Kauf auch geprüft werden, wie viel Platz seitlich neben dem Container benötigt wird. Die Türen müssen vollständig geöffnet werden können, damit der Vorteil dieser Containerart wirklich genutzt werden kann.
        </p>
        <p>
          Eine vollständige Übersicht zu Außenmaßen, Innenmaßen, Türöffnungen und Volumen finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
        </p>
      </SeoSection>

      <SeoSection title="Lieferung und Aufstellung">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <ImageCard
              src={IMG_GREY_FRONT}
              alt="Grauer 40 Fuß High Cube Open Side Container von vorne geöffnet"
              title="Lieferung mit Standortplanung"
              text="Neben Stellfläche und Zufahrt ist bei Open Side Containern auch Platz zum Öffnen der Seitenwand wichtig."
              className="h-full"
            />
          </div>
          <div className="lg:col-span-3 space-y-3">
            <p>
              Ein Container mit offener Seite kann direkt zum gewünschten Standort geliefert werden. Die Lieferung erfolgt in der Regel per LKW. Je nach Größe und Entladesituation kann ein Kranfahrzeug erforderlich sein.
            </p>
            <p>
              Vor der Lieferung sollte nicht nur die Stellfläche für den Container selbst geprüft werden. Wichtig ist auch genügend Platz entlang der offenen Seite, damit die Türen vollständig geöffnet werden können. Besonders bei 40 Fuß Open Side Containern sollte der Aufstellort sorgfältig geplant werden.
            </p>
            <p>Vor der Lieferung klären:</p>
            <BulletList items={DELIVERY_CHECKS} />
          </div>
        </div>
      </SeoSection>

      <SeoSection title="Vorteile eines Containers mit offener Seite">
        <p>
          Ein Container mit offener Seite bietet deutlich mehr Komfort beim Be- und Entladen als ein Standardcontainer. Besonders bei sperrigen Gütern, häufigem Zugriff oder gewerblicher Nutzung kann diese Bauweise den Arbeitsalltag erheblich erleichtern.
        </p>
        <p>Die wichtigsten Vorteile:</p>
        <BulletList items={ADVANTAGES} />
      </SeoSection>

      <SeoSection title="Jetzt Container mit offener Seite anfragen">
        <p>
          Ob Sie einen neuen Open Side Container kaufen möchten, einen gebrauchten Container mit offener Seite suchen oder eine Lieferung direkt zum Standort benötigen – die passende Lösung hängt von Größe, Zustand, Nutzung und Lieferort ab.
        </p>
        <p>
          Teilen Sie uns mit, welche Größe Sie benötigen, welche Waren gelagert werden sollen und wohin der Container geliefert werden soll. Auf dieser Grundlage erhalten Sie ein passendes Angebot mit verfügbaren Modellen, Preisen und Liefermöglichkeiten.
        </p>
      </SeoSection>

      <CtaBanner text="Container mit offener Seite kaufen – Angebot mit Lieferung erhalten" btnLabel="Jetzt anfragen" btnHref="/angebot" />

      <SeoSection title="Nützliche nächste Seiten">
        <p>Diese Seiten helfen beim Vergleich von Containerarten, Größen, Einsatzbereichen und Speziallösungen:</p>
      </SeoSection>
      <InternalLinkGrid links={RELATED_LINKS} />

      <SeoSection title="FAQ – Container mit offener Seite">
        <FaqAccordion items={FAQS} />
      </SeoSection>
    </SeoPageLayout>
  );
}
