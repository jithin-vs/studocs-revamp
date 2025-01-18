import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";

export default function Header() {
  return (
    <div className="bg-primary flex justify-between p-4">
      <div className="flex">
        <div className="flex justify-between gap-4">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-4xl font-medium">STUDOCS</h1>
        </div>
      </div>
      <nav className="flex">
        <div  className="flex flex-wrap justify-between px-4 gap-8 items-center content-center">
          <a className="hover:text-secondary" href="#">Home</a>
          <a className="hover:text-secondary" href="#">About</a>
          <a className="hover:text-secondary" href="#">Services</a>
          <a className="hover:text-secondary" href="#">Team</a>
          <a className="hover:text-secondary" href="#">Contact</a>
          <a href="#" className="border border-secondary rounded-full px-5 py-2 hover:bg-secondary">
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}
