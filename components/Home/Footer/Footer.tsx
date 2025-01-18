import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950 pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 rounded-lg bg-gray-900 space-y-6 sm:space-y-0 p-8">
        {/* 1ere parti */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold">
            Nous développons & créons un avenir numérique
          </p>
        </div>
        {/* 2eme parti */}
        <div>
          <h1 className="text-xl font-bold text-white">Adresse</h1>
          <p className="text-white opacity-60 mt-4">Bruno</p>
          <p className="text-white opacity-60">Asnières sur seine. France.</p>
        </div>
        {/* 3eme parti */}
        <div>
          <h1 className="text-xl font-bold text-white">Contact</h1>
          <p className="text-white opacity-60 mt-4">Email</p>
          <p className="text-white sm:text-xl text-lg font-bold opacity-60">
            pascoal.goncalves.bruno@<br />gmail.com
          </p>
          <p className="text-white opacity-60 mt-4">Téléphone</p>
          <p className="text-white sm:text-xl text-lg font-bold opacity-60">
            06.49.13.99.79
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto text-gray-300 mt-6">
        Dev.B @ 2025. Tous droits réservés
      </div>
    </div>
  );
};

export default Footer;
