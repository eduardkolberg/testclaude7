"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData, MenuItem } from "@/lib/menu-data";

interface BreadcrumbItem {
  title: string;
  slug: string;
}

function findBreadcrumbPath(
  items: MenuItem[],
  slugs: string[],
  currentPath: BreadcrumbItem[] = []
): BreadcrumbItem[] | null {
  for (const item of items) {
    if (item.slug === slugs[0]) {
      const newPath = [...currentPath, { title: item.title, slug: item.slug }];

      if (slugs.length === 1) {
        return newPath;
      }

      if (item.children) {
        const result = findBreadcrumbPath(item.children, slugs.slice(1), newPath);
        if (result) return result;
      }
    }
  }
  return null;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const slugs = pathname.split("/").filter(Boolean);
  const breadcrumbs = findBreadcrumbPath(menuData, slugs) || [];

  const items = breadcrumbs.map((crumb, index) => {
    const href = "/" + slugs.slice(0, index + 1).join("/");
    return { title: crumb.title, href };
  });

  return (
    <nav className="bg-[#f1f7f8] py-5" aria-label="Breadcrumb">
      <div className="max-w-[1200px] mx-auto px-5">
        <ol className="flex flex-wrap items-center gap-4 text-sm" role="list">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-4">
              {index > 0 && (
                <span className="w-px h-3 bg-[#C3D6DD] rotate-12" aria-hidden="true" />
              )}
              {index === items.length - 1 ? (
                <span className="text-[#333435]" aria-current="page">{item.title}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#13263f] underline decoration-[#aaafb5] hover:decoration-[#13263f] transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
