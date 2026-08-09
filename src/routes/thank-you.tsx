import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Mail, Clock } from "lucide-react";
import { buildHead } from "@/components/site/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    buildHead({
      title: "تم استلام شكواك | منصة الشكاوى المستقلة",
      description: "شكرًا لتقديم شكواك. سنقوم بمراجعتها والتواصل معك عبر البريد الإلكتروني.",
      path: "/thank-you",
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="gradient-hero">
      <div className="container-page grid min-h-[70vh] place-items-center py-16">
        <div className="max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-elegant md:p-12">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald/15 text-emerald">
            <CheckCircle2 className="h-10 w-10" aria-hidden />
          </div>
          <h1 className="mt-6 text-3xl font-bold md:text-4xl">تم استلام شكواك بنجاح</h1>
          <p className="mt-3 text-muted-foreground">
            شكرًا لثقتك بنا. تم تسجيل شكواك وسنبدأ بمراجعتها فورًا. سيصلك رقم مرجعي على بريدك
            الإلكتروني.
          </p>

          <div className="mt-8 grid gap-3 rounded-2xl bg-secondary/60 p-5 text-right text-sm">
            <p className="font-semibold text-foreground">الخطوات التالية:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                تحقّق من بريدك الإلكتروني لاستلام رقم الشكوى المرجعي.
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                نراجع الشكوى خلال 24 ساعة عمل ثم نُوجهها للشركة المعنية.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                ستصلك تحديثات فور توفر أي رد أو تطور.
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
