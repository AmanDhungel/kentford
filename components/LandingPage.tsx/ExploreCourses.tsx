"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, GraduationCap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const courses = [
  {
    id: "cpc30220",
    category: "Building Trades",
    title: "CPC30220 Certificate III in Carpentry",
    duration: "52 Weeks",
    image: "/carpentry.jpg",
    href: "/courses/carpentry",
  },
  {
    id: "cpc50220",
    category: "Building Trades",
    title: "CPC50220 Diploma of Building and Construction (Building)",
    duration: "104 Weeks",
    image: "/construction.jpg",
    href: "/courses/building-construction",
  },
  {
    id: "bsb80120",
    category: "Business and Management",
    title: "BSB80120 Graduate Diploma of Management (Learning)",
    duration: "104 Weeks",
    image: "/management.jpg",
    href: "/courses/graduate-management",
  },
  {
    id: "it-diploma",
    category: "Information Technology",
    title: "ICT50220 Diploma of Information Technology",
    duration: "78 Weeks",
    image: "/it-class.jpg",
    href: "/courses/it-diploma",
  },
];

export function CourseExplorer() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-[#008080] font-bold uppercase tracking-widest text-xs mb-2">
            LEARNING COURSES
          </h4>
          <h2 className="text-4xl font-black text-[#001a1a]">
            Explore Courses
          </h2>
        </div>

        <div className="relative max-w-[850px] mx-auto px-4 py-2">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full">
            <CarouselContent className="-ml-4">
              {courses.map((course) => (
                <CarouselItem
                  key={course.id}
                  className="pl-4 md:basis-1/3 flex justify-center">
                  <Link href={course.href} className="group block">
                    <Card className="md:w-[200px] lg:w-[250px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="relative h-[200px] w-full shrink-0 ">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute -bottom-4 right-4 bg-[#D97706] p-2 rounded-full border-2 border-white shadow-md z-10">
                          <GraduationCap className="text-white w-4 h-4" />
                        </div>
                      </div>

                      <CardContent className="pt-8 pb-4 px-4 flex-grow">
                        <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">
                          {course.category}
                        </p>
                        <h3 className="text-[13px] font-black text-[#001a1a] leading-tight group-hover:text-[#008080] transition-colors line-clamp-3">
                          {course.title}
                        </h3>
                      </CardContent>

                      <CardFooter className="border-t px-4 py-3 flex justify-between items-center bg-slate-50/30">
                        <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[9px] uppercase">
                          <Clock size={12} className="text-black" />
                          <span>Duration</span>
                        </div>
                        <span className="text-slate-500 font-bold text-[9px]">
                          {course.duration}
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Positioned Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 h-10 w-10 bg-slate-400 text-white border-none hover:bg-[#008080]" />
            <CarouselNext className="hidden md:flex -right-12 h-10 w-10 bg-slate-400 text-white border-none hover:bg-[#008080]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
