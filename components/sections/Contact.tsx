"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
    const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
        setFormState({ name: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Get in Touch</h2>
                        <p className="text-lg text-muted-foreground mb-10">We are here to help you set up your hydration plan or answer any service queries.</p>

                        <div className="space-y-6">
                            <Card className="border-none shadow-md">
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Call Us</div>
                                        <div className="text-muted-foreground">+91 98480 12345</div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md">
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <div className="text-muted-foreground">support@puredrop.com</div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md">
                                <CardContent className="flex items-center gap-4 p-6">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Working Hours</div>
                                        <div className="text-muted-foreground">Mon - Sat: 8 AM - 8 PM</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Full Name</label>
                                <Input
                                    placeholder="John Doe"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Phone Number</label>
                                <Input
                                    type="tel"
                                    placeholder="+91"
                                    required
                                    pattern="[0-9]{10}"
                                    value={formState.phone}
                                    onChange={e => setFormState({ ...formState, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Message</label>
                                <Textarea
                                    placeholder="I need a subscription for..."
                                    required
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" variant="shiny" className="w-full" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                            {success && (
                                <div className="text-green-600 text-sm text-center font-medium bg-green-100 p-2 rounded-md">
                                    Message sent successfully!
                                </div>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}
