import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useCallback, lazy, Suspense } from "react";
import { buildHead } from "@/components/site/seo";

// تحسين LCP: تحميل القسم الأول ونموذج الشكوى فوراً
import { HeroSection } from "@/sections/HeroSection";
import { ComplaintFormSection } from "@/sections/ComplaintFormSection";
import { faqPreview } from "@/sections/FaqSection";

// تحسين TBT و Unused JS: تحميل باقي الأقسام كسولياً (Lazy Loading)
const CategoriesSection = lazy(() =>
  import("@/sections/CategoriesSection").then((m) => ({ default: m.CategoriesSection }))
);
const HowItWorksSection = lazy(() =>
  import("@/sections/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection }))
);
const WhyUsSection = lazy(() =>
  import("@/sections/WhyUsSection").then((m) => ({ default: m.WhyUsSection }))
);
const FaqSection = lazy(() =>
  import("@/sections/FaqSection").then((m) => ({ default: m.FaqSection }))
);
const CtaSection = lazy(() =>
  import("@/sections/CtaSection").then((m) => ({ default: m.CtaSection }))
);

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
   Main HomePage Component
   ========================================================================== */
function HomePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // دالة فائقة الأداء للتمرير الانسيابي والتركيز (مُحسّنة خفيفة لتقليل TBT)
  const scrollToForm = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // تنفيذ التمرير في الإطار التزامني القادم لتجنب حظر المعالج الرئيسي (TBT Optimization)
    requestAnimationFrame(() => {
      const el = document.getElementById("complaint-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        
        const firstInput = el.querySelector<HTMLElement>(
          "input:not([type='hidden']), select, textarea"
        );
        if (firstInput) {
          setTimeout(() => firstInput.focus({ preventScroll: true }), 350);
        }
      }
    });
  }, []);

  // تتبع تنقلات الشاشة عبر Google Analytics بدون حظر العرض الرئيسي
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: pathname,
        });
      } else if (window.dataLayer) {
        window.dataLayer.push({
          event: "pageview",
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      {/* الأقسام الهامة فوراً لتحقيق أقصى سرعة LCP */}
      <HeroSection onPrimaryClick={scrollToForm} />
      <ComplaintFormSection />

      {/* الأقسام الثانوية عبر Suspense لتقليل أحجم البرمجيات المحملة مبدئياً */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <CategoriesSection />
        <HowItWorksSection />
        <WhyUsSection onPrimaryClick={scrollToForm} />
        <FaqSection />
        <CtaSection onPrimaryClick={scrollToForm} />
      </Suspense>
    </>
  );
}