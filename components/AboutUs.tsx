import React from "react";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  Shield,
  Trophy,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const coreValues = [
    { title: "Student-centred", icon: Users },
    { title: "Academic primacy", icon: GraduationCap },
    { title: "Innovation and Collaboration", icon: Lightbulb },
    { title: "Rigour and Integrity", icon: Shield },
    { title: "Professional Excellence", icon: Trophy },
  ];

  const features = [
    {
      title: "ASQA Accredited",
      description:
        "Our vocational courses meet the national quality assurance requirements for competency outcomes and assessment validity.",
      icon: CheckCircle2,
    },
    {
      title: "Industry-Expert Teachers",
      description:
        "Instructors are certified with many years of relevant industry experience, dedicated and passionate about student success.",
      icon: GraduationCap,
    },
    {
      title: "Job-Ready Focus",
      description:
        "We provide quality training to transform students to be job-ready for opportunities in Australia and overseas.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/images/image-2.png"
          alt="Students learning"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 px-8 py-3 rounded-sm shadow-lg">
            <h1 className="text-2xl font-light tracking-[0.2em] text-gray-800 uppercase">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge
              variant="outline"
              className="text-emerald-600 border-emerald-600 mb-4 uppercase tracking-wider">
              About Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to <br />
              <span className="text-emerald-700">Kentford College</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                <strong>Kentford College</strong> is focused on providing
                quality education and training in a wide range of courses that
                transform our students to be job-ready.
              </p>
              <p>
                The vocational courses Kentford College offers are all
                accredited by{" "}
                <strong>Australian Skills Quality Authority (ASQA)</strong> and
                meet the national quality assurance requirements.
              </p>
              <div className="border-l-4 border-emerald-500 pl-6 my-8">
                <h3 className="text-lg font-semibold text-gray-900 italic">
                  Our Vision
                </h3>
                <p>
                  To create a favourable environment for students to learn, grow
                  and transform in reaching their full potential.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-6 my-8">
                <h3 className="text-lg font-semibold text-gray-900 italic">
                  Our Mission
                </h3>
                <p>
                  To deliver quality education by offering a wide range of
                  well-designed, industry leading courses enabling students to
                  become competent professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/api/placeholder/600/500"
              alt="Students collaborating"
              className="rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Empowering Australians and Overseas Students with knowledge and
              skills to excel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <Card
                key={idx}
                className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                    <item.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-full shadow-sm hover:border-emerald-500 transition-colors cursor-default">
              <value.icon className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-gray-700">{value.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
