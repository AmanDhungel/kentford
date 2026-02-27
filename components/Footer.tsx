"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-orange-500 pt-16 pb-8 px-4 font-sans relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <Image
                src="/images/logo-2.png"
                alt="Kentford Logo"
                width={150}
                height={150}
              />
            </div>

            <div className="space-y-2 text-sm text-slate-300 font-medium">
              {/* <p>ABN: 30 655 078 587</p> */}
              {/* <p>RTO ID: 46086</p> */}
              <p>CRICOS Provider Code: 04261B</p>
              <p className="pt-2">
                Level 3 76 Waymouth St ADELAIDE
                <br />
                South Australia 5000
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-slate-500"></span>
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                "Admissions",
                "Agency Details",
                "Contact Us",
                "About Us",
                "Courses",
                "Student Info",
                "Online Learning",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#00A9A5] transition-colors">
                  <ChevronRight size={14} className="text-slate-600" />
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">
                Build Your Career With Quality Education
              </h3>
              <div className="h-[1px] bg-slate-800 w-12 mb-6" />
            </div>

            <div className="flex gap-6">
              <Facebook
                size={20}
                className="cursor-pointer hover:text-[#00A9A5] transition-colors"
              />
              <Twitter
                size={20}
                className="cursor-pointer hover:text-[#00A9A5] transition-colors"
              />
              <Linkedin
                size={20}
                className="cursor-pointer hover:text-[#00A9A5] transition-colors"
              />
              <Youtube
                size={20}
                className="cursor-pointer hover:text-[#00A9A5] transition-colors"
              />
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute bottom-16 right-8 bg-[#00A9A5] p-3 rounded-full hover:bg-[#008c89] transition-all shadow-lg">
          <ChevronUp size={24} />
        </button>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 text-center">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2026 Kentford College of Technology, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
