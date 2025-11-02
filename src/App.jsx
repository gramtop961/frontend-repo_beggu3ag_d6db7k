import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProof from './components/ValueProof';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 font-inter text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#accueil" className="text-sm font-semibold">Nexiom Automate</a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#cas">Cas d’usage</a>
            <a className="hover:text-white" href="#pourquoi">Pourquoi nous</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
            <a className="rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 font-medium text-white hover:brightness-110" href="#contact">Audit gratuit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <ValueProof />
        <ContactFooter />
      </main>
    </div>
  );
}
