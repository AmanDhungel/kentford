"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const admissionSteps = [
  {
    step: 1,
    text: "Read our Course Brochure, International Student Handbook and all the information on our website.",
    side: "left",
    color: "bg-[#00A9A5]",
  },
  {
    step: 2,
    text: "A complete application form must be submitted with a certified copy of your passport, academic qualification and evidence of your English Language proficiency.",
    side: "left",
    color: "bg-[#D97706]",
  },
  {
    step: 3,
    text: "On receipt of an application, a course entry interview will be conducted, and a decision made on whether the student is suitable for the course based on the course entry interview and the documentation provided by the student in support of their application.",
    side: "left",
    color: "bg-[#00A9A5]",
  },
  {
    step: 4,
    text: "Kentford College will issue with a letter of offer/student agreement.",
    side: "left",
    color: "bg-[#D97706]",
  },
  {
    step: 5,
    text: "Read carefully and Sign the Letter of Offer/student agreement and return to Kentford College.",
    side: "right",
    color: "bg-[#00A9A5]",
  },
  {
    step: 6,
    text: "Make Payment by bank Transfer and Send a copy of your Payment receipt to Kentford College.",
    side: "right",
    color: "bg-[#D97706]",
  },
  {
    step: 7,
    text: "Kentford College will issue your Confirmation of Enrollment (COE). You are now ready to apply for your student visa.",
    side: "right",
    color: "bg-[#00A9A5]",
  },
  {
    step: 8,
    text: "Visit homeaffairs.gov.au to learn about the Australian student visa program including your eligibility status and how to apply.",
    side: "right",
    color: "bg-[#D97706]",
  },
];

export default function AdmissionsSection() {
  return (
    <section className="py-20 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#D97706] tracking-tight uppercase mb-4">
            ADMISSIONS
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-[1px] bg-slate-200 w-24" />
            <div className="bg-[#D97706] p-3 rounded-full">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div className="h-[1px] bg-slate-200 w-24" />
          </div>
          <Button className="bg-[#D97706] hover:bg-[#006666] font-bold px-8 py-6 rounded-none uppercase text-sm">
            HOW TO APPLY
          </Button>
        </div>

        {/* Dynamic Steps Grid */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Left Column Steps: Coming from Left */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            {admissionSteps
              .filter((s) => s.side === "left")
              .map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6 justify-end text-right">
                  <p className="text-[13px] leading-relaxed text-slate-600 max-w-[250px]">
                    {item.text}
                  </p>
                  <div
                    className={`${item.color} shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    STEP {item.step}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Center Logo: Fades/Scales in */}
          {/* <div className="w-full lg:w-1/3 flex justify-center py-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 flex flex-col items-center justify-center">
              <Image
                src="/fusion-logo-full.png"
                alt="Fusion College Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>
          </div> */}

          {/* Right Column Steps: Coming from Right */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            {admissionSteps
              .filter((s) => s.side === "right")
              .map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6 text-left">
                  <div
                    className={`${item.color} shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    STEP {item.step}
                  </div>
                  <p className="text-[13px] leading-relaxed text-slate-600 max-w-[250px]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}>
            <Button className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-full px-10 py-7 font-bold text-lg flex gap-3 shadow-xl">
              Application Form <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
