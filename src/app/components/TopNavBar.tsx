"use client"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.png";
import React from "react";
import { useButtonContext } from "./ButtonContext";

const NavbarMain: React.FC = () => {
  const { activeButton, setActiveButton } = useButtonContext();

  const buttons = ["ABOUT YOU", "PROJECT", "WORK EXPERIENCE", "EDUCATION", "SKILLS", "CUSTOM"];

  const handleClick = (buttonText: string) => {
    setActiveButton(buttonText.toUpperCase()); 
  };

  return (
    <nav className="p-4 flex items-center justify-center space-x-6 text-sm">
      {buttons.map((buttonText) => (
        <button
          key={buttonText}
          onClick={() => handleClick(buttonText)}
          className={`font-bold py-2 px-4 shadow transition-all duration-300 rounded-lg ${
            activeButton === buttonText.toUpperCase() ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          {buttonText}
        </button>
      ))}
    </nav>
  );
};

const TopNavBar: React.FC = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={`flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12 ${
        isHomePage ? "bg-dot" : ""
      }`}
    >
      <div className="flex h-10 w-full items-center">
        <Link href="/">
          <Image src={logoSrc} alt="NovaZen" className="h-8 w-full" />
        </Link>
        <nav aria-label="Site Nav Bar" className="flex items-center text-sm font-medium space-x-0 justify-start">
          <NavbarMain />
        </nav>
      </div>
    </header>
  );
};

export default TopNavBar;
