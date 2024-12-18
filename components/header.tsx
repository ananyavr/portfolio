"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 shadow-md backdrop-blur-sm">
      {/* Navigation Container */}
      <nav className="flex justify-between items-center mx-auto px-6 py-3 max-w-7xl">
        {/* Logo Section */}
        <div className="text-indigo-600 font-bold text-2xl tracking-widest">
          Ananyaa
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium uppercase tracking-wide text-sm",
                  {
                    "text-indigo-600 border-b-2 border-indigo-600":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
