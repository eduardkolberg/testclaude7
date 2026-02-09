import { ElementType, HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    color?: string;
    accentColor?: string;
    accentText?: string;
}

export function Heading({
    level = 2,
    children,
    className = "",
    color = "var(--color-navy)",
    accentColor = "var(--color-teal-deep)",
    accentText,
    style,
    ...props
}: HeadingProps) {
    const Tag = `h${level}` as ElementType;

    const sizes = {
        1: "var(--font-size-h1)",
        2: "var(--font-size-h2)",
        3: "var(--font-size-h3)",
        4: "var(--font-size-h4)",
        5: "18px",
        6: "16px",
    };

    return (
        <Tag
            className={`font-outfit font-bold tracking-tight ${className}`}
            style={{
                fontSize: sizes[level],
                color,
                lineHeight: level === 1 ? 1.15 : 1.2,
                ...style,
            }}
            {...props}
        >
            {children}
            {accentText && (
                <>
                    {level === 1 && <br />}
                    <span style={{ color: accentColor }}>{accentText}</span>
                </>
            )}
        </Tag>
    );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    size?: "sm" | "base" | "lg" | "xl";
    color?: string;
    weight?: 400 | 500 | 600 | 700;
}

export function Text({
    children,
    className = "",
    size = "base",
    color = "var(--color-grey-dark)",
    weight = 400,
    style,
    ...props
}: TextProps) {
    const sizes = {
        sm: "var(--font-size-body-small)",  // 16px
        base: "var(--font-size-body)",      // 19px
        lg: "var(--font-size-body-large)",  // 22px
        xl: "24px",
    };

    return (
        <p
            className={`font-source leading-relaxed ${className}`}
            style={{
                fontSize: sizes[size],
                color,
                fontWeight: weight,
                ...style,
            }}
            {...props}
        >
            {children}
        </p>
    );
}
