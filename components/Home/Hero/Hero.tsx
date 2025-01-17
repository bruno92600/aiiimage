/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [promt, setPromt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlerImageGeneration = async () => {
    setLoading(true);

    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "d118807369msh5a46ea0748b5649p182c98jsndadb4248f794",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: promt,
      },
    };

    try {
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success("Image générée avec succès");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Erreur : ${error.response.data.message}`);
      } else {
        toast.error("Une erreur inconnue s'est produite");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-img.jpg";
    link.click();
  };

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      {/* content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
          Créez de belles images avec <br /> l&apos;intelligence artificielle
        </h1>
        <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300">
          Commencez à utiliser nos outils de génération d&apos;images basés sur
          l&apos;IA
        </p>
        {/* prompt input box */}
        <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Générez l'image de vos rêves"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
            value={promt}
            onChange={(e) => setPromt(e.target.value)}
          />
          <Button
            onClick={handlerImageGeneration}
            variant={"default"}
            size={"lg"}
          >
            Générer
          </Button>
        </div>
        {/* tags */}
        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p className="">Tags populaires : </p>
          <Button variant={"secondary"}>Créatif</Button>
          <Button variant={"secondary"}>Hyperréalité</Button>
          <Button variant={"secondary"}>Steampunk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Entreprise</Button>
        </div>
        {/* show loading and image */}
        {loading && (
          <div>
            <Loader className="animate-ping mt-6" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="image IA"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button
              onClick={handleDownloadImage}
              className="mt-4 mb-4 bg-green-500 hover:bg-green-800"
            >
              Télécharger
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
