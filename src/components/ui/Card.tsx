import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    hoverEffect?: boolean;
}

export function Card({
    children,
    className = "",
    hoverEffect = true,
    style,
    ...props
}: CardProps) {
    return (
        <div
            className={`bg-white rounded-2xl p-8 border border-grey-light transition-all duration-300 ${hoverEffect ? "hover:-translate-y-1 hover:shadow-card-hover hover:border-cyan-bright" : "shadow-card"
                } ${className}`}
            style={{
                boxShadow: "var(--shadow-card)",
                borderColor: "var(--color-grey-light)",
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}
