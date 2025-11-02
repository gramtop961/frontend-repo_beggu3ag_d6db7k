import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import ValueProof from './components/ValueProof';
import ContactFooter from './components/ContactFooter';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ValueProof />
      <ContactFooter />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-center text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl">Nos services</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">Découvrez comment nous automatisons vos workflows, mettons en place des agents IA, des chatbots et optimisons vos données.</p>
      </section>
      <Services />
      <ContactFooter />
    </>
  );
}

function UseCasesPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-center text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl">Cas d’usage & preuves</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">Parcourez des scénarios avant/après et ce qui rend nos systèmes performants.</p>
      </section>
      <ValueProof />
      <ContactFooter />
    </>
  );
}

function WhyUsPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-center text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl">Pourquoi choisir Nexiom Automate ?</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">Des résultats mesurables, une fiabilité de production et une exécution rapide.</p>
      </section>
      <ValueProof />
      <ContactFooter />
    </>
  );
}

function FaqPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-center text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl">FAQ</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">Les réponses aux questions les plus fréquentes.</p>
      </section>
      <ValueProof />
      <ContactFooter />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="bg-neutral-950 py-16 text-center text-white">
        <h1 className="text-3xl font-semibold sm:text-4xl">Parlons de votre audit IA gratuit</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">30 minutes pour identifier 2–3 quick wins prêts à déployer.</p>
      </section>
      <ContactFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen scroll-smooth bg-neutral-950 font-inter text-white">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <Link to="/" className="text-sm font-semibold">Nexiom Automate</Link>
            <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
              <Link className="hover:text-white" to="/services">Services</Link>
              <Link className="hover:text-white" to="/cas">Cas d’usage</Link>
              <Link className="hover:text-white" to="/pourquoi">Pourquoi nous</Link>
              <Link className="hover:text-white" to="/faq">FAQ</Link>
              <Link className="rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 font-medium text-white hover:brightness-110" to="/contact">Audit gratuit</Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cas" element={<UseCasesPage />} />
            <Route path="/pourquoi" element={<WhyUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
