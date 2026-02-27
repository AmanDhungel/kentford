"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  BookOpen,
  CalendarDays,
  Send,
  Clock,
  MapPin,
  Laptop,
  CheckCircle2,
  ExternalLink,
  Target,
  TrendingUp,
  HeartHandshake,
  CheckSquare,
  Utensils,
  ChefHat,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const KitchenManagementPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    { id: "about", label: "Course Overview", icon: Info },
    { id: "entry", label: "Entry Requirements", icon: ClipboardCheck },
    { id: "units", label: "Units of Competency", icon: BookOpen },
    { id: "fees", label: "Fees & Intakes", icon: CalendarDays },
    { id: "delivery", label: "Duration & Delivery", icon: Clock },
    { id: "apply", label: "How to Apply", icon: Send },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Header Banner - Compact Design */}
      <div className="bg-[#001a1a] text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <ChefHat size={300} />
        </div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <Badge className="bg-[#E67E22] mb-4 rounded-none uppercase tracking-tighter">
            SIT40521
          </Badge>
          <h1 className="text-3xl md:text-5xl font-black max-w-3xl leading-tight">
            Certificate IV in{" "}
            <span className="text-[#008080]">Kitchen Management</span>
          </h1>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#008080] font-bold">CRICOS:</span> 113997K
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#E67E22]" size={18} /> 78 Weeks
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-[#E67E22]" size={18} /> Parramatta, NSW
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Side Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all ${
                    activeSection === item.id
                      ? "bg-[#008080] text-white shadow-lg translate-x-2"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}>
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <div className="pt-6">
                <Button className="w-full bg-[#E67E22] hover:bg-[#d3731f] rounded-none py-6 font-black uppercase tracking-widest italic">
                  Apply Now
                </Button>
              </div>
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className="flex-1 bg-white shadow-sm border border-slate-100 p-8 md:p-12">
            {/* Section: About */}
            {activeSection === "about" && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  About the Course
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  <p>
                    This qualification reflects the role of chefs and cooks who
                    have a supervisory or team leading role in the kitchen. They
                    operate independently or with limited guidance from others
                    and use discretion to solve non-routine problems.
                  </p>
                  <p>
                    It provides a pathway to work in organisations such as
                    restaurants, hotels, clubs, pubs, cafes and coffee shops, or
                    to run a small business in these sectors.
                  </p>
                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 border-t-4 border-[#E67E22]">
                    <h4 className="font-bold text-[#001a1a] mb-4 flex items-center gap-2">
                      <Target className="text-[#E67E22]" size={20} /> Target
                      Audience
                    </h4>
                    <ul className="text-sm space-y-2 text-slate-600">
                      <li>• Seeking a career in kitchen management</li>
                      <li>• New industry sector entrants</li>
                      <li>• Pathway to higher qualifications</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-6 border-t-4 border-[#008080]">
                    <h4 className="font-bold text-[#001a1a] mb-4 flex items-center gap-2">
                      <Utensils className="text-[#008080]" size={20} /> Career
                      Outcomes
                    </h4>
                    <p className="text-sm text-slate-600">
                      Chef de Partie, Sous Chef, or Kitchen Manager across
                      hotels, restaurants, and catering operations.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Entry */}
            {activeSection === "entry" && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  Entry Requirements
                </h2>
                <div className="grid gap-4">
                  {[
                    "Be at least 18 years of age",
                    "Have completed Year 12, or equivalent",
                    "Participate in a course entry interview",
                    "IELTS score of 6.0 (no band less than 5.5) or equivalent",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-slate-50 items-center">
                      <CheckCircle2 className="text-[#008080]" />
                      <span className="font-medium text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 p-6 border border-amber-100 rounded-lg">
                  <p className="text-xs text-amber-800 leading-relaxed uppercase font-bold mb-2">
                    Technical Requirement
                  </p>
                  <div className="flex gap-3 items-start">
                    <Laptop className="text-amber-600 shrink-0" />
                    <p className="text-sm text-amber-900 italic">
                      Student must bring their laptop or compatible device for
                      classroom use, as it is essential for accessing materials
                      and completing coursework.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Units */}
            {activeSection === "units" && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  Units of Competency
                </h2>
                <div className="border rounded-none overflow-hidden">
                  <Table>
                    <TableHeader className="bg-slate-900">
                      <TableRow className="hover:bg-slate-900">
                        <TableHead className="text-white">CODE</TableHead>
                        <TableHead className="text-white">TITLE</TableHead>
                        <TableHead className="text-white">TYPE</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-[11px] md:text-xs">
                      {[
                        {
                          code: "SITHCCC023*",
                          title: "Use food preparation equipment",
                          type: "Core",
                        },
                        {
                          code: "SITHCCC027*",
                          title:
                            "Prepare dishes using basic methods of cookery",
                          type: "Core",
                        },
                        {
                          code: "SITHKOP010",
                          title: "Plan and cost recipes",
                          type: "Core",
                        },
                        {
                          code: "SITXFIN009",
                          title: "Manage finances within a budget",
                          type: "Core",
                        },
                        {
                          code: "SITXFSA005",
                          title: "Use hygienic practices for food safety",
                          type: "Core",
                        },
                        {
                          code: "SITXHRM009",
                          title: "Lead and manage people",
                          type: "Core",
                        },
                        {
                          code: "SITHCCC026*",
                          title: "Package prepared foodstuffs",
                          type: "Elective",
                        },
                        {
                          code: "SITHFAB025",
                          title: "Prepare and serve espresso coffee",
                          type: "Elective",
                        },
                      ].map((unit) => (
                        <TableRow key={unit.code}>
                          <TableCell className="font-bold text-[#008080]">
                            {unit.code}
                          </TableCell>
                          <TableCell>{unit.title}</TableCell>
                          <TableCell>
                            <Badge
                              variant="secondary"
                              className="text-[10px] uppercase">
                              {unit.type}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="p-4 bg-slate-50 text-[10px] text-slate-500">
                    * Units require practical kitchen assessment. Total 33 units
                    (27 Core, 6 Elective).
                  </div>
                </div>
              </div>
            )}

            {/* Section: Fees */}
            {activeSection === "fees" && (
              <div className="animate-in fade-in duration-500 space-y-8">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  Fees & Intakes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    "January",
                    "February",
                    "April",
                    "May",
                    "July",
                    "August",
                    "October",
                    "November",
                  ].map((m) => (
                    <div
                      key={m}
                      className="border p-2 text-center text-xs font-bold text-[#008080] bg-emerald-50/30">
                      {m}
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900 text-white p-8 space-y-4">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Application Fee</span> <span>AUD 250</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Course Fee</span>{" "}
                    <span className="text-[#E67E22] font-bold">AUD 24,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Material Fee</span> <span>AUD 3,000</span>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Delivery */}
            {activeSection === "delivery" && (
              <div className="animate-in fade-in duration-500 space-y-8">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  Duration & Delivery
                </h2>
                <div className="flex items-center gap-6 p-6 bg-[#FAF3EF] border-l-8 border-[#E67E22]">
                  <Clock size={40} className="text-[#E67E22]" />
                  <div>
                    <p className="font-bold text-lg">78 Weeks Total</p>
                    <p className="text-sm text-slate-600">
                      60 weeks tuition (6 terms) + 18 weeks holidays
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <MapPin size={18} className="text-[#008080]" /> Locations
                    </h4>
                    <div className="text-sm text-slate-600 space-y-2">
                      <p>
                        <strong>Classroom:</strong> Parramatta NSW 2150
                      </p>
                      <p>
                        <strong>Kitchen:</strong> 118 Church Street, Parramatta
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <ChefHat size={18} className="text-[#008080]" /> Work
                      Placement
                    </h4>
                    <div className="p-4 border bg-emerald-50 rounded">
                      <p className="text-xs font-bold text-[#008080]">
                        MANDATORY PLACEMENT
                      </p>
                      <p className="text-lg font-black">192 Hours</p>
                      <p className="text-[10px] text-slate-500">
                        (48 service periods)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Apply */}
            {activeSection === "apply" && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="text-2xl font-black text-[#001a1a] mb-6 border-b-4 border-[#008080] inline-block">
                  How to Apply
                </h2>
                <p className="text-sm text-slate-600">
                  Submit your application form with the following evidence:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {["Passport", "Academic Records", "English Proof"].map(
                    (item) => (
                      <div
                        key={item}
                        className="p-4 border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 text-xs uppercase">
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-8 p-6 border-t">
                  <h4 className="font-bold mb-2 text-[#008080]">Process</h4>
                  <ol className="text-sm text-slate-600 space-y-2 list-decimal pl-4">
                    <li>Submit Application Form</li>
                    <li>Receive Letter of Offer & Student Agreement</li>
                    <li>Sign agreement and make initial payment</li>
                    <li>Receive CoE and start orientation</li>
                  </ol>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer Info Sections - Uniform across all course pages */}
      <div className="container mx-auto max-w-7xl px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 border-t-4 border-[#008080] shadow-sm">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Target className="text-[#008080]" /> Training Info
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Students attend 13.5 hours of training/assessment and 6.5 hours of
              structured study per week. Assessments include role-plays, case
              studies, and observations.
            </p>
          </section>
          <section className="bg-white p-8 border-t-4 border-[#E67E22] shadow-sm">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
              <HeartHandshake className="text-[#E67E22]" /> Student Support
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-slate-700">
              <div className="flex items-center gap-1">
                <CheckSquare size={12} className="text-[#008080]" /> 1-on-1
                Support
              </div>
              <div className="flex items-center gap-1">
                <CheckSquare size={12} className="text-[#008080]" /> LLN
                Assistance
              </div>
              <div className="flex items-center gap-1">
                <CheckSquare size={12} className="text-[#008080]" /> Buddy
                Program
              </div>
              <div className="flex items-center gap-1">
                <CheckSquare size={12} className="text-[#008080]" /> Social
                Events
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KitchenManagementPage;
