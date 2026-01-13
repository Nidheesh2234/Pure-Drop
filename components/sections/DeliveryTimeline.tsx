"use client";

import { motion } from "framer-motion";
import { CalendarClock, MapPin, Truck, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: CalendarClock,
        title: "Choose Plan",
        desc: "Select a subscription that suits your daily consumption.",
    },
    {
        icon: MapPin,
        title: "Set Location",
        desc: "Pin your home or office on the map for precise delivery.",
    },
    {
        icon: Truck,
        title: "We Deliver",
        desc: "Our EV fleet delivers water between 6 AM - 9 AM.",
    },
    {
        icon: CheckCircle,
        title: "Empty Pickup",
        desc: "Leave empty cans outside; we replace them instantly.",
    },
];

export function DeliveryTimeline() {
    return (
        <section id="delivery" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">How It Works</h2>
                    <p className="text-lg text-muted-foreground">Hydration on autopilot in 4 steps.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center text-center z-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-lg mb-6 group hover:border-primary/50 transition-colors">
                                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground text-balance">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
