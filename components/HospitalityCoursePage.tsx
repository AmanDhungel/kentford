"use client";

import React from "react";
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
  CheckSquare,
  HeartHandshake,
  TrendingUp,
  Target,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";

const supportItems = [
  "One-to-one support from the trainer/assessor",
  "Support with personal issues",
  "Access to additional learning resources",
  "Reasonable adjustment in assessment",
  "Social events",
  "A buddy program",
  "Information about external sources of support",
];

const GraduateDiplomaPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[300px] w-full bg-slate-900">
        <Image
          src="/images/image-8.jpg"
          alt="Graduate Diploma Banner"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 px-8 py-4 shadow-2xl border-t-4 border-orange-500">
            <h1 className="text-xl md:text-xl font-black tracking-[0.2em] text-[#001a1a] uppercase text-center">
              BSB80120 Graduate Diploma of Management (Learning) <br /> CRICOS
              Course Code: 115259F
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#E67E22] hover:bg-[#d3731f] rounded-none px-4 py-1">
                Postgraduate
              </Badge>
              <h2 className="text-3xl font-bold text-orange-500">
                About this course
              </h2>
              <p className="text-slate-600 leading-relaxed">
                CRICOS Course Code:{" "}
                <span className="font-bold text-[#001a1a]">115259F</span>
              </p>
              <div className="bg-slate-50 border-l-4 border-orange-500 p-4 italic text-slate-700">
                International students seeking to pursue or further a career in
                organisational learning and capability development, or seeking a
                pathway to higher level qualifications.
              </div>
            </div>

            <div className="bg-[#FAF3EF] p-6 border-l-4 border-[#E67E22] mt-6">
              <h3 className="font-bold text-[#333] mb-3">
                Who should apply for this course and why?
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span>•</span> Seeking to pursue or further a career in
                  kitchen management
                </li>
                <li className="flex gap-2">
                  <span>•</span> Seeking to enter a new industry sector
                </li>
                <li className="flex gap-2">
                  <span>•</span> Seeking a pathway to higher level
                  qualifications
                </li>
              </ul>
            </div>

            <Tabs defaultValue="entry" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-3 min-h-fit p-2 bg-orange-500 gap-2 w-full text-black rounded-none mb-1">
                <TabsTrigger
                  value="entry"
                  className="data-[state=active]:bg-gray-200 bg-white data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <ClipboardCheck size={16} /> Entry Requirement
                </TabsTrigger>
                <TabsTrigger
                  value="units"
                  className="data-[state=active]:bg-gray-200 bg-white data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <BookOpen size={16} /> Unit Details
                </TabsTrigger>
                <TabsTrigger
                  value="fees"
                  className="data-[state=active]:bg-gray-200 bg-white data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <CalendarDays size={16} /> Dates and Fees
                </TabsTrigger>
                <TabsTrigger
                  value="apply"
                  className="data-[state=active]:bg-gray-200 bg-white data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <Send size={16} /> Apply Now
                </TabsTrigger>
                <TabsTrigger
                  value="duration"
                  className="data-[state=active]:bg-gray-200 bg-white data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <Clock size={16} /> Duration
                </TabsTrigger>
              </TabsList>

              <div className="border-4 border-orange-500 p-8 min-h-[500px]">
                <TabsContent value="entry" className="space-y-6 mt-0">
                  <h3 className="text-2xl font-bold text-orange-500">
                    International Students must:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Be at least 18 years of age",
                      "Have completed a Diploma level qualification (i.e. AQF Level 5) or above",
                      "Participate in a course entry interview to determine suitability for the course and student needs",
                      "Have an IELTS* score of 6.0 (test results must be no more than 2 years old) or equivalent.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <CheckCircle2
                          className="text-orange-500 shrink-0 mt-1"
                          size={18}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-50 p-4 border border-amber-200 rounded-lg text-sm text-amber-900">
                    <p className="font-bold mb-2 uppercase">
                      English language competence proof:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Educated for 5 years in an English-speaking country; or
                      </li>
                      <li>
                        Successful completion of an English Placement Test.
                      </li>
                    </ul>
                    <p className="mt-3 italic text-xs">
                      *Note: PTE and TOEFL are also accepted as equivalents to
                      IELTS 6.0.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-slate-100 border border-slate-200 text-slate-700">
                    <Laptop className="text-orange-500" />
                    <p className="text-sm font-medium">
                      Students must bring their own laptop or compatible device
                      for classroom use.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="units" className="mt-0 space-y-6">
                  <h3 className="text-2xl font-bold text-[#001a1a]">
                    Units of Competency
                  </h3>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader className="bg-orange-500 pointer-events-none">
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-white font-bold">
                            CODE
                          </TableHead>
                          <TableHead className="text-white font-bold">
                            TITLE
                          </TableHead>
                          <TableHead className="text-white font-bold">
                            CORE / ELECTIVE
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            code: "BSBHRM613",
                            title:
                              "Contribute to the development of learning and development strategies",
                            type: "Core",
                          },
                          {
                            code: "BSBLDR811",
                            title: "Lead strategic transformation",
                            type: "Core",
                          },
                          {
                            code: "TAELED803",
                            title: "Implement improved learning practice",
                            type: "Core",
                          },
                          {
                            code: "BSBCRT611",
                            title:
                              "Apply critical thinking for complex problem-solving",
                            type: "Elective",
                          },
                          {
                            code: "BSBLDR601",
                            title: "Lead and manage organisational change",
                            type: "Elective",
                          },
                          {
                            code: "BSBOPS601",
                            title: "Develop and implement business plans",
                            type: "Elective",
                          },
                          {
                            code: "BSBSTR801",
                            title: "Lead innovative thinking and practice",
                            type: "Elective",
                          },
                          {
                            code: "BSBLDR602",
                            title: "Provide leadership across the organisation",
                            type: "Elective",
                          },
                        ].map((unit) => (
                          <TableRow key={unit.code}>
                            <TableCell className="font-bold text-orange-500">
                              {unit.code}
                            </TableCell>
                            <TableCell className="max-w-50 overflow-hidden">
                              <div className="whitespace-pre-wrap break-words">
                                {unit.title}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  unit.type === "Core"
                                    ? "border-orange-500 text-orange-500"
                                    : "border-slate-300 text-slate-500"
                                }>
                                {unit.type}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="fees" className="mt-0 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">
                      Intake Months each year
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["January", "April", "July", "October"].map((month) => (
                        <div
                          key={month}
                          className="p-4 bg-slate-50 border text-center font-bold text-slate-700">
                          {month}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-orange-500 mb-4">
                        Course Fees and Payment
                      </h3>
                      <div className="space-y-2 text-slate-700">
                        <p className="flex justify-between border-b pb-1">
                          <span>Enrolment Fee:</span>{" "}
                          <span className="font-bold">AUD 250</span>
                        </p>
                        <p className="flex justify-between border-b pb-1">
                          <span>Course Fee:</span>{" "}
                          <span className="font-bold">AUD 32,000</span>
                        </p>
                        <p className="flex justify-between border-b pb-1">
                          <span>Material Fee:</span>{" "}
                          <span className="font-bold">AUD 1,000</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-500 mb-4">
                        Payment Options
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Credit Card</li>
                        <li>
                          Electronic Funds Transfer (account details available
                          on request)
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Apply Now */}
                <TabsContent value="apply" className="mt-0 space-y-6">
                  <h3 className="text-2xl font-bold text-orange-500">
                    How can I apply?
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                    <p className="text-slate-700 font-medium">
                      Please submit copies of your:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "Passport Copy",
                        "Academic Certificates",
                        "English Proficiency",
                      ].map((doc) => (
                        <div
                          key={doc}
                          className="bg-white p-3 border border-slate-200 text-center text-sm font-bold shadow-sm">
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#001a1a] border-b pb-2">
                      Offer and Enrolment Process
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Successful applicants receive a Letter of Offer. Once the
                      student agreement is signed and first payment received, we
                      issue a Confirmation of Enrolment (CoE).
                    </p>
                    <div className="flex items-center gap-2 text-orange-500 text-sm font-bold">
                      <ExternalLink size={16} />
                      <a
                        href="https://kentford.edu.au"
                        className="hover:underline">
                        kentford.edu.au/handbook
                      </a>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Duration */}
                <TabsContent value="duration" className="mt-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-orange-500">
                      Course Duration
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Delivered over{" "}
                      <span className="font-bold">104 weeks</span>, including 80
                      weeks of training/assessment (8 terms of 10 weeks) and 24
                      weeks of holidays.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-500">
                        Delivery Mode
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 bg-slate-50 border-l-4 border-[#E67E22]">
                          <span className="text-sm">Face-to-Face</span>
                          <span className="font-bold text-sm">
                            13.5 hours/week
                          </span>
                        </div>
                        <div className="flex justify-between p-3 bg-slate-50 border-l-4 border-orange-500">
                          <span className="text-sm">Supervised Study</span>
                          <span className="font-bold text-sm">
                            6.5 hours/week
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-500">
                        Delivery Site
                      </h3>
                      <div className="flex gap-3 text-slate-700 text-sm">
                        <MapPin className="text-orange-500 shrink-0" />
                        <p>
                          Suite 502, Level 5, 16 – 18 Wentworth Street
                          Parramatta NSW 2150
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
              <section className="bg-[#FAF3EF] p-8 md:p-12 rounded-sm border-l-8 border-orange-500">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="text-orange-500" size={32} />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
                    Training and assessment information
                  </h2>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p className="font-medium">
                    Students are required to attend 13.5 hours of training and
                    assessment per week and complete structured supervised study
                    session of 6.5 hours per week.
                  </p>
                  <p>
                    Assessment will occur through a variety of methods,
                    including projects incorporating role-plays, case studies,
                    and short answer questions.
                  </p>
                </div>

                <Separator className="my-10 bg-slate-200" />

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="text-orange-500" size={28} />
                    <h3 className="text-xl md:text-2xl font-bold text-[#333]">
                      Course progress and attendance
                    </h3>
                  </div>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      Satisfactory course progress and attendance are very
                      important in order to meet visa requirements. Please read
                      the International Student Handbook carefully for more
                      information. You will also be provided with further
                      information about course progress and attendance
                      requirements at your orientation.
                    </p>
                    <p>
                      Assessment will occur through a variety of methods,
                      including projects incorporating role-plays, case studies,
                      observations, and short answer questions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Student Support Section */}
              <section className="bg-white border border-slate-100 shadow-sm p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <div className="sticky top-24 space-y-4">
                      <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <HeartHandshake className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-[#333]">
                        Student Support
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        You may not have studied for a while, may have English
                        as a second language or need additional assistance with
                        literacy or numeracy. We will identify any additional
                        support needs you may have at the time of application
                        and enrolment and may provide you support based on those
                        needs.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 gap-4">
                      {supportItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 transition-all duration-300">
                          <div className="mt-1 bg-white border-2 border-orange-500 rounded flex items-center justify-center p-0.5">
                            <CheckSquare
                              className="text-orange-500"
                              size={16}
                              fill="currentColor"
                            />
                          </div>
                          <span className="text-slate-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 p-6 bg-orange-500/5 rounded-2xl border border-orange-500/10 flex gap-4 items-center">
                      <Clock className="text-orange-500 shrink-0" />
                      <p className="text-sm text-orange-500 font-semibold italic">
                        Support is tailored to individual needs identified
                        during your initial application.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="w-full lg:w-[380px] space-y-6">
            <div className="flex flex-col gap-4 sticky top-24">
              <Button className="w-full h-16 bg-orange-500 hover:bg-[#006666] text-lg font-black uppercase tracking-widest rounded-none shadow-xl">
                Enquire Now
              </Button>
              <Button className="w-full h-16 bg-[#E67E22] hover:bg-[#d3731f] text-lg font-black uppercase tracking-widest rounded-none shadow-xl">
                Apply Now
              </Button>

              <Card className="rounded-none border-none bg-slate-50 shadow-sm mt-4">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-tighter mb-2 border-b pb-1">
                      Course Duration
                    </h4>
                    <div className="flex items-center gap-2 text-slate-800">
                      <Clock size={18} className="text-[#E67E22]" />
                      <span className="font-bold">104 Weeks</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-tighter mb-2 border-b pb-1">
                      Support Services
                    </h4>
                    <ul className="text-xs space-y-2 text-slate-600">
                      <li>• One-to-one trainer support</li>
                      <li>• Personal issue support</li>
                      <li>• LLN assistance</li>
                      <li>• Social events & Buddy program</li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-center gap-6 pt-4 opacity-70">
                    <Image
                      src="/images/logo-4.png"
                      alt="NRT"
                      width={250}
                      height={200}
                    />
                    <Image
                      src="/images/logo-1.png"
                      alt="AQF"
                      width={250}
                      height={200}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GraduateDiplomaPage;
