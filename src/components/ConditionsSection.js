"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Disc, Zap, Activity, AlertCircle, ChevronRight } from "lucide-react";
import { conditionsData } from "@/data/conditions";

export default function ConditionsSection() {
  const [filter, setFilter] = useState("all");

  const filteredConditions = filter === "all"
    ? conditionsData
    : conditionsData.filter((c) => {
        if (filter === "brain") return c.category.toLowerCase().includes("brain");
        if (filter === "spine") return c.category.toLowerCase().includes("spine");
        return true;
      });

  return (
    <section className="section-padding bg-neutral-offwhite border-b border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold text-teal uppercase tracking-widest">
              Patient Educational Guide
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-heading leading-tight">
              Understanding the Conditions We Treat.
            </h2>
            <p className="text-sm sm:text-base text-neutral-body">
              Clear, medically responsible information on symptoms, diagnostics, and modern surgical versus conservative pathways.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white p-1.5 rounded-xl border border-neutral-border shadow-subtle">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                filter === "all"
                  ? "bg-navy text-white shadow-sm"
                  : "text-neutral-body hover:text-navy-heading"
              }`}
            >
              All Conditions ({conditionsData.length})
            </button>
            <button
              onClick={() => setFilter("spine")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                filter === "spine"
                  ? "bg-navy text-white shadow-sm"
                  : "text-neutral-body hover:text-navy-heading"
              }`}
            >
              Spine & Disc
            </button>
            <button
              onClick={() => setFilter("brain")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                filter === "brain"
                  ? "bg-navy text-white shadow-sm"
                  : "text-neutral-body hover:text-navy-heading"
              }`}
            >
              Brain & Trauma
            </button>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <div
              key={condition.slug}
              className="group bg-white p-6 rounded-2xl border border-neutral-border hover:border-teal/40 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-neutral-offwhite border border-neutral-border text-teal">
                    {condition.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {condition.scientificName.split("/")[0]}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy-heading group-hover:text-teal transition-colors">
                  {condition.title}
                </h3>

                <p className="text-xs text-neutral-body line-clamp-3 leading-relaxed">
                  {condition.summary}
                </p>

                {/* Common Symptoms preview */}
                <div className="pt-2 border-t border-neutral-border/60">
                  <p className="text-[11px] font-semibold text-neutral-body uppercase tracking-wider mb-1">
                    Key Signs & Symptoms:
                  </p>
                  <ul className="text-xs text-neutral-body space-y-1">
                    {condition.symptoms.slice(0, 2).map((symp, i) => (
                      <li key={i} className="line-clamp-1 flex items-start gap-1.5">
                        <span className="text-teal font-bold">•</span>
                        <span>{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-5 border-t border-neutral-border/60 flex items-center justify-between text-xs">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="font-bold text-navy-heading group-hover:text-teal inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Detailed Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/${condition.relatedServiceSlug}`}
                  className="text-[11px] text-teal font-medium hover:underline line-clamp-1"
                >
                  {condition.relatedServiceName.split("&")[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-neutral-border text-navy-heading text-sm font-semibold hover:border-teal hover:bg-neutral-50 shadow-subtle transition-all"
          >
            <span>Explore Complete Conditions Directory</span>
            <ArrowRight className="w-4 h-4 text-teal" />
          </Link>
        </div>

      </div>
    </section>
  );
}

