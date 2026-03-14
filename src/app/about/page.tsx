import {
    Building2,
    Target,
    Eye,
    Users,
    Briefcase,
    Heart,
    Award,
    TrendingUp,
} from "lucide-react";

const industries = [
    "Financial Services",
    "Law Firms",
    "Healthcare",
    "Education",
    "Government",
    "Technology",
    "Manufacturing",
    "Retail",
];

const values = [
    {
        icon: Heart,
        title: "Customer First",
        desc: "We put our clients at the heart of everything we do, ensuring personalized service and solutions.",
    },
    {
        icon: Award,
        title: "Quality Assurance",
        desc: "Only the finest products from trusted manufacturers make it into our catalog.",
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        desc: "We continuously improve our processes and adopt new technologies to serve you better.",
    },
    {
        icon: Users,
        title: "Partnership",
        desc: "We build long-term relationships with our clients, becoming an extension of their teams.",
    },
];

export const metadata = {
    title: "About Us — Rapture Holdings (Pty) Ltd",
    description:
        "Learn about Rapture Holdings, a leading office supply provider in South Africa serving corporate clients with premium products and reliable service.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-semibold text-accent-light uppercase tracking-widest">
                        About Us
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
                        Your Trusted Office
                        <span className="block text-gradient">Supply Partner</span>
                    </h1>
                    <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                        Rapture Holdings (Pty) Ltd is a premier office supply company
                        dedicated to providing comprehensive procurement solutions for
                        businesses across South Africa.
                    </p>
                </div>
            </section>

            {/* Company Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                                Who We Are
                            </span>
                            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 mb-6">
                                Powering Offices Since 2015
                            </h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    Founded in Johannesburg, Rapture Holdings has grown from a
                                    small office supply distributor into one of South Africa&apos;s
                                    most trusted B2B procurement partners. We specialize in
                                    providing high-quality office supplies, printer equipment, and
                                    maintenance services to corporate clients of all sizes.
                                </p>
                                <p>
                                    Our mission is simple: to make office procurement effortless.
                                    Through our digital platform, B2B portal, and WhatsApp
                                    ordering system, we&apos;ve eliminated the friction of
                                    traditional ordering processes, saving our clients time and
                                    money.
                                </p>
                                <p>
                                    With a dedicated team of procurement specialists and a
                                    warehouse stocked with over 5,000 products, we ensure that
                                    your office never runs out of essential supplies.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Building2, label: "Founded", value: "2015" },
                                { icon: Users, label: "Corporate Clients", value: "500+" },
                                { icon: Briefcase, label: "Products", value: "5,000+" },
                                { icon: Target, label: "Satisfaction", value: "99%" },
                            ].map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className="p-6 rounded-2xl bg-surface border border-border text-center hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                                        <div className="text-2xl font-extrabold text-slate-900">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-muted uppercase tracking-wider mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-2xl bg-white border border-border">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-muted leading-relaxed">
                                To empower businesses with seamless procurement solutions,
                                delivering premium office supplies with unmatched convenience,
                                competitive pricing, and exceptional service. We aim to be the
                                one-stop shop that every office relies on.
                            </p>
                        </div>

                        <div className="p-10 rounded-2xl bg-white border border-border">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-accent" />
                            </div>
                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted leading-relaxed">
                                To become South Africa&apos;s leading digital-first office
                                supply platform, transforming how businesses procure essentials
                                through innovative technology, sustainable practices, and a
                                commitment to excellence in every delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                            Our Values
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                            What Drives Us
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => {
                            const Icon = v.icon;
                            return (
                                <div
                                    key={v.title}
                                    className="p-8 rounded-2xl border border-border text-center hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-3">{v.title}</h3>
                                    <p className="text-sm text-muted">{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                        Industries We Serve
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold text-slate-900 mb-12">
                        Trusted Across Sectors
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {industries.map((industry) => (
                            <span
                                key={industry}
                                className="px-6 py-3 rounded-full bg-white border border-border text-sm font-medium text-slate-700 hover:border-accent hover:text-accent transition-colors"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
