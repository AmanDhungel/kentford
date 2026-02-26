"use client";

import Image from "next/image";
import {
  ClipboardCheck,
  BookOpen,
  CalendarDays,
  Send,
  Clock,
  MapPin,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Unit {
  code: string;
  title: string;
  type: "Core" | "Elective";
}

interface CourseData {
  title: string;
  code: string;
  duration: string;
  fees: { enrolment: string; course: string; material: string };
  intakes: string[];
  units: Unit[];
  requirements: string[];
}

export default function DynamicCoursePage({ course }: { course: CourseData }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[250px] w-full bg-slate-200">
        <Image
          src="/carpentry-header.jpg"
          alt="Banner"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-8 py-4 shadow-xl">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#001a1a] uppercase">
              {course.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#008080] border-b-2 border-[#008080] inline-block pb-1">
                About this course
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                CRICOS Course Code:{" "}
                <span className="font-bold text-[#001a1a]">{course.code}</span>
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                This qualification provides a trade outcome in carpentry,
                covering work in residential and commercial applications.
              </p>
            </div>

            {/* 2. Dynamic Tabs Component */}
            <Tabs defaultValue="entry" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto bg-[#008080] p-1 rounded-none mb-1">
                <TabsTrigger
                  value="entry"
                  className="data-[state=active]:bg-white text-xs py-3 gap-2">
                  <ClipboardCheck size={16} /> Entry Requirement
                </TabsTrigger>
                <TabsTrigger
                  value="units"
                  className="data-[state=active]:bg-white text-xs py-3 gap-2">
                  <BookOpen size={16} /> Unit Details
                </TabsTrigger>
                <TabsTrigger
                  value="fees"
                  className="data-[state=active]:bg-white text-xs py-3 gap-2">
                  <CalendarDays size={16} /> Dates and Fees
                </TabsTrigger>
                <TabsTrigger
                  value="apply"
                  className="data-[state=active]:bg-white text-xs py-3 gap-2">
                  <Send size={16} /> Apply Now
                </TabsTrigger>
                <TabsTrigger
                  value="duration"
                  className="data-[state=active]:bg-white text-xs py-3 gap-2">
                  <Clock size={16} /> Duration & Delivery
                </TabsTrigger>
              </TabsList>

              <div className="border-4 border-[#008080] p-6 min-h-[400px]">
                <TabsContent value="entry" className="space-y-4 mt-0">
                  <h3 className="text-xl font-bold text-[#008080]">
                    International Students must:
                  </h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700">
                    {course.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </TabsContent>

                {/* Tab: Unit Details */}
                <TabsContent value="units" className="mt-0">
                  <h3 className="text-xl font-bold text-[#001a1a] mb-4">
                    Units of Competency
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-[#008080] text-white">
                        <tr>
                          <th className="p-3">CODE</th>
                          <th className="p-3">TITLE</th>
                          <th className="p-3">CORE / ELECTIVE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {course.units.map((unit, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="p-3 font-medium">{unit.code}</td>
                            <td className="p-3">{unit.title}</td>
                            <td className="p-3">{unit.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                {/* Tab: Dates and Fees */}
                <TabsContent value="fees" className="mt-0 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#008080] mb-4">
                      Intake Months each year
                    </h3>
                    <div className="grid grid-cols-3 gap-2 text-sm text-slate-600">
                      {course.intakes.map((m) => (
                        <div key={m} className="p-2 bg-slate-100">
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-[#008080] mb-4">
                      Course Fees and Payment
                    </h3>
                    <p className="text-sm">
                      Enrolment Application Fee:{" "}
                      <span className="font-bold text-[#008080]">
                        {course.fees.enrolment}
                      </span>
                    </p>
                    <p className="text-sm">
                      Course Fee:{" "}
                      <span className="font-bold text-[#008080]">
                        {course.fees.course}
                      </span>
                    </p>
                    <p className="text-sm">
                      Material Fee:{" "}
                      <span className="font-bold text-[#008080]">
                        {course.fees.material}
                      </span>
                    </p>
                  </div>
                </TabsContent>

                {/* Tab: Duration & Delivery */}
                <TabsContent value="duration" className="mt-0 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#008080]">
                      Course Duration
                    </h3>
                    <p className="text-sm text-slate-600">{course.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#008080]">
                      Course Delivery Site
                    </h3>
                    <div className="flex gap-2 items-start text-sm text-slate-600">
                      <MapPin size={18} className="text-[#008080] shrink-0" />
                      <p>
                        Suite 502, Level 5, 16-18 Wentworth Street Parramatta
                        NSW 2150
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Side: Quick Actions */}
          <aside className="w-full lg:w-[350px] space-y-6">
            <div className="flex flex-col gap-3">
              <Button className="w-full py-7 bg-[#008080] hover:bg-[#006666] rounded-full text-lg font-bold">
                Enquire Now
              </Button>
              <Button className="w-full py-7 bg-[#D97706] hover:bg-[#B45309] rounded-full text-lg font-bold">
                Apply Now
              </Button>
            </div>

            {/* Sidebar Info Cards */}
            <div className="border p-6 rounded-sm shadow-sm space-y-4">
              <h4 className="text-[#008080] font-bold text-lg border-b pb-2">
                Course Duration
              </h4>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="flex gap-2 items-center">
                  <Clock size={16} /> Duration
                </span>
                <span>52 Weeks</span>
              </div>
            </div>

            <div className="border p-6 rounded-sm shadow-sm space-y-4">
              <h4 className="text-[#008080] font-bold text-lg border-b pb-2">
                Delivery Modes
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Face-to-Face - 13.5 hours/week <br />
                Supervised Study Session - 6.5 hours/week
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <Image
                src="/nationally-recognised.png"
                alt="Accredited"
                width={120}
                height={60}
              />
              <Image src="/aqf-logo.png" alt="AQF" width={140} height={70} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
