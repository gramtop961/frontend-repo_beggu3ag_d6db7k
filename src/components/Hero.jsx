import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient aura overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.20)_0%,rgba(168,85,247,0.12)_35%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Agence d’automatisation IA • Nexiom Automate
        </span>
        <h1 className="font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Automatise aujourd’hui. <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Domine demain.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base text-white/80 sm:text-lg">
          Nous aidons les entreprises et créateurs à éliminer les tâches répétitives, optimiser leurs processus et libérer du temps grâce à des systèmes intelligents et sur mesure.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110">
            Planifie ton audit gratuit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
