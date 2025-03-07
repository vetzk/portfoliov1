import Link from "next/link";
import * as React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    return (
        <div className="w-full flex fixed text-xl justify-center items-center z-50 py-10">
            <div className="flex justify-between items-center gap-5">
                <Link className="cursor-pointer" href="/">
                    Home
                </Link>
                <Link className="cursor-pointer" href="/about">
                    About
                </Link>
                <Link className="cursor-pointer" href="/portfolio">
                    Portfolio
                </Link>
                <p className="cursor-pointer">Contact</p>
            </div>
        </div>
    );
};

export default Navbar;
