import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { buildHead } from "@/components/site/seo";

import { HeroSection } from "@/sections/HeroSection";
import { ComplaintFormSection } from "@/sections/ComplaintFormSection";
import { CategoriesSection } from "@/sections/CategoriesSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { WhyUsSection } from "@/sections/WhyUsSection";
import { FaqSection, faqPreview } from "@/sections/FaqSection";
import { CtaSection } from "@/sections/CtaSection";

/* ==========================================================================
   Google Analytics Window Interface Augmentation
   ========================================================================== */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_MEASUREMENT_ID = "G-CM4MQBXFP4";

/* ==========================================================================
   TanStack Router Route Definition (Home Page - /)
   ========================================================================== */
export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "منصة شكاوى المستهلك | تقديم وتوثيق شكاوى المستهلك ضد الشركات الخاصة",
      description:
        "هل واجهت مشكلة تجارية؟ قدّم شكواك ورسالتك الآن عبر منصة شكاوى المستهلك لتوثيق ومتابعة شكاوى المستهلكين ضد المنشآت والشركات الخاصة في الإمارات بسهولة وشفافية.",
      path: "/",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "منصة شكاوى المستهلك",
          alternateName: "المنصة الرقمية الموحدة لتوثيق الشكاوى التجارية بالإمارات",
          inLanguage: "ar",
          url: "https://www.emirates-report.com",
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "منصة شكاوى المستهلك",
          url: "https://www.emirates-report.com",
          logo: "https://www.emirates-report.com/logo.png",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AE",
            addressRegion: "Dubai / Abu Dhabi",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "تقديم وتوثيق الشكاوى التجارية",
          serviceType: "توثيق وتسوية شكاوى المستهلكين",
          provider: {
            "@type": "Organization",
            name: "منصة حماية المستهلك الإمارات",
            url: "https://www.emirates-report.com",
          },
          areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات حماية المستهلك والحلول التجارية",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "تقديم وتوثيق الشكاوى التجارية",
                },
              },
            ],
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPreview.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        },
      ],
    }),
  component: HomePage,
});

/* ==========================================================================
   Smooth Scroll Helper Function
   ========================================================================== */
function scrollToForm(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById("complaint-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    const firstInput = el.querySelector<HTMLElement>("input, select, textarea");
    setTimeout(() => firstInput?.focus({ preventScroll: true }), 500);
  }
}

/* ==========================================================================
   Main HomePage Component
   ========================================================================== */
function HomePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // تتبع تنقلات الشاشة عبر Google Analytics
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <HeroSection onPrimaryClick={scrollToForm} />
      <ComplaintFormSection />
      <CategoriesSection />
      <HowItWorksSection />
      <WhyUsSection onPrimaryClick={scrollToForm} />
      <FaqSection />
      <CtaSection onPrimaryClick={scrollToForm} />
    </>
  );
}