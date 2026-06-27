"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutDialog } from "@/components/AboutDialog";
export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <main className="h-screen w-screen flex flex-col md:flex-row overflow-hidden relative bg-bg-base text-text-primary">
      {/* Floating Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-bg-surface/80 backdrop-blur-md px-6 py-3 rounded-full border border-border-subtle shadow-xl transition-transform hover:scale-105">
        <img 
          src="/chinook-logo.png" 
          alt="Chinook Cyber" 
          className="h-8 object-contain"
        />
        <span className="font-semibold tracking-wide text-text-primary">Chinook Cyber</span>
      </div>

      {/* Left Panel - Cyber Planner */}
      <a 
        href="https://planner.chinookcyber.com/" 
        className="flex-1 relative group overflow-hidden flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-tint-key-terrain border-b md:border-b-0 md:border-r border-border-subtle"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-color-key-terrain/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 glass-panel rounded-2xl p-4 md:p-6 max-w-2xl w-full flex flex-col gap-6 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-color-key-terrain/20 group-hover:border-color-key-terrain/30">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary group-hover:text-color-key-terrain transition-colors">
              Cyber Planner
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Interactive OAKOC-based cyber planning and maneuver workspace.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle bg-bg-base">
            <img 
              src="/planner-screenshot.png" 
              alt="Cyber Planner Screenshot" 
              className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </a>

      {/* Right Panel - Threat Group Browser */}
      <a 
        href="https://browser.chinookcyber.com/" 
        className="flex-1 relative group overflow-hidden flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-tint-avenue"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-color-avenue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 glass-panel rounded-2xl p-4 md:p-6 max-w-2xl w-full flex flex-col gap-6 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-color-avenue/20 group-hover:border-color-avenue/30">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-primary group-hover:text-color-avenue transition-colors">
              Threat Group Browser
            </h2>
            <p className="text-text-secondary text-sm md:text-base">
              Curated ATT&CK intrusion set corpus and threat landscape.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle bg-bg-base">
            <img 
              src="/browser-screenshot.png" 
              alt="Threat Browser Screenshot" 
              className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </a>

      {/* Footer / Legal */}
      <div className="absolute bottom-4 right-4 z-50">
        <button
          onClick={() => setAboutOpen(true)}
          className="text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          About &amp; legal
        </button>
      </div>

      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </main>
  );
}
