import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: React.ReactNode;
    variant?: "default" | "hero" | "accent";
}

export function Section({
    title,
    children,
    className,
    variant = "default",
    ...props
}: SectionProps) {
    const variants = {
        default: "bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200/50",
        hero: "bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm shadow-xl border border-gray-200/30",
        accent: "bg-gradient-to-br from-blue-50/95 to-indigo-50/95 backdrop-blur-sm shadow-lg border border-blue-200/30"
    };

    return (
        <section
            className={cn(
                "mb-8 px-8 py-10 rounded-2xl transition-all duration-300 hover:shadow-xl",
                variants[variant],
                className
            )}
            {...props}
        >
            {title && (
                <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                        {title}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
            )}
            {children}
        </section>
    );
}
