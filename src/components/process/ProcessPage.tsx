import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import SEO from "../SEO";

const steps = [
  { title: "RAW-MATERIAL STOCK YARD", emoji: "📦" },
  { title: "LABORATORY", emoji: "🧪" },
  { title: "MATERIAL CUTTING", emoji: "🪚" },
  { title: "HEATING BY OIL FIRED FURNACES", emoji: "🔥" },
  { title: "FORGE SHOP FORGING & TRIMMING", emoji: "🔨" },
  { title: "HOT INSPECTION", emoji: "🔍" },
  { title: "READY FOR DISPATCH AFTER PRE-DISPATCH REPORT", emoji: "🚚" },
];

const dieFlow = [
  { title: "DIE SHOP", emoji: "🛠️" },
  { title: "DIE INSPECTION", emoji: "👀" },
  { title: "FORGE SHOP FORGING & TRIMMING", emoji: "🔨" },
];

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Manufacturing Process Flow"
        description={`Manufacturing process: ${steps.map(s => s.title).join(", ")}, DIE flow: ${dieFlow.map(d => d.title).join(", ")}`}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-all duration-700 py-16 px-4 md:px-16 lg:px-32">
        {/* <h1 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-16 tracking-wider">
          🔧 Manufacturing Process Flow
        </h1> */}

        <div className="grid gap-12">

          {/* Main Steps Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {steps.slice(0, 4).map((step, index) => (
              <div
                key={index}
                className="card-glow group relative text-center w-full max-w-xs h-32 flex items-center justify-center"
              >
                <span className="text-lg font-semibold">{step.title}</span>
                <span className="absolute top-2 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                  {step.emoji}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center animate-bounce">
            <ArrowDown className="text-blue-500 dark:text-blue-300" size={36} />
          </div>

          <div className="flex justify-center">
            <div className="card-glow group relative text-center w-full max-w-md h-32 flex items-center justify-center">
              <span className="text-lg font-semibold">{steps[4].title}</span>
              <span className="absolute top-2 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                {steps[4].emoji}
              </span>
            </div>
          </div>

          {/* DIE FLOW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
            {dieFlow.slice(0, 2).map((step, index) => (
              <div
                key={index}
                className="card-glow group relative text-center w-full max-w-xs h-32 flex items-center justify-center"
              >
                <span className="text-lg font-semibold">{step.title}</span>
                <span className="absolute top-2 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                  {step.emoji}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center animate-bounce">
            <ArrowRight className="text-blue-500 dark:text-blue-300" size={36} />
          </div>

          {/* Final Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
            {steps.slice(5, 7).map((step, index) => (
              <div
                key={index}
                className="card-glow group relative text-center w-full max-w-md h-32 flex items-center justify-center"
              >
                <span className="text-lg font-semibold">{step.title}</span>
                <span className="absolute top-2 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                  {step.emoji}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
