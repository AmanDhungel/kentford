"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WelcomeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full  lg:w-[45%] flex items-center justify-center p-8 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl">
            <h4 className="text-[#008080] font-bold text-lg mb-2">
              Welcome to
            </h4>
            <h2 className="text-3xl lg:text-5xl font-black text-[#001a1a] mb-6 leading-tight">
              Fusion College of Technology
            </h2>

            <div className="space-y-4 text-slate-600 text-sm lg:text-base leading-relaxed">
              <p>
                Fusion College of Technology is focused on providing quality
                education and training in a wide range of courses that transform
                our students to be job-ready and are given access to many job
                opportunities here in Australia and overseas.
              </p>
              <p>
                The vocational courses Fusion College offers are all accredited
                by Australian Skills Quality Authority (ASQA) and meet the
                national quality assurance requirement in terms of competency
                outcomes and assessment validity.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}>
              <Button className="mt-8 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-full px-8 py-6 uppercase tracking-wider text-xs">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative w-full lg:w-[55%] h-[400px] lg:h-auto">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="absolute inset-0 z-0 h-full w-full"
            style={{
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            }}>
            <Image
              src="/welcome.png"
              alt="Classroom Environment"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="absolute h-fit bottom-10 left-[5%] lg:left-0 z-10 bg-[#D97706] p-1 lg:p-5 max-w-[220px] shadow-xl">
            <p className="text-white font-bold text-xs lg:text-xs italic leading-snug">
              &quot;Learning excellence in vocational education training&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
