"use client";

import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Link } from "@/lib/i18n/routing";


const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="w-full bg-secondary">
      <Carousel
        className="w-screen"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          <HeroItem
            title={`Dorong Pemenuhan Hak Korban, LPSK Gelar Eksaminasi Putusan TPPO di Langkat`}
            image={`/images/carousel/carousel-${1}.webp`}
            date="29 Oktober 2022"
            redirect="/"
          />
              <HeroItem
            title={`LPSK Dampingi Keluarga Korban dalam Proses Ekshumasi Jenazah AM di Padang`}
            image={`/images/carousel/carousel-${2}.webp`}
            date="29 Oktober 2022"
            redirect="/"
          />
              <HeroItem
            title={`LPSK Dampingi Keluarga Korban dalam Proses Ekshumasi Jenazah AM di Padang`}
            image={`/images/carousel/carousel-${3}.webp`}
            date="29 Oktober 2022"
            redirect="/"
          />
              <HeroItem
            title={`Penghargaan Sebagai Justice Collaborator, MR Divonis 4 Tahun Penjara`}
            image={`/images/carousel/carousel-${4}.webp`}
            date="29 Oktober 2022"
            redirect="/"
          />
          
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex absolute left-5 top-1/2  -translate-y-1/2" />
        <CarouselNext className=" hidden xl:flex absolute right-5 top-1/2  -translate-y-1/2" />
        <div className=" absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  " h-2 w-2 rounded-full transition-all duration-300",
                  {
                    " bg-white scale-125": current === index + 1,
                    " bg-neutral-500": current !== index + 1,
                  }
                )}
              ></div>
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

type TAppCaoruselItem = {
  title: string;
  image: string;
  date?: string;
  redirect?: string;
};

const HeroItem = ({
  title,
  image,
  date,
  redirect,
}: TAppCaoruselItem) => {
  return (
    <CarouselItem className="basis-full">
      <div className="w-screen aspect-square md:aspect-[21/9] relative">
        <div className="container h-full w-full text-neutral-100 py-16">
          <div className="flex flex-col h-full w-full z-10 justify-end gap-3">
            {!!date && (
              <Badge className=" bg-yellow-600 hover:bg-yellow-600/80 w-fit rounded-sm">
                {date}
              </Badge>
            )}
            <h1 className="font-bold max-w-5xl">{title}</h1>
            {!!redirect && (
              <Button asChild className="w-fit">
                <Link href={redirect}>Selengkapnya</Link>
              </Button>
            )}
          </div>
        </div>
        <Image
          fill
          src={image}
          alt="LPSK"
          className=" object-cover -z-20 absolute top-0 object-top !m-0"
        />
        <div className=" h-full w-full absolute top-0 -z-10 bg-neutral-950/25"></div>
      </div>
    </CarouselItem>
  );
};

export { Hero, HeroItem };