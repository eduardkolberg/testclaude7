interface ChecklistProps {
  items: string[];
  size?: "sm" | "md";
  className?: string;
}

export default function Checklist({ items, size = "md", className = "" }: ChecklistProps) {
  const checkSize = size === "sm" ? "text-[18px]" : "text-[20px]";
  const fontSize = size === "sm" ? "16px" : "var(--font-size-body)";
  const spacing = size === "sm" ? "space-y-3" : "space-y-4";

  return (
    <ul className={`${spacing} ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3"
          style={{ fontSize, color: "#455A64", lineHeight: 1.55 }}
        >
          <span className={`text-[#66BB6A] font-bold ${checkSize} mt-0.5 flex-shrink-0`}>&#10003;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
