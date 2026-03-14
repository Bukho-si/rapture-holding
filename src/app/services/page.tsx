import Link from "next/link";
import {
    Printer,
    Droplets,
    PenTool,
    SprayCan,
    ArrowRight,
    CheckCircle2,
    Wrench,
    Package,
    Truck,
} from "lucide-react";

const services = [
    {
        id: "printers",
        icon: Printer,
        title: "Printer Supply & Maintenance",
        subtitle: "Complete printer lifecycle management",
        description:
            "From sourcing the right printer for your office to ongoing maintenance and repairs, we handle it all. Our certified technicians ensure minimum downtime and maximum productivity.",
        features: [
            "New & refurbished printer sales",
            "Preventive maintenance contracts",
            "Emergency repair services",
            "Fleet management solutions",
            "Trade-in programs",
        ],
        color: "bg-blue-500/10",
        iconColor: "text-blue-600",
    },
    {
        id: "ink-toner",
        icon: Droplets,
        title: "Ink & Toner Cartridges",
        subtitle: "Genuine & compatible cartridges",
        description:
            "Access a comprehensive range of original and compatible ink and toner cartridges for all major printer brands. We offer competitive pricing without compromising on quality.",
        features: [
            "Original OEM cartridges",
            "Premium compatible alternatives",
            "Bulk pricing for corporates",
            "Auto-replenishment service",
            "Cartridge recycling program",
        ],
        color: "bg-purple-500/10",
        iconColor: "text-purple-600",
    },
    {
        id: "stationery",
        icon: PenTool,
        title: "Office Stationery",
        subtitle: "Everything your office needs",
        description:
            "A complete range of office stationery from premium paper to filing systems, writing instruments to desktop accessories. Quality products at competitive prices.",
        features: [
            "Printing & copy paper",
            "Writing instruments & pens",
            "Filing & archiving systems",
            "Desk accessories & organizers",
            "Presentation materials",
        ],
        color: "bg-amber-500/10",
        iconColor: "text-amber-600",
    },
    {
        id: "cleaning",
        icon: SprayCan,
        title: "Cleaning Materials",
        subtitle: "Professional-grade cleaning solutions",
        description:
            "Keep your workplace spotless with our range of industrial and commercial cleaning products. From surface cleaners to sanitizers, we stock only the best brands.",
        features: [
            "Multi-surface cleaners",
            "Sanitizers & disinfectants",
            "Industrial degreasers",
            "Washroom supplies",
            "Waste management products",
        ],
        color: "bg-emerald-500/10",
        iconColor: "text-emerald-600",
    },
];

const additionalServices = [
    {
        icon: Wrench,
        title: "Maintenance Contracts",
        desc: "Scheduled maintenance to prevent breakdowns and extend equipment life.",
    },
    {
        icon: Package,
        title: "Bulk Orders",
        desc: "Special pricing and dedicated account management for large orders.",
    },
    {
        icon: Truck,
        title: "Free Delivery",
        desc: "Free delivery on orders over R2,000 within Gauteng province.",
    },
];

export const metadata = {
    title: "Services — Rapture Holdings (Pty) Ltd",
    description:
        "Explore our comprehensive office supply services including printer maintenance, ink & toner, stationery, and cleaning materials for businesses.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-semibold text-accent-light uppercase tracking-widest">
                        Our Services
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
                        End-to-End Office
                        <span className="block text-gradient">Supply Solutions</span>
                    </h1>
                    <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                        Comprehensive services designed to keep your office running
                        efficiently — from printers to cleaning supplies.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isReversed = index % 2 !== 0;
                        return (
                            <div
                                key={service.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:direction-rtl" : ""
                                    }`}
                            >
                                <div className={isReversed ? "lg:order-2" : ""}>
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
                                    >
                                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                                    </div>
                                    <span className="text-xs font-semibold text-muted uppercase tracking-widest">
                                        {service.subtitle}
                                    </span>
                                    <h2 className="mt-2 text-3xl font-extrabold text-slate-900 mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-slate-700"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/catalog"
                                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white gradient-accent rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 group"
                                    >
                                        Browse Products
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                <div
                                    className={`${isReversed ? "lg:order-1" : ""
                                        } rounded-2xl ${service.color} p-12 flex items-center justify-center min-h-[300px]`}
                                >
                                    <Icon
                                        className={`w-32 h-32 ${service.iconColor} opacity-30`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                            Added Value
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                            Additional Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {additionalServices.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.title}
                                    className="p-8 rounded-2xl bg-white border border-border text-center hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-3">{s.title}</h3>
                                    <p className="text-sm text-muted">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 gradient-hero text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white mb-6">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg text-white/70 mb-10">
                        Contact us for tailored procurement packages and exclusive corporate
                        pricing.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-dark bg-white rounded-2xl hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        Get In Touch
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </>
    );
}
