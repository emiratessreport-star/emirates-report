import {
  FileCheck2,
  ArrowLeft,
  HelpCircle,
  CheckCircle2,
  Clock,
  Lock,
  ShieldCheck,
  Scale,
  Sparkles,
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-10 md:py-16 lg:py-20 border-b border-border/50 min-h-[450px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container-page relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* النص والزر الرئيسي */}
          <div className="text-right lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold text-primary shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>المنصة الرقمية الموحدة لتوثيق الشكاوى التجارية بالإمارات</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl/tight">
              استرد حقك.. وثّق <span className="text-primary">شكواك التجارية</span> بكل سهولة وسرية
            </h1>

            <p className="mt-3 text-base text-muted-foreground sm:text-lg lg:max-w-xl leading-relaxed">
              البوابة الذكية المعتمدة لتقديم ومتابعة الشكاوى ضد الشركات والمنشآت التجارية الخاصة في دولة الإمارات برقم مرجعي موحد وضمان الحماية الكاملة للمستهلك.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-start gap-3.5">
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-md transition-transform duration-200 hover:bg-primary/95 active:scale-[0.98]"
              >
                <FileCheck2 className="h-5 w-5 shrink-0" />
                تقديم شكوى الآن
                <ArrowLeft className="h-4 w-4 mr-1 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent/50 active:scale-[0.98]"
              >
                <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                كيف نعمل؟
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border/60 pt-5 text-xs text-muted-foreground font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>خدمة مجانية 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-amber-500" />
                <span>بدء المعالجة خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 shrink-0 text-primary" />
                <span>بيانات مشفرة وآمنة</span>
              </div>
            </div>
          </div>

          {/* الكارت الجانبي الضامن */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
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

              <div className="mt-4 space-y-3">
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
                    className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-3"
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

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground border-t border-border/40 pt-3">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span>متوافق مع التشريعات والمعايير الرقمية للإمارات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}