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
    <section 
      aria-label="الرئيسية - تقديم الشكوى"
      className="relative overflow-hidden bg-background py-10 md:py-16 lg:py-20 border-b border-border/50 min-h-[480px]"
    >
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" 
      />

      <div className="container-page relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* النص والزر الرئيسي */}
          <div className="text-right lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100/80 px-3.5 py-1.5 text-xs font-black text-slate-900 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0" aria-hidden="true" />
              <span>المنصة الرقمية الموحدة لتوثيق الشكاوى التجارية بالإمارات</span>
            </div>

            {/* H1 محفّز للأداء المباشر (LCP Core Element) */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl/tight">
              استرد حقك.. وثّق <span className="text-amber-700">شكواك </span> بكل سهولة وسرية
            </h1>

            <p className="mt-3 text-base text-slate-700 sm:text-lg lg:max-w-xl leading-relaxed font-medium">
              البوابة الذكية المعتمدة لتقديم ومتابعة الشكاوى ضد الشركات والمنشآت التجارية الخاصة في دولة الإمارات برقم مرجعي موحد وضمان الحماية الكاملة للمستهلك.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-start gap-3.5">
              <a
                href="#complaint-form"
                onClick={onPrimaryClick}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-7 py-3.5 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
              >
                <FileCheck2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                تقديم شكوى الآن
                <ArrowLeft className="h-4 w-4 mr-1 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-slate-900 transition-colors hover:bg-slate-100 active:scale-[0.98]"
              >
                <HelpCircle className="h-4 w-4 shrink-0 text-slate-600" aria-hidden="true" />
                كيف نعمل؟
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-5 text-xs text-slate-800 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>خدمة مجانية 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                <span>بدء المعالجة خلال 24 ساعة</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 shrink-0 text-slate-900" aria-hidden="true" />
                <span>بيانات مشفرة وآمنة</span>
              </div>
            </div>
          </div>

          {/* الكارت الجانبي الضامن */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-900">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-sm font-extrabold text-slate-950">ضمانات توثيق الشكوى</h2>
                    <p className="text-[11px] font-semibold text-slate-600">خدمة رسمية موثوقة للمستهلكين</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-900 border border-slate-200">
                  الإمارات
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: FileCheck2,
                    title: "توثيق رسمي موحد",
                    desc: "إصدار سجل رسمي مدعوم بالبيانات والمستندات الثبوتية.",
                    color: "text-blue-700 bg-blue-50",
                  },
                  {
                    icon: Lock,
                    title: "سرية تامة للمعلومات",
                    desc: "حماية بياناتك الشخصية والتجارية وفق أعلى معايير الأمان.",
                    color: "text-emerald-700 bg-emerald-50",
                  },
                  {
                    icon: Scale,
                    title: "دعم الشفافية والعدالة",
                    desc: "توجيه الشكوى للجهة المعنية للتأكد من حفظ حقوق كافة الأطراف.",
                    color: "text-amber-700 bg-amber-50",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3"
                  >
                    <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${item.color}`}>
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-0.5 text-[11px] font-medium text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-700 border-t border-slate-200 pt-3">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>متوافق مع التشريعات والمعايير الرقمية للإمارات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}