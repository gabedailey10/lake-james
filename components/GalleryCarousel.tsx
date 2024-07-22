import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { src: "/group1.jpeg", alt: "group1" },
  { src: "/dinking1.jpeg", alt: "Image 3" },
  { src: "/band.jpeg", alt: "band" },
  { src: "/dronecourts.jpeg", alt: "drcourts" },
  { src: "/dinking3.jpeg", alt: "dink3" },
  { src: "/night_courts.jpeg", alt: "night_courts" },
  { src: "/dinking4.jpeg", alt: "dink4" },
  { src: "/david.jpeg", alt: "david" },
  { src: "/group2.jpeg", alt: "group2" },
];

export function GalleryCarousel() {
  return (
    <div className="relative w-full max-w-4xl h-3/4 mx-auto bg-white my-16">
      <Carousel className="relative w-full">
        <CarouselContent className="flex">
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full  flex-shrink-0">
              <Card className="h-full w-full bg-transparent">
                <CardContent className="h-96 w-full p-0 flex items-center justify-center bg-transparent">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="bg-transparent"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default GalleryCarousel;
