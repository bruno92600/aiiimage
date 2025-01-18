import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* image */}
        <div className="order-2 xl:order-1" data-aos="zoom-in-up">
          <Image
            src="/images/about.jpg"
            alt="à propos"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* content */}
        <div className="order-1 xl:order-2">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            Ce que nous faisons
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Créez votre propre entreprise IA facilement.
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, aspernatur quidem itaque cum error quas, incidunt, at
            recusandae maiores velit eaque corrupti deleniti ex aliquam.
          </p>
          <Button
            className="bg-rose-500 w-44 h-12 text-base uppercase"
            size={"lg"}
          >
            À propos de nous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
