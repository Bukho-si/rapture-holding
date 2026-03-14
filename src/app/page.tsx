import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShoppingCart,
  MessageCircle,
  Printer,
  Package,
  Sparkles,
  Truck,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  LayoutDashboard,
  Zap,
  Monitor,
} from "lucide-react";
import { generateWhatsAppLink, formatPrice } from "@/lib/utils";
import products from "@/data/products.json";

const featuredProducts = products.filter((p) => p.featured);

const stats = [
  { value: "500+", label: "Corporate Clients" },
  { value: "15K+", label: "Products Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24h", label: "Fast Delivery" },
];

const platformFeatures = [
  {
    icon: Package,
    title: "Digital Product Catalog",
    description:
      "Browse and search our complete range of office supplies, printers, toner, stationery and cleaning products online.",
  },
  {
    icon: ShoppingCart,
    title: "Corporate Reorder System",
    description:
      "Streamlined reordering for corporate clients. Select products, choose quantities, and submit orders in seconds.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Ordering",
    description:
      "Order directly via WhatsApp with pre-filled messages. Quick, simple, and convenient for busy teams.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Management Dashboard",
    description:
      "Full backend dashboard to manage products, track orders, monitor clients, and handle messages.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
        {/* background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-8 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Trusted by 500+ companies across South Africa
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-white leading-tight mb-6">
                Corporate Office Supply
                <span className="block text-gradient">Ordering Platform</span>
              </h1>

              <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
                Helping businesses reorder printers, toner, stationery and
                cleaning supplies quickly and efficiently. Browse products,
                place orders online, or order via WhatsApp.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-dark bg-white rounded-2xl hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/reorder"
                  className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white gradient-accent rounded-2xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Corporate Reorder Portal
                </Link>
                <Link
                  href="/admin"
                  className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="w-4 h-4" />
                  Admin Demo
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-center items-center gap-6 animate-float">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {featuredProducts.slice(0, 4).map((product) => (
                      <div
                        key={product.id}
                        className="bg-white/10 rounded-2xl p-3 flex flex-col items-center gap-2 hover:bg-white/20 transition-colors"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                        <span className="text-[10px] text-white/70 text-center leading-tight">
                          {product.name.split(" ").slice(0, 3).join(" ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* floating badges */}
                <div className="absolute -top-4 -left-4 bg-accent text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-accent/30 animate-pulse">
                  New Arrivals
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-primary-dark text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                  B2B Pricing
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM FEATURES ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Platform Features
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Everything Your Office Needs
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              A complete digital platform for ordering, managing, and tracking
              office supplies — built for businesses that want to operate
              efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 rounded-2xl border border-border hover:border-accent/30 bg-white hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              What We Supply
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Comprehensive Office Solutions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Fast Corporate Reordering",
                desc: "One-click reordering for regular supplies. No more manual phone calls or emails.",
              },
              {
                icon: Printer,
                title: "Printer & Toner Supply",
                desc: "Complete range of printers, toner cartridges, and ink for all major brands.",
              },
              {
                icon: Sparkles,
                title: "Office & Cleaning Materials",
                desc: "Stationery, paper, staplers, and professional cleaning products.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Ordering",
                desc: "Send orders directly via WhatsApp with pre-filled product details.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Top Picks
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                Featured Products
              </h2>
            </div>
            <Link
              href="/catalog"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative bg-slate-50 p-6 flex items-center justify-center h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold text-muted bg-white px-2.5 py-1 rounded-lg shadow-sm">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-extrabold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                      View
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              Why Rapture Holdings
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Next-day delivery across Gauteng. Nationwide shipping within 3-5 business days.",
              },
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "Only genuine, premium products from trusted manufacturers and suppliers.",
              },
              {
                icon: Clock,
                title: "Easy Reordering",
                desc: "B2B portal for instant reorders. No more manual calls or emails.",
              },
              {
                icon: Star,
                title: "B2B Pricing",
                desc: "Competitive bulk pricing for corporate clients with volume discounts.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Streamline Your Office Procurement?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Rapture Holdings for their
            office supply needs. Get started today with a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-dark bg-white rounded-2xl hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/b2b-portal"
              className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white gradient-accent rounded-2xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <ShoppingCart className="w-4 h-4" />
              Access B2B Portal
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/30 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <LayoutDashboard className="w-4 h-4" />
              Try Admin Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VISIT OUR OFFICE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                Visit Our Office
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Come See Us in Johannesburg
              </h2>
              <p className="text-muted mb-8 leading-relaxed">
                Visit our office for in-person consultations, product demos, and
                to discuss your office supply needs. Our team is ready to help
                you find the perfect solutions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "85 Place Office 703, 85 Eloff Street",
                    sub: "Johannesburg, 2000",
                    href: "https://www.google.com/maps/search/85+Eloff+Street+Johannesburg+2000",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "011 047 6314",
                    sub: "010 634 0293",
                    href: "tel:+27110476314",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "rapture.holdings@yahoo.com",
                    sub: null,
                    href: "mailto:rapture.holdings@yahoo.com",
                  },
                ].map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={
                        contact.label === "Address" ? "_blank" : undefined
                      }
                      rel={
                        contact.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs text-muted uppercase tracking-wider">
                          {contact.label}
                        </div>
                        <div className="font-semibold text-slate-900">
                          {contact.value}
                        </div>
                        {contact.sub && (
                          <div className="text-xs text-muted mt-0.5">
                            {contact.sub}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="tel:+27110476314"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white gradient-accent rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="https://www.google.com/maps/search/85+Eloff+Street+Johannesburg+2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary border-2 border-primary/20 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6683!2d28.0474!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950913e67f72e5%3A0x2e04c804c4e0d073!2s85%20Eloff%20St%2C%20Johannesburg%2C%202000!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rapture Holdings — 85 Eloff Street, Johannesburg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
