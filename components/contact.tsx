"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 px-6 py-12 bg-gradient-to-r from-blue-50 to-gray-100 text-gray-800 rounded-lg shadow-md max-w-[min(100%,40rem)] mx-auto"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* Section Heading */}
      <SectionHeading>Get in Touch</SectionHeading>

      <p className="text-gray-600 mt-2 dark:text-white/80">
        I’d love to hear from you! Reach out via email at{" "}
        <a
          className="underline font-medium text-blue-600 hover:text-blue-800"
          href="mailto:ananyarangachar@gmail.com"
        >
          ananyarangachar@gmail.com
        </a>{" "}
        or fill out the form below. You can also call me at{" "}
        <span className="font-semibold">9109705915</span>.
      </p>

      {/* Form */}
      <form
        className="mt-8 bg-white rounded-lg shadow-lg p-6 space-y-4"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        {/* Sender Email */}
        <div className="relative">
          <label
            htmlFor="senderEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            className="mt-1 w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-100"
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="example@email.com"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            className="mt-1 w-full h-32 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-100"
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
            maxLength={5000}
          />
        </div>

        {/* Submit Button */}
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
