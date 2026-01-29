"use client";

import Link from "next/link";
import Image from "next/image";
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
          className="px-4 py-3 hover:bg-white/10 rounded-xl transition-colors block flex-grow text-white min-h-[48px] flex items-center text-base"
        >
          {item.title}
        </Link>
        {item.children && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 hover:bg-white/10 rounded-xl ml-1 text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label={isOpen ? `${item.title} Untermenü schließen` : `${item.title} Untermenü öffnen`}
            aria-expanded={isOpen}
          >
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {item.children && isOpen && (
        <ul className="ml-4 mt-1 border-l-2 border-cyan-400/30 pl-2">
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
    <header className="bg-gradient-to-r from-[#1a365d] via-[#1e4a6d] to-[#1a365d] sticky top-0 z-50 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Single row header - taller for better readability */}
        <div className="flex items-center justify-between h-24">

          {/* Logo - bigger and more readable */}
          <Link
            href="/"
            className="flex-shrink-0 transition-opacity hover:opacity-90"
            aria-label="Tonus Dienst - Zur Startseite"
          >
            <Image
              src="/images/tonus-logo-horizontal-white.png"
              alt="Tonus Dienst GmbH - Pflege in Berlin mit Herz und Seele"
              width={280}
              height={70}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation - centered, bigger text */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center px-8" aria-label="Hauptnavigation">
            {menuData.map((level1) => (
              <div key={level1.id} className="relative group">
                <Link
                  href={`/${level1.slug}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-lg font-medium hover:bg-white/10 hover:text-cyan-300 transition-all whitespace-nowrap"
                >
                  {level1.title}
                  {level1.children && (
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Level 2 dropdown */}
                {level1.children && (
                  <ul className="absolute left-0 top-full mt-1 bg-[#1a365d]/98 backdrop-blur-lg shadow-2xl rounded-xl py-2 min-w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/10">
                    {level1.children.map((level2) => (
                      <li key={level2.id} className="relative group/sub">
                        <Link
                          href={`/${level1.slug}/${level2.slug}`}
                          className="block px-5 py-3 hover:bg-cyan-500/10 text-white/90 hover:text-cyan-300 flex justify-between items-center transition-colors text-base"
                        >
                          <span>{level2.title}</span>
                          {level2.children && (
                            <svg className="w-4 h-4 ml-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>

                        {/* Level 3 dropdown */}
                        {level2.children && (
                          <ul className="absolute left-full top-0 ml-1 bg-[#1a365d]/98 backdrop-blur-lg shadow-2xl rounded-xl py-2 min-w-[280px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 border border-white/10">
                            {level2.children.map((level3) => (
                              <li key={level3.id}>
                                <Link
                                  href={`/${level1.slug}/${level2.slug}/${level3.slug}`}
                                  className="block px-5 py-3 hover:bg-cyan-500/10 text-white/80 hover:text-cyan-300 transition-colors text-base"
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

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search */}
            <button
              className="w-12 h-12 text-white/80 hover:text-cyan-300 transition-colors flex items-center justify-center rounded-xl hover:bg-white/10"
              aria-label="Suche öffnen"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                <circle cx="11" cy="11" r="7"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>

            {/* Language */}
            <button
              className="flex items-center gap-1.5 text-white/80 text-base hover:text-cyan-300 transition-colors min-w-[48px] min-h-[48px] px-3 rounded-xl hover:bg-white/10 font-medium"
              aria-label="Sprache wechseln"
            >
              <span>DE</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="w-px h-10 bg-white/20 mx-1" aria-hidden="true"></div>

            {/* Phone CTA - bigger */}
            <a
              href="tel:+4930610850625"
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold hover:from-cyan-400 hover:to-teal-300 transition-all px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 flex-shrink-0 group"
              aria-label="Kostenlose Beratung: 030 610 850 625"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal text-white/80">Kostenlose Beratung</span>
                <span className="text-lg">030 610 850 625</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/10 text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          <nav className="lg:hidden pb-5 pt-4 border-t border-white/10" id="mobile-menu" aria-label="Mobile Navigation">
            <ul className="space-y-1">
              {menuData.map((item) => (
                <MobileMenuItem key={item.id} item={item} />
              ))}
            </ul>

            {/* Mobile phone CTA */}
            <a
              href="tel:+4930610850625"
              className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold mt-4 px-4 py-4 rounded-xl min-h-[56px] shadow-lg"
              aria-label="Kostenlose Beratung: 030 610 850 625"
            >
              <span className="text-sm text-white/80">Kostenlose Beratung</span>
              <span className="flex items-center gap-2 text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                030 610 850 625
              </span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
