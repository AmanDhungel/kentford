"use client";

import Link from "next/link";
import { Menu, Phone, Mail, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 1. Updated Data Structure with hrefs
const menuData = [
  {
    title: "COURSES",
    items: [
      {
        label: "Building and Construction Trades",
        href: "/courses/building-construction",
      },
      { label: "Civil Construction Design", href: "/courses/civil-design" },
      { label: "Information Technology", href: "/courses/it" },
      { label: "Business and Management", href: "/courses/business" },
      { label: "Kitchen and Hospitality", href: "/courses/hospitality" },
      { label: "Community and Health", href: "/courses/health" },
    ],
  },
  {
    title: "ADMISSIONS",
    items: [
      { label: "Domestic", href: "/admissions/domestic" },
      { label: "International", href: "/admissions/international" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "STUDENT INFO",
    items: [
      { label: "Student Handbook", href: "/info/handbook" },
      { label: "Campus Life", href: "/info/campus-life" },
      { label: "Orientation", href: "/info/orientation" },
    ],
  },
  {
    title: "ABOUT US",
    href: "/about-us",
  },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-[100]">
      <div className="hidden lg:block border-b py-2">
        <div className="container mx-auto flex justify-end items-center gap-6 px-4 text-[12px] font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <Phone size={14} className="text-[#008080]" />
            <span>+61 2 7806 8110</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={14} className="text-[#008080]" />
            <span>admissions@fusioncollege.edu.au</span>
          </div>
          <Search size={16} className="cursor-pointer hover:text-[#008080]" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col uppercase shrink-0">
          <span className="text-xl font-black text-[#006666] leading-none">
            Fusion College
          </span>
          <span className="text-[11px] font-bold text-[#E67E22] tracking-[0.15em]">
            Of Technology
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {menuData.map((menu) => (
            <Popover key={menu.title}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-bold text-[#008080] hover:text-[#006666] hover:bg-transparent uppercase text-[13px] tracking-tight flex gap-1 group">
                  {menu.title}
                  {menu.items && menu.items.length > 0 && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  )}
                </Button>
              </PopoverTrigger>

              {menu.items && menu.items.length > 0 && (
                <PopoverContent
                  align="start"
                  sideOffset={20}
                  className="w-[280px] p-0 bg-black border-none rounded-none shadow-xl z-[110]">
                  <ul className="flex flex-col">
                    {menu.items.map((item, index) => (
                      <li
                        key={item.label}
                        className={
                          index !== menu.items!.length - 1
                            ? "border-b border-white/10"
                            : ""
                        }>
                        <Link
                          href={item.href}
                          className="block p-4 text-[13px] font-bold text-white hover:bg-[#008080] transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              )}
            </Popover>
          ))}

          <Button
            asChild
            className="bg-[#008080] hover:bg-[#006666] text-white rounded-full px-8 py-5 font-bold uppercase text-sm ml-4">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left mb-4">
                <SheetTitle className="text-[#006666] font-black uppercase">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <Accordion type="single" collapsible className="w-full">
                {menuData.map((menu, idx) => (
                  <AccordionItem value={`item-${idx}`} key={menu.title}>
                    {menu.items && menu.items.length > 0 ? (
                      <>
                        <AccordionTrigger className="text-[#008080] font-bold uppercase text-sm">
                          {menu.title}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 pl-4">
                          {menu.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="py-2 text-sm text-slate-600 hover:text-[#008080]">
                              {sub.label}
                            </Link>
                          ))}
                        </AccordionContent>
                      </>
                    ) : (
                      <Link
                        href={menu.href || "#"}
                        className="flex flex-1 items-center justify-between py-4 text-[#008080] font-bold uppercase text-sm hover:underline">
                        {menu.title}
                      </Link>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
              <Button
                asChild
                className="w-full bg-[#008080] mt-6 font-bold uppercase">
                <Link href="/apply">Apply Now</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
