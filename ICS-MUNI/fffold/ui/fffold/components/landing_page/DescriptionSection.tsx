import React from "react";
import { Card } from "../ui/card";
import { AlertTriangle, FlaskConical, Award, Beaker, Droplets, Gauge, Activity, Zap, BadgeCheck, Crosshair, Cpu, ChartNoAxesCombined, Atom, ChevronsUp, Globe, BookOpen } from "lucide-react";
import { Button } from "../common/Button";

export default function DescriptionSection(): React.JSX.Element {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="lg:text-4xl font-bold text-center text-gray-900 mb-8">
          About
          {" "}
          <span className="text-secondary">PR</span>
          <span className="dark-silver-text">
            OPTIMus
          </span>
        </h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
          PROPTIMus is a web application for local optimisation of protein structures predicted by{" "}
          <a
            href="https://www.nature.com/articles/s41586-021-03819-2"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline decoration-primary/40 hover:decoration-primary"
          >
            AlphaFold2
          </a>{" "}
          and deposited in{" "}
          <a
            href="https://academic.oup.com/nar/article/50/D1/D439/6430488"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline decoration-primary/40 hover:decoration-primary"
          >
            AlphaFoldDB
          </a>
          . It focuses on refining low-confidence regions and improving local geometry.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 m-2 transition hover:shadow-lg transition-shadow duration-200 ease-out">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">How PROPTIMus works</h3>
            <div className="pl-1 text-gray-700 space-y-3">
              <div className="flex items-center items-start gap-4">
                <Crosshair className="h-7 w-7  text-primary mt-2" />
                <p>Detects regions with predicted confidence less than 90 (pLDDT) and targets them for refinement.</p>
              </div>
              <div className="flex items-center gap-4">
                <Cpu className="h-7 w-7 text-primary mt-2" />
                <p>
                  Optimises with the physics-based generic force field{" "}
                  <a
                    href="https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202004239"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline decoration-primary/40 hover:decoration-primary"
                  >
                    GFN-FF
                  </a>{" "}
                  using a divide-and-conquer strategy.
                </p>
              </div>
              <div className="flex  items-center gap-4">
                <Award className="h-7 w-7  text-primary" />
                <p>Achieves results comparable to whole-structure optimisation with constrained α-carbons.</p>
              </div>
              <div className="flex items-center gap-4">
                <ChartNoAxesCombined className="h-6 w-6 text-primary" />
                <p>Improves bond lengths, bond angles, and local residue–residue interactions.</p>
              </div>
              <div className="flex items-center gap-4">
                <Atom className="h-6 w-6 text-primary " />
                <p>
                  Protonates input structures with{" "}
                  <a
                    href="https://pubs.acs.org/doi/full/10.1021/ct100578z"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline decoration-primary/40 hover:decoration-primary"
                  >
                    PROPKA3
                  </a>{" "}
                  before charge computation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 m-2 hover:shadow-lg transition-shadow duration-200 ease-out">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Why use PROPTIMus</h3>
            <div className="pl-1 text-gray-700 space-y-6">
              <div className="flex items-start gap-3">
                <Activity className=" h-6 w-6 text-primary" />
                <p>Focuses compute on low-confidence regions for efficiency.</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary " />
                <p>Physics-based refinement complements ML predictions.</p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronsUp className="h-6 w-6 text-primary " />
                <p>Fast via divide-and-conquer; practical for large models.</p>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-6 w-6 text-primary " />
                <p>Free and open to all users—no login required.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-center gap-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 ">Learn more</h3>
          <div className="flex justify-center">
            <Card className="p-6 m-2 transition hover:shadow-lg hover:bg-accent transition-shadow duration-200 ease-out cursor-pointer max-w-md" asChild>
              <a href="https://github.com/sb-ncbr/FFFold/wiki" target="_blank" rel="noreferrer">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Documentation</h4>
                    <p className="text-sm text-gray-600">Visit our Wiki for detailed guides and information</p>
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section >
  );
}