
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { buildHead } from "@/components/site/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    buildHead({
      title: "تم استلام شكواك بنجاح | منصة شكاوى المستهلك",
      description:
        "شكرًا لتقديم شكواك عبر منصة شكاوى المستهلك تم استلام الطلب وبدأت عملية المراجعة.",
      path: "/thank-you",
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#080b12]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-5 py-12 md:px-8">
        <div className="w-full max-w-3xl">
          {/* Success icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-emerald-500/10 blur-2xl" />

              <div className="relative grid h-24 w-24 place-items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20">
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              تم تسجيل الطلب بنجاح
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              شكواك وصلت إلينا
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/55 md:text-lg">
              شكرًا لثقتك بـ{" "}
              <span className="font-semibold text-white/80">
                منصة شكاوى المستهلك
              </span>
              . تم استلام شكواك بنجاح، وبدأت عملية مراجعتها.
            </p>
          </div>

          {/* Status card */}
          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-2xl backdrop-blur-xl">
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-white/40">
                    حالة الطلب
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    قيد المراجعة
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="px-6 py-7 md:px-8">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        تم استلام الشكوى
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/40">
                        تم تسجيل بياناتك بنجاح
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-10 top-10 hidden h-px w-[calc(100%-40px)] bg-emerald-500/30 md:block" />
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        قيد المراجعة
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/40">
                        يتم التحقق من تفاصيل الشكوى
                      </p>
                    </div>
                  </div>

                  <div className="absolute right-10 top-10 hidden h-px w-[calc(100%-40px)] bg-white/10 md:block" />
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/30">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-white/70">
                        متابعة الحالة
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/35">
                        ستصلك التحديثات عبر البريد
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

              <div>
                <p className="text-sm font-medium text-white">
                  راجع بريدك الإلكتروني
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  سيصلك الرقم المرجعي والتحديثات المتعلقة بالشكوى.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/35">
              <Clock3 className="h-4 w-4" />
              خلال 24 ساعة عمل
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              العودة للصفحة الرئيسية
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* Footer reassurance */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/25">
            <ShieldCheck className="h-4 w-4" />
            بياناتك محمية ويتم التعامل معها بسرية
          </div>
        </div>
      </div>
    </section>
  );
}

