"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { sitePhoneDisplay, sitePhoneHref } from "@/lib/site-content";

export function CTASection() {
  return (
    <section className="section-padding-sm relative pb-12 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale">
          <div className="tint-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <span className="rounded-full border border-white/12 bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
                  Free Trial
                </span>
                <h2 className="mt-4 max-w-3xl font-serif text-white">
                  Ready to book your first session?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  Start with a free consultation. We will walk you through the onboarding process, understand your goals, and make sure the program is the right fit before you begin.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent px-10 py-6 text-lg font-bold text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                >
                  <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer">
                    Book Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a
                  href={sitePhoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
                >
                  <Phone className="h-4 w-4" />
                  {sitePhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
