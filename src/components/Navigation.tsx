"use client";

import Link from "next/link";
import { useState } from "react";
import { menuData, MenuItem } from "@/lib/menu-data";

function MenuItemComponent({ item, basePath = "" }: { item: MenuItem; basePath?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;

  return (
    <li className="relative group">
      <div className="flex items-center">
        <Link
          href={currentPath}
          className="px-4 py-2 hover:bg-blue-100 rounded transition-colors block"
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-blue-100 rounded ml-1"
          >
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <ul className="ml-4 mt-1 border-l-2 border-blue-200 pl-2">
          {item.children.map((child) => (
            <MenuItemComponent key={child.id} item={child} basePath={currentPath} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Senioren-WG
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-2">
            {menuData.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={`/${item.slug}`}
                  className="px-4 py-2 hover:bg-blue-100 rounded transition-colors inline-block"
                >
                  {item.title}
                </Link>
                {item.children && (
                  <ul className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={`/${item.slug}/${child.slug}`}
                          className="block px-4 py-2 hover:bg-blue-50"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-1">
              {menuData.map((item) => (
                <MenuItemComponent key={item.id} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
