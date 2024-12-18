"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// Animation Variants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // Skill Data
  const skillsData = [
    "DBMS",
    "C++",
    "C",
    "Java",
    "Python",
    "Android Studio",
    "Flutter",
    "Git",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 p-10 rounded-lg bg-white shadow-lg"
    >
      {/* Section Title */}
      <SectionHeading>My Skills</SectionHeading>

      {/* Skills Grid */}
      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gray-100 text-black rounded-xl px-6 py-3 shadow-md cursor-pointer hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
