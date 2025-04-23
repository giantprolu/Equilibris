import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import AboutPreview from '../components/home/AboutPreview';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <CaseStudyPreview />
      <ContactCTA />
    </>
  );
};

export default Home;