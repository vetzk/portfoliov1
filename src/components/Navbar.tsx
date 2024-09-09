"use client";
import { useRouter } from "next/navigation";
import * as React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const router = useRouter();
  return (
    <div className="w-full flex fixed text-xl justify-center items-center z-50 py-10">
      <div className="flex justify-between items-center gap-5">
        <p className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </p>
        <p className="cursor-pointer" onClick={() => router.push("/about")}>
          About
        </p>
        <p className="cursor-pointer" onClick={() => router.push("/portfolio")}>
          Portfolio
        </p>
        <p className="cursor-pointer">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
