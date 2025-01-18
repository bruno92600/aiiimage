import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <QuoteIcon className="w-10 h-10 text-green-300" />
      <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim
        exercitationem aspernatur pariatur nobis facilis, repellat repudiandae
        ratione quia rerum, eveniet voluptas temporibus provident laborum iusto,
        aliquid adipisci quisquam.
      </p>
      <div className="mt-8">
        <h1 className="text-base md:text-2xl font-bold text-white text-center">
          {name}
        </h1>
        <p className="text-sm md:text-lg font-bold text-white text-center">
          {role}
        </p>
        <Image
          src={image}
          alt={name}
          height={80}
          width={80}
          className="mt-6 rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
