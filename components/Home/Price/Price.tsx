import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="bg-gray-900 pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* content */}
        <div className="">
          <h1 className="uppercase text-white mb-6 font-bold">
            Flexible et abordable
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">
            Nos plans tarifaires
          </h1>
          <p className="text-white font-medium text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            maiores reiciendis! Excepturi iure quisquam error.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                Des prestations de haute qualité
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                Service client 24h/24 et 7j/7
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                Tarifs abordables
              </p>
            </div>
          </div>
        </div>
        {/* price card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-aos="zoom-in-right">
                <PriceCard price="4" user="1" type="Silver pack" />
            </div>
            <div data-aos="zoom-in-left" data-aos-delay="100">
                <PriceCard price="8" user="3" type="Golden pack" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
