"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewFlavors from "@/components/NewFlavors";
import WhyFreezeGod from "@/components/WhyFreezeGod";
import CoolingMeter from "@/components/CoolingMeter";
import Banner from "@/components/Banner";
import ProductCollection from "@/components/ProductCollection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const SnowParticles = dynamic(() => import("@/components/SnowParticles"), {
  ssr: false,
});

const FloatingPreview = dynamic(() => import("@/components/FloatingPreview"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <SnowParticles />
      <FloatingPreview />

      <main>
        <Hero />
        <NewFlavors />
        <WhyFreezeGod />
        <CoolingMeter />
        <Banner />
        <ProductCollection />
        <Testimonials />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
