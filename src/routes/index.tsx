import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  Smartphone,
  ShoppingCart,
  Plane,
  CreditCard,
  Wrench,
  Users,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lock,
  Scale,
  Truck,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
import { buildHead } from "@/components/site/seo";
import { ComplaintForm } from "@/components/site/ComplaintForm";

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
   Types Definitions
   ========================================================================== */
interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface StepItem {
  n: string;
  title: string;
  desc: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface HeroProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/* ==========================================================================
   بيانات ثابتة (FAQ + Categories + Steps + Features)
   ========================================================================== */
const faqPreview: FaqItem[] = [
  {
    q: "كيف تعمل منصة حماية المستهلك لتقديم الشكاوى؟",
    a: "تتيح لك المنصة تقديم بيانات شكواك والوثائق الداعمة بسهولة. يقوم فريقنا بمراجعتها، توثيقها برقم مرجعي، ثم مخاطبة الشركة المعنية لمتابعة التوصل إلى حل إيجابي.",
  },
  {
    q: "هل خدمة تقديم الشكوى مجانية للمستهلكين في الإمارات؟",
    a: "نعم، خدمة توثيق وتقديم ومتابعة الشكاوى مجانية بالكامل لجميع المستهلكين والمتعاملين داخل دولة الإمارات العربية المتحدة.",
  },
  {
    q: "ما الدور الذي تقوم به المنصة لحل المشكلة مع الشركة؟",
    a: "نقوم بتوثيق الشكوى قانونياً، إصدار الرقم المرجعي، ومخاطبة إدارة المنشأة التجارية للوصول إلى تسوية عادلة تحمي حقوق المستهلك وفق الأنظمة المتبعة.",
  },
];

const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل للنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

const steps: StepItem[] = [
  { n: "01", title: "تعبئة نموذج الشكوى", desc: "إدخال التفاصيل الأساسية والمشكلة وبيانات الشركة المعنية في دقائق." },
  { n: "02", title: "التدقيق المبدئي للطلب", desc: "يقوم الفريق بالتحقق من اكتمال البيانات والأوراق الثبوتية." },
  { n: "03", title: "إصدار رقم مرجعي ومخاطبة الجهة", desc: "تسجيل الشكوى رسمياً وإشعال الشركة بالمخالفة أو المشكلة." },
  { n: "04", title: "متابعة التسوية والحل", desc: "تلقي الإشعارات الفورية حول رد الشركة والحلول المقترحة." },
];

const whyUs: FeatureItem[] = [
  { icon: ShieldCheck, title: "منصة معتمدة وموثوقة", desc: "معايير مهنية وقانونية صارمة لضمان موثوقية وحماية كافة الأطراف." },
  { icon: Clock, title: "معالجة سريعة وفعالة", desc: "بدء مراجعة الشكوى واتخاذ الإجراءات الأولية خلال 24 ساعة عمل." },
  { icon: Scale, title: "توثيق قانوني متكامل", desc: "إصدار ملف مرجعي موحد للشكوى يمكن استخدامه في المتابعات الرسمية." },
  { icon: Users, title: "دعم مخصص للمستهلك", desc: "فريق عمل يتفهم القوانين المحلية ويدعم المستهلك خطوة بخطوة." },
];

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
          serviceType: "توثيق ومتابعة شكاوى المستهلكين",
          provider: {
            "@type": "Organization",
            name: "منصة شكاوى المستهلك",
          },
          areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات توثيق الشكاوى التجاريّة",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "تقديم وتوثيق الشكاوى التجارية ضد الشركات الخاصة",
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
   Hero Section Component
   ========================================================================== */
export function Hero({ onPrimaryClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-24 border-b border-border/50">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-10 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="text-right lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary shadow-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>المنصة الرقمية الموحدة لتوثيق الشكاوى التجارية بالإمارات</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl/tight">
              استرد حقك.. وثّق <span className="text-primary bg-clip-text">شكواك التجارية</span> بكل سهولة وسرية
            </h1>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg lg:max-w-xl leading-relaxed">
              البوابة الذكية المعتمدة لتقديم ومتابعة الشكاوى ضد الشركات والمنشآت التجارية الخاصة في دولة الإمارات برقم مرجعي موحد وضمان الحماية الكاملة للمستهلك.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                <FileCheck2 className="h-5 w-5" />
                تقديم شكوى الآن
                <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-surface/80 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-surface hover:border-border active:scale-[0.98]"
              >
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
                كيف نعمل؟
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border/60 pt-6 text-xs text-muted-foreground font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>خدمة مجانية 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                <span>بدء المعالجة خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span>بيانات مشفرة وآمنة</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-border/80 bg-card/90 p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-foreground">ضمانات توثيق الشكوى</h2>
                    <p className="text-[11px] text-muted-foreground">خدمة رسمية موثوقة للمستهلكين</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                  الإمارات
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                {[
                  {
                    icon: FileCheck2,
                    title: "توثيق رسمي موحد",
                    desc: "إصدار سجل رسمي مدعوم بالبيانات والمستندات الثبوتية.",
                    color: "text-blue-500 bg-blue-500/10",
                  },
                  {
                    icon: Lock,
                    title: "سرية تامة للمعلومات",
                    desc: "حماية بياناتك الشخصية والتجارية وفق أعلى معايير الأمان.",
                    color: "text-emerald-500 bg-emerald-500/10",
                  },
                  {
                    icon: Scale,
                    title: "دعم الشفافية والعدالة",
                    desc: "توجيه الشكوى للجهة المعنية للتأكد من حفظ حقوق كافة الأطراف.",
                    color: "text-amber-500 bg-amber-500/10",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl border border-border/50 bg-background/60 p-3.5 transition-colors"
                  >
                    <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${item.color}`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-foreground">{item.title}</h3>
                      <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground border-t border-border/40 pt-3">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>متوافق مع التشريعات والمعايير الرقمية للإمارات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      {/* 🟢 سكربت Google Analytics مدمج بطريقة React آمنة ومطابقة للمواصفات */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `,
        }}
      />

      <Hero onPrimaryClick={scrollToForm} />

      <section className="border-b border-border bg-secondary/20 py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
              <FileCheck2 className="h-4 w-4" />
              النموذج الموحد
            </span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl text-foreground">قدّم شكواك التجارية الآن</h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              يرجى تعبئة النموذج بدقة. سيتم توثيق الشكوى ومعالجتها وفق الأنظمة واللوائح الخاصة بحماية المستهلك.
            </p>
          </div>

          <div id="complaint-form" className="mx-auto mt-10 max-w-4xl scroll-mt-20">
            <ComplaintForm />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-foreground">مجالات الشكاوى التجارية</h2>
            <p className="mt-3 text-base text-muted-foreground">
              نغطي مختلف القطاعات التجارية الخاصة لضمان وصول صوتك وحماية حقوقك الشاملة.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, idx) => (
              <article
                key={idx}
                className="group relative rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border/80 bg-secondary/30 py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">خطوات عمل بسيطة</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-foreground">آلية توثيق ومتابعة الشكاوى</h2>
            <p className="mt-3 text-base text-muted-foreground">آلية عمل شفافة تضمن متابعة حقك برقم مرجعي رسمي.</p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/30"
              >
                <span className="font-mono text-4xl font-black text-primary/15 absolute top-4 left-5 select-none">
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground relative z-10">{s.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground relative z-10">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold md:text-4xl leading-tight text-foreground">
              لماذا تعتبر منصتنا الخيار الأفضل لتوثيق شكواك؟
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              نوفر لك منصة متكاملة وسلسة تجمع بين السرعة والشفافية التامة في التعامل مع القضايا والشكاوى التجارية في كافة إمارات الدولة.
            </p>
            <div className="mt-8">
              <a
                href="#complaint-form"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                تقديم شكوى جديدة
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {whyUs.map((w, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <w.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20 py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase">
              <HelpCircle className="h-4 w-4" />
              <span>الأسئلة الشائعة</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold text-foreground">استفسارات تتكرر باستمرار</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              إليك إجابات لأبرز الأسئلة المتعلقة بتقديم وتوثيق الشكاوى التجارية للمستهلكين.
            </p>
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 group"
            >
              عرض جميع الأسئلة
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <dl className="lg:col-span-2 space-y-4">
            {faqPreview.map((f, idx) => (
              <div key={idx} className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <dt className="text-base font-bold text-foreground">{f.q}</dt>
                <dd className="mt-2 text-xs leading-6 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center text-primary-foreground shadow-xl md:p-16">
            <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">
              لا تتنازل عن حقك.. وثّق شكواك الآن بأسلوب رسمّي ومعتمد
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-primary-foreground/90 leading-relaxed">
              خطوات بسيطة وسريعة لتقديم كافة التفاصيل والمستندات للحفاظ على حقوقك التجارية.
            </p>
            <div className="mt-8">
              <a
                href="#complaint-form"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 rounded-xl bg-background px-8 py-3.5 text-base font-bold text-primary shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                ابدأ تقديم الشكوى الآن
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}