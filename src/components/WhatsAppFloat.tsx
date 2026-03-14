"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export default function WhatsAppFloat() {
    const message =
        "Hello Rapture Holdings, I would like to place an order for office supplies.";

    return (
        <a
            href={generateWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            aria-label="Order via WhatsApp"
        >
            {/* Tooltip */}
            <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                Order via WhatsApp
            </span>

            {/* Button */}
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-glow" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                </div>
            </div>
        </a>
    );
}
