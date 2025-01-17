"use client"
import { Navlinks } from "@/constant/constant";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
    openNav: () => void,
}

const Nav = ({openNav}: Props) => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true)
            if (window.scrollY<90) setNavBg(false)
        }

        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const bg_style = navBg?'bg-gray-900 shadow-md' : ""

  return (
    <div className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-300`}>
      {/* LOGO */}
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-16 hover:text-green-600 hover:transition hover:duration-500">Aiiimage</h1>
      <div className="md:flex items-center space-x-10 hidden">
        {/* Navlinks */}
        {Navlinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
      {/* buttons and icons */}
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6 hover:text-green-500 hover:transition hover:duration-500" />
        <Search className="cursor-pointer w-6 h-6 hover:text-green-600 hover:transition hover:duration-500" />
        <MenuIcon onClick={openNav} className="cursor-pointer w-6 h-6 md:hidden hover:text-green-600 hover:transition hover:duration-500" />
      </div>
    </div>
  );
};

export default Nav;
