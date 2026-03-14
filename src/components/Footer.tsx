import Link from "next/link";
import {
    Building2,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Product Catalog" },
    { href: "/services", label: "Services" },
    { href: "/b2b-portal", label: "B2B Portal" },
    { href: "/contact", label: "Contact" },
];

const services = [
    "Printer Supply & Maintenance",
    "Ink & Toner Cartridges",
    "Office Stationery",
    "Cleaning Materials",
    "Bulk Corporate Orders",
];

export default function Footer() {
    return (
        <footer className="gradient-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-accent-light" />
                            </div>
                            <div>
                                <span className="text-lg font-bold">Rapture Holdings</span>
                                <span className="block text-[10px] text-white/60 tracking-wider uppercase">
                                    (Pty) Ltd
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-white/50 italic mb-4">
                            Trading as Sonke Business Enterprise
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Your trusted partner for premium office supplies and corporate
                            procurement solutions across South Africa.
                        </p>
                        <div className="flex gap-3">
                            {["facebook", "linkedin", "twitter"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
                                >
                                    <span className="text-xs font-bold uppercase text-white/80">
                                        {social[0]}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-light transition-colors group"
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-6">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="text-sm text-white/70 flex items-start gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-accent-light mt-1 shrink-0" />
                                <span className="text-sm text-white/70">
                                    85 Place Office 703, 85 Eloff Street, Johannesburg, 2000
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-accent-light shrink-0" />
                                <div className="flex flex-col">
                                    <a
                                        href="tel:+27110476314"
                                        className="text-sm text-white/70 hover:text-accent-light transition-colors"
                                    >
                                        011 047 6314
                                    </a>
                                    <a
                                        href="tel:+27106340293"
                                        className="text-xs text-white/50 hover:text-accent-light transition-colors mt-0.5"
                                    >
                                        010 634 0293
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-accent-light shrink-0" />
                                <a
                                    href="mailto:rapture.holdings@yahoo.com"
                                    className="text-sm text-white/70 hover:text-accent-light transition-colors"
                                >
                                    rapture.holdings@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-xs text-white/40">
                            © 2025 Rapture Holdings (Pty) Ltd. All rights reserved.
                        </p>
                        <p className="text-[10px] text-white/30 mt-1">
                            Trading as Sonke Business Enterprise
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
