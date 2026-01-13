"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Plans } from "@/components/sections/Plans";
import { DeliveryTimeline } from "@/components/sections/DeliveryTimeline";
import { PurityJourney } from "@/components/sections/PurityJourney";
import { Services } from "@/components/sections/Services";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { OrderModal } from "@/components/functional/OrderModal";
import { LabReportModal } from "@/components/functional/LabReportModal";

export default function Home() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [labOpen, setLabOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background relative selection:bg-cyan-500/30">
      <Navbar onOrderClick={() => setOrderOpen(true)} />
      <Hero onOrderClick={() => setOrderOpen(true)} />
      <Plans onOrderClick={() => setOrderOpen(true)} />
      <DeliveryTimeline />
      <PurityJourney />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />

      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
      <LabReportModal isOpen={labOpen} onClose={() => setLabOpen(false)} />
    </main>
  );
}
