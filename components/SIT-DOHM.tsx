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
  Target,
  TrendingUp,
  HeartHandshake,
  CheckSquare,
  UtensilsCrossed,
  SquareCheck,
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
import { Separator } from "@/components/ui/separator";

const HospitalityDiplomaPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[300px] w-full bg-slate-900">
        <Image
          src="/images/image-2.png"
          alt="Hospitality Banner"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 px-8 py-4 shadow-2xl border-t-4 border-orange-500">
            <h1 className="text-xl md:text-xl font-black tracking-[0.2em] text-[#001a1a] uppercase text-center">
              SIT50422 Diploma of Hospitality Management <br />
              CRICOS Course Code: 112440G
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-500 hover:bg-[#006666] rounded-none px-4 py-1">
                Hospitality
              </Badge>
              <h2 className="text-3xl font-bold text-orange-500">
                About this course
              </h2>
              <p className="text-slate-600 leading-relaxed">
                CRICOS Course Code:{" "}
                <span className="font-bold text-[#001a1a]">112440G</span>
              </p>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                <p>
                  This qualification reflects the role of highly skilled senior
                  operators who use a broad range of hospitality skills combined
                  with managerial skills and sound knowledge of industry to
                  coordinate hospitality operations. They operate independently,
                  have responsibility for others and make a range of operational
                  business decisions.
                </p>
                <p>
                  This qualification provides a pathway to work in any
                  hospitality industry sector as a departmental or small
                  business manager. The diversity of employers includes
                  restaurants, hotels, motels, catering operations, clubs, pubs,
                  cafés, and coffee shops.
                </p>
              </div>

              {/* Who should apply */}
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
            </div>

            <Tabs defaultValue="entry" className="w-full">
              <TabsList className="grid grid-cols-3 w-full md:grid-cols-3 h-auto bg-orange-500 p-2 rounded-none min-h-fit gap-2  mb-1">
                <TabsTrigger
                  value="entry"
                  className="data-[state=active]:bg-gray-200 bg-white  data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <ClipboardCheck size={16} /> Entry Requirement
                </TabsTrigger>
                <TabsTrigger
                  value="units"
                  className="data-[state=active]:bg-gray-200 bg-white min-h-fit p-2  data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <BookOpen size={16} /> Unit Details
                </TabsTrigger>
                <TabsTrigger
                  value="fees"
                  className="data-[state=active]:bg-gray-200 bg-white min-h-fit p-2  data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <CalendarDays size={16} /> Dates and Fees
                </TabsTrigger>
                <TabsTrigger
                  value="apply"
                  className="data-[state=active]:bg-gray-200 bg-white min-h-fit p-2  data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <Send size={16} /> Apply Now
                </TabsTrigger>
                <TabsTrigger
                  value="duration"
                  className="data-[state=active]:bg-gray-200 bg-white min-h-fit p-2  data-[state=active]:text-orange-500 text-black text-xs py-4 gap-2 rounded-none">
                  <Clock size={16} /> Duration
                </TabsTrigger>
              </TabsList>

              <div className="border-4 border-orange-500 p-8 min-h-[500px]">
                {/* Tab: Entry Requirements */}
                <TabsContent value="entry" className="space-y-6 mt-0">
                  <h3 className="text-2xl font-bold text-orange-500">
                    International Students must:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Be at least 18 years of age and have completed Year 12 or equivalent",
                      "Participate in a course entry interview to determine suitability for the course and student needs",
                      "Have an IELTS* score of 6.0 (test results must be no more than 2 years old) or equivalent",
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
                      Student must bring their laptop or compatible device for
                      classroom use.
                    </p>
                  </div>
                </TabsContent>

                {/* Tab: Units */}
                <TabsContent value="units" className="mt-0 space-y-6">
                  <h3 className="text-2xl font-bold text-[#001a1a]">
                    Units of Competency
                  </h3>
                  <div className="rounded-md border overflow-hidden">
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
                      <TableBody className="text-xs">
                        {[
                          {
                            code: "SITXCCS015",
                            title: "Enhance customer service experiences",
                            type: "Core",
                          },
                          {
                            code: "SITXCCS016",
                            title:
                              "Develop and manage quality customer service practices",
                            type: "Core",
                          },
                          {
                            code: "SITXCOM010",
                            title: "Manage conflict",
                            type: "Core",
                          },
                          {
                            code: "SITXFIN009",
                            title: "Manage finances within a budget",
                            type: "Core",
                          },
                          {
                            code: "SITXFIN010",
                            title: "Prepare and monitor budgets",
                            type: "Core",
                          },
                          {
                            code: "SITXGLC002",
                            title:
                              "Identify and manage legal risks and comply with law",
                            type: "Core",
                          },
                          {
                            code: "SITXHRM008",
                            title: "Roster staff",
                            type: "Core",
                          },
                          {
                            code: "SITXHRM009",
                            title: "Lead and manage people",
                            type: "Core",
                          },
                          {
                            code: "SITXMGT004",
                            title: "Monitor work operations",
                            type: "Core",
                          },
                          {
                            code: "SITXMGT005",
                            title:
                              "Establish and conduct business relationships",
                            type: "Core",
                          },
                          {
                            code: "SITXWHS007",
                            title:
                              "Implement and monitor work health and safety practices",
                            type: "Core",
                          },
                          {
                            code: "SITXFSA005",
                            title: "Use hygienic practices for food safety",
                            type: "Elective",
                          },
                          {
                            code: "SITHKOP013*",
                            title: "Plan cooking operations",
                            type: "Elective",
                          },
                          {
                            code: "SITHCCC023*",
                            title: "Use food preparation equipment",
                            type: "Elective",
                          },
                          {
                            code: "SITHCCC027*",
                            title:
                              "Prepare dishes using basic methods of cookery",
                            type: "Elective",
                          },
                          {
                            code: "BSBTEC301",
                            title: "Design and produce business documents",
                            type: "Elective",
                          },
                        ].map((unit) => (
                          <TableRow key={unit.code}>
                            <TableCell className="font-bold text-orange-500">
                              {unit.code}
                            </TableCell>
                            <TableCell>{unit.title}</TableCell>
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
                    <p className="p-2 text-[10px] text-slate-400 italic">
                      *Partial list shown. Refer to prospectus for full 28 unit
                      listing.
                    </p>
                  </div>
                </TabsContent>

                {/* Tab: Fees */}
                <TabsContent value="fees" className="mt-0 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">
                      Intake Months each year
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "Jan",
                        "Feb",
                        "Apr",
                        "May",
                        "Jul",
                        "Aug",
                        "Oct",
                        "Nov",
                      ].map((month) => (
                        <div
                          key={month}
                          className="p-3 bg-slate-50 border text-center font-bold text-slate-700">
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
                          <span className="font-bold">AUD 28,800</span>
                        </p>
                        <p className="flex justify-between border-b pb-1">
                          <span>Material Fee:</span>{" "}
                          <span className="font-bold">AUD 1,500</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-500 mb-4">
                        Payment Options
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Credit Card</li>
                        <li>Electronic Funds Transfer</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="apply" className="mt-0 space-y-6">
                  <h3 className="text-2xl font-bold text-orange-500">
                    How can I apply?
                  </h3>
                  <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                    <p className="text-slate-700 font-medium text-sm">
                      To apply for this course, submit copies of your:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "Passport Copy",
                        "Academic Certificates",
                        "English Proficiency",
                      ].map((doc) => (
                        <div
                          key={doc}
                          className="bg-white p-3 border border-slate-200 text-center text-xs font-bold shadow-sm">
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
                      agreement is signed and first payment received, we issue a
                      Confirmation of Enrolment (CoE).
                    </p>
                    <div className="flex items-center gap-2 text-orange-500 text-sm font-bold">
                      <ExternalLink size={16} />
                      <a
                        href="https://kentford.edu.au"
                        className="hover:underline">
                        kentford.edu.au
                      </a>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="duration" className="mt-0 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-orange-500">
                      Course Duration
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Delivered over{" "}
                      <span className="font-bold">104 weeks</span> comprising of
                      8 terms of 10 weeks (80 weeks total) and 24 weeks of
                      holidays.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-500">
                        Delivery Mode
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-orange-500">
                          <p className="text-sm">
                            Classroom and structured self-study. Practical
                            training in commercial kitchen. Work placement
                            required.
                          </p>
                        </div>
                        <div className="flex justify-between p-3 bg-emerald-50 border border-emerald-100 rounded">
                          <span className="text-sm font-bold">
                            Work Placement
                          </span>
                          <span className="font-bold text-sm">
                            Min 16 Hours
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-500">
                        Delivery Sites
                      </h3>
                      <div className="space-y-4 text-slate-700 text-sm">
                        <div className="flex gap-3">
                          <MapPin
                            className="text-orange-500 shrink-0"
                            size={18}
                          />
                          <p>
                            <span className="font-bold">Classroom:</span> Suite
                            502, 16–18 Wentworth St, Parramatta
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <UtensilsCrossed
                            className="text-[#E67E22] shrink-0"
                            size={18}
                          />
                          <p>
                            <span className="font-bold">Kitchen:</span> Suite
                            203, 118 Church St, Parramatta
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
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

      <div className="max-w-7xl mx-auto px-4 mt-12 space-y-12">
        <section className="bg-[#FAF3EF] p-8 md:p-12 rounded-sm border-l-8 border-orange-500">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-orange-500" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
              Training and assessment information
            </h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Students attend 13.5 hours of training per week and 6.5 hours of
              supervised study.
            </p>
            <p>
              Assessment includes projects, role-plays, case studies, and short
              answer questions.
            </p>
          </div>
          <Separator className="my-8 bg-slate-200" />
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="text-orange-500" size={28} />
            <h3 className="text-xl font-bold text-[#333]">
              Course progress and attendance
            </h3>
          </div>
          <p className="text-sm text-slate-600">
            Satisfactory progress is vital for visa requirements. Refer to
            handbook for details.
          </p>
        </section>

        <section className="bg-white border border-slate-100 shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <HeartHandshake className="text-orange-500 mb-4" size={48} />
              <h2 className="text-3xl font-bold text-[#333]">
                Student Support
              </h2>
              <p className="text-slate-500 text-sm mt-4">
                Assistance provided for LLN, English as second language, and
                personal issues.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "One-to-one trainer support",
                "Personal issue support",
                "Additional learning resources",
                "Assessment adjustments",
                "Social events",
                "Buddy program",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 border rounded text-xs font-bold text-slate-700">
                  <SquareCheck
                    className="text-orange-500 bg-transparent"
                    size={14}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HospitalityDiplomaPage;
