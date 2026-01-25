"use client";

import Link from "next/link";
import { useState } from "react";
import { menuData, MenuItem } from "@/lib/menu-data";

function MobileMenuItem({ item, basePath = "" }: { item: MenuItem; basePath?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;

  return (
    <li className="relative">
      <div className="flex items-center">
        <Link
          href={currentPath}
          className="px-4 py-2 hover:bg-white/10 rounded-xl transition-colors block flex-grow text-white"
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/10 rounded-xl ml-1 text-white"
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
        <ul className="ml-4 mt-1 border-l-2 border-white/20 pl-2">
          {item.children.map((child) => (
            <MobileMenuItem key={child.id} item={child} basePath={currentPath} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#13263f] py-2.5 sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between items-center">
          {/* Logo + Menu */}
          <div className="flex items-center gap-7">
            {/* Logo */}
            <Link href="/" className="h-[68px] w-[215px] flex items-center">
              <div className="bg-gradient-to-r from-[#002CA8] to-[#0688B5] rounded-lg flex items-center justify-center text-white font-bold text-xl px-4 py-3 w-full h-full">
                WG SÜDSTADT
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex gap-2 items-center">
              {menuData.map((level1) => (
                <div key={level1.id} className="relative group">
                  <Link
                    href={`/${level1.slug}`}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-white text-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    {level1.title}
                    {level1.children && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Level 2 dropdown */}
                  {level1.children && (
                    <ul className="absolute left-0 top-full mt-1 bg-[#13263f] shadow-2xl rounded-xl py-2 min-w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-white/10">
                      {level1.children.map((level2) => (
                        <li key={level2.id} className="relative group/sub">
                          <Link
                            href={`/${level1.slug}/${level2.slug}`}
                            className="block px-4 py-3 hover:bg-white/10 text-white/80 hover:text-white flex justify-between items-center transition-colors"
                          >
                            <span>{level2.title}</span>
                            {level2.children && (
                              <svg className="w-4 h-4 ml-2 text-[#0688B5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </Link>

                          {/* Level 3 dropdown */}
                          {level2.children && (
                            <ul className="absolute left-full top-0 ml-1 bg-[#13263f] shadow-2xl rounded-xl py-2 min-w-72 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all z-50 border border-white/10">
                              {level2.children.map((level3) => (
                                <li key={level3.id}>
                                  <Link
                                    href={`/${level1.slug}/${level2.slug}/${level3.slug}`}
                                    className="block px-4 py-3 hover:bg-white/10 text-white/70 hover:text-[#0688B5] transition-colors"
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
                </div>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button className="w-6 h-6 text-white hover:text-white/80 transition-colors">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>

            <div className="w-px h-[30px] bg-white/20"></div>

            {/* Language */}
            <button className="flex items-center gap-2 text-white text-base hover:text-white/80 transition-colors">
              <span>UA</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="w-px h-[30px] bg-white/20"></div>

            {/* Phone */}
            <a href="tel:053118054700" className="flex items-center gap-2 text-white text-lg font-medium hover:text-white/80 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (0531) 180 54 700
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-4">
            <ul className="space-y-1">
              {menuData.map((item) => (
                <MobileMenuItem key={item.id} item={item} />
              ))}
            </ul>

            {/* Mobile phone */}
            <a href="tel:053118054700" className="flex items-center gap-2 text-white text-lg font-medium mt-4 px-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (0531) 180 54 700
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
