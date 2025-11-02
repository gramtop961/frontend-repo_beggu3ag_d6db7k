import React from 'react';
import { Cog, Bot, MessageCircle, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    title: 'Automatisation de workflows',
    desc: 'Zapier, Make, API, RPA — nous connectons vos outils et orchestrons des scénarios robustes et fiables.'
  },
  {
    icon: <Bot className="h-6 w-6 text-fuchsia-400" />,
    title: 'Agents IA personnalisés',
    desc: 'Des agents intelligents dédiés à vos tâches métiers: qualification, rédaction, extraction, suivi, contrôle qualité.'
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-sky-400" />,
    title: 'Chatbots IA support client',
    desc: 'Assistance instantanée et personnalisée sur vos canaux: site, WhatsApp, Messenger, Intercom, Slack, etc.'
  },
  {
    icon: <Database className="h-6 w-6 text-violet-400" />,
    title: 'Optimisation CRM & données',
    desc: 'Nettoyage, enrichissement et synchronisation de vos données pour un CRM propre et actionnable.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_20%_10%,rgba(56,189,248,0.12)_0%,transparent_50%),radial-gradient(60%_60%_at_80%_10%,rgba(167,139,250,0.12)_0%,transparent_52%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Comment on transforme ton business avec l’automatisation IA</h2>
          <p className="mt-3 text-white/70">De l’audit stratégique à la mise en production, nous livrons des systèmes fiables, mesurables et évolutifs.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-indigo-500/40 hover:bg-white/10">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-3">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-3 text-xs text-white/60">Délai moyen: 2 à 6 semaines</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
