"use client";

import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
    return (
        <section id="services" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Expert <span className="text-primary">Care</span>.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Beyond delivery, we ensure every drop is pure. Our certified technicians service all major water purifier brands with genuine parts.
                        </p>
                    </div>
                    <Button size="lg" className="rounded-full px-8 h-12 gap-2 shadow-lg shadow-primary/10">
                        <Wrench className="w-4 h-4" /> Book Technician
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SERVICES.map((service, i) => (
                        <div
                            key={service.title}
                            className={cn(
                                "group relative overflow-hidden p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl",
                                i === 0 ? "lg:col-span-2 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950" : ""
                            )}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <service.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.desc}</p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

