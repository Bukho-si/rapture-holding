import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
    title: "Admin Panel — Rapture Holdings",
    description:
        "Manage products, orders, clients and settings for Rapture Holdings.",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <AdminSidebar />
            <main className="ml-64 min-h-screen">
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
