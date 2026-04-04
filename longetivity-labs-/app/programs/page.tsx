"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  onboardingChecklist,
  programCards,
  sessionPillars,
} from "@/lib/site-content";

const ourServicePoints = [
  "Unique program targeting heart, body, and mind through five forms of exercise: meditation, mobility, strength, cardio, and brain games.",
  "Flexible training anywhere - home, park, beach, garden, or at our location.",
];

const offeringPoints40 = [
  "A structured fitness program specially designed for the needs and interests of three key age groups above 40",
  "Activates the healthy trifecta - MIND, BODY and HEART - to give each individual a holistic fitness experience in just 1 hour",
  "Uniquely combines the best of Traditional and Modern Day techniques",
  "Incorporates a variety of equipment and training formats",
  "Each session allows individuals to push themselves while having fun",
];

const offeringPoints30 = [
  "A structured fitness program designed for the needs and interests of adults in their 30s",
  "Activates the healthy trifecta - MIND, BODY and HEART - for a holistic fitness experience in just 1 hour",
  "Uniquely combines Traditional and Modern Day techniques for sustainable long-term health",
  "Incorporates a variety of equipment and training formats",
  "Each session allows individuals to push themselves while having fun",
];

export default function ProgramsPage() {
  return (
    <main className="relative overflow-hidden pt-20 sm:pt-24">
      <section className="page-shell relative overflow-hidden pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="eyebrow">Programs</span>
            <h1 className="mt-5 max-w-4xl font-serif text-white">
              1-on-1 personal training and small group sessions, both built on
              the same AETERNUS framework.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              We offer 1-on-1 personal training and small group sessions, each lasting 60 minutes and built around the same integrated AETERNUS format: mobility, strength, and mindfulness and recovery.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {programCards.map((program, index) => (
              <AnimatedSection
                key={program.title}
                animation="fade-up"
                delay={index * 120}
              >
                <article className="flow-card overflow-hidden bg-white/92">
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/72 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {program.duration}
                      </span>
                      <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {program.format}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                      {program.shortTitle}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-secondary">
                      {program.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {program.description}
                    </p>

                    <ul className="mt-5 grid gap-2">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-2xl border border-border bg-muted/46 px-4 py-3 text-sm text-secondary/88"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="section-padding relative bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="rounded-full border border-white/12 bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Our Service
            </span>
            <h2 className="mt-4 font-serif text-white">
              A complete approach to fitness and wellbeing.
            </h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {ourServicePoints.map((point, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 120}>
                <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 sm:p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-white/85 sm:text-lg">
                    {point}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* One-of-a-Kind Offering Section */}
      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="max-w-4xl">
            <span className="rounded-full border border-secondary/10 bg-secondary/6 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">
              Our One-of-a-Kind Offering
            </span>
            <h2 className="mt-4 font-serif text-secondary">
              Introducing Holistic Fitness.
            </h2>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <AnimatedSection animation="fade-up" delay={80}>
              <div className="tint-panel h-full rounded-[1.9rem] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Ages 40+
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Holistic Fitness for ages 40+
                </h3>
                <ul className="mt-5 space-y-3">
                  {offeringPoints40.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-7 text-white/82 sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={160}>
              <div className="soft-panel h-full rounded-[1.9rem] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
                  Ages 30+
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-secondary">
                  Holistic Fitness for ages 30+
                </h3>
                <ul className="mt-5 space-y-3">
                  {offeringPoints30.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-white">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-7 text-secondary/82 sm:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <AnimatedSection animation="fade-right">
              <div className="soft-panel p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
                  Session programming
                </p>
                <h2 className="mt-2 font-serif text-secondary">
                  What every session includes.
                </h2>
                <div className="mt-5 grid gap-3">
                  {sessionPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-[1.4rem] border border-border bg-white/78 px-4 py-4"
                    >
                      <p className="text-lg font-semibold text-secondary">
                        {pillar.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={120}>
              <div className="flow-card overflow-hidden p-4 sm:p-5">
                <div className="rounded-[1.5rem] bg-white p-3 sm:p-4">
                  <Image
                    src="/program-description.png"
                    alt="AETERNUS session format"
                    width={1843}
                    height={1057}
                    className="h-auto w-full rounded-[1rem] object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <AnimatedSection animation="fade-right" delay={160}>
              <div className="flow-card overflow-hidden p-4 sm:p-5">
                <div className="rounded-[1.5rem] bg-white p-3 sm:p-4">
                  <Image
                    src="/program-diagram-mind-body-heart.png"
                    alt="AETERNUS integrated mind body heart diagram"
                    width={1868}
                    height={1053}
                    className="h-auto w-full rounded-[1rem] object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={220}>
              <div className="tint-panel rounded-[1.9rem] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Onboarding checklist
                </p>
                <h2 className="mt-2 font-serif text-white">
                  A clearer start for every new client.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/76 sm:text-base">
                  Before your first session, we take the time to understand your body, your health, and your goals - so your program is built around you from day one.
                </p>
                <div className="mt-5 space-y-3">
                  {onboardingChecklist.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[1.35rem] border border-white/10 bg-white/8 px-4 py-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-7 text-white/84 sm:text-base">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={280} className="mt-6">
            <div className="soft-panel overflow-hidden p-4 sm:p-5">
              <Image
                src="/onboarding-process.png"
                alt="Onboarding process"
                width={1379}
                height={756}
                className="h-auto w-full rounded-[1.2rem] object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding-sm relative pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scale">
            <div className="tint-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Ready to start
                  </p>
                  <h2 className="mt-2 font-serif text-white">
                    Book a free trial and we will guide you through the right
                    starting point.
                  </h2>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent px-10 py-6 text-lg font-bold text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer">
                    Book Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
