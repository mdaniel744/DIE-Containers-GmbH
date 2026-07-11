"use client";
import { useLocale } from "@/hooks/useLocale";

const strings = {
  de: {
    // ─── NAV / HEADER ────────────────────────────────────────────────────────
    nav: {
      home: "Home",
      catalog: "Container Katalog",
      showAll: "Alle anzeigen →",
      requestQuote: "Kostenloses Angebot anfordern →",
      service: "Container Service",
      delivery: "Container Lieferung",
      dimensions: "Container Maße",
      faq: "FAQ",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Angebot anfordern",
      menu: "Menü",
    },

    // ─── FOOTER ──────────────────────────────────────────────────────────────
    footer: {
      catalog: "Container Katalog",
      guide: "Ratgeber",
      info: "Informationen",
      legal: "Rechtliches",
      tagline: "DIE Container GmbH bietet neue und gebrauchte Container für Lagerung, Transport, Gewerbe, Bau und private Nutzung. Wir stehen für zuverlässige Containerlösungen, klare Kommunikation und professionelle Abwicklung.",
      copyright: "Alle Rechte vorbehalten.",
      disclaimer: "Preise zzgl. Transport · Alle Angaben ohne Gewähr",
    },

    // ─── HERO ─────────────────────────────────────────────────────────────────
    hero: {
      badge: "Nr. 1 in Deutschland",
      title1: "Seecontainer ",
      titleColored: "kaufen",
      title2: " in Deutschland",
      subtitle: "Neue und gebrauchte 10ft, 20ft und 40ft Container zu attraktiven Preisen.",
      ctaExplore: "Container entdecken",
      ctaQuote: "Angebot anfordern",
      stat1: "Container auf Lager",
      stat2: "Express-Lieferung",
      stat3: "Qualitätsgeprüft",
    },

    // ─── WHY CHOOSE US ───────────────────────────────────────────────────────
    whyChooseUs: {
      label: "Vorteile",
      title: "Warum DIE Container GmbH?",
      description: "Zuverlässige Containerlösungen für Unternehmen und Privatkunden in Deutschland und Europa.",
      features: [
        { title: "Deutschlandweite Lieferung", desc: "Wir liefern Ihren Container direkt an Ihren Wunschort in ganz Deutschland." },
        { title: "Transparente Preise", desc: "Keine versteckten Kosten – alle Preise klar und nachvollziehbar." },
        { title: "Neue & gebrauchte Container", desc: "Große Auswahl an neuen und geprüften gebrauchten Containern." },
        { title: "Persönliche Beratung", desc: "Unsere Experten beraten Sie individuell bei der Auswahl." },
        { title: "Individuelle Transportplanung", desc: "Maßgeschneiderte Logistiklösungen für jede Situation." },
      ],
    },

    // ─── ABOUT SECTION (homepage) ────────────────────────────────────────────
    aboutSection: {
      label: "Über DIE Container GmbH",
      title1: "Praktische und robuste ",
      titleColored: "Containerlösungen",
      title2: " für jeden Einsatz",
      body1: "DIE Container GmbH ist Ihr zuverlässiger Partner für den Kauf von neuen und gebrauchten Containern in Deutschland und Europa.",
      body2: "Wir bieten praktische, robuste und flexible Lösungen für Unternehmen, Gewerbe, Bau, Lagerung, Logistik und private Einsatzzwecke – mit klarer Auswahl, transparenten Informationen und professioneller Abwicklung.",
      cta: "Mehr über uns",
      highlights: [
        { value: "DE & EU", label: "Liefergebiet", desc: "Containerlösungen in Deutschland und Europa" },
        { value: "B2B & B2C", label: "Für alle Kunden", desc: "Für Unternehmen, Gewerbe und private Nutzung" },
        { value: "Neu & gebraucht", label: "Klare Auswahl", desc: "Passende Container für verschiedene Einsatzzwecke" },
        { value: "Transparent", label: "Professionell", desc: "Klare Kommunikation und zuverlässige Abwicklung" },
      ],
    },

    // ─── DELIVERY PROCESS ────────────────────────────────────────────────────
    delivery: {
      label: "So funktioniert's",
      title: "In 5 Schritten zum Container",
      description: "Einfach, transparent und schnell – Ihr Weg zum eigenen Container.",
      steps: [
        { label: "Container auswählen", desc: "Finden Sie den passenden Container in unserem Shop." },
        { label: "Lieferadresse eingeben", desc: "Geben Sie Ihren Wunschort für die Lieferung an." },
        { label: "Angebot anfordern", desc: "Fordern Sie ein unverbindliches Angebot an." },
        { label: "Angebot erhalten", desc: "Erhalten Sie Ihr individuelles Angebot per E-Mail." },
        { label: "Lieferung vereinbaren", desc: "Vereinbaren Sie den Liefertermin nach Auftragsbestätigung." },
      ],
      contactLabel: "Direktkontakt",
      contactTitle: "Fragen? Wir sind persönlich für Sie da.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      hoursLabel: "Erreichbar",
      hours: "Mo–Fr 8–18 Uhr",
      contactCta: "Container anfragen",
    },

    // ─── FEATURED PRODUCTS ───────────────────────────────────────────────────
    featured: {
      label: "Beliebte Produkte",
      title: "Unsere meistgefragten Container",
      description: "Entdecken Sie die beliebtesten Container unserer Kunden – von Standard bis Spezial.",
    },

    // ─── CONTAINER TYPES (homepage category grid) ────────────────────────────
    containerTypes: {
      label: "Containertypen",
      title: "Für jeden Einsatz der richtige Container",
      description: "Entdecken Sie unsere Vielfalt an Containertypen – von Standard bis Spezial.",
    },

    // ─── SHOP BY SIZE (homepage size grid) ───────────────────────────────────
    shopBySize: {
      label: "Containergrößen",
      title: "Container nach Größe",
      description: "Finden Sie den passenden Container für Ihr Projekt – von kompakt bis XXL.",
      watchNow: "Jetzt ansehen",
      genericDesc: "Jetzt verfügbar – Details und Preise im Shop.",
      sizes: {
        "10ft": { label: "10 Fuß Container", description: "Kompakt & vielseitig – ideal für Garten, Baustelle und kleine Lagerflächen." },
        "20ft": { label: "20 Fuß Container", description: "Der Klassiker – perfekt als Lager, Werkstatt oder für den Transport." },
        "40ft": { label: "40 Fuß Container", description: "Maximaler Stauraum – für große Projekte und professionelle Nutzung." },
      },
    },

    // ─── FAQ SECTION (homepage) ──────────────────────────────────────────────
    faqSection: {
      label: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf die wichtigsten Fragen rund um den Containerkauf.",
      items: [
        { q: "Was kostet ein Seecontainer?", a: "Die Preise variieren je nach Größe, Zustand und Typ. Ein gebrauchter 20 Fuß Standardcontainer ist ab ca. 1.990 € erhältlich, neue Container starten bei ca. 2.490 €. Hinzu kommen individuelle Transportkosten, die von der Lieferentfernung abhängen. Fordern Sie ein unverbindliches Angebot an für Ihren genauen Preis inklusive Lieferung." },
        { q: "Wie erfolgt die Lieferung?", a: "Wir liefern Ihren Container deutschlandweit per Kranwagen direkt an Ihren Wunschort. Alternativ können Sie den Container bei einem unserer Standorte abholen. Die Lieferung wird individuell geplant und berücksichtigt Zufahrtswege, Abstellfläche und Entlademöglichkeiten." },
        { q: "Kann ich einen gebrauchten Container kaufen?", a: "Ja! Wir bieten eine große Auswahl an geprüften gebrauchten Containern. Alle Gebrauchtcontainer werden vor dem Verkauf auf Wasser- und Winddichtheit überprüft und befinden sich in einem guten, funktionalen Zustand. Generalüberholte Container werden zusätzlich aufbereitet und neu lackiert." },
        { q: "Wie lange dauert die Lieferung?", a: "Die Lieferzeit hängt von Verfügbarkeit und Standort ab. In der Regel beträgt die Lieferzeit 3-7 Werktage nach Auftragsbestätigung. Bei Lagerbeständen in Ihrer Nähe sind auch Express-Lieferungen innerhalb von 48 Stunden möglich." },
      ],
    },

    // ─── PRODUCT CARD ────────────────────────────────────────────────────────
    productCard: {
      from: "Ab",
      transport: "zzgl. Transportkosten",
      details: "Details ansehen",
      quote: "Angebot",
    },

    // ─── SHOP PAGE ───────────────────────────────────────────────────────────
    shop: {
      title: "Alle Container",
      available: "Container verfügbar",
      filter: "Filter",
      sortAsc: "Preis: Niedrigster zuerst",
      sortDesc: "Preis: Höchster zuerst",
      empty: "Keine Container gefunden",
      emptyHint: "Versuchen Sie andere Filterkriterien.",
      resetFilters: "Filter zurücksetzen",
    },

    // ─── FILTER SIDEBAR ──────────────────────────────────────────────────────
    filters: {
      heading: "Filter",
      reset: "Zurücksetzen",
      size: "Containergröße",
      condition: "Zustand",
      type: "Containertyp",
      color: "Farbe",
      priceRange: "Preisbereich",
      allConditions: "Alle Zustände",
      // value = raw product.condition field used for matching (always German)
      // label = what the user sees in the filter UI
      conditionOptions: [
        { value: "Neu", label: "Neu" },
        { value: "Gebraucht", label: "Gebraucht" },
        { value: "Generalüberholt", label: "Generalüberholt" },
      ],
    },

    // ─── PRODUCT DETAIL ──────────────────────────────────────────────────────
    product: {
      notFound: "Produkt nicht gefunden",
      backToShop: "Zurück zum Shop",
      inStock: "Auf Lager",
      from: "Ab",
      priceNote: "zzgl. Transportkosten · Preise netto · inkl. Beratung",
      quantityLabel: "Anzahl Container",
      ctaSingle: "Unverbindliches Angebot anfordern",
      ctaMulti: (n) => `${n} × Container – Angebot anfordern`,
      externalDimensions: "Außenmaße",
      cscLabel: "CSC-Zertifiziert",
      weatherLabel: "Wasser- & Winddicht",
      isoLabel: "ISO-Norm konform",
      qualityLabel: "Qualitätsgeprüft",
      deliveryBadge: "Deutschlandweite Lieferung",
      tabDescription: "Beschreibung",
      tabSpecs: "Technische Daten",
      tabFeatures: "Merkmale",
      tabDelivery: "Versand & Lieferung",
      attrCondition: "Zustand",
      attrType: "Containertyp",
      attrSize: "Größe",
      attrWeight: "Eigengewicht",
      attrPayload: "Nutzlast",
      attrMaterial: "Material",
      attrFloor: "Boden",
      attrDoors: "Türen",
      dimLength: "Länge",
      dimWidth: "Breite",
      dimHeight: "Höhe",
      dimPayload: "Nutzlast",
      kaufen: "kaufen",
      defaultDesc: (title) => `${title} – wind- und wasserdichter ISO-Norm-Stahlcontainer aus wetterfestem Corten-Stahl. Sofort einsatzbereit, stapelbar und individuell umbaubar.`,
    },

    // ─── QUOTE REQUEST ───────────────────────────────────────────────────────
    quote: {
      title: "Angebot anfordern",
      subtitle: "Kostenlos und unverbindlich – in 3 Schritten zum Angebot",
      selectedProduct: "Ausgewähltes Produkt",
      steps: ["Containertyp", "Details & Transport", "Kontaktdaten"],
      back: "Zurück",
      next: "Weiter",
      submit: "Kostenloses Angebot anfordern",
      submitting: "Wird gesendet...",
      successTitle: "Anfrage erfolgreich gesendet!",
      successText: "Vielen Dank für Ihre Anfrage. Wir werden Ihnen innerhalb von 24 Stunden ein individuelles Angebot per E-Mail zusenden.",
      backToHome: "Zurück zur Startseite",
      // Step 1
      step1Title: "Welchen Container benötigen Sie?",
      step1Sub: "Wählen Sie die gewünschte Containerkategorie.",
      step1SubtypePrompt: "Welcher Typ interessiert Sie?",
      categories: [
        { value: "Seecontainer", label: "Seecontainer", desc: "Standard ISO – 10ft, 20ft, 40ft" },
        { value: "Kühlcontainer", label: "Kühlcontainer", desc: "Reefer mit Kühlaggregat" },
        { value: "Modifizierter Container", label: "Modifizierter Container", desc: "Doppeltür, Open Side & Werkstattcontainer" },
        { value: "Container Garage", label: "Container Garage", desc: "Sichere Fahrzeug- & Lagergarage" },
        { value: "Bürocontainer", label: "Bürocontainer", desc: "Mobiler Arbeits- & Büroraum" },
        { value: "Wohncontainer", label: "Wohncontainer", desc: "Flexible Wohnlösung" },
      ],
      subtypes: [
        { value: "Doppeltür", label: "Doppeltür", desc: "Türen an beiden Stirnseiten" },
        { value: "Open Side", label: "Open Side", desc: "Öffenbare Seitenwand" },
        { value: "Werkstattcontainer", label: "Werkstattcontainer", desc: "Ausgebauter Arbeits- und Werkstattcontainer" },
      ],
      // Step 2
      step2Title: "Container-Details & Transport",
      step2Sub: "Konfigurieren Sie Ihren Container und wählen Sie Ihre Transportoption.",
      sizeLabel: "Größe",
      conditionLabel: "Zustand",
      colorLabel: "Farbe",
      quantityLabel2: "Anzahl Container",
      transportLabel: "Transportoption",
      sizePlaceholder: "Größe wählen",
      conditionPlaceholder: "Zustand wählen",
      colorPlaceholder: "Farbe wählen (optional)",
      deliveryDateLabel: "Gewünschtes Lieferdatum",
      deliveryNote: "Das Lieferdatum ist unverbindlich. Wir bemühen uns, Ihren Wunschtermin einzuhalten – eine Lieferung innerhalb von 14 Werktagen ist unser Ziel. Die genaue Terminbestätigung erfolgt nach Auftragserteilung.",
      sizes: [
        { value: "10ft", label: "10 Fuß (Standard)" },
        { value: "20ft", label: "20 Fuß (Standard)" },
        { value: "20ft HC", label: "20 Fuß (High Cube)" },
        { value: "40ft", label: "40 Fuß (Standard)" },
        { value: "40ft HC", label: "40 Fuß (High Cube)" },
      ],
      colors: ["Blau", "Anthrazit", "Grün", "Weiß", "RAL nach Wunsch"],
      conditions: ["Neu", "Gebraucht", "Generalüberholt"],
      transportOptions: [
        { value: "delivery_no_unload", label: "Lieferung ohne Entladung", desc: "Container wird angeliefert, Entladung durch Sie" },
        { value: "delivery_with_unload", label: "Lieferung mit Entladung", desc: "Wir liefern und setzen den Container am Wunschort ab" },
        { value: "self_pickup", label: "Selbstabholung im Depot", desc: "Sie holen den Container direkt bei uns ab" },
      ],
      // Step 3
      step3Title: "Ihre Kontaktdaten",
      step3Sub: "Damit wir Ihnen ein individuelles Angebot zusenden können.",
      firstNameLabel: "Vorname",
      lastNameLabel: "Nachname",
      emailLabel2: "E-Mail-Adresse",
      phoneLabel2: "Telefonnummer",
      companyLabel: "Firma",
      optionalLabel: "optional",
      messageLabel2: "Nachricht",
      messagePlaceholder2: "Besondere Wünsche, Fragen oder Anmerkungen...",
      firstNamePlaceholder: "Max",
      lastNamePlaceholder: "Mustermann",
      emailPlaceholder2: "max@beispiel.de",
      termsText: "Ich akzeptiere die",
      termsAnd: "und die",
      termsConfirm: "Ich bestätige, dass es sich um eine unverbindliche Angebotsanfrage handelt.",
      termsAgb: "AGB",
      termsPrivacy: "Datenschutzerklärung",
    },

    // ─── CONTACT PAGE ────────────────────────────────────────────────────────
    contact: {
      label: "Kontakt",
      title: "Sprechen Sie mit uns",
      subtitle: "Haben Sie Fragen oder benötigen eine Beratung? Unser Team steht Ihnen gerne zur Verfügung.",
      infoItems: [
        { label: "Telefon", value: "0049 163 5393 159", href: "tel:+491635393159" },
        { label: "E-Mail", value: "contact@diecontainers.com", href: "mailto:contact@diecontainers.com" },
        { label: "Adresse", value: "Hermann-Oberth-Str. 23, 85640 Putzbrunn, Deutschland" },
        { label: "Öffnungszeiten", value: "Büro: Mo–Fr 8:00–17:30 | Lager: Mo–Fr 7:30–16:30" },
      ],
      nameLabel: "Name",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      subjectLabel: "Betreff",
      messageLabel: "Nachricht",
      namePlaceholder: "Max Mustermann",
      emailPlaceholder: "max@beispiel.de",
      phonePlaceholder: "+49 30 1234567",
      subjectPlaceholder: "Allgemeine Anfrage",
      messagePlaceholder: "Ihre Nachricht...",
      submit: "Nachricht senden",
      sentTitle: "Nachricht gesendet!",
      sentText: "Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.",
    },

    // ─── FAQ PAGE ────────────────────────────────────────────────────────────
    faqPage: {
      label: "FAQ",
      title: "Häufig gestellte Fragen",
      description: "Antworten auf die wichtigsten Fragen rund um den Containerkauf.",
      categories: [
        {
          title: "Allgemein",
          items: [
            { q: "Was kostet ein Seecontainer?", a: "Die Preise variieren je nach Größe, Zustand und Typ. Ein gebrauchter 20 Fuß Standardcontainer ist ab ca. 1.990 € erhältlich, neue Container starten bei ca. 2.490 €. Hinzu kommen individuelle Transportkosten." },
            { q: "Kann ich einen gebrauchten Container kaufen?", a: "Ja! Alle Gebrauchtcontainer werden vor dem Verkauf auf Wasser- und Winddichtheit überprüft und befinden sich in einem guten, funktionalen Zustand." },
            { q: "Bieten Sie auch Miet-Container an?", a: "Aktuell konzentrieren wir uns auf den Verkauf. Für Mietanfragen wenden Sie sich bitte direkt an uns." },
          ],
        },
        {
          title: "Lieferung",
          items: [
            { q: "Wie erfolgt die Lieferung?", a: "Wir liefern per Kranwagen direkt an Ihren Wunschort. Die Lieferung wird individuell geplant und berücksichtigt Zufahrtswege und Abstellfläche." },
            { q: "Wie lange dauert die Lieferung?", a: "In der Regel 3-7 Werktage nach Auftragsbestätigung. Express-Lieferungen innerhalb von 48 Stunden sind möglich." },
            { q: "Was kostet die Lieferung?", a: "Die Transportkosten richten sich nach Entfernung und Container-Größe. Sie erhalten die genauen Kosten in Ihrem individuellen Angebot." },
          ],
        },
        {
          title: "Bestellung",
          items: [
            { q: "Wie bestelle ich einen Container?", a: "Wählen Sie Ihren gewünschten Container aus, fordern Sie ein unverbindliches Angebot an und bestätigen Sie das Angebot per E-Mail oder Telefon." },
            { q: "Kann ich online bezahlen?", a: "Nein, eine Online-Zahlung ist nicht möglich. Nach Auftragsbestätigung erhalten Sie eine Rechnung mit unseren Bankdaten." },
            { q: "Ist die Angebotsanfrage verbindlich?", a: "Nein, alle Anfragen über unsere Website sind unverbindlich und kostenlos." },
          ],
        },
      ],
    },

    // ─── ABOUT PAGE ──────────────────────────────────────────────────────────
    about: {
      label: "Über uns",
      title: "DIE Container GmbH – Ihr Partner für ",
      titleColored: "Containerlösungen",
      title2: " in Deutschland und Europa",
      body: "DIE Container GmbH ist Ihr zuverlässiger Partner für den Kauf von neuen und gebrauchten Containern in Deutschland und Europa. Wir bieten praktische, robuste und flexible Containerlösungen für Unternehmen, Gewerbe, Bau, Lagerung, Logistik und private Einsatzzwecke. Unser Ziel ist es, Kunden eine klare Auswahl, transparente Informationen und eine professionelle Abwicklung beim Containerkauf zu bieten.",
      imgAlt: "Container Lieferung",
      stats: [
        { value: "Neu", label: "Neue Container" },
        { value: "Gebraucht", label: "Geprüfte Auswahl" },
        { value: "DE & EU", label: "Deutschland und Europa" },
        { value: "B2B & B2C", label: "Unternehmen und Privatkunden" },
      ],
      trustLabel: "Vertrauen",
      trustTitle: "Warum DIE Container GmbH?",
      trustItems: [
        { title: "Große Auswahl", desc: "Von 10-Fuß bis 40-Fuß-Containern bieten wir eine Vielzahl von Größen, um Ihre Lager-, Transport- und weitere Anforderungen zu erfüllen." },
        { title: "Klare Informationen", desc: "Wir schaffen Transparenz bei Auswahl, Zustand, Einsatzmöglichkeiten und Ablauf des Containerkaufs." },
        { title: "Unser Team", desc: "Hinter DIE Container GmbH steht ein engagiertes Team aus erfahrenen Fachleuten. Wir arbeiten strukturiert und lösungsorientiert und sind stets bestrebt, für jede Anforderung die bestmögliche Lösung zu finden." },
        { title: "Unsere Werte", desc: "Integrität, Qualität und ein Innovationsgeist prägen unser tägliches Handeln. Wir arbeiten verantwortungsbewusst und transparent, mit Fokus auf nachhaltige Lösungen." },
      ],
      valuesLabel: "Unsere Werte",
      valuesTitle: "Wofür wir stehen",
      values: [
        { title: "Qualität", desc: "Jeder Container wird vor dem Verkauf sorgfältig geprüft und getestet." },
        { title: "Kundenservice", desc: "Persönliche Beratung von erfahrenen Container-Experten – von Lager bis Sonderprojekt." },
        { title: "Flexible Lösungen", desc: "Praktische Containerlösungen für Lagerung, Transport, Gewerbe, Bau und private Nutzung." },
        { title: "Professionelle Abwicklung", desc: "Klare Kommunikation und ein zuverlässiger Ablauf vom Erstkontakt bis zum Kauf." },
      ],
    },

    // ─── PRODUCT DETAIL — extended strings ───────────────────────────────────
    productDetail: {
      titleAction: "kaufen",
      typeSpecific: {
        "Kühlcontainer": "Das integrierte Kühlaggregat ermöglicht präzise Temperaturregulierung von -25 °C bis +25 °C. Ideal für lebensmittelverarbeitende Betriebe, Pharmaunternehmen sowie die Lagerung temperaturempfindlicher Güter. Die innere Edelstahlverkleidung ist leicht zu reinigen und erfüllt alle Hygieneanforderungen.",
        "Bürocontainer": "Die Innenausstattung umfasst eine vollständige Elektroinstallation mit Sicherungskasten, LED-Beleuchtung und Steckdosen sowie Doppelglasscheiben mit integriertem Sonnenschutz. Der PVC-Boden auf Vollwärmeisolierung sorgt ganzjährig für angenehme Arbeitstemperaturen – kein zusätzliches Heizsystem erforderlich.",
        "Open Side": "Die vollständig öffenbare Seitenwand mit CSC-zertifizierten Türflügeln ermöglicht das Be- und Entladen per Gabelstapler oder Förderband – ohne Wendemanöver, direkt von der Seite. Besonders gefragt im Einzelhandel, auf Messen und in der Logistik.",
      },
      seoPara2: (title, floor) => `Der ${title} von DIE Container GmbH ist aus hochwertigem Corten-Stahl (wetterfester Baustahl nach EN 10025-5) gefertigt. Die natürliche Oxidationsschutzschicht des Corten-Stahls macht aufwendige Oberflächenbehandlungen überflüssig und sorgt für eine außergewöhnlich lange Lebensdauer – auch unter extremen Witterungsbedingungen. Alle Schweißnähte sind nach ISO 3834 wasserdicht ausgeführt; der ${floor} garantiert maximale Belastbarkeit und Widerstandsfähigkeit gegen mechanischen Abrieb.`,
      seoPara3: (size, type) => `Einsatzbereiche: Der ${size} ${type}-Container eignet sich hervorragend als Lager-, Werkzeug- und Materialcontainer auf Baustellen, als Außenlager für Industrie und Handel, als sicherer Archiv- und Aktenschrank oder als Basis für individuelle Containerumbauten (Wohncontainer, Pop-up-Stores, Sanitärcontainer). Dank seiner standardisierten ISO-Außenmaße ist er stapelbar und problemlos mit Kran, Reach-Stacker oder Gabelstapler handhabbar.`,
      seoPara4: (cscCertified) => `Qualitätssicherung & Zertifizierung: Vor der Auslieferung durchläuft jeder Container eine mehrstufige Qualitätsprüfung durch unser zertifiziertes Serviceteam: Sichtprüfung aller Strukturbauteile, Wassereinbringtest auf Dichheit, Messung der Bodentraglast sowie Funktionsprüfung aller Türverriegelungen. ${cscCertified ? "Das beigelegte CSC-Zertifikat (Convention for Safe Containers) bestätigt die Verwendbarkeit im internationalen Seefrachtverkehr." : ""} Auf Wunsch kann ein TÜV-Gutachten als Zusatzleistung beauftragt werden.`,
      seoPara5: "Lieferung & Service: DIE Container GmbH liefert deutschlandweit mit eigenem Kranfahrzeug innerhalb von 72 Stunden direkt an Ihren Wunschort – inklusive fachmännischer Abladeberatung. Unser Team berät Sie kostenlos zu Untergrundbeschaffenheit, Aufstellgenehmigungen und individuellen Umbauwünschen. Fordern Sie jetzt Ihr unverbindliches Angebot an.",
      metaFallback: (title, price) => `${title} kaufen – wind- und wasserdichter ISO-Stahlcontainer von DIE Container GmbH. Ab ${price} €, deutschlandweite Lieferung.`,
    },

    // ─── FOOTER LINK LABELS (only links that have EN equivalents) ─────────────
    footerInfoLinks: [
      { label: "Über uns", path: "/ueber-uns" },
      { label: "Kontakt", path: "/kontakt" },
      { label: "FAQ", path: "/faq" },
      { label: "Container Kaufberater", path: "/kaufberater" },
    ],

    // ─── CONTACT BANNER (shared component) ──────────────────────────────────
    contactBanner: {
      label: "Haben Sie Fragen?",
      title: "Wir beraten Sie persönlich & kostenlos",
      description: "Unser Team hilft Ihnen, den richtigen Container für Ihre Anforderungen zu finden.",
      ctaPhone: "0049 163 5393 159",
      ctaContact: "Kontakt aufnehmen",
    },

    // ─── FOOTER LINK ARRAYS ──────────────────────────────────────────────────
    footerShopLinks: [
      { label: "Seecontainer kaufen", path: "/seecontainer-kaufen" },
      { label: "10 Fuß Container", path: "/10-fuss-container-kaufen" },
      { label: "20 Fuß Container", path: "/20-fuss-container-kaufen" },
      { label: "40 Fuß Container", path: "/40-fuss-container-kaufen" },
      { label: "Open Side Container", path: "/open-side-container-kaufen" },
      { label: "Double Door Container", path: "/double-door-container-kaufen" },
      { label: "Lagercontainer", path: "/lagercontainer-kaufen" },
      { label: "Bürocontainer", path: "/buerocontainer-kaufen" },
      { label: "Kühlcontainer", path: "/kuehlcontainer-kaufen" },
      { label: "Wohncontainer", path: "/wohncontainer-kaufen" },
      { label: "Alle Container", path: "/shop" },
    ],
    footerGuideLinks: [
      { label: "Container Maße", path: "/container-masse" },
      { label: "Container Gewicht", path: "/container-gewicht" },
      { label: "Container Kosten", path: "/container-kosten" },
      { label: "Container Fundament", path: "/container-fundament" },
      { label: "Container Lieferung", path: "/container-lieferung" },
      { label: "Container Genehmigung", path: "/container-genehmigung" },
    ],
    footerLegalLinks: [
      { label: "Impressum", path: "/impressum" },
      { label: "Datenschutzerklärung", path: "/datenschutz" },
      { label: "Cookie Policy", path: "/cookie-policy" },
      { label: "AGB", path: "/agb" },
      { label: "Widerrufsrecht", path: "/widerrufsrecht" },
      { label: "Rückgabe & Erstattung", path: "/rueckgabe" },
      { label: "Versand & Lieferung", path: "/versand" },
      { label: "Zahlungsbedingungen", path: "/zahlungsbedingungen" },
      { label: "Allgemeine Geschäftsbedingungen (EN)", path: "/general-terms" },
      { label: "Mehrwertsteuer & Zölle", path: "/vat-duties" },
    ],

    // ─── SHARED CATEGORY PAGE STRINGS ────────────────────────────────────────
    categoryPage: {
      breadcrumbHome: "Startseite",
      breadcrumbCatalog: "Container Katalog",
      allConditions: "Alle Zustände",
      allSizes: "Alle Größen",
      moreCategories: "Weitere Kategorien",
      sortAsc: "Preis aufsteigend",
      sortDesc: "Preis absteigend",
      noContainersGeneric: "Keine Container gefunden",
      resetFilter: "Filter zurücksetzen",
      crossLinks: {
        "10ft": "10 Fuß Container",
        "20ft": "20 Fuß Container",
        "40ft": "40 Fuß Container",
        kuehl: "Kühlcontainer",
        buero: "Bürocontainer",
        openside: "Open Side Container",
      },
    },

    // ─── PER-CATEGORY PAGE CONTENT ───────────────────────────────────────────
    cat10ft: {
      title: "10 Fuß Container kaufen",
      label: "Produktkategorie",
      description: "Kompakte ISO-Seecontainer mit ca. 15,7 m³ Volumen – ideal für Garten, Baustelle und kleine Lagerflächen. Gebraucht ab 990 €, neu ab 1.890 €.",
      guideLink: "→ Ratgeber: 10 Fuß Container – Maße, Preise & Anwendungen",
      guidePath: "/10-fuss-container-kaufen",
      noContainers: "Keine 10 Fuß Container gefunden",
    },
    cat20ft: {
      title: "20 Fuß Container kaufen",
      label: "Produktkategorie",
      description: "Der meistverkaufte ISO-Seecontainer weltweit – ca. 33 m³ Volumen, ideal als Lager, Werkstatt oder für den Transport. Gebraucht ab 1.990 €, neu ab 2.490 €.",
      guideLink: "→ Ratgeber: 20 Fuß Container – Maße, Gewicht & Preise",
      guidePath: "/20-fuss-container-kaufen",
      noContainers: "Keine 20 Fuß Container gefunden",
    },
    cat40ft: {
      title: "40 Fuß Container kaufen",
      label: "Produktkategorie",
      description: "Maximaler Stauraum mit ca. 67 m³ Volumen – ideal für große Projekte, professionelle Lagerung und Wohn- oder Büroausbauten. Gebraucht ab 2.990 €, neu ab 3.990 €.",
      guideLink: "→ Ratgeber: 40 Fuß Container – Maße, Typen & Preise",
      guidePath: "/40-fuss-container-kaufen",
      noContainers: "Keine 40 Fuß Container gefunden",
    },
    catKuehl: {
      title: "Kühlcontainer kaufen",
      label: "Produktkategorie",
      description: "Refrigerated Container (Reefer) mit integriertem Kühlaggregat – Temperaturbereiche von -25 °C bis +25 °C. Ideal für Lebensmittel, Pharmazeutika und temperaturempfindliche Güter.",
      guideLink: "→ Ratgeber: Kühlcontainer kaufen – Preise, Typen & technische Anforderungen",
      guidePath: "/kuehlcontainer-kaufen",
      noContainers: "Keine Kühlcontainer gefunden",
    },
    catBuero: {
      title: "Bürocontainer kaufen",
      label: "Produktkategorie",
      description: "Schlüsselfertige Bürocontainer mit Elektroinstallation, Isolierung, Fenster und Tür – sofort einsatzbereit als mobiles Büro, Baubüro oder Sozialraum. Ab 5.900 €.",
      guideLink: "→ Ratgeber: Bürocontainer kaufen – Ausstattung, Preise & Genehmigung",
      guidePath: "/buerocontainer-kaufen",
      noContainers: "Keine Bürocontainer gefunden",
    },
    catOpenSide: {
      title: "Open Side Container kaufen",
      label: "Produktkategorie",
      description: "Seecontainer mit vollständig öffnbarer Längsseite – maximale Zugänglichkeit für Gabelstaplerbetrieb, sperrige Güter und schnelles Be- und Entladen. In 20 und 40 Fuß erhältlich.",
      guideLink: "→ Ratgeber: Open Side Container kaufen – Typen, Preise & Einsatzgebiete",
      guidePath: "/open-side-container-kaufen",
      noContainers: "Keine Open Side Container gefunden",
    },

    // ─── KAUFBERATER ─────────────────────────────────────────────────────────
    kaufberater: {
      label: "Kaufberater",
      title: "Welcher Container passt zu Ihnen?",
      subtitle: "Beantworten Sie 3 kurze Fragen und erhalten Sie eine Empfehlung.",
      questionOf: (n, total) => `Frage ${n} von ${total}`,
      back: "Zurück",
      next: "Weiter",
      getRecommendation: "Empfehlung erhalten",
      ourRecommendation: "Unsere Empfehlung",
      viewContainer: "Container ansehen",
      restart: "Nochmal starten",
      questions: [
        {
          q: "Wofür möchten Sie den Container nutzen?",
          options: [
            { value: "storage", label: "Lagerung", desc: "Waren, Möbel, Materialien" },
            { value: "office", label: "Werkstatt / Büro", desc: "Arbeitsraum oder Büro" },
            { value: "transport", label: "Transport", desc: "Verschiffung oder Umzug" },
            { value: "special", label: "Spezialeinsatz", desc: "Kühlung, Events, Gastronomie" },
          ],
        },
        {
          q: "Wie viel Platz benötigen Sie?",
          options: [
            { value: "small", label: "Wenig (ca. 7 m²)", desc: "10 Fuß – für kleine Mengen" },
            { value: "medium", label: "Mittel (ca. 14 m²)", desc: "20 Fuß – der Standard" },
            { value: "large", label: "Viel (ca. 28 m²)", desc: "40 Fuß – maximaler Platz" },
          ],
        },
        {
          q: "Welches Budget haben Sie eingeplant?",
          options: [
            { value: "low", label: "Bis 2.500 €", desc: "Gebrauchte Container" },
            { value: "mid", label: "2.500 – 5.000 €", desc: "Neue Standard-Container" },
            { value: "high", label: "Über 5.000 €", desc: "Spezial- oder Bürocontainer" },
          ],
        },
      ],
    },

    // ─── COMMON ──────────────────────────────────────────────────────────────
    common: {
      watchNow: "Jetzt ansehen",
      requestQuote: "Angebot anfordern",
      requestFreeQuote: "Kostenloses Angebot anfordern",
      details: "Details ansehen",
      menu: "Menü",
      required: "Pflichtfeld",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  ENGLISH
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      home: "Home",
      catalog: "Container Catalog",
      showAll: "Show all →",
      requestQuote: "Request a free quote →",
      service: "Container Service",
      delivery: "Container Delivery",
      dimensions: "Container Dimensions",
      faq: "FAQ",
      about: "About us",
      contact: "Contact",
      cta: "Request a quote",
      menu: "Menu",
    },

    footer: {
      catalog: "Container Catalog",
      guide: "Guide",
      info: "Information",
      legal: "Legal",
      tagline: "DIE Container GmbH offers new and used containers for storage, transport, trade, construction and private use, backed by clear communication and professional handling.",
      copyright: "All rights reserved.",
      disclaimer: "Prices excl. transport · All information without guarantee",
    },

    hero: {
      badge: "No. 1 in Germany",
      title1: "",
      titleColored: "Buy",
      title2: " shipping containers in Germany",
      subtitle: "New and used 10ft, 20ft and 40ft containers at attractive prices.",
      ctaExplore: "Explore containers",
      ctaQuote: "Request a quote",
      stat1: "Containers in stock",
      stat2: "Express delivery",
      stat3: "Quality checked",
    },

    whyChooseUs: {
      label: "Benefits",
      title: "Why DIE Container GmbH?",
      description: "Reliable container solutions for businesses and private customers in Germany and Europe.",
      features: [
        { title: "Nationwide delivery", desc: "We deliver your container directly to your desired location throughout Germany." },
        { title: "Transparent pricing", desc: "No hidden costs – all prices clear and transparent." },
        { title: "New & used containers", desc: "Wide selection of new and inspected used containers." },
        { title: "Personal consultation", desc: "Our experts provide individual advice to help you choose." },
        { title: "Individual transport planning", desc: "Tailored logistics solutions for every situation." },
      ],
    },

    aboutSection: {
      label: "About DIE Container GmbH",
      title1: "Practical and robust ",
      titleColored: "container solutions",
      title2: " for every use",
      body1: "DIE Container GmbH is your reliable partner for buying new and used containers in Germany and Europe.",
      body2: "We provide practical, robust and flexible solutions for businesses, trade, construction, storage, logistics and private use, with clear choices, transparent information and professional handling.",
      cta: "More about us",
      highlights: [
        { value: "DE & EU", label: "Service area", desc: "Container solutions across Germany and Europe" },
        { value: "B2B & B2C", label: "For every customer", desc: "For businesses, trade and private use" },
        { value: "New & used", label: "Clear selection", desc: "Suitable containers for different applications" },
        { value: "Transparent", label: "Professional", desc: "Clear communication and reliable handling" },
      ],
    },

    delivery: {
      label: "How it works",
      title: "5 steps to your container",
      description: "Simple, transparent and fast – your path to your own container.",
      steps: [
        { label: "Select a container", desc: "Find the right container in our shop." },
        { label: "Enter delivery address", desc: "Tell us where you want your container delivered." },
        { label: "Request a quote", desc: "Request a no-obligation quote." },
        { label: "Receive your quote", desc: "Get your personalised quote by email." },
        { label: "Arrange delivery", desc: "Schedule your delivery date after order confirmation." },
      ],
      contactLabel: "Direct contact",
      contactTitle: "Questions? We are personally here for you.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Available",
      hours: "Mon–Fri 8am–6pm",
      contactCta: "Enquire about container",
    },

    featured: {
      label: "Popular products",
      title: "Our most requested containers",
      description: "Discover the most popular containers from our customers – from standard to special.",
    },

    containerTypes: {
      label: "Container types",
      title: "The right container for every purpose",
      description: "Discover our range of container types – from standard to specialist.",
    },

    shopBySize: {
      label: "Container sizes",
      title: "Containers by size",
      description: "Find the right container for your project – from compact to XXL.",
      watchNow: "View now",
      genericDesc: "Now available – details and prices in the shop.",
      sizes: {
        "10ft": { label: "10-foot container", description: "Compact & versatile – ideal for gardens, construction sites and small storage areas." },
        "20ft": { label: "20-foot container", description: "The classic – perfect as a storage unit, workshop or for transport." },
        "40ft": { label: "40-foot container", description: "Maximum storage space – for large projects and professional use." },
      },
    },

    faqSection: {
      label: "FAQ",
      title: "Frequently asked questions",
      description: "Answers to the most important questions about buying containers.",
      items: [
        { q: "How much does a shipping container cost?", a: "Prices vary depending on size, condition and type. A used 20ft standard container is available from approx. €1,990, new containers start at approx. €2,490. Individual transport costs are added depending on the delivery distance. Request a non-binding quote for your exact price including delivery." },
        { q: "How is delivery handled?", a: "We deliver your container throughout Germany by crane truck directly to your desired location. Alternatively, you can collect the container from one of our depots. Delivery is planned individually and takes into account access routes, parking areas and unloading options." },
        { q: "Can I buy a used container?", a: "Yes! We offer a wide selection of inspected used containers. All used containers are checked for water and wind tightness before sale and are in good, functional condition. Refurbished containers are additionally reconditioned and repainted." },
        { q: "How long does delivery take?", a: "Delivery time depends on availability and location. Typically 3–7 working days after order confirmation. Express deliveries within 48 hours are possible for stock near you." },
      ],
    },

    productCard: {
      from: "From",
      transport: "excl. transport costs",
      details: "View details",
      quote: "Quote",
    },

    shop: {
      title: "All containers",
      available: "containers available",
      filter: "Filter",
      sortAsc: "Price: Lowest first",
      sortDesc: "Price: Highest first",
      empty: "No containers found",
      emptyHint: "Try different filter criteria.",
      resetFilters: "Reset filters",
    },

    filters: {
      heading: "Filter",
      reset: "Reset",
      size: "Container size",
      condition: "Condition",
      type: "Container type",
      color: "Color",
      priceRange: "Price range",
      allConditions: "All conditions",
      // value = raw product.condition field used for matching (German, always)
      // label = what the user sees in the filter UI (English here)
      conditionOptions: [
        { value: "Neu", label: "New" },
        { value: "Gebraucht", label: "Used" },
        { value: "Generalüberholt", label: "Fully refurbished" },
      ],
    },

    product: {
      notFound: "Product not found",
      backToShop: "Back to shop",
      inStock: "In stock",
      from: "From",
      priceNote: "excl. transport costs · net prices · incl. consultation",
      quantityLabel: "Number of containers",
      ctaSingle: "Request a non-binding quote",
      ctaMulti: (n) => `${n} × containers – Request a quote`,
      externalDimensions: "External dimensions",
      cscLabel: "CSC Certified",
      weatherLabel: "Water & wind tight",
      isoLabel: "ISO standard compliant",
      qualityLabel: "Quality checked",
      deliveryBadge: "Nationwide delivery",
      tabDescription: "Description",
      tabSpecs: "Technical specs",
      tabFeatures: "Features",
      tabDelivery: "Shipping & delivery",
      attrCondition: "Condition",
      attrType: "Container type",
      attrSize: "Size",
      attrWeight: "Tare weight",
      attrPayload: "Payload",
      attrMaterial: "Material",
      attrFloor: "Floor",
      attrDoors: "Doors",
      dimLength: "Length",
      dimWidth: "Width",
      dimHeight: "Height",
      dimPayload: "Payload",
      kaufen: "buy",
      defaultDesc: (title) => `${title} – waterproof and windproof ISO standard steel container made from weather-resistant Corten steel. Ready to use immediately, stackable and individually convertible.`,
    },

    quote: {
      title: "Request a quote",
      subtitle: "Free and non-binding – get a quote in 3 steps",
      selectedProduct: "Selected product",
      steps: ["Container type", "Details & transport", "Contact details"],
      back: "Back",
      next: "Next",
      submit: "Request a free quote",
      submitting: "Sending...",
      successTitle: "Request sent successfully!",
      successText: "Thank you for your request. We will send you a personalised quote by email within 24 hours.",
      backToHome: "Back to homepage",
      // Step 1
      step1Title: "Which container do you need?",
      step1Sub: "Select the container category you are interested in.",
      step1SubtypePrompt: "Which type are you interested in?",
      categories: [
        { value: "Seecontainer", label: "Shipping container", desc: "Standard ISO – 10ft, 20ft, 40ft" },
        { value: "Kühlcontainer", label: "Refrigerated container", desc: "Reefer with cooling unit" },
        { value: "Modifizierter Container", label: "Modified container", desc: "Double door, open side & workshop container" },
        { value: "Container Garage", label: "Container garage", desc: "Secure vehicle & storage garage" },
        { value: "Bürocontainer", label: "Office container", desc: "Mobile workspace & office" },
        { value: "Wohncontainer", label: "Living container", desc: "Flexible living solution" },
      ],
      subtypes: [
        { value: "Doppeltür", label: "Double door", desc: "Doors on both end faces" },
        { value: "Open Side", label: "Open side", desc: "Openable side wall" },
        { value: "Werkstattcontainer", label: "Workshop container", desc: "Fitted workshop and work container" },
      ],
      // Step 2
      step2Title: "Container details & transport",
      step2Sub: "Configure your container and choose your transport option.",
      sizeLabel: "Size",
      conditionLabel: "Condition",
      colorLabel: "Color",
      quantityLabel2: "Number of containers",
      transportLabel: "Transport option",
      sizePlaceholder: "Select size",
      conditionPlaceholder: "Select condition",
      colorPlaceholder: "Select color (optional)",
      deliveryDateLabel: "Preferred delivery date",
      deliveryNote: "The delivery date is non-binding. We will do our best to meet your preferred date – delivery within 14 working days is our target. Exact date confirmation follows after order placement.",
      sizes: [
        { value: "10ft", label: "10 ft (Standard)" },
        { value: "20ft", label: "20 ft (Standard)" },
        { value: "20ft HC", label: "20 ft (High Cube)" },
        { value: "40ft", label: "40 ft (Standard)" },
        { value: "40ft HC", label: "40 ft (High Cube)" },
      ],
      colors: ["Blue", "Anthracite", "Green", "White", "RAL custom colour"],
      conditions: ["New", "Used", "Fully refurbished"],
      transportOptions: [
        { value: "delivery_no_unload", label: "Delivery without unloading", desc: "Container is delivered, you handle unloading" },
        { value: "delivery_with_unload", label: "Delivery with unloading", desc: "We deliver and place the container at your desired location" },
        { value: "self_pickup", label: "Self-collection at depot", desc: "You collect the container directly from us" },
      ],
      // Step 3
      step3Title: "Your contact details",
      step3Sub: "So we can send you a personalised quote.",
      firstNameLabel: "First name",
      lastNameLabel: "Last name",
      emailLabel2: "Email address",
      phoneLabel2: "Phone number",
      companyLabel: "Company",
      optionalLabel: "optional",
      messageLabel2: "Message",
      messagePlaceholder2: "Special requests, questions or comments...",
      firstNamePlaceholder: "John",
      lastNamePlaceholder: "Smith",
      emailPlaceholder2: "john@example.com",
      termsText: "I accept the",
      termsAnd: "and the",
      termsConfirm: "I confirm that this is a non-binding quote request.",
      termsAgb: "Terms & Conditions",
      termsPrivacy: "Privacy Policy",
    },

    contact: {
      label: "Contact",
      title: "Talk to us",
      subtitle: "Do you have questions or need advice? Our team is happy to help.",
      infoItems: [
        { label: "Phone", value: "0049 163 5393 159", href: "tel:+491635393159" },
        { label: "Email", value: "contact@diecontainers.com", href: "mailto:contact@diecontainers.com" },
        { label: "Address", value: "Hermann-Oberth-Str. 23, 85640 Putzbrunn, Germany" },
        { label: "Opening hours", value: "Office: Mon–Fri 8:00–17:30 | Warehouse: Mon–Fri 7:30–16:30" },
      ],
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      subjectLabel: "Subject",
      messageLabel: "Message",
      namePlaceholder: "John Smith",
      emailPlaceholder: "john@example.com",
      phonePlaceholder: "+49 30 1234567",
      subjectPlaceholder: "General enquiry",
      messagePlaceholder: "Your message...",
      submit: "Send message",
      sentTitle: "Message sent!",
      sentText: "Thank you. We will get back to you as soon as possible.",
    },

    faqPage: {
      label: "FAQ",
      title: "Frequently asked questions",
      description: "Answers to the most important questions about buying containers.",
      categories: [
        {
          title: "General",
          items: [
            { q: "How much does a shipping container cost?", a: "Prices vary depending on size, condition and type. A used 20ft standard container is available from approx. €1,990, new containers start at approx. €2,490. Individual transport costs are added." },
            { q: "Can I buy a used container?", a: "Yes! All used containers are checked for water and wind tightness before sale and are in good, functional condition." },
            { q: "Do you also offer container rental?", a: "Currently we focus on sales. For rental enquiries please contact us directly." },
          ],
        },
        {
          title: "Delivery",
          items: [
            { q: "How is delivery handled?", a: "We deliver by crane truck directly to your desired location. Delivery is planned individually and takes into account access routes and parking areas." },
            { q: "How long does delivery take?", a: "Typically 3–7 working days after order confirmation. Express deliveries within 48 hours are possible." },
            { q: "What does delivery cost?", a: "Transport costs depend on distance and container size. You will receive the exact costs in your personalised quote." },
          ],
        },
        {
          title: "Ordering",
          items: [
            { q: "How do I order a container?", a: "Select your desired container, request a non-binding quote and confirm the quote by email or phone." },
            { q: "Can I pay online?", a: "No, online payment is not available. After order confirmation you will receive an invoice with our bank details." },
            { q: "Is the quote request binding?", a: "No, all enquiries through our website are non-binding and free of charge." },
          ],
        },
      ],
    },

    about: {
      label: "About us",
      title: "DIE Container GmbH – Your partner for ",
      titleColored: "container solutions",
      title2: " in Germany and Europe",
      body: "DIE Container GmbH is your reliable partner for buying new and used containers in Germany and Europe. We offer practical, robust and flexible container solutions for businesses, trade, construction, storage, logistics and private use. Our goal is to provide a clear selection, transparent information and professional handling throughout the container purchase.",
      imgAlt: "Container delivery",
      stats: [
        { value: "New", label: "New containers" },
        { value: "Used", label: "Inspected selection" },
        { value: "DE & EU", label: "Germany and Europe" },
        { value: "B2B & B2C", label: "Business and private customers" },
      ],
      trustLabel: "Trust",
      trustTitle: "Why DIE Container GmbH?",
      trustItems: [
        { title: "Wide selection", desc: "From 10-foot to 40-foot containers we offer a variety of sizes to meet your storage, transport and other requirements." },
        { title: "Clear information", desc: "We provide transparency about selection, condition, applications and the container purchasing process." },
        { title: "Our team", desc: "Behind DIE Container GmbH stands a dedicated team of experienced specialists. We work in a structured and solution-oriented way, always striving to find the best possible solution for every requirement." },
        { title: "Our values", desc: "Integrity, quality and an innovative spirit shape our daily work. We operate responsibly and transparently, with a focus on sustainable solutions." },
      ],
      valuesLabel: "Our values",
      valuesTitle: "What we stand for",
      values: [
        { title: "Quality", desc: "Every container is carefully inspected and tested before sale." },
        { title: "Customer service", desc: "Personal advice from experienced container experts – from storage to special projects." },
        { title: "Flexible solutions", desc: "Practical container solutions for storage, transport, trade, construction and private use." },
        { title: "Professional handling", desc: "Clear communication and a reliable process from first contact to purchase." },
      ],
    },

    productDetail: {
      titleAction: "buy",
      typeSpecific: {
        "Kühlcontainer": "The integrated cooling unit enables precise temperature regulation from -25 °C to +25 °C. Ideal for food processing companies, pharmaceutical firms and the storage of temperature-sensitive goods. The stainless steel interior lining is easy to clean and meets all hygiene requirements.",
        "Bürocontainer": "The interior includes a complete electrical installation with fuse box, LED lighting and sockets, as well as double-glazed windows with integrated sun protection. The PVC floor on full thermal insulation ensures comfortable working temperatures year-round – no additional heating system required.",
        "Open Side": "The fully openable side wall with CSC-certified door panels allows loading and unloading by forklift or conveyor belt – without turning manoeuvres, directly from the side. Particularly popular in retail, at trade fairs and in logistics.",
      },
      seoPara2: (title, floor) => `The ${title} from DIE Container GmbH is manufactured from high-quality Corten steel (weather-resistant structural steel to EN 10025-5). The natural oxidation protection layer eliminates complex surface treatments and ensures an exceptionally long service life. All welds are waterproof to ISO 3834; the ${floor || "floor"} guarantees maximum load capacity and resistance to mechanical abrasion.`,
      seoPara3: (size, type) => `Applications: The ${size} ${type} container is ideal as a storage, tool and material container on construction sites, as external storage for industry and trade, as a secure archive, or as the basis for individual container conversions. Thanks to its standardised ISO external dimensions it is stackable and easily handled by crane, reach stacker or forklift.`,
      seoPara4: (cscCertified) => `Quality assurance: Before delivery, every container undergoes a multi-stage quality inspection: visual inspection of all structural components, water ingress test, floor load capacity measurement and functional check of all door locks. ${cscCertified ? "The enclosed CSC certificate confirms suitability for international sea freight." : ""} A TÜV inspection report is available as an optional extra.`,
      seoPara5: "Delivery & service: DIE Container GmbH delivers throughout Germany with its own crane vehicle within 72 hours directly to your desired location – including professional unloading advice. Our team provides free advice on ground conditions, permits and conversion wishes. Request your non-binding quote now.",
      metaFallback: (title, price) => `${title} – waterproof and windproof ISO steel container from DIE Container GmbH. From €${price}, nationwide delivery.`,
    },

    footerInfoLinks: [
      { label: "About us", path: "/ueber-uns" },
      { label: "Contact", path: "/kontakt" },
      { label: "FAQ", path: "/faq" },
      { label: "Container advisor", path: "/kaufberater" },
    ],

    contactBanner: {
      label: "Have a question?",
      title: "We advise you personally & free of charge",
      description: "Our team helps you find the right container for your requirements.",
      ctaPhone: "0049 163 5393 159",
      ctaContact: "Get in touch",
    },

    // ─── FOOTER LINK ARRAYS ──────────────────────────────────────────────────
    footerShopLinks: [
      { label: "Buy shipping containers", path: "/en/seecontainer-kaufen" },
      { label: "10-foot container", path: "/en/kategorien/10ft" },
      { label: "20-foot container", path: "/en/kategorien/20ft" },
      { label: "40-foot container", path: "/en/kategorien/40ft" },
      { label: "Open side container", path: "/en/kategorien/open-side" },
      { label: "Double door container", path: "/en/double-door-container-kaufen" },
      { label: "Storage container", path: "/en/lagercontainer-kaufen" },
      { label: "Office container", path: "/en/kategorien/buerocontainer" },
      { label: "Refrigerated container", path: "/en/kategorien/kuehlcontainer" },
      { label: "Living container", path: "/en/wohncontainer-kaufen" },
      { label: "All containers", path: "/en/shop" },
    ],
    footerGuideLinks: [
      { label: "Container dimensions", path: "/en/container-masse" },
      { label: "Container weight", path: "/en/container-gewicht" },
      { label: "Container costs", path: "/en/container-kosten" },
      { label: "Container foundation", path: "/en/container-fundament" },
      { label: "Container delivery", path: "/en/container-lieferung" },
      { label: "Container permits", path: "/en/container-genehmigung" },
    ],
    footerLegalLinks: [
      { label: "Imprint", path: "/en/impressum" },
      { label: "Privacy Policy", path: "/en/datenschutz" },
      { label: "Cookie Policy", path: "/en/cookie-policy" },
      { label: "Terms & Conditions", path: "/en/agb" },
      { label: "Right of Withdrawal", path: "/en/widerrufsrecht" },
      { label: "Returns & Refunds", path: "/en/rueckgabe" },
      { label: "Shipping & Delivery", path: "/en/versand" },
      { label: "Payment Terms", path: "/en/zahlungsbedingungen" },
      { label: "General Terms (EN)", path: "/general-terms" },
      { label: "VAT & Duties", path: "/vat-duties" },
    ],

    // ─── SHARED CATEGORY PAGE STRINGS ────────────────────────────────────────
    categoryPage: {
      breadcrumbHome: "Homepage",
      breadcrumbCatalog: "Container Catalog",
      allConditions: "All conditions",
      allSizes: "All sizes",
      moreCategories: "More categories",
      sortAsc: "Price: Lowest first",
      sortDesc: "Price: Highest first",
      noContainersGeneric: "No containers found",
      resetFilter: "Reset filter",
      crossLinks: {
        "10ft": "10-foot container",
        "20ft": "20-foot container",
        "40ft": "40-foot container",
        kuehl: "Refrigerated container",
        buero: "Office container",
        openside: "Open side container",
      },
    },

    // ─── PER-CATEGORY PAGE CONTENT ───────────────────────────────────────────
    cat10ft: {
      title: "Buy 10-foot containers",
      label: "Product category",
      description: "Compact ISO shipping containers with approx. 15.7 m³ volume – ideal for gardens, construction sites and small storage areas. Used from €990, new from €1,890.",
      guideLink: "→ Guide: 10-foot container – dimensions, prices & applications",
      guidePath: "/10-fuss-container-kaufen",
      noContainers: "No 10-foot containers found",
    },
    cat20ft: {
      title: "Buy 20-foot containers",
      label: "Product category",
      description: "The world's best-selling ISO shipping container – approx. 33 m³ volume, ideal as storage, workshop or for transport. Used from €1,990, new from €2,490.",
      guideLink: "→ Guide: 20-foot container – dimensions, weight & prices",
      guidePath: "/20-fuss-container-kaufen",
      noContainers: "No 20-foot containers found",
    },
    cat40ft: {
      title: "Buy 40-foot containers",
      label: "Product category",
      description: "Maximum storage space with approx. 67 m³ volume – ideal for large projects, professional storage and residential or office conversions. Used from €2,990, new from €3,990.",
      guideLink: "→ Guide: 40-foot container – dimensions, types & prices",
      guidePath: "/40-fuss-container-kaufen",
      noContainers: "No 40-foot containers found",
    },
    catKuehl: {
      title: "Buy refrigerated containers",
      label: "Product category",
      description: "Refrigerated containers (reefers) with integrated cooling unit – temperature range from -25 °C to +25 °C. Ideal for food, pharmaceuticals and temperature-sensitive goods.",
      guideLink: "→ Guide: Buy refrigerated containers – prices, types & technical requirements",
      guidePath: "/kuehlcontainer-kaufen",
      noContainers: "No refrigerated containers found",
    },
    catBuero: {
      title: "Buy office containers",
      label: "Product category",
      description: "Ready-to-use office containers with electrical installation, insulation, windows and door – immediately available as a mobile office, site office or welfare unit. From €5,900.",
      guideLink: "→ Guide: Buy office containers – equipment, prices & permits",
      guidePath: "/buerocontainer-kaufen",
      noContainers: "No office containers found",
    },
    catOpenSide: {
      title: "Buy open side containers",
      label: "Product category",
      description: "Shipping containers with fully openable longitudinal side – maximum accessibility for forklift operation, bulky goods and fast loading and unloading. Available in 20 and 40 ft.",
      guideLink: "→ Guide: Buy open side containers – types, prices & applications",
      guidePath: "/open-side-container-kaufen",
      noContainers: "No open side containers found",
    },

    // ─── KAUFBERATER ─────────────────────────────────────────────────────────
    kaufberater: {
      label: "Container advisor",
      title: "Which container suits you?",
      subtitle: "Answer 3 short questions and get a recommendation.",
      questionOf: (n, total) => `Question ${n} of ${total}`,
      back: "Back",
      next: "Next",
      getRecommendation: "Get recommendation",
      ourRecommendation: "Our recommendation",
      viewContainer: "View container",
      restart: "Start again",
      questions: [
        {
          q: "What do you want to use the container for?",
          options: [
            { value: "storage", label: "Storage", desc: "Goods, furniture, materials" },
            { value: "office", label: "Workshop / Office", desc: "Workspace or office" },
            { value: "transport", label: "Transport", desc: "Shipping or relocation" },
            { value: "special", label: "Special use", desc: "Cooling, events, catering" },
          ],
        },
        {
          q: "How much space do you need?",
          options: [
            { value: "small", label: "Small (approx. 7 m²)", desc: "10 ft – for small quantities" },
            { value: "medium", label: "Medium (approx. 14 m²)", desc: "20 ft – the standard" },
            { value: "large", label: "Large (approx. 28 m²)", desc: "40 ft – maximum space" },
          ],
        },
        {
          q: "What is your budget?",
          options: [
            { value: "low", label: "Up to €2,500", desc: "Used containers" },
            { value: "mid", label: "€2,500 – €5,000", desc: "New standard containers" },
            { value: "high", label: "Over €5,000", desc: "Special or office containers" },
          ],
        },
      ],
    },

    // ─── COMMON ──────────────────────────────────────────────────────────────
    common: {
      watchNow: "View now",
      requestQuote: "Request a quote",
      requestFreeQuote: "Request a free quote",
      details: "View details",
      menu: "Menu",
      required: "Required field",
    },
  },
};

// ─── Accessor helpers ─────────────────────────────────────────────────────────

/**
 * Access a nested key from the strings object.
 * Accepts dot-notation ("hero.title1") OR section + key pair.
 * Falls back to German for any missing English entry.
 */
export function t(section, key, locale = "de") {
  const localeStrings = strings[locale] || strings.de;
  const fallback = strings.de;

  if (key === undefined) {
    // dot-notation: t("hero.title1", undefined, locale)
    const parts = section.split(".");
    let val = localeStrings;
    let fb = fallback;
    for (const p of parts) {
      val = val?.[p];
      fb = fb?.[p];
    }
    return val ?? fb ?? section;
  }

  return localeStrings[section]?.[key] ?? fallback[section]?.[key] ?? key;
}

/**
 * React hook — returns a bound t() for the current locale.
 * Usage: const T = useT(); T("hero", "badge")  or  T("hero.badge")
 */
export function useT() {
  const locale = useLocale();
  return (section, key) => t(section, key, locale);
}

/**
 * Direct section accessor — returns the full section object for the current locale.
 * Usage: const T = useT(); const hero = useSection("hero");  hero.badge
 */
export function useSection(section) {
  const locale = useLocale();
  return strings[locale]?.[section] ?? strings.de[section] ?? {};
}
