import React from "react";
import Link from "next/link";
import { ModeToggle } from "./MoodToggle";
const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold">Fardeen's Todo</span>
        </a>
        <ModeToggle className="w-1 h-2" />
        
     
      </div>
    </nav>
  );
};

export default Navbar;
