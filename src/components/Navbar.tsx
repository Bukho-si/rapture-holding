"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Menu,
    X,
    Phone,
    ShoppingCart,
    Building2,
} from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/catalog", label: "Catalog" },
    { href: "/b2b-portal", label: "B2B Portal" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                            <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-lg font-bold text-primary-dark tracking-tight">
                                Rapture Holdings
                            </span>
                            <span className="hidden sm:block text-[10px] text-muted -mt-1 tracking-wider uppercase">
                                Office Supply Solutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/reorder"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white gradient-accent rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Reorder
                        </Link>
                        <a
                            href="tel:+27110476314"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary border-2 border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            Call Us
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden glass border-t border-slate-200/50 animate-slide-up">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 flex flex-col gap-2">
                            <Link
                                href="/reorder"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white gradient-accent rounded-xl"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Reorder Supplies
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
