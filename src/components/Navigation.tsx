"use client";

import Link from "next/link";
import { useState } from "react";
import { menuData, MenuItem } from "@/lib/menu-data";

function MenuItemComponent({ item, basePath = "" }: { item: MenuItem; basePath?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;

  return (
    <li className="relative">
      <div className="flex items-center">
        <Link
          href={currentPath}
          className="px-4 py-2 hover:bg-teal-700 rounded transition-colors block flex-grow text-white"
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-teal-700 rounded ml-1 text-white"
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
        <ul className="ml-4 mt-1 border-l-2 border-teal-400 pl-2">
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
    <nav className="bg-gradient-to-r from-teal-800 to-teal-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white tracking-wide">
            Senioren-WG
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-teal-700 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu - Level 1 */}
          <ul className="hidden md:flex space-x-1">
            {menuData.map((level1) => (
              <li key={level1.id} className="relative group">
                <Link
                  href={`/${level1.slug}`}
                  className="px-4 py-2 hover:bg-teal-700 rounded transition-colors inline-block text-white font-medium"
                >
                  {level1.title}
                </Link>
                {/* Level 2 dropdown */}
                {level1.children && (
                  <ul className="absolute left-0 top-full mt-1 bg-slate-800 shadow-2xl rounded-lg py-2 min-w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-slate-700">
                    {level1.children.map((level2) => (
                      <li key={level2.id} className="relative group/sub">
                        <Link
                          href={`/${level1.slug}/${level2.slug}`}
                          className="block px-4 py-3 hover:bg-slate-700 text-gray-200 hover:text-white flex justify-between items-center transition-colors"
                        >
                          <span>{level2.title}</span>
                          {level2.children && (
                            <svg className="w-4 h-4 ml-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                        {/* Level 3 dropdown */}
                        {level2.children && (
                          <ul className="absolute left-full top-0 ml-1 bg-slate-800 shadow-2xl rounded-lg py-2 min-w-72 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-50 border border-slate-700">
                            {level2.children.map((level3) => (
                              <li key={level3.id}>
                                <Link
                                  href={`/${level1.slug}/${level2.slug}/${level3.slug}`}
                                  className="block px-4 py-3 hover:bg-slate-700 text-gray-300 hover:text-teal-300 transition-colors"
                                >
                                  {level3.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
