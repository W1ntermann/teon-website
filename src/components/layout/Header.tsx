"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "pl", flag: "🇵🇱", label: "Polski" },
  { code: "uk", flag: "🇺🇦", label: "Українська" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setSearchQuery("");
    setSearchOpen(false);
  }, [searchQuery, router]);

  const navItems = [
    { labelKey: "nav.company", href: "/company" },
    { labelKey: "nav.products", href: "/products" },
    { labelKey: "nav.service", href: "/service" },
    { labelKey: "nav.contact", href: "/contact" },
  ];

  const topItems = [
    { labelKey: "nav.news", href: "#" },
    { labelKey: "nav.exhibitions", href: "#" },
    { labelKey: "nav.contact_person", href: "#" },
    { labelKey: "nav.worldwide", href: "#" },
  ];

  const isNavActive = (href: string) =>
    pathname === href || (href === "/products" && pathname.startsWith("/products"));

  const openSearchFromMenu = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  return (
    <header>
      <div className="border-b border-[#ccc] bg-[#ffffff]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-1.5 px-4 py-1.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => setLang(language.code)}
                title={language.label}
                aria-label={language.label}
                aria-pressed={lang === language.code}
                className={cn(
                  "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
                  lang === language.code
                    ? "bg-[#1E3A5F] text-white border border-[#1E3A5F]"
                    : "bg-transparent text-[#000] border border-transparent hover:bg-[#f0f5fa] hover:text-[#1E3A5F]"
                )}
              >
                <span className={cn("text-xs tracking-wide", lang === language.code && "font-semibold")}>{language.code === "uk" ? "UA" : language.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-y-0.5 sm:justify-end">
            {topItems.map((item, idx) => (
              <span key={item.labelKey} className="flex items-center">
                <a
                  href={item.href}
                  className="px-1.5 py-1 text-[11px] text-[#000] no-underline transition-colors hover:text-[#1E3A5F] sm:px-2 sm:text-xs"
                >
                  {t(item.labelKey)}
                </a>
                {idx < topItems.length - 1 && (
                  <span className="hidden text-[#999] text-xs sm:inline">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b-2 border-[#152B47] bg-[#1E3A5F] shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex min-h-[72px] max-w-[1200px] items-center justify-between gap-2 px-4 py-2 md:py-0">
          <Link href="/" className="flex min-w-0 shrink items-center no-underline">
            <img
              src="/teon-logo.png"
              alt="TEON"
              className="h-10 w-auto object-contain md:h-12 lg:h-14 brightness-0 invert"
            />
          </Link>

          <nav className="hidden h-[72px] items-stretch md:flex">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "box-border flex items-center border-b-[3px] px-4 pb-0 pt-0.5 text-[13px] font-bold tracking-wide no-underline transition-colors",
                    isActive
                      ? "border-white text-white"
                      : "border-transparent text-white/80 hover:border-white/50 hover:text-white"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              className="flex min-h-11 min-w-11 items-center justify-center border-0 bg-transparent px-3 text-white/80 hover:text-white"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? t("search.close") : t("search.open")}
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 md:gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen((o) => !o)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded border-0 bg-transparent text-white/80 hover:text-white md:hidden"
              aria-expanded={searchOpen}
              aria-label={searchOpen ? t("search.close") : t("search.open")}
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded border-0 bg-transparent text-white/80 hover:bg-white/10 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={t("nav.menu")}
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="right" className="w-[min(100%,380px)]" id="mobile-navigation">
            <SheetHeader className="text-left">
              <SheetTitle className="text-[#1E3A5F]">{t("nav.menu")}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => {
                const isActive = isNavActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-base font-bold no-underline transition-colors",
                      isActive ? "bg-[#1E3A5F]/10 text-[#1E3A5F]" : "text-[#000] hover:bg-[#f0f5fa]"
                    )}
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={openSearchFromMenu}
                className="flex items-center gap-2 rounded-md px-4 py-3 text-left text-base font-bold text-[#000] hover:bg-[#f5f5f5]"
              >
                <Search size={20} />
                {t("search.open")}
              </button>
            </nav>
          </SheetContent>
        </Sheet>

        {searchOpen && (
          <form onSubmit={handleSearch} className="border-t border-[#ddd] bg-[#fafafa] px-4 py-3">
            <div className="mx-auto max-w-[1200px]">
              <div className="flex items-center border border-[#1E3A5F] bg-white">
                <input
                  type="search"
                  placeholder={t("search.placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="min-h-11 min-w-0 flex-1 border-0 px-4 py-2.5 text-sm text-[#000] outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center bg-[#1E3A5F] px-4 text-white"
                  aria-label={t("search.submit")}
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </header>
  );
}