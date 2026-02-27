import React from "react";
import {
  Languages,
  UserPlus,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  Eye,
  Accessibility,
  Fingerprint,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const LearningAndSupport = () => {
  const supportServices = [
    {
      title: "Language, Literacy & Numeracy Support",
      description:
        "If a student's language, literacy and numeracy skills are not at the required level, the student will be referred to an ELICOS college to achieve the required standard before being enrolled in Kentford College's programs. It will be reflected in the new COE.",
      icon: Languages,
    },
    {
      title: "Pre-Enrolment Support",
      description:
        "Students requiring additional support to understand the pre-enrolment information requirements are to be engaged on additional one-on-one sessions to talk the student through the information contained within the student handbook, prospectus and the summary of fees and charges.",
      icon: UserPlus,
    },
    {
      title: "Studying & Learning Coaching",
      description:
        "Where appropriate to the program, students identified with recognised difficulties in studying and learning are to be scheduled with additional one-on-one support sessions at regular intervals throughout the course program.",
      icon: BookOpen,
    },
    {
      title: "Academic Support",
      description:
        "To assist students with their assessments, there may be referencing workshops, formatting workshops, language workshops, and plagiarism workshops. Students are advised to contact their respective course trainer or course coordinator/s for any additional academic support.",
      icon: GraduationCap,
    },
    {
      title: "Counselling Support",
      description:
        "The student counselling service is designed to assist overseas students in dealing with a wide range of problems including homesickness, managing stress, handling conflicts, emotional issues, improving motivation, enhancing study skills, organizing study time and other issues affecting the student.",
      icon: HeartHandshake,
    },
    {
      title: "Visual Impairment Support",
      description:
        "Students with visual impairment can be supported by supplying internal learning resources with a larger printed font. Students can also be supplied with audio recordings of learning sessions where available.",
      icon: Eye,
    },
    {
      title: "Disability Access",
      description:
        "All possible allowances may be provided to persons with disabilities. Assessors are to use their judgement in assessing the student's ability to perform tasks in a safe manner.",
      icon: Accessibility,
    },
    {
      title: "USI Help",
      description:
        "The USI system generates a unique student number which students can use throughout their studies in Australia. The USI allows access to a full range of study information fast and easy.",
      icon: Fingerprint,
    },
    {
      title: "Overseas Student Support",
      description:
        "Close student liaison is to be maintained by the Student Support Manager (SSM) who will act as a central point of contact.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/images/image-10.jpeg"
          alt="Kentford College Support"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 px-10 py-3 shadow-xl">
            <h1 className="text-xl md:text-2xl font-light tracking-[0.3em] text-gray-800 uppercase text-center">
              Learning and Support
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Header */}
      <section className="max-w-7xl mx-auto pt-16 px-6 lg:px-8">
        <div className="flex flex-col items-start gap-2">
          <Badge
            variant="outline"
            className="text-orange-500 border-orange-500 uppercase tracking-widest">
            Admissions
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900">
            Student Success Resources
          </h2>
          <div className="h-1 w-20 bg-[#E67E22] rounded-full mt-2"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border-none shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg font-bold leading-tight text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-20 px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need personalized assistance?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our Student Support Manager acts as a central point of contact to
            ensure your transition and study journey in Australia is smooth and
            successful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={"/contact-us"}
              className="bg-orange-500 hover:bg-[#006666] text-white px-8 py-3 rounded-full font-bold uppercase text-sm transition-colors">
              Contact Student Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningAndSupport;
