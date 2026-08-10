export interface StepItem {
  n: string;
  title: string;
  desc: string;
}

export const steps: StepItem[] = [
  { n: "01", title: "تعبئة نموذج الشكوى", desc: "إدخال التفاصيل الأساسية والمشكلة وبيانات الشركة المعنية في دقائق." },
  { n: "02", title: "التدقيق المبدئي للطلب", desc: "يقوم الفريق بالتحقق من اكتمال البيانات والأوراق الثبوتية." },
  { n: "03", title: "إصدار رقم مرجعي ومخاطبة الجهة", desc: "تسجيل الشكوى رسمياً وإشعال الشركة بالمخالفة أو المشكلة." },
  { n: "04", title: "متابعة التسوية والحل", desc: "تلقي الإشعارات الفورية حول رد الشركة والحلول المقترحة." },
];

export function HowItWorksSection() {
  return (
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
              <span className="font-mono text-4xl font-black text-primary/40 absolute top-4 left-5 select-none">
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground relative z-10">{s.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground relative z-10">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}