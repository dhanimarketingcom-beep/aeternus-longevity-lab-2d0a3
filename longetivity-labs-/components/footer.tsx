"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import colors from "tailwindcss/colors";
import {
  mainNavigation,
  programCards,
  siteEmail,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
  siteWhatsAppUrl,
} from "@/lib/site-content";

const brandColors = {
  primary: colors.teal[800],
  accent: colors.cyan[300],
  muted: colors.stone[400],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/aeternuslongevitylab/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@aeternuslongevitylab",
    icon: Music2,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-primary text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, ${brandColors.muted} 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-secondary/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex rounded-xl bg-primary px-3 py-2 shadow-[0_8px_24px_rgba(8,38,41,0.3)]">
              <Image
                src="/images/etre-20tarso.png"
                alt={siteName}
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/78 sm:text-base">
              Science-led personal training and small group sessions for adults
              who want to move better, feel stronger, and stay capable for the
              long term.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/14"
              >
                WhatsApp
              </a>
              <a
                href="https://aeternuslongevitylab.trafft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/30 bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Book Free Trial
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Pages
            </p>
            <ul className="mt-4 space-y-3">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/78 transition-colors hover:text-white sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Programs
            </p>
            <ul className="mt-4 space-y-3">
              {programCards.map((program) => (
                <li key={program.title}>
                  <Link
                    href="/programs"
                    className="text-sm text-white/78 transition-colors hover:text-white sm:text-base"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Contact Us
            </p>
            <ul className="mt-4 space-y-4 text-sm text-white/78 sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>Dubai, UAE. Home, mobile, and private training setups.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href={sitePhoneHref} className="transition-colors hover:text-white">
                  {sitePhoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${siteEmail}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteEmail}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 transition-colors hover:bg-white/14"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
