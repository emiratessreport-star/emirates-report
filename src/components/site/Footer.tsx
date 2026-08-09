import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-primary">
            <img src="/logo.svg" alt="شعار المنصة" className="h-10 w-auto" />
            <span className="text-lg">منصة شكاوى المستهلك</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            منصة مستقلة تساعد المستهلكين في الإمارات على توثيق شكاواهم تجاه الشركات
            الخاصة ومتابعتها. المنصة غير تابعة لأي جهة حكومية ولا تمثلها بأي شكل.
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h3 className="text-sm font-semibold text-foreground">روابط</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">من نحن</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground">كيف تعمل المنصة</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">الأسئلة الشائعة</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">تواصل معنا</Link></li>
          </ul>
        </nav>

        <nav aria-label="روابط قانونية">
          <h3 className="text-sm font-semibold text-foreground">قانوني</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">الشروط والأحكام</Link></li>
            <li>
              <a href="mailto:moetshakawi-uae@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground" dir="ltr">
                <Mail className="h-4 w-4" aria-hidden /> moetshakawi-uae@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {year} منصة شكاوى المستهلك المستقلة. جميع الحقوق محفوظة.</p>
          <p>منصة مستقلة — ليست جهة حكومية ولا تمثل أي جهة رسمية في الإمارات.</p>
        </div>
      </div>
    </footer>
  );
}
