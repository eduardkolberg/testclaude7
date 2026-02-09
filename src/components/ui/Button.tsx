import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "white" | "ghost" | "outline-white";
    size?: "sm" | "md" | "lg";
    href?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    icon,
    iconPosition = "left",
    fullWidth = false,
    className = "",
    style,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-bold font-outfit cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
        primary: {
            background: "var(--gradient-button)",
            color: "white",
            boxShadow: "var(--shadow-button)",
            border: "none",
        },
        secondary: {
            background: "transparent",
            color: "var(--color-teal-deep)",
            border: "2px solid var(--color-teal-deep)",
        },
        white: {
            background: "white",
            color: "var(--color-teal-deep)",
            boxShadow: "var(--shadow-button)",
            border: "none",
        },
        "outline-white": {
            background: "transparent",
            color: "white",
            border: "2px solid white",
        },
        ghost: {
            background: "transparent",
            color: "var(--color-teal-deep)",
            border: "none",
            padding: 0,
        },
    };

    const sizes = {
        sm: { padding: "8px 16px", fontSize: "14px" },
        md: { padding: "12px 24px", fontSize: "16px" },
        lg: { padding: "16px 32px", fontSize: "var(--font-size-btn)" },
    };

    const hoverStyles = {
        primary: "hover:scale-[1.03] hover:shadow-lg",
        secondary: "hover:bg-cyan-50",
        white: "hover:-translate-y-0.5",
        "outline-white": "hover:bg-white/10",
        ghost: "hover:opacity-80",
    };

    const combinedStyles = {
        ...variants[variant],
        ...(variant !== "ghost" ? sizes[size] : {}),
        ...(fullWidth ? { width: "100%" } : {}),
        ...style,
    };

    const classes = `${baseStyles} ${hoverStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

    if (href) {
        if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
            return (
                <a href={href} className={classes} style={combinedStyles}>
                    {icon && iconPosition === "left" && icon}
                    {children}
                    {icon && iconPosition === "right" && icon}
                </a>
            );
        }
        return (
            <Link href={href} className={classes} style={combinedStyles}>
                {icon && iconPosition === "left" && icon}
                {children}
                {icon && iconPosition === "right" && icon}
            </Link>
        );
    }

    return (
        <button className={classes} style={combinedStyles} {...props}>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </button>
    );
}
