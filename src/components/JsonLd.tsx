const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubimall.online";

export function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qubimall",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://github.com/anil-choudhary-dev",
      "https://linkedin.com/in/anil-choudhary",
      "https://twitter.com/qubimall",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9993371923",
      contactType: "customer service",
      email: "support@qubimall.com",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function WebSiteJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Qubimall",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/shops?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function ProductJsonLd({
  product,
}: {
  product: {
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    image: string[];
    rating?: number;
    categories: string[];
    _id: string;
    shop_category: string;
  };
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image.map((img) => (img.startsWith("http") ? img : `${siteUrl}${img}`)),
    sku: product._id,
    mpn: product._id,
    brand: {
      "@type": "Brand",
      name: "Qubimall",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product._id}`,
      priceCurrency: "INR",
      price: product.price,
      ...(product.oldPrice && product.oldPrice > product.price
        ? { priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0] }
        : {}),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Qubimall",
      },
    },
    ...(product.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            bestRating: 5,
            ratingCount: 1,
          },
        }
      : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function FaqJsonLd({ faq }: { faq: { question: string; answer: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: url || siteUrl,
    publisher: {
      "@type": "Organization",
      name: "Qubimall",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
