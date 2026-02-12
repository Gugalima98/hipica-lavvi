"use client";

import { GoogleMap } from "@/components/sections/GoogleMap";
import { Plane, ShoppingBag, School, Coffee } from "lucide-react";

const pois = [
    { icon: ShoppingBag, label: "Shopping Morumbi", time: "5 min" },
    { icon: Plane, label: "Aeroporto Congonhas", time: "10 min" },
    { icon: School, label: "Escola Chapel", time: "7 min" },
    { icon: Coffee, label: "Parque Burle Marx", time: "8 min" },
];

export function LocationMap() {
    return (
        <div className="space-y-6">
            <div className="h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/20 relative group">
                <div className="absolute inset-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    {/* Overlay that fades out on hover to reveal interactive map */}
                </div>
                <GoogleMap />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {pois.map((poi, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm">
                        <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                            <poi.icon className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-primary">{poi.label}</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{poi.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
