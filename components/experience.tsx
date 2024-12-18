"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const educationData = [
  {
    date: "School",
    title: "VIDYA VARDHAKA SARDAR PATEL HIGH SCHOOL",
    location: "",
    description: "Completed my high school education."
  },
  {
    date: "College",
    title: "RV Institute of Technology and Management (RVITM)",
    location: "",
    description: "Currently pursuing a degree in Computer Science Engineering."
  }
];

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#4CAF50" : "#FF4081"}>
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#FFFFFF", // White background
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                border: "1px solid rgba(0, 0, 0, 0.1)", // Subtle border
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "black" // Force text color to black
              }}
              contentArrowStyle={{
                borderRight: theme === "light"
                  ? "0.4rem solid #4CAF50" // Green arrow for light theme
                  : "0.4rem solid #FF4081", // Pink arrow for dark theme
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#4CAF50" : "#FF4081",
                fontSize: "1.5rem",
                color: "black" // Icon text color to black
              }}
            >
              <h3 className="font-semibold capitalize" style={{ color: "black" }}>
                {item.title}
              </h3>
              <p className="font-normal" style={{ color: "black" }}>
                {item.location}
              </p>
              <p className="!mt-1 !font-normal" style={{ color: "black" }}>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
