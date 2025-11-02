import React, { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactFooter() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Merci ! Nous revenons vers vous sous 24h.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-neutral-950 pt-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.10)_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Parlons de ton audit IA gratuit</h2>
          <p className="mt-2 text-white/70">30 minutes pour identifier 2–3 quick wins prêts à déployer.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Prénom</label>
                <input required name="firstName" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500" placeholder="Jean" />
              </div>
              <div>
                <label className="text-xs text-white/70">Nom</label>
                <input required name="lastName" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500" placeholder="Dupont" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs text-white/70">Email</label>
              <input type="email" required name="email" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500" placeholder="vous@entreprise.com" />
            </div>
            <div className="mt-4">
              <label className="text-xs text-white/70">Message</label>
              <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500" placeholder="Décris brièvement tes processus et objectifs."></textarea>
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:brightness-110">
              Demander mon audit gratuit
            </button>
            {status && <p className="mt-3 text-center text-sm text-emerald-300">{status}</p>}
          </form>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 text-green-400" />
                <div>
                  <div className="font-medium">WhatsApp Business</div>
                  <a className="text-white/70 underline underline-offset-4 hover:text-white" href="https://wa.me/33700000000" target="_blank" rel="noreferrer">Écrire sur WhatsApp</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <a className="text-white/70 underline underline-offset-4 hover:text-white" href="mailto:contact@nexiom-automate.com">contact@nexiom-automate.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-fuchsia-400" />
                <div>
                  <div className="font-medium">Téléphone</div>
                  <a className="text-white/70 underline underline-offset-4 hover:text-white" href="tel:+33700000000">+33 7 00 00 00 00</a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-neutral-900 p-4 text-center">
              <div className="text-sm text-white/80">Prêt à passer à l’action ?</div>
              <a href="#accueil" className="mt-3 inline-block rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:bg-white/10">Retour en haut</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative mt-16 border-t border-white/10 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold">Nexiom Automate</div>
              <div className="mt-1 text-xs text-white/60">Agence jeune, audacieuse, axée performance et efficacité.</div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-white/70 hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="text-white/70 hover:text-white" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="text-white/70 hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">X</a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Nexiom Automate. Tous droits réservés.</div>
        </div>
      </footer>
    </section>
  );
}
