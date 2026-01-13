import { Droplets, ShieldCheck, Truck, Wrench, Calendar, Clock, MapPin } from "lucide-react";

export const NAV_LINKS = [
    { name: "Plans", href: "#plans" },
    { name: "Delivery", href: "#delivery" },
    { name: "Purity", href: "#purity" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
];

export const PLANS = [
    {
        id: "home",
        title: "Home",
        description: "Perfect for families. Flexible delivery.",
        price: "₹60",
        unit: "/ can",
        features: ["BPA-free 20L cans", "Weekly/Bi-weekly scheduling", "Free delivery to doorstep", "Monthly billing available"],
        recommended: true,
    },
    {
        id: "office",
        title: "Office",
        description: "Keep your team hydrated and productive.",
        price: "₹50",
        unit: "/ can",
        features: ["Bulk volume discounts", "Daily morning delivery", "GST invoice provided", "Dedicated account manager"],
        recommended: false,
    },
    {
        id: "event",
        title: "Events",
        description: "Bulk supply for weddings & parties.",
        price: "Custom",
        unit: "Quote",
        features: ["200ml / 500ml bottles", "20L dispensers available", "On-site support staff", "Chilled water options"],
        recommended: false,
    },
];

export const PURITY_STEPS = [
    {
        id: 1,
        title: "Multi-Stage Filtration",
        description: "Raw water passes through sand, carbon, and micron filters to remove sediments and odor.",
        image: "/images/journey-filtration.png",
    },
    {
        id: 2,
        title: "Advanced RO + UV",
        description: "Reverse Osmosis eliminates dissolved solids, while UV sterilization kills 99.9% of bacteria.",
        image: "/images/journey-ro-uv.png",
    },
    {
        id: 3,
        title: "Ozonation & Mineralization",
        description: "Ozone treatment ensures shelf stability, and essential minerals are added back for taste.",
        image: "/images/journey-ozonation.png",
    },
    {
        id: 4,
        title: "Touch-Free Sealing",
        description: "Cans are washed, filled, and sealed automatically in a sterile environment.",
        image: "/images/journey-bottling.png",
    },
];

export const SERVICES = [
    {
        title: "RO Installation",
        price: "₹499",
        desc: "Professional installation for all brands.",
        icon: Wrench,
    },
    {
        title: "Filter Change",
        price: "₹1200",
        desc: "Genuine sediment & carbon filter replacement.",
        icon: Droplets,
    },
    {
        title: "Annual Maintenance",
        price: "₹2500/yr",
        desc: "2 scheduled visits + unlimited breakdown support.",
        icon: ShieldCheck,
    },
    {
        title: "Emergency Repair",
        price: "₹299",
        desc: "Visit charge. Fixing leakage or motor issues.",
        icon: Truck,
    },
];

export const REVIEWS = [
    {
        name: "Ananya Rao",
        role: "Resident, MVP Colony",
        content: "The app makes it so easy to pause delivery when we travel. Water quality is visibly better than local suppliers.",
        stars: 5,
    },
    {
        name: "Rajesh Kumar",
        role: "Office Manager, Tech Hub",
        content: "Reliable daily delivery before 9 AM. The delivery boys are polite and always wear uniforms. Highly recommended.",
        stars: 5,
    },
    {
        name: "Dr. Siva Prasad",
        role: "Dental Clinic",
        content: "We use PureDrop for our clinic. The lab reports they share gives us peace of mind about hygiene.",
        stars: 5,
    },
    {
        name: "Priya Sharma",
        role: "Event Planner",
        content: "Ordered 500 bottles for a wedding. Delivered on time, chilled, and branded beautifully. zero hassle.",
        stars: 4,
    },
];

export const FAQS = [
    {
        question: "What are your delivery timings?",
        answer: "We deliver between 6:00 AM - 9:00 AM for morning slots and 4:00 PM - 7:00 PM for evening slots.",
    },
    {
        question: "Do I need to pay a deposit for cans?",
        answer: "Yes, a fully refundable deposit of ₹150 per can is applicable for new subscriptions.",
    },
    {
        question: "How often do you test water quality?",
        answer: "Every batch is tested in our in-house lab. Detailed NABL certified reports are generated monthly.",
    },
    {
        question: "Can I pause my subscription?",
        answer: "Absolutely. You can pause or resume anytime via the website or WhatsApp.",
    },
];
