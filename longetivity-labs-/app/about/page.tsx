"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { founderStory, valueCards } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      <section className="page-shell relative overflow-hidden pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="eyebrow">About Us</span>
            <h1 className="mt-5 max-w-4xl font-serif text-white">
              AETERNUS was built for people who still want to train well as
              they grow older.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              We exist because adults aged 40 and above deserve a fitness program built specifically for them - not a scaled-down version of something designed for a different body, different goals, and a different stage of life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {valueCards.map((item, index) => (
              <AnimatedSection
                key={item.title}
                animation="fade-up"
                delay={index * 80}
              >
                <div className="tint-panel h-full rounded-[1.8rem] p-5 sm:p-6">
                  <p className="text-2xl font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/78 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <AnimatedSection animation="fade-right">
              <div className="soft-panel p-5 sm:p-6 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
                  Our Story
                </p>
                <h2 className="mt-2 font-serif text-secondary">
                  Why AETERNUS exists.
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  The story behind AETERNUS, and why it was built for the people it serves.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {founderStory.map((paragraph, index) => (
                <AnimatedSection
                  key={paragraph.slice(0, 32)}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="flow-card p-5 sm:p-6">
                    <p className="text-base leading-8 text-secondary/88 sm:text-lg">
                      {paragraph}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm relative pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scale">
            <div className="tint-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Next step
                  </p>
                  <h2 className="mt-2 font-serif text-white">
                    See how that thinking becomes a training program.
                  </h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="rounded-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/programs">
                      View Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/20 bg-white/8 text-white hover:bg-white/12 hover:text-white"
                  >
                    <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer">Book Free Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
