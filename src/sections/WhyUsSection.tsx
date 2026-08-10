import { ShieldCheck, Clock, Scale, Users, ArrowLeft, LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const whyUs: FeatureItem[] = [
  { icon: ShieldCheck, title: "منصة معتمدة وموثوقة", desc: "معايير مهنية وقانونية صارمة لضمان موثوقية وحماية كافة الأطراف." },
  { icon: Clock, title: "معالجة سريعة وفعالة", desc: "بدء مراجعة الشكوى واتخاذ الإجراءات الأولية خلال 24 ساعة عمل." },
  { icon: Scale, title: "توثيق قانوني متكامل", desc: "إصدار ملف مرجعي موحد للشكوى يمكن استخدامه في المتابعات الرسمية." },
  { icon: Users, title: "دعم مخصص للمستهلك", desc: "فريق عمل يتفهم القوانين المحلية ويدعم المستهلك خطوة بخطوة." },
];

interface WhyUsSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function WhyUsSection({ onPrimaryClick }: WhyUsSectionProps) {
  return (
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
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              تقديم شكوى جديدة
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
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
                <w.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}