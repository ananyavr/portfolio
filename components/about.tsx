"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-4xl mx-auto text-center leading-8 sm:mb-40 scroll-mt-28 px-4 py-6 bg-gray-50 shadow-lg rounded-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      id="about"
    >
      {/* Section Title */}
      <SectionHeading>About Me</SectionHeading>

      {/* Intro Text */}
      <motion.p
        className="mb-5 text-gray-700 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        My name is <span className="font-bold text-indigo-600">Ananya</span>, and I am a{" "}
        <span className="font-semibold text-pink-600">
          3rd-year Computer Science Engineering student
        </span>{" "}
        at RV Institute of Technology and Management. I have a strong grasp of{" "}
        <span className="font-medium text-green-700">Python, C, and Java</span>, along with
        foundational knowledge of{" "}
        <span className="font-medium text-blue-600">HTML, CSS, and DBMS basics</span>.
      </motion.p>

      {/* Hobbies Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left text-gray-700"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
          },
        }}
      >
        {/* Hobbies List */}
        <motion.div
          className="p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="font-semibold text-lg text-indigo-600 mb-2">Hobbies</h3>
          <ul className="list-disc ml-5">
            <li>Dancing</li>
            <li>Singing</li>
            <li>Painting & Crafts</li>
            <li>Swimming</li>
            <li>Learning Guitar</li>
          </ul>
        </motion.div>

        {/* Skills Development */}
        <motion.div
          className="p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="font-semibold text-lg text-pink-600 mb-2">Exploring</h3>
          <p>
            I am currently exploring{" "}
            <span className="font-medium text-green-700">Android Studio</span> and actively
            learning app development. Building innovative apps excites me, and I’m
            enthusiastic about honing these skills.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
