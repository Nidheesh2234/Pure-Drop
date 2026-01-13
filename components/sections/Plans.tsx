"use client";

import { useState, useRef } from "react";
import { PLANS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check, Info, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlansProps {
    onOrderClick?: () => void;
}

export function Plans({ onOrderClick }: PlansProps) {
    const [frequency, setFrequency] = useState<"daily" | "alternate">("daily");
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <section id="plans" className="py-32 relative overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/10 dark:bg-cyan-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/10 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display tracking-tight">
                            Flexible <span className="italic text-primary">Hydration</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md">
                            Choose a plan that fits your lifestyle. Pause or cancel anytime with zero hassle.
                        </p>
                    </div>

                    {/* Frequency Toggle */}
                    <div className="bg-secondary/50 p-1 rounded-full border border-border flex self-start md:self-auto">
                        <button
                            onClick={() => setFrequency("daily")}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                                frequency === "daily"
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Daily
                        </button>
                        <button
                            onClick={() => setFrequency("alternate")}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ease-out",
                                frequency === "alternate"
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Alternate Days
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrolling Plans */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 mdable:grid mdable:grid-cols-3 mdable:overflow-visible"
                >
                    {PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={cn(
                                "min-w-[85vw] md:min-w-[350px] snap-center",
                                "relative group"
                            )}
                        >
                            <div className={cn(
                                "h-full p-8 rounded-3xl border transition-all duration-500 flex flex-col",
                                plan.recommended
                                    ? "bg-primary/95 text-primary-foreground border-primary shadow-[0_20px_50px_rgba(8,145,178,0.3)] scale-[1.02] md:-translate-y-4 backdrop-blur-md"
                                    : "bg-white/40 dark:bg-slate-900/40 hover:bg-white/60 dark:hover:bg-slate-900/60 border-white/20 dark:border-slate-800/50 hover:border-primary/30 hover:shadow-xl backdrop-blur-md"
                            )}>
                                {plan.recommended && (
                                    <div className="absolute -top-3 left-8 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10 flex items-center gap-1">
                                        <Sparkles className="w-3 h-3 text-yellow-300" fill="currentColor" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                    <p className={cn("text-sm opacity-80", plan.recommended ? "text-primary-foreground/80" : "text-muted-foreground")}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                                    <span className={cn("text-sm ml-2 font-medium", plan.recommended ? "opacity-80" : "text-muted-foreground")}>
                                        {plan.unit}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className={cn("mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.recommended ? "bg-white/20" : "bg-primary/10")}>
                                                <Check className={cn("w-3 h-3", plan.recommended ? "text-white" : "text-primary")} />
                                            </div>
                                            <span className="text-sm font-medium opacity-90">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={onOrderClick}
                                    className={cn(
                                        "w-full h-12 rounded-xl text-base font-semibold transition-all",
                                        plan.recommended
                                            ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                                    )}
                                >
                                    Select Plan
                                </Button>

                                {plan.id !== 'event' && (
                                    <p className="mt-4 text-xs opacity-60 text-center flex items-center justify-center gap-1 font-medium">
                                        <Info className="w-3 h-3" /> Fully flexible cancellation
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

