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

const CommercialCookeryCertIII = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-slate-900">
        <Image
          src="/images/image-4.png"
          alt="Commercial Cookery Banner"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 px-8 py-4 shadow-2xl border-t-4 border-orange-500">
            <h1 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#001a1a] uppercase text-center">
              SIT30821 Certificate III in Commercial Cookery
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-500 hover:bg-[#006666] rounded-none px-4 py-1">
                Commercial Cookery
              </Badge>
              <h2 className="text-3xl font-bold text-orange-500">
                About this course
              </h2>
              <div className="flex gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                <p>
                  CRICOS: <span className="text-[#001a1a]">116230M</span>
                </p>
                <p>
                  VET Code: <span className="text-[#001a1a]">SIT30821</span>
                </p>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                <p>
                  This qualification reflects the role of commercial cooks who
                  use a wide range of well-developed cookery skills and sound
                  knowledge of kitchen operations to prepare food and menu
                  items.
                </p>
                <p>
                  Using discretion and judgement, they work with some
                  independence and under limited supervision using plans,
                  policies and procedures to guide work activities. This
                  qualification provides a pathway to work as a commercial cook
                  in organisations such as restaurants, hotels, clubs, pubs,
                  cafés, and coffee shops.
                </p>
              </div>

              <div className="bg-[#FAF3EF] p-6 border-l-4 border-[#E67E22] mt-6">
                <h3 className="font-bold text-[#333] mb-3">
                  Career Opportunities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-700">
                  <p>• Commercial Cook</p>
                  <p>• Banquet Cook</p>
                  <p>• Bistro Cook</p>
                  <p>• Cafe Cook</p>
                  <p>• Restaurant Cook</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="entry" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3  min-h-fit p-2  bg-orange-500 w-full gap-2 rounded-none mb-1">
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
                {/* Tab: Entry Requirements */}
                <TabsContent value="entry" className="space-y-6 mt-0">
                  <h3 className="text-2xl font-bold text-orange-500">
                    International Students must:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Be at least 18 years of age",
                      "Have completed Australian Year 12 (or equivalent)",
                      "Participate in a course entry interview to determine suitability",
                      "English Proficiency: IELTS 6.0 (no band less than 5.5) or equivalent (PTE/TOEFL)",
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

                  <div className="flex items-center gap-3 p-4 bg-slate-100 border border-slate-200 text-slate-700">
                    <Laptop className="text-orange-500" />
                    <p className="text-sm font-medium">
                      Student must bring their own laptop/device for classroom
                      sessions.
                    </p>
                  </div>
                </TabsContent>

                {/* Tab: Units */}
                <TabsContent value="units" className="mt-0 space-y-6">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-[#001a1a]">
                      Units of Competency
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400">
                      TOTAL 25 UNITS (20 CORE, 5 ELECTIVE)
                    </p>
                  </div>
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-orange-500">
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="text-white font-bold">
                            CODE
                          </TableHead>
                          <TableHead className="text-white font-bold">
                            TITLE
                          </TableHead>
                          <TableHead className="text-white font-bold">
                            TYPE
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-[11px] md:text-xs">
                        {[
                          {
                            code: "SITHCCC023",
                            title: "Use food preparation equipment",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC027",
                            title:
                              "Prepare dishes using basic methods of cookery",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC028",
                            title: "Prepare appetisers and salads",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC029",
                            title: "Prepare stocks, sauces and soups",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC030",
                            title:
                              "Prepare vegetable, fruit, eggs and farinaceous dishes",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC035",
                            title: "Prepare poultry dishes",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC036",
                            title: "Prepare meat dishes",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC037",
                            title: "Prepare seafood dishes",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC043",
                            title: "Work effectively as a cook",
                            type: "Core",
                          },
                          {
                            code: "SITXFSA005",
                            title: "Use hygienic practices for food safety",
                            type: "Core",
                          },
                          {
                            code: "SITXFSA006",
                            title:
                              "Participate in safe food handling practices",
                            type: "Core",
                          },
                          {
                            code: "SITHKOP010",
                            title: "Plan and cost recipes",
                            type: "Core",
                          },
                          {
                            code: "SITHPAT016",
                            title: "Produce desserts",
                            type: "Core",
                          },
                          {
                            code: "SITXWHS005",
                            title: "Participate in safe work practices",
                            type: "Core",
                          },
                          {
                            code: "SITHCCC026",
                            title: "Package prepared foodstuffs",
                            type: "Elective",
                          },
                          {
                            code: "SITHCCC040",
                            title: "Prepare and serve cheese",
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
                  </div>
                </TabsContent>

                {/* Tab: Fees */}
                <TabsContent value="fees" className="mt-0 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">
                      Course Fees and Payment
                    </h3>
                    <div className="bg-slate-50 p-6 rounded border border-slate-200 space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-slate-600">Tuition Fee</span>
                        <span className="text-xl font-black text-[#001a1a]">
                          $AU 15,000
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-slate-600">Non-Tuition Fee</span>
                        <span className="font-bold">$AU 1,750</span>
                      </div>
                      <div className="flex justify-between items-center py-4 bg-white px-4">
                        <span className="font-black text-orange-500 uppercase">
                          Estimated Total Cost
                        </span>
                        <span className="text-2xl font-black text-[#E67E22]">
                          $AU 16,750
                        </span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab: Apply Now */}
                <TabsContent value="apply" className="mt-0 space-y-6">
                  <h3 className="text-2xl font-bold text-orange-500">
                    Application Process
                  </h3>
                  <div className="space-y-4 text-sm text-slate-700">
                    <p>1. Complete the Enrolment Application Form.</p>
                    <p>
                      2. Provide certified copies of your Passport and Academic
                      Certificates.
                    </p>
                    <p>3. Provide Proof of English Proficiency.</p>
                    <p>
                      4. Successful applicants will receive a Letter of Offer
                      and Student Agreement.
                    </p>
                  </div>
                  <Button className="bg-[#E67E22] hover:bg-[#d3731f] rounded-none px-10 h-14 font-black uppercase italic">
                    Start Application
                  </Button>
                </TabsContent>

                {/* Tab: Duration */}
                <TabsContent value="duration" className="mt-0 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-orange-500">
                        Course Duration
                      </h3>
                      <div className="p-6 bg-emerald-50 border-l-8 border-orange-500">
                        <p className="text-3xl font-black text-orange-500">
                          52 Weeks
                        </p>
                        <p className="text-sm text-slate-500 mt-1 font-bold italic">
                          Total Program Length
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-[#333]">
                          Work Component
                        </h4>
                        <div className="p-4 border bg-white rounded flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Total Placement Hours
                          </span>
                          <Badge className="bg-[#E67E22] rounded-none">
                            188 Hours
                          </Badge>
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium">
                          * Calculated as 18.80 hours/week over 10 weeks.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-500">
                        Delivery Structure
                      </h3>
                      <div className="space-y-4 text-slate-700 text-sm">
                        <div className="flex gap-3">
                          <MapPin
                            className="text-orange-500 shrink-0"
                            size={18}
                          />
                          <p>
                            Classes delivered at our Parramatta Classroom and
                            Commercial Training Kitchen.
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <BookOpen
                            className="text-orange-500 shrink-0"
                            size={18}
                          />
                          <p>
                            Blended learning: Classroom-based theory and
                            hands-on practical training.
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
                      <span className="font-bold uppercase tracking-tight">
                        52 Weeks Total
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-orange-500 uppercase tracking-tighter mb-2 border-b pb-1">
                      Work Placement
                    </h4>
                    <div className="flex items-center gap-2 text-slate-800">
                      <UtensilsCrossed size={18} className="text-[#E67E22]" />
                      <span className="font-bold uppercase tracking-tight">
                        188 Hours Required
                      </span>
                    </div>
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

      {/* Footer Info Sections */}
      <div className="max-w-7xl mx-auto px-4 mt-12 space-y-12">
        <section className="bg-[#FAF3EF] p-8 md:p-12 rounded-sm border-l-8 border-orange-500">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-orange-500" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
              Training and Assessment
            </h2>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Training involves a combination of face-to-face classroom sessions
              and practical kitchen training. Assessments are conducted using
              methods such as practical demonstrations, knowledge tests,
              projects, and work placement logbooks.
            </p>
          </div>
          <Separator className="my-8 bg-slate-200" />
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="text-orange-500" size={28} />
            <h3 className="text-xl font-bold text-[#333]">Course Progress</h3>
          </div>
          <p className="text-sm text-slate-600">
            Students must maintain satisfactory course progress (competency in
            units) and attendance (minimum 20 hours per week) to comply with
            international visa requirements.
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
                We are committed to helping you succeed. Our support services
                are designed to assist you with both academic and personal
                challenges.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1-on-1 Trainer Mentoring",
                "LLN Support (Literacy/Numeracy)",
                "Practical Kitchen Assistance",
                "Personal Counselling Referrals",
                "Social & Cultural Integration",
                "Orientation & Buddy Programs",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 border rounded text-xs font-bold text-slate-700">
                  <CheckSquare
                    className="text-orange-500"
                    size={14}
                    fill="currentColor"
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

export default CommercialCookeryCertIII;
