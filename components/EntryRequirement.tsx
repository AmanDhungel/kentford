import React from "react";
import {
  CheckCircle,
  UserCheck,
  FileText,
  Languages,
  AlertCircle,
  Clock,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const EntryRequirementsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/images/image-1.png"
          alt="Students in a computer lab"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 px-10 py-4 shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-light tracking-[0.3em] text-gray-800 uppercase">
              Entry Requirement
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="text-[#008080] border-[#008080] mb-4 uppercase tracking-widest">
            Admissions
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">
            Joining Fusion College of Technology
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Fusion College of Technology has the following entry requirements to
            ensure students are prepared for academic success:
          </p>
        </div>

        <div className="grid gap-8">
          {/* International Student Requirements Card */}
          <Card className="border-t-4 border-t-[#E67E22] shadow-lg">
            <CardHeader className="bg-slate-50/50">
              <div className="flex items-center gap-3">
                <UserCheck className="h-6 w-6 text-[#008080]" />
                <CardTitle className="text-xl text-gray-800">
                  International students must:
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              {/* Age & Education */}
              <div className="flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                  <GraduationCap className="h-5 w-5 text-[#008080]" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Be at least 18 years of age and have completed year 12 or
                    equivalent
                  </p>
                </div>
              </div>

              <Separator />

              {/* Interview */}
              <div className="flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                  <CheckCircle className="h-5 w-5 text-[#008080]" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Participate in a course entry interview to determine
                    suitability for the course and student needs
                  </p>
                </div>
              </div>

              <Separator />

              {/* English Language Proficiency */}
              <div className="flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                  <Languages className="h-5 w-5 text-[#008080]" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Have an{" "}
                    <span className="font-bold text-gray-900 underline decoration-[#E67E22]">
                      IELTS* score of not less than 6
                    </span>{" "}
                    (test results must be no more than 2 years old) or
                    equivalent.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-tight italic">
                      English competence can also be demonstrated through
                      documented evidence of any of the following:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <FileText size={16} className="text-[#E67E22]" />
                        Educated for 5 years in an English-speaking country; or
                      </li>
                      <li className="flex items-center gap-3 text-sm text-gray-600">
                        <FileText size={16} className="text-[#E67E22]" />
                        Successful completion of an English Placement Test.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 shrink-0" />
            <div className="text-sm text-amber-800 leading-relaxed">
              <p className="font-bold mb-1 italic">
                *Note that other English language tests such as PTE and TOEFL
                can be accepted.
              </p>
              <p>
                Students are required to provide their results so that it can be
                confirmed they are equivalent to IELTS 6.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntryRequirementsPage;
