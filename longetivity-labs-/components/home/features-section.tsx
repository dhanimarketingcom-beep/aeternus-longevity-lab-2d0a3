"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { programCards, sessionPillars } from "@/lib/site-content";

export function FeaturesSection() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="max-w-3xl">
          <span className="rounded-full border border-secondary/10 bg-secondary/6 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-secondary">
            Programs
          </span>
          <h2 className="mt-4 font-serif text-secondary">
            Two training formats, one integrated system.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Every 60-minute session combines mobility and movement, strength and functional training, and mindfulness and recovery - designed for your body, your goals, and your pace.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {programCards.map((program, index) => (
            <AnimatedSection
              key={program.title}
              animation="fade-up"
              delay={index * 120}
              className="h-full"
            >
              <article className="flow-card h-full overflow-hidden">
                <div className="grid h-full gap-0 sm:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[240px] sm:min-h-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/65 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {program.duration}
                      </span>
                      <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {program.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                          {program.shortTitle}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-secondary">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {program.description}
                    </p>
                    <div className="mt-4 grid gap-2 text-sm text-secondary/82">
                      <div className="flex items-start justify-between gap-4 rounded-2xl bg-muted/55 px-4 py-3">
                        <span className="font-semibold">Format</span>
                        <span className="text-right">{program.format}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4 rounded-2xl bg-muted/55 px-4 py-3">
                        <span className="font-semibold">Location</span>
                        <span className="text-right">{program.locations}</span>
                      </div>
                    </div>
                    <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white/60 px-4 py-3"
                        >
                          <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={280} className="mt-6">
          <div className="soft-panel p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                  Every session includes
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-secondary">
                  The same core pillars, every time.
                </h3>
                <div className="mt-5 grid gap-3">
                  {sessionPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-4 rounded-[1.4rem] border border-border bg-white/72 px-4 py-4"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-white">
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-secondary">
                          {pillar.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-white p-4 shadow-[0_20px_50px_rgba(8,38,41,0.08)]">
                <Image
                  src="/program-description.png"
                  alt="Program structure and session format"
                  width={1843}
                  height={1057}
                  className="h-auto w-full rounded-[1rem] object-contain"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
