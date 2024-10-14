import React from "react";
import PricingSection from "./pricing-section";
import HeroSection from "./hero-section";
import AuthorSection from "./author-section";
import FAQSection from "./faq-section";
import Footer from "./footer";
import AboutBookSection from "./about-book-section";

export default function PageLivroAContradicaoDeSerQuemSou() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutBookSection />
      <AuthorSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
