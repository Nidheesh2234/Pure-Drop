import Link from "next/link";
import { Droplets, Facebook, Instagram, Twitter } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
                                <Droplets className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white font-display">PureDrop</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Delivering the purest hydration experience to Visakhapatnam since 2020.
                            ISO 9001:2015 Certified.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-cyan-400"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-cyan-400"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-cyan-400"><Twitter className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li>Maddilapalem, Visakhapatnam</li>
                            <li>Andhra Pradesh, 530013</li>
                            <li>+91 98480 12345</li>
                            <li>support@puredrop.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© 2024 PureDrop Water Solutions. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-cyan-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-cyan-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
