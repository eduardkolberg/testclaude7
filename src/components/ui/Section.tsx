import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    variant?: "brand" | "hero" | "dark" | "white" | "light";
    padding?: "none" | "normal" | "large";
    fullWidth?: boolean;
}

export function Section({
    children,
    variant = "white",
    padding = "normal",
    fullWidth = false,
    className = "",
    style,
    ...props
}: SectionProps) {
    const variants = {
        brand: { background: "var(--gradient-brand)" },
        hero: { background: "var(--gradient-hero)" },
        dark: { background: "var(--gradient-dark)" },
        white: { background: "white" },
        light: { background: "var(--color-off-white)" },
    };

    const paddings = {
        none: 0,
        normal: "var(--section-padding-y) 0",
        large: "calc(var(--section-padding-y) * 1.5) 0",
    };

    return (
        <section
            className={`relative overflow-hidden ${className}`}
            style={{
                ...variants[variant],
                padding: paddings[padding],
                ...style,
            }}
            {...props}
        >
            <div className={`mx-auto px-6 md:px-10 relative z-10 ${fullWidth ? "w-full" : "max-w-[1200px]"}`}>
                {children}
            </div>
        </section>
    );
}
