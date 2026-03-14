"use client";

import { useState } from "react";
import { Save, CheckCircle2 } from "lucide-react";

export default function AdminSettings() {
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        companyName: "Rapture Holdings (Pty) Ltd",
        tradingName: "Sonke Business Enterprise",
        phone: "011 047 6314",
        secondaryPhone: "010 634 0293",
        email: "rapture.holdings@yahoo.com",
        address: "85 Place Office 703, 85 Eloff Street",
        city: "Johannesburg",
        postalCode: "2000",
        whatsappNumber: "27110476314",
    });

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleChange = (field: string, value: string) => {
        setSettings({ ...settings, [field]: value });
    };

    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-extrabold text-slate-900">Settings</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Manage your business information
                </p>
            </div>

            <div className="max-w-2xl">
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                    <h2 className="text-lg font-bold text-slate-900 mb-6">
                        Business Information
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                value={settings.companyName}
                                onChange={(e) => handleChange("companyName", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Trading Name
                            </label>
                            <input
                                type="text"
                                value={settings.tradingName}
                                onChange={(e) => handleChange("tradingName", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={settings.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Secondary Phone
                                </label>
                                <input
                                    type="text"
                                    value={settings.secondaryPhone}
                                    onChange={(e) =>
                                        handleChange("secondaryPhone", e.target.value)
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={settings.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                value={settings.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={settings.city}
                                    onChange={(e) => handleChange("city", e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    value={settings.postalCode}
                                    onChange={(e) => handleChange("postalCode", e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                WhatsApp Number
                            </label>
                            <input
                                type="text"
                                value={settings.whatsappNumber}
                                onChange={(e) =>
                                    handleChange("whatsappNumber", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                            />
                            <p className="text-xs text-slate-400 mt-1">
                                International format without + (e.g. 27110476314)
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-accent rounded-xl hover:bg-green-700 shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <Save className="w-4 h-4" />
                            Save Settings
                        </button>
                        {saved && (
                            <span className="flex items-center gap-2 text-sm font-semibold text-green-600 animate-slide-up">
                                <CheckCircle2 className="w-4 h-4" />
                                Settings saved successfully
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
