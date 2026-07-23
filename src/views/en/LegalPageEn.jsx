"use client";
import React from "react";
import { usePathname } from "next/navigation";

const LEGAL_CONTENT = {
  "/en/impressum": {
    title: "Imprint",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Information according to § 5 TMG</h2>
          <p>DIE Container GmbH<br />Hermann-Oberth-Str. 23<br />85640 Putzbrunn<br />Germany</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Contact</h2>
          <p>Phone: 0049 163 5393 159<br />Email: contact@diecontainers.com</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Commercial register</h2>
          <p>Commercial register / EUID: HRB256757</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">VAT identification number</h2>
          <p>VAT ID number pursuant to § 27a of the German VAT Act: DE 330443785</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Responsible for content</h2>
          <p>Managing Director, DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn</p>
        </section>
      </div>
    ),
  },
  "/en/datenschutz": {
    title: "Privacy Policy",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">1. Data controller</h2>
          <p>DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, Germany. Email: contact@diecontainers.com</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">2. Data we collect</h2>
          <p>When you contact us or submit a quote request, we collect: name, email address, phone number and the content of your message. This data is used solely to process your enquiry and is not shared with third parties.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">3. Legal basis</h2>
          <p>Data processing is based on Art. 6(1)(b) GDPR (performance of a contract or pre-contractual measures) and Art. 6(1)(f) GDPR (legitimate interests).</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">4. Data retention</h2>
          <p>Personal data is deleted as soon as the purpose for which it was collected has been fulfilled, unless statutory retention obligations apply.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">5. Your rights</h2>
          <p>You have the right to access, rectification, erasure, restriction of processing and data portability. To exercise these rights, contact us at contact@diecontainers.com.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">6. Cookies</h2>
          <p>This website uses technically necessary cookies. No tracking or advertising cookies are used without your consent. See our <a href="/en/cookie-policy" className="underline">Cookie Policy</a> for details.</p>
        </section>
      </div>
    ),
  },
  "/en/cookie-policy": {
    title: "Cookie Policy",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>This Cookie Policy explains how DIE Container GmbH uses cookies and similar technologies on this website.</p>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">What are cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They allow the website to remember your preferences and improve your experience.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Cookies we use</h2>
          <p><strong className="text-foreground">Technically necessary cookies:</strong> These are required for the website to function correctly. They cannot be disabled.</p>
          <p><strong className="text-foreground">Analytics cookies:</strong> We may use anonymised analytics to understand how visitors use our website and improve it. No personal data is collected.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Managing cookies</h2>
          <p>You can control and delete cookies via your browser settings. Disabling technically necessary cookies may affect the functionality of the website.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Contact</h2>
          <p>For questions about our use of cookies: contact@diecontainers.com</p>
        </section>
      </div>
    ),
  },
  "/en/agb": {
    title: "Terms & Conditions",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>These Terms & Conditions apply to all sales contracts between DIE Container GmbH (Putzbrunn, Germany) and customers purchasing containers via this website or direct order.</p>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">1. Scope</h2>
          <p>These terms apply to all business transactions with DIE Container GmbH. Deviating terms of the buyer are not recognised unless expressly agreed in writing.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">2. Conclusion of contract</h2>
          <p>A binding contract is concluded when the customer accepts our written offer (quote). Quote requests submitted via the website are non-binding. We will send a binding offer within 24 hours.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">3. Prices and payment</h2>
          <p>All prices are net plus applicable VAT. Payment is due by SEPA bank transfer (prepayment) before delivery. Delivery takes place after receipt of payment.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">4. Delivery</h2>
          <p>Delivery is made to the agreed delivery address. The customer is responsible for ensuring adequate access and a suitable unloading area. Risk transfers to the customer upon handover.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">5. Warranty</h2>
          <p>We warrant that containers are wind and watertight at the time of delivery. Used containers are sold in their cargo-worthy condition. A 12-month warranty applies to new containers.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">6. Jurisdiction</h2>
          <p>German law applies. The place of jurisdiction is determined by the applicable statutory provisions.</p>
        </section>
        <p className="text-xs">The full German version of these Terms & Conditions is legally binding. The English version is provided for information purposes only.</p>
      </div>
    ),
  },
  "/en/widerrufsrecht": {
    title: "Right of Withdrawal",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Right of withdrawal for consumers</h2>
          <p>If you are a consumer (not purchasing in the course of your trade, business or profession), you have the right to withdraw from this contract within 14 days without giving any reason.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Withdrawal period</h2>
          <p>The withdrawal period is 14 days from the day on which you or a third party designated by you (other than the carrier) took possession of the container.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">How to exercise your right</h2>
          <p>To exercise your right of withdrawal, notify us (DIE Container GmbH, Hermann-Oberth-Str. 23, 85640 Putzbrunn, contact@diecontainers.com) by a clear written statement.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Exclusions</h2>
          <p>The right of withdrawal does not apply to custom-built, modified or specially ordered containers that have been manufactured to your specifications.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Return costs</h2>
          <p>If you exercise your right of withdrawal, you bear the direct costs of returning the container. Given the size and weight of containers, these costs can be substantial.</p>
        </section>
      </div>
    ),
  },
  "/en/rueckgabe": {
    title: "Returns & Refunds",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Return policy</h2>
          <p>Returns are accepted within 14 days of delivery for consumers exercising their statutory right of withdrawal. For business customers, returns are only accepted by prior written agreement.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Condition of returned goods</h2>
          <p>The container must be returned in its original delivery condition. If the value has been diminished due to handling beyond what is necessary to check the goods, we may deduct an appropriate amount from the refund.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Refund</h2>
          <p>Refunds are processed within 14 days of receiving the returned container. Refunds are made using the same payment method used for the original purchase.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Exclusions</h2>
          <p>Returns are not accepted for custom-built, modified or specially ordered containers.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">How to initiate a return</h2>
          <p>Contact us at contact@diecontainers.com or 0049 163 5393 159 to arrange a return.</p>
        </section>
      </div>
    ),
  },
  "/en/versand": {
    title: "Shipping & Delivery",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Delivery area</h2>
          <p>We deliver throughout Germany with our own crane vehicles. Deliveries to Austria, Switzerland or other countries are available on request — please contact us for a quote.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Delivery times</h2>
          <p>Containers are typically delivered within 3–7 working days of order confirmation. Express delivery within 48 hours is available for in-stock containers in your region.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Transport costs</h2>
          <p>Transport costs are calculated based on delivery distance and container size. Costs start from approx. €250 for local deliveries. The exact transport cost is included in your individual quote.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Delivery requirements</h2>
          <p>The customer is responsible for ensuring adequate access (min. 3.5 m wide, passable for heavy vehicles) and a suitable unloading area at the delivery address. A person must be present at the time of delivery.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Risk transfer</h2>
          <p>Risk transfers to the customer at the moment of handover, confirmed by the customer's signature on the delivery note.</p>
        </section>
      </div>
    ),
  },
  "/en/zahlungsbedingungen": {
    title: "Payment Terms",
    label: "Legal",
    content: (
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>At DIE Container GmbH, we value transparent, secure and traceable payment processes — with no hidden fees or intermediary payment processors.</p>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Available payment methods</h2>
          <p><strong className="text-foreground">SEPA bank transfer (prepayment):</strong> Payment is made by SEPA bank transfer to our official business account. Delivery takes place after receipt of full payment.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Payment deadline</h2>
          <p>The invoice amount is due within 7 days of the invoice date. No online payment or credit card payment is available at present.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">VAT</h2>
          <p>All prices are net plus applicable German VAT (currently 19%). The VAT amount is shown separately on the invoice.</p>
        </section>
        <section>
          <h2 className="font-heading font-semibold text-base text-foreground mb-2">Questions</h2>
          <p>For payment questions please contact: contact@diecontainers.com or 0049 163 5393 159.</p>
        </section>
      </div>
    ),
  },
};

const BRAND_BLUE = "#1E5FAE";

export default function LegalPageEn() {
  const pathname = usePathname();
  const page = LEGAL_CONTENT[pathname] || {
    title: "Legal",
    label: "Legal",
    content: <p className="text-muted-foreground">This page is available in German. Please select the German version.</p>,
  };

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: BRAND_BLUE }}>{page.label}</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-2">{page.title}</h1>
        </div>
        <div>{page.content}</div>
      </div>
    </div>
  );
}
