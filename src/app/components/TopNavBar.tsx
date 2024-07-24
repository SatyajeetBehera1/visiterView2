"use client"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../logo.png";
import React, { useState } from "react";
import { useButtonContext } from "./ButtonContext";

const NavbarMain: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { activeButton, setActiveButton } = useButtonContext();

  const buttons = ["ABOUT YOU", "PROJECT", "WORK EXPERIENCE", "EDUCATION", "SKILLS", "CUSTOM"];

  const handleClick = (buttonText: string) => {
    setActiveButton(buttonText.toUpperCase()); 
  };

  return (
    <nav
      className={`p-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 ${
        isOpen ? 'block' : 'hidden md:block'
      }`}
    >
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      aria-label="Site Header"
      className={`flex flex-col md:h-[var(--top-nav-bar-height)] md:flex-row items-center border-b-2 border-gray-100 px-3 lg:px-12 ${
        isHomePage ? "bg-dot" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex justify-between items-center mb-4 md:mb-0">
          <Link href="/">
            <Image src={logoSrc} alt="NovaZen" className="h-10 w-auto" />
          </Link>
          <button
            className="md:hidden text-2xl font-bold"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
        <NavbarMain isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default TopNavBar;
