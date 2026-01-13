"use client";

import { REVIEWS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import { Star } from "lucide-react";

export function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-secondary/20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Trusted by 2000+ Families</h2>
            </div>

            {/* Scroller Container */}
            <div className="flex overflow-x-auto gap-6 px-4 pb-8 snap-x snap-mandatory scrollbar-hide container mx-auto">
                {REVIEWS.map((review, i) => (
                    <Card key={i} className="min-w-[300px] md:min-w-[400px] snap-center glass-card border-none shadow-sm">
                        <CardContent className="p-8">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg italic text-muted-foreground mb-6">"{review.content}"</p>
                            <div>
                                <div className="font-bold text-foreground">{review.name}</div>
                                <div className="text-xs text-primary/80 uppercase tracking-wider">{review.role}</div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
