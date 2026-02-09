import { InputHTMLAttributes, SelectHTMLAttributes, ReactNode, forwardRef } from "react";

interface BaseProps {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps { }

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    fullWidth = true,
    className = "",
    style,
    ...props
}, ref) => {
    return (
        <div className={`mb-4 ${fullWidth ? "w-full" : ""}`}>
            {label && (
                <label className="block mb-2 font-source font-semibold text-grey-dark text-[15px]">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={`w-full px-4 py-3 rounded-xl border-2 border-grey-light outline-none focus:border-cyan-deep transition-colors text-base text-navy placeholder:text-grey-medium ${error ? "border-red-500" : ""} ${className}`}
                style={{
                    borderColor: error ? "red" : "var(--color-grey-light)",
                    ...style
                }}
                {...props}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
});

Input.displayName = "Input";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, BaseProps {
    options: { value: string | number; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    label,
    error,
    options,
    fullWidth = true,
    className = "",
    style,
    ...props
}, ref) => {
    return (
        <div className={`mb-4 ${fullWidth ? "w-full" : ""}`}>
            {label && (
                <label className="block mb-2 font-source font-semibold text-grey-dark text-[15px]">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    ref={ref}
                    className={`w-full px-4 py-3 rounded-xl border-2 border-grey-light outline-none focus:border-cyan-deep transition-colors text-base text-navy appearance-none bg-white ${error ? "border-red-500" : ""} ${className}`}
                    style={{
                        borderColor: error ? "red" : "var(--color-grey-light)",
                        ...style,
                    }}
                    {...props}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-grey-dark">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
});

Select.displayName = "Select";
