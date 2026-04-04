"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  mainNavigation,
  sitePhoneDisplay,
  sitePhoneHref,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const solidHeader = scrolled || !isHomePage || mobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solidHeader
            ? "border-b border-white/10 bg-primary/96 shadow-[0_16px_40px_rgba(8,38,41,0.24)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className={cn(
              "relative z-[60] flex items-center transition-all duration-300 hover:scale-[1.02]",
              solidHeader
                ? "rounded-2xl overflow-hidden shadow-[0_14px_32px_rgba(8,38,41,0.28)]"
                : "rounded-full bg-primary px-3 py-2 shadow-[0_14px_32px_rgba(8,38,41,0.28)]",
            )}
            onClick={closeMenu}
          >
            {solidHeader ? (
              <Image
                src="/images/logo-full.jpg"
                alt="AETERNUS Longevity Lab"
                width={200}
                height={200}
                className="h-14 w-auto sm:h-16"
                priority
              />
            ) : (
              <Image
                src="/images/logo-transparent.png"
                alt="AETERNUS Longevity Lab"
                width={200}
                height={200}
                className="h-14 w-auto sm:h-16"
                priority
              />
            )}
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/12 bg-secondary/45 px-2 py-2 backdrop-blur-sm lg:flex">
            {mainNavigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "bg-white text-secondary"
                      : "text-white/82 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={sitePhoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/82 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent" />
              {sitePhoneDisplay}
            </a>
            <Button
              asChild
              className="rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer">Book Free Trial</Link>
            </Button>
          </div>

          <button
            type="button"
            className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-primary text-white shadow-[0_12px_28px_rgba(8,38,41,0.2)] lg:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(8,38,41,0.74)] backdrop-blur-md transition-opacity duration-300 lg:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "absolute inset-x-4 top-22 rounded-[2rem] border border-white/10 bg-secondary px-5 py-5 text-white shadow-[0_26px_80px_rgba(8,38,41,0.35)] transition-all duration-300 sm:top-24",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
          )}
        >
          <div className="mb-4 flex flex-col gap-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-white text-secondary"
                    : "bg-white/5 text-white/88 hover:bg-white/10 hover:text-white",
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Contact
            </p>
            <a href={sitePhoneHref} className="mt-3 block text-lg font-semibold text-white">
              {sitePhoneDisplay}
            </a>
            <Button
              asChild
              className="mt-4 w-full rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Book Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
