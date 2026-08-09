import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display font-bold text-primary">
            <img 
              src="/logo.svg" 
              alt="شعار منصة شكاوى المستهلك" 
              width={40} 
              height={40} 
              className="h-10 w-auto shrink-0" 
              loading="lazy"
            />
            <span className="text-lg text-foreground font-extrabold">منصة شكاوى المستهلك</span>
          </Link>
          <p className="mt-4 max-w-md text-xs leading-6 text-muted-foreground">
            منصة مستقلة تساعد المستهلكين في الإمارات على توثيق شكاواهم تجاه الشركات
            الخاصة ومتابعتها. المنصة غير تابعة لأي جهة حكومية ولا تمثلها بأي شكل.
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h3 className="text-sm font-bold text-foreground">روابط سريعة</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
            <li><Link to="/about" className="transition-colors hover:text-primary">من نحن</Link></li>
            <li><Link to="/how-it-works" className="transition-colors hover:text-primary">كيف تعمل المنصة</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-primary">الأسئلة الشائعة</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-primary">تواصل معنا</Link></li>
          </ul>
        </nav>

        <nav aria-label="روابط قانونية">
          <h3 className="text-sm font-bold text-foreground">قانوني</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
            <li><Link to="/privacy" className="transition-colors hover:text-primary">سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-primary">الشروط والأحكام</Link></li>
            <li>
              <a 
                href="mailto:moetshakawi-uae@gmail.com" 
                className="inline-flex items-center gap-2 transition-colors hover:text-primary" 
                dir="ltr"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>moetshakawi-uae@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70 bg-background/50">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-[11px] text-muted-foreground md:flex-row">
          <p>© {currentYear} منصة شكاوى المستهلك المستقلة. جميع الحقوق محفوظة.</p>
          <p className="text-center md:text-right">منصة مستقلة — ليست جهة حكومية ولا تمثل أي جهة رسمية في الإمارات.</p>
        </div>
      </div>
    </footer>
  );
}