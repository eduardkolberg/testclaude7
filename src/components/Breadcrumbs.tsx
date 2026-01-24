"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData, MenuItem } from "@/lib/menu-data";

function findBreadcrumbPath(
  items: MenuItem[],
  slugs: string[],
  currentPath: string[] = []
): { title: string; href: string }[] | null {
  for (const item of items) {
    if (item.slug === slugs[0]) {
      const newPath = [...currentPath, { title: item.title, href: [...currentPath.map(p => p.href.split('/').pop()), item.slug].join('/') }];

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

  // Build proper hrefs
  const items = breadcrumbs.map((_, index) => {
    const href = "/" + slugs.slice(0, index + 1).join("/");
    return { title: breadcrumbs[index].title, href };
  });

  return (
    <nav className="bg-gray-100 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Startseite
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-600">{item.title}</span>
              ) : (
                <Link href={item.href} className="text-blue-600 hover:underline">
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
