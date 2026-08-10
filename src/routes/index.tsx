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
   Google Tag Manager Window Interface Augmentation (طابقنا النوع مع __root.tsx)
   ========================================================================== */
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const GTM_ID = "GTM-TDG4747L";

/* ==========================================================================
   TanStack Router Route Definition (Home Page - /)
   ========================================================================== */
export const Route = createFileRoute("/")({
  head: () => {
    const baseHead = buildHead({
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
          image: "https://www.emirates-report.com/logo.png",
          address: {
            "@type": "PostalAddress",
            addressCountry: "AE",
            addressRegion: "Dubai / Abu Dhabi",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1420",
            bestRating: "5",
            worstRating: "1",
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
    });

    return {
      ...baseHead,
      links: [
        ...(baseHead.links || []),
        {
          rel: "preload",
          href: "/fonts/tajawal-v12-latin-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/tajawal-v12-latin-700.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ],
      scripts: [
        ...(baseHead.scripts || []),
        {
          children: `
            window.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              }, 1500);
            });
          `,
        },
      ],
    };
  },
  component: HomePage,
});

/* ==========================================================================
   Main HomePage Component
   ========================================================================== */
function HomePage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // دالة للتمرير الانسيابي والتركيز
  const scrollToForm = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

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

  // تتبع تنقلات الشاشة عبر Google Tag Manager
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Tag Manager (noscript) - كود البودي */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* الأقسام الهامة فوراً لتحقيق أقصى سرعة LCP */}
      <HeroSection onPrimaryClick={scrollToForm} />
      <ComplaintFormSection />

      {/* الأقسام الثانوية عبر Suspense */}
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