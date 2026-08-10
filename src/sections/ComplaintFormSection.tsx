import { FileCheck2 } from "lucide-react";
import { ComplaintForm } from "@/components/site/ComplaintForm";

export function ComplaintFormSection() {
  return (
    <section className="border-b border-border bg-secondary/20 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
            <FileCheck2 className="h-4 w-4 shrink-0" />
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
  );
}