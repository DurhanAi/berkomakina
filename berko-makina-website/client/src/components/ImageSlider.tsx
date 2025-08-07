import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

import slide1 from "@/assets/slider-image-1.svg";
import slide2 from "@/assets/slider-image-2.svg";
import slide3 from "@/assets/slider-image-3.svg";
import slide4 from "@/assets/slider-image-4.svg";
import slide5 from "@/assets/slider-image-5.svg";
import slide6 from "@/assets/slider-image-6.svg";
import slide7 from "@/assets/slider-image-7.svg";
import slide8 from "@/assets/slider-image-8.svg";
import slide9 from "@/assets/slider-image-9.svg";
import slide10 from "@/assets/slider-image-10.svg";
import slide11 from "@/assets/slider-image-11.svg";

export default function ImageSlider() {
  const { t } = useLanguage();
  
  const images = [
    {
      id: 1,
      src: slide1,
      alt: "Bottle Filling Machine",
      title: t.volumetricFilling
    },
    {
      id: 2,
      src: slide2,
      alt: "Peristaltic Filling",
      title: t.peristalticFilling
    },
    {
      id: 3,
      src: slide3,
      alt: "Servo Filling",
      title: t.servoFilling
    },
    {
      id: 4,
      src: slide4,
      alt: "Liquid Filling",
      title: t.liquidFilling
    },
    {
      id: 5,
      src: slide5,
      alt: "Rotary Can Filling",
      title: t.rotaryCanFilling
    },
    {
      id: 6,
      src: slide6,
      alt: "Shrink Packaging",
      title: t.shrinkPackaging
    },
    {
      id: 7,
      src: slide7,
      alt: "Carton Packaging",
      title: t.cartonPackaging
    },
    {
      id: 8,
      src: slide8,
      alt: "Roll Labeler",
      title: t.rollLabeler
    },
    {
      id: 9,
      src: slide9,
      alt: "Line Automation",
      title: t.lineAutomation
    },
    {
      id: 10,
      src: slide10,
      alt: "Advanced Labeling",
      title: t.rollLabeler
    },
    {
      id: 11,
      src: slide11,
      alt: "Assembly Line",
      title: t.lineAutomation
    }
  ];
  
  return (
    <div className="w-full py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">{t.sliderTitle}</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image) => (
              <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border border-gray-200">
                    <CardContent className="p-0 relative aspect-video">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-medium text-lg">{image.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}