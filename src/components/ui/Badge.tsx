import { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
}

export function Badge({
    children,
    variant = "primary",
    icon,
    className = "",
    style,
    ...props
}: BadgeProps) {
    const baseStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-full uppercase tracking-wider font-bold text-[13px] font-outfit border";

    const variants = {
        primary: {
            background: "linear-gradient(90deg, #E0F7FA 0%, #E0F2F1 100%)",
            borderColor: "rgba(77,208,225,0.3)",
            color: "var(--color-teal-deep)",
        },
        secondary: {
            background: "white",
            borderColor: "var(--color-grey-light)",
            color: "var(--color-navy)",
        },
    };

    return (
        <div
            className={`${baseStyles} ${className}`}
            style={{
                ...variants[variant],
                ...style,
            }}
            {...props}
        >
            {icon && <span className="w-4 h-4">{icon}</span>}
            {children}
        </div>
    );
}
