"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

interface IPortfolioProps {}

const Portfolio: React.FunctionComponent<IPortfolioProps> = () => {
    const router = useRouter();
    return (
        <div className="w-full min-h-screen relative">
            <Image src="/abstractbg.jpg" alt="" fill className="object-cover" />
            <div className="text-5xl absolute top-[20%] w-full text-center">
                <p>PORTFOLIO</p>
            </div>
            <div className="w-full absolute top-1/3 flex gap-5 justify-between px-20 items-center">
                <div
                    className="w-full h-96 relative shadow-xl cursor-pointer"
                    onClick={() =>
                        router.push(
                            "https://code-challenge-furniture.vercel.app/"
                        )
                    }
                >
                    <Image
                        src="/websitefurniture.png"
                        alt=""
                        fill
                        className="rounded-xl object-contain"
                    />
                    <p className="absolute bottom-10 left-[35%] ">Furniture</p>
                </div>
                <div
                    className="w-full h-96 relative shadow-xl cursor-pointer"
                    onClick={() =>
                        router.push(
                            "https://ticketing-app-jc31201-web.vercel.app/"
                        )
                    }
                >
                    <Image
                        src="/websiteevent.png"
                        alt=""
                        fill
                        className="rounded-xl object-contain"
                    />
                    <p className="absolute bottom-10 left-[40%]">Event</p>
                </div>
                <div
                    className="w-full h-96 relative shadow-xl cursor-pointer"
                    onClick={() =>
                        router.push("https://automobile-nine.vercel.app/")
                    }
                >
                    <Image
                        src="/websitecar.png"
                        alt=""
                        fill
                        className="rounded-xl object-contain"
                    />
                    <p className="absolute bottom-10 left-[35%] ">Automobile</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
