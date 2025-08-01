"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HeroImages } from "@/constants/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Hero = () => {
  return (
    <Carousel
      opts={{ align: "start", loop: true, duration: 60 }}
      className="w-full h-[600px] overflow-hidden"
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {HeroImages.map((img, index) => (
          <CarouselItem key={index} className="basis-1/1 overflow-hidden">
            <Image
              className="object-contain w-8/12 justify-center mx-auto"
              src={img ? img : "/productos/no_image.png"}
              alt={`${img}${Math.random()}`}
              width={600}
              height={600}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default Hero;
