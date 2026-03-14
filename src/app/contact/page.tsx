"use client";

import { useState } from "react";
import {
    Send,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
    MessageCircle,
    Navigation,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            {/* Hero */}
            <section className="gradient-hero py-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-semibold text-accent-light uppercase tracking-widest">
                        Get In Touch
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-white/70 max-w-xl mx-auto">
                        Have questions or need a quote? Get in touch with the Rapture
                        Holdings team.
                    </p>
                </div>
            </section>

            {/* Quick Action Buttons */}
            <section className="py-8 bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <a
                            href="tel:+27110476314"
                            className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-900">
                                    Call Now
                                </div>
                                <div className="text-xs text-muted">011 047 6314</div>
                            </div>
                        </a>
                        <a
                            href="https://www.google.com/maps/search/85+Eloff+Street+Johannesburg+2000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Navigation className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-900">
                                    Get Directions
                                </div>
                                <div className="text-xs text-muted">85 Eloff Street, JHB</div>
                            </div>
                        </a>
                        <a
                            href="mailto:rapture.holdings@yahoo.com"
                            className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-900">
                                    Email Us
                                </div>
                                <div className="text-xs text-muted">
                                    rapture.holdings@yahoo.com
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border border-border p-8">
                                {submitted ? (
                                    <div className="text-center py-12 animate-slide-up">
                                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-accent" />
                                        </div>
                                        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
                                            Message Sent!
                                        </h2>
                                        <p className="text-muted mb-6">
                                            Thank you for reaching out. Our team will respond within
                                            24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({
                                                    name: "",
                                                    email: "",
                                                    company: "",
                                                    phone: "",
                                                    subject: "",
                                                    message: "",
                                                });
                                            }}
                                            className="text-sm font-semibold text-accent hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-sm text-muted mb-8">
                                            Fill in the form below and we&apos;ll get back to you
                                            soon.
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="contact-name"
                                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                                    >
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        id="contact-name"
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                        placeholder="John Smith"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="contact-email"
                                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                                    >
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        id="contact-email"
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                        placeholder="john@company.co.za"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="contact-company"
                                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                                    >
                                                        Company Name
                                                    </label>
                                                    <input
                                                        id="contact-company"
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                        placeholder="Your Company (Pty) Ltd"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="contact-phone"
                                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        id="contact-phone"
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                        placeholder="011 047 6314"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="contact-subject"
                                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                                >
                                                    Subject *
                                                </label>
                                                <select
                                                    id="contact-subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="quote">Request a Quote</option>
                                                    <option value="order">Place an Order</option>
                                                    <option value="support">Technical Support</option>
                                                    <option value="b2b">B2B Account Inquiry</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="contact-message"
                                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="contact-message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                                                    placeholder="Tell us how we can help..."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white gradient-accent rounded-2xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl border border-border p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    Rapture Holdings (Pty) Ltd
                                </h3>
                                <p className="text-xs text-muted italic mb-6">
                                    Trading as Sonke Business Enterprise
                                </p>
                                <div className="space-y-5">
                                    <a
                                        href="tel:+27110476314"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                                            <Phone className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted uppercase tracking-wider">
                                                Phone
                                            </div>
                                            <div className="font-semibold text-slate-900">
                                                011 047 6314
                                            </div>
                                            <a
                                                href="tel:+27106340293"
                                                className="text-xs text-muted mt-1 block hover:text-accent transition-colors"
                                            >
                                                010 634 0293
                                            </a>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:rapture.holdings@yahoo.com"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                                            <Mail className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted uppercase tracking-wider">
                                                Email
                                            </div>
                                            <div className="font-semibold text-slate-900">
                                                rapture.holdings@yahoo.com
                                            </div>
                                        </div>
                                    </a>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted uppercase tracking-wider">
                                                Address
                                            </div>
                                            <div className="font-semibold text-slate-900">
                                                85 Place Office 703
                                            </div>
                                            <div className="text-xs text-muted mt-1">
                                                85 Eloff Street, Johannesburg, 2000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted uppercase tracking-wider">
                                                Business Hours
                                            </div>
                                            <div className="font-semibold text-slate-900">
                                                Mon - Fri: 08:00 - 17:00
                                            </div>
                                            <div className="text-xs text-muted mt-1">
                                                Sat: 08:00 - 13:00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href={generateWhatsAppLink(
                                    "Hello Rapture Holdings, I have an inquiry about your products/services."
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold">Chat on WhatsApp</div>
                                    <div className="text-xs text-white/80">
                                        Get instant support
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="mt-12 rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-border">
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
            </section>
        </>
    );
}
