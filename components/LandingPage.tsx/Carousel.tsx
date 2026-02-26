"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const sliderData = [
  {
    id: 1,
    title: "Located in Your Dream City Sydney",
    image: "/images/image-1.png",
    buttonText: "KNOW MORE",
  },
  {
    id: 2,
    title: "Our Experts Instruction for Your Bright Future",
    image: "/images/image-2.png",
    buttonText: "KNOW MORE",
  },
];

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <section className="relative w-full max-h-[500px] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}>
        <CarouselContent className="m-0">
          {sliderData.map((slide) => (
            <CarouselItem key={slide.id} className="p-0">
              <div className="relative h-[500px] w-full flex items-center justify-end">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content Container - Right Aligned */}
                <div className="container relative z-10 px-6 md:px-20 lg:px-32 flex flex-col items-end text-right">
                  <h1 className="max-w-2xl text-4xl md:text-6xl font-black text-white leading-[1.1] drop-shadow-md uppercase">
                    {slide.title}
                  </h1>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-sm uppercase transition-all tracking-widest">
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows positioned within the container */}
        <CarouselPrevious className="left-8 h-10 w-10 border-white/20 bg-black/10 text-white hover:bg-black/40" />
        <CarouselNext className="right-8 h-10 w-10 border-white/20 bg-black/10 text-white hover:bg-black/40" />
      </Carousel>
    </section>
  );
}
