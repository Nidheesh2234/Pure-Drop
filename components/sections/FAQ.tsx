"use client";

import { FAQS } from "@/lib/data";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
    return (
        <section id="faq" className="py-24 max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Common Questions</h2>
                <p className="text-lg text-muted-foreground">Everything you need to know about our service.</p>
            </div>

            <Accordion items={FAQS.map(f => ({ title: f.question, content: f.answer }))} />
        </section>
    );
}
