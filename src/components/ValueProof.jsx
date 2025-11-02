import React from 'react';
import { Rocket, BarChart3, CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-white/70">{label}</div>
    </div>
  );
}

export default function ValueProof() {
  return (
    <section id="cas" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_10%_10%,rgba(129,140,248,0.15)_0%,transparent_55%),radial-gradient(60%_60%_at_90%_20%,rgba(56,189,248,0.15)_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Cas d'usage */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-2">
            <Rocket className="h-5 w-5 text-indigo-400" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Cas d’usage: avant / après</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'E-commerce',
                before: ['Traitement manuel des commandes', 'SAV saturé', 'Données clients dispersées'],
                after: ['Facturation et suivi automatisés', 'Chatbot 24/7 multi-canal', 'CRM unifié et nettoyé'],
              },
              {
                title: 'Agence marketing',
                before: ['Reporting chronophage', 'Briefs incomplets', 'Prospection irrégulière'],
                after: ['Tableaux de bord auto', 'Agents IA pour briefs', 'Séquences outreach pilotées'],
              },
              {
                title: 'Freelances',
                before: ['Devis et relances manuels', 'Perte d’informations', 'Pipeline instable'],
                after: ['Devis + signature automatiques', 'Hub de projets centralisé', 'Nurturing continu'],
              },
              {
                title: 'PME',
                before: ['Silos d’outils', 'Entrées en double', 'Dépendance au papier'],
                after: ['Workflows interconnectés', 'Nettoyage et dédoublonnage', 'Zéro papier, 100% traçable'],
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-white/70">Avant</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                      {c.before.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/70">Après</div>
                    <ul className="mt-2 space-y-1 text-sm text-emerald-300">
                      {c.after.map((a) => (
                        <li key={a} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" /> {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pourquoi choisir */}
        <div id="pourquoi" className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-fuchsia-400" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Pourquoi choisir Nexiom Automate ?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'ROI mesurable', desc: 'Chaque automatisation est reliée à des métriques business: temps gagné, coûts évités, revenus générés.', icon: <BarChart3 className="h-6 w-6" /> },
              { title: 'Fiabilité & sécurité', desc: 'Standards pro, logs, alertes, reprise sur incident, et respect de vos politiques de sécurité.', icon: <Shield className="h-6 w-6" /> },
              { title: 'Vitesse d’exécution', desc: 'Des itérations rapides orientées résultat — prototypes en jours, déploiement en semaines.', icon: <Clock className="h-6 w-6" /> },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-indigo-300">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-white/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Micro témoignages */}
        <div id="temoignages" className="mt-16">
          <div className="mb-6 text-2xl font-semibold sm:text-3xl">Ils gagnent des heures chaque semaine</div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: 'On a divisé par deux le temps de traitement commandes.', name: 'Léa — COO e-commerce' },
              { quote: 'Les leads sont qualifiés automatiquement, notre CAC chute.', name: 'Amine — CEO agence' },
              { quote: 'Je facture 30% de temps en moins, sans perdre en qualité.', name: 'Nora — Freelance' },
            ].map((t, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/80">“{t.quote}”</p>
                <div className="mt-4 text-xs text-white/60">{t.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-16">
          <div className="mb-6 text-2xl font-semibold sm:text-3xl">FAQ</div>
          <div className="space-y-4">
            {[
              { q: 'Comment débute la collaboration ?', a: 'Par un audit gratuit de 30 minutes pour cartographier vos processus et définir les quick wins.' },
              { q: 'Quels outils utilisez-vous ?', a: 'Zapier, Make, n8n, API custom, agents IA (OpenAI, Anthropic), bases de données et CRM (HubSpot, Notion, Airtable, Salesforce).' },
              { q: 'Quels résultats puis-je attendre ?', a: 'Gains de temps, réduction d’erreurs, plus de réactivité et des flux de données propres — avec des indicateurs clairs.' },
            ].map((f) => (
              <details key={f.q} className="group rounded-lg border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-white/90">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <Stat value="50+ h/mois" label="moy. économisées par équipe" />
          <Stat value="2-6 semaines" label="du premier prototype au déploiement" />
          <Stat value="24/7" label="systèmes et support automatisés" />
        </div>
      </div>
    </section>
  );
}
