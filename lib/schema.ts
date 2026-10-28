import { site } from "@/lib/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.publisher,
      email: site.email,
      url: site.url,
    },
    inLanguage: "en-US",
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  const url = `${site.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    datePublished: "2026-09-08",
    dateModified: input.dateModified ?? site.updated,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.publisher,
    },
  };
}

export type FaqPart = string | { href: string; label: string };

export type FaqEntry = {
  question: string;
  answer: readonly FaqPart[];
};

function faqAnswerText(answer: readonly FaqPart[]) {
  return answer.map((part) => (typeof part === "string" ? part : part.label)).join("");
}

export function faqPageJsonLd(faqs: readonly FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item.answer),
      },
    })),
  };
}

export type HowToStepInput = {
  name: string;
  text: string;
};

export function howToJsonLd(input: {
  name: string;
  description: string;
  steps: readonly HowToStepInput[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.publisher,
    url: site.url,
    email: site.email,
    description: site.description,
  };
}
