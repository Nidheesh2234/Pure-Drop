"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useScroll, useTransform, motion } from "framer-motion";
import { CheckCircle2, CloudFog, Droplets, Sparkles, Clock, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOrderClick?: () => void;
}

export function Hero({ onOrderClick }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax Transforms
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-[95vh] w-full overflow-hidden flex items-center pt-20"
    >
      {/* Dynamic Background */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0 bg-background"
      >
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-blue-200/40 to-cyan-200/40 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-float" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-indigo-200/30 to-purple-200/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-60 animate-float delay-2000" />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity: opacityHero }}
        className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center"
      >
        {/* Text Content - Left Aligned */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary uppercase text-xs font-bold tracking-widest mb-6 border border-primary/20">
              <Sparkles className="w-3 h-3" />
              <span>Premium Hydration</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 font-display leading-[0.9] text-foreground">
              Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 italic font-serif pr-2">Liquid</span> <br />
              Zero <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic font-serif">Worry</span>.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
              Elevate your daily hydration. Ultra-hygienic, mineral-rich water delivered with precision to your doorstep.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button onClick={onOrderClick} size="lg" className="rounded-full text-lg px-10 h-16 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              Start Subscription
            </Button>
            <Button onClick={onOrderClick} size="lg" variant="ghost" className="rounded-full text-lg px-8 h-16 hover:bg-secondary/50">
              View Plans
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <FeatureItem icon={Clock} text="On-Time Delivery" />
            <FeatureItem icon={ShieldCheck} text="Lab Certified" />
            <FeatureItem icon={Droplets} text="Mineral Rich" />
          </motion.div>
        </div>

        {/* Visual Element - Right Aligned (Abstract Composition) */}
        <div className="lg:col-span-5 relative hidden lg:block h-[800px] pointer-events-none">
          {/* Main organic shape image placeholder - In a real scenario this would be a high-quality product shot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl border border-white/50 overflow-hidden"
          >
            <Image
              src="/images/hero-pure-water.png"
              alt="Pure Water"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-white/10 dark:from-slate-800/20 dark:to-slate-900/10" />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-[20%] right-[10%] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/20"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold">100% Pure</div>
                <div className="text-xs text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[0%] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/20"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CloudFog className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold">pH Balanced</div>
                <div className="text-xs text-muted-foreground">7.4 - 7.6 pH</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground/40"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-16 w-[1px] bg-current" />
        <span className="text-[10px] uppercase tracking-widest -rotate-90 origin-center translate-y-4">Scroll</span>
      </motion.div>
    </div>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex items-center gap-3 group cursor-default"
    >
      <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-cyan-200 dark:border-cyan-800">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-semibold text-sm tracking-tight text-foreground/80 group-hover:text-primary transition-colors">{text}</span>
    </motion.div>
  );
}


