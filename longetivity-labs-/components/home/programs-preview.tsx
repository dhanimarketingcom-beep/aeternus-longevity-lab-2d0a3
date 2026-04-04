"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ProgramsPreview() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedSection animation="fade-right">
            <div className="tint-panel p-6 sm:p-8">
              <span className="rounded-full border border-white/12 bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Our Approach
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-white">
                One integrated training system designed for longevity.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
                Each session activates the MIND, BODY and HEART trifecta - combining traditional and modern techniques to deliver a full holistic fitness experience in just one hour. Available anywhere.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/programs">
                    See Program Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/8 text-white hover:bg-white/12 hover:text-white"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={140}>
            <div className="flow-card overflow-hidden p-4 sm:p-5">
              <div className="rounded-[1.4rem] bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                  Our One of a Kind Offering
                </p>
                <h3 className="mt-2 text-xl font-semibold text-secondary">
                  Introducing Holistic Fitness for ages 30+
                </h3>
                <div className="mt-3">
                  <Image
                    src="/one%20of%20a%20kind%20offering.png"
                    alt="Our one of a kind offering - Mind Body Heart holistic fitness"
                    width={1868}
                    height={1053}
                    className="h-auto w-full rounded-[1rem] object-contain"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
