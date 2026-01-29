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
    <nav className="bg-gradient-to-r from-[#E6F8FB] to-[#F0FDFA] py-4 border-b border-cyan-100" aria-label="Breadcrumb">
      <div className="max-w-[1200px] mx-auto px-5">
        <ol className="flex flex-wrap items-center gap-3 text-base" role="list">
          <li className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[#1a365d] hover:text-cyan-600 transition-colors"
            >
              Startseite
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-3">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {index === items.length - 1 ? (
                <span className="text-[#2D3748] font-medium" aria-current="page">{item.title}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#1a365d] hover:text-cyan-600 transition-colors"
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
