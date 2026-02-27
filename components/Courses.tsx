import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react"; // Install lucide-react if not present

interface Course {
  id: string;
  category: string;
  title: string;
  duration: string;
  image: string;
  href: string;
}

const courses: Course[] = [
  {
    id: "sit50422",
    category: "Kitchen and Hospitality",
    title: "SIT50422 Diploma of Hospitality Management",
    duration: "104 Weeks",
    image: "/images/image-2.png",
    href: "/course/diploma-of-hospitality-management",
  },
  {
    id: "bsb80120",
    category: "Business and Management",
    title: "BSB80120 Graduate Diploma of Management (Learning)",
    duration: "104 Weeks",
    image: "/images/image-8.jpg",
    href: "/course/graduate-diploma-of-management",
  },
  {
    id: "sit40521",
    category: "Kitchen and Hospitality",
    title: "SIT40521 Certificate IV in Kitchen Management",
    duration: "78 Weeks",
    image: "/images/image-4.png",
    href: "/course/certificate-in-kitchen-management",
  },
  {
    id: "sit30821",
    category: "Kitchen and Hospitality",
    title: "SIT30821 Certificate III in Commercial Cookery",
    duration: "52 Weeks",
    image: "/images/image-3.png",
    href: "/course/commercial-cookery",
  },
];

const CoursePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Available <span className="text-orange-500">Courses</span>
        </h1>
        <p className="text-gray-500">
          Explore our nationally recognized qualifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                  {course.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="p-5 pb-2">
              <h3 className="font-bold text-lg leading-tight h-14 line-clamp-2">
                {course.title}
              </h3>
            </CardHeader>

            <CardContent className="px-5 pb-4">
              <div className="flex items-center text-sm font-medium text-orange-600 bg-orange-100 w-fit px-3 py-1 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                {course.duration}
              </div>
            </CardContent>

            <CardFooter className="px-5 pb-6">
              <a
                href={course.href}
                className="w-full text-center py-2.5 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm">
                View Course Details
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
