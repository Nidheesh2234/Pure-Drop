"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { PLANS } from "@/lib/data";
import { Check } from "lucide-react";

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultPlan?: string;
}

export function OrderModal({ isOpen, onClose, defaultPlan = "home" }: OrderModalProps) {
    const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
    const [quantity, setQuantity] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    if (submitted) {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="Order Confirmed">
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Thank you!</h3>
                    <p className="text-muted-foreground">
                        We have received your request. A representative will call you shortly to confirm the delivery schedule.
                    </p>
                    <Button onClick={onClose} variant="outline">Close</Button>
                </div>
            </Modal>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Start Subscription">
            <div className="space-y-6">
                <div>
                    <label className="text-sm font-medium mb-2 block">Choose Plan</label>
                    <div className="grid grid-cols-2 gap-3">
                        {PLANS.map(plan => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`border rounded-lg p-3 text-left transition-all ${selectedPlan === plan.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:border-primary/50'}`}
                            >
                                <div className="font-semibold">{plan.title}</div>
                                <div className="text-sm text-muted-foreground">{plan.price} {plan.unit}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Daily Quantity (Cans)</label>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-secondary text-xl"
                        >-</button>
                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-secondary text-xl"
                        >+</button>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium mb-2 block">Delivery Details</label>
                    <input
                        type="text"
                        placeholder="Area / Pincode"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background mb-3"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    />
                </div>

                <Button onClick={handleSubmit} className="w-full" variant="shiny" size="lg">
                    Confirm Order
                </Button>
            </div>
        </Modal>
    );
}
