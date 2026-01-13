"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { PURITY_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function PurityJourney() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} id="purity" className="relative h-[300vh] bg-black text-white">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row">
                {/* Left: Image Panel */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                    {PURITY_STEPS.map((step, index) => {
                        // Calculate opacity based on scroll progress
                        // Range for step i: i * (1/N) to (i+1) * (1/N)
                        const stepSize = 1 / PURITY_STEPS.length;
                        const start = index * stepSize;
                        const end = start + stepSize;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

                        return (
                            <motion.div
                                key={step.id}
                                style={{ opacity, scale }}
                                className="absolute inset-0 z-10"
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right: Text Panel */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative p-8 md:p-16 bg-slate-950">
                    <div className="max-w-md w-full relative">
                        {PURITY_STEPS.map((step, index) => {
                            const stepSize = 1 / PURITY_STEPS.length;
                            const start = index * stepSize;
                            const end = start + stepSize;

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, y }}
                                    className="absolute top-0 left-0 w-full"
                                >
                                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step 0{step.id}</span>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-6 font-display">{step.title}</h3>
                                    <p className="text-lg text-slate-400 leading-relaxed text-balance">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Progress Bar (Desktop) */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 h-1/2 w-1 bg-slate-800 rounded-full hidden md:block">
                        <motion.div
                            style={{ height: scrollYProgress }}
                            className="w-full bg-cyan-500 rounded-full origin-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
