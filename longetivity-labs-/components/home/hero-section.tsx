"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const heroImages = [
  "/hero-longevity-outdoor.png",
  "/personal-training-session-coach-gym.jpg",
  "/small-group-fitness-class-with-trainer-and-members.jpg",
];

const heroPoints = [
  "1-on-1 personal training",
  "Small group sessions",
  "Mobility, strength, and recovery in every session",
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((value) => (value + 1) % heroImages.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="page-shell relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          return (
            <div
              key={image}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: currentImage === index ? 1 : 0 }}
            >
              <Image
                src={image}
                alt="AETERNUS longevity training"
                fill
                priority={index === 0}
                className="object-cover"
                quality={90}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(8,38,41,0.92),rgba(15,95,88,0.7),rgba(8,38,41,0.5))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(130,213,208,0.22),transparent_60%)] lg:block" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-30 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <span className="eyebrow">AETERNUS Longevity Lab</span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={120}>
              <h1 className="mt-6 max-w-4xl font-serif text-white">
                Train for life with strength, mobility, and recovery working together.
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={220}>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                We offer 1-on-1 personal training and small group sessions for adults 40+. Every 60-minute session is designed around how you move now and how you want to keep moving in the years ahead.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={320}>
              <div className="mt-6 flex flex-wrap gap-3">
                {heroPoints.map((point) => (
                  <span key={point} className="info-chip">
                    {point}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={420}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-full bg-accent px-8 py-5 text-base font-semibold text-accent-foreground hover:bg-accent/92 sm:text-lg"
                >
                  <Link href="https://aeternuslongevitylab.trafft.com/" target="_blank" rel="noopener noreferrer">
                    Book Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto rounded-full border-white/24 bg-white/6 px-8 py-5 text-base text-white hover:bg-white/10 hover:text-white sm:text-lg"
                >
                  <Link href="/programs">Explore the Programs</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection
            animation="fade-left"
            delay={260}
            className="lg:justify-self-end"
          >
            <div className="tint-panel rounded-[2rem] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Built into every session
              </p>
              <div className="mt-4 space-y-4">
                {[
                  {
                    title: "Movement first",
                    body: "Prepare the body properly before loading it.",
                  },
                  {
                    title: "Strength with purpose",
                    body: "Train for capability, balance, and resilience.",
                  },
                  {
                    title: "Recovery included",
                    body: "Finish with breathing, regulation, and guided recovery.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/7 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/74">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
