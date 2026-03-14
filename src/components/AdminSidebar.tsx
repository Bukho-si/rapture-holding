"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    MessageSquare,
    Settings,
    Building2,
    ArrowLeft,
} from "lucide-react";

const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { href: "/admin/clients", label: "Clients", icon: Users },
    { href: "/admin/messages", label: "Messages", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white flex flex-col">
            {/* Brand */}
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <div className="font-bold text-sm">Rapture Holdings</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">
                            Admin Panel
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/admin" && pathname.startsWith(item.href));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Back to Website */}
            <div className="p-4 border-t border-white/10">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Website
                </Link>
            </div>
        </aside>
    );
}
