"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 max-w-4xl mx-auto text-center sm:mb-40 scroll-mt-20 p-8"
      style={{
        background: "white",
        color: "black",
        borderRadius: "1rem",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Profile Image */}
      <div className="flex items-center justify-center mb-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src="/ananya_picture.jpg"
            alt="Ananya portrait"
            width={150}
            height={150}
            quality={95}
            priority={true}
            className="h-36 w-36 rounded-full object-cover border-[0.4rem] border-white shadow-lg"
          />
        </motion.div>
      </div>

      {/* Greeting & Intro */}
      <motion.h1
        className="mb-4 mt-2 text-3xl sm:text-4xl font-bold !leading-snug"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I’m <span className="text-yellow-300">Ananya</span>! 👋
      </motion.h1>

      <motion.p
        className="mb-6 text-lg sm:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        I’m a passionate <span className="font-semibold">CSE student</span> on a journey to explore 
        <span className="font-semibold"> innovative technologies</span>. Currently, I’m developing an 
        <span className="italic"> Indian Sign Language Interpreter</span> and diving into exciting tech stacks 
        like <span className="font-semibold">Flutter</span> and <span className="font-semibold">Android Studio</span>.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Contact Button */}
        <Link
          href="#contact"
          className="group bg-yellow-400 text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-yellow-500 transition transform focus:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Resume Download */}
        <a
          className="group bg-white text-gray-800 px-6 py-3 flex items-center gap-2 rounded-full hover:bg-gray-200 transition transform focus:scale-105"
          href="/Ananya_Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition-transform" />
        </a>

        {/* Social Media Links */}
        <a
          className="group p-4 bg-blue-600 text-white text-xl rounded-full hover:bg-blue-700 focus:scale-105 transition transform"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          className="group p-4 bg-gray-800 text-white text-xl rounded-full hover:bg-gray-900 focus:scale-105 transition transform"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
