import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Visitform from '../components/Visitform';
import Benefits from '../components/Benefits';
import Recommender from '../components/Recommender';
import GallerySection from "../components/GallerySection";
export default function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <Visitform />
      <Benefits />
      <Recommender />
      <GallerySection />
    </>
  );
}