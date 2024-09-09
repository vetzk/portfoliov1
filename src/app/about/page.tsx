import * as React from "react";
import Image from "next/image";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = () => {
  return (
    <div className="w-full min-h-[200vh] relative">
      <Image src="/abstractbg.jpg" alt="bg" layout="fill" objectFit="cover" />
      <p className="absolute text-5xl top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        About me
      </p>{" "}
      <p className="top-[20%] left-0 right-0 bottom-0 absolute p-10">
        I am a passionate and dedicated Full Stack Developer with a strong
        foundation in both front-end and back-end technologies. With a deep
        understanding of the entire web development process, I thrive on
        creating seamless and engaging digital experiences that solve real-world
        problems. My expertise spans a wide range of technologies, including
        JavaScript, TypeScript, React, and Next.js for front-end development,
        and Node.js, Express, and NestJS for back-end development.
      </p>
      <p className="absolute text-5xl bottom-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Skills
      </p>{" "}
      <div className="w-full absolute bottom-[30%] gap-5 flex p-10 justify-around items-center">
        <div className="relative  w-44 h-44">
          <Image
            src="/express_original_wordmark_logo_icon_146528.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative  w-44 h-44">
          <Image
            src="/nestjs_logo_icon_169927.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative  w-44 h-44">
          <Image src="/react.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative flex justify-center items-center w-44 h-44">
          <Image src="/next.png" alt="" width={300} height={0} />
        </div>
      </div>
      <div className="w-full absolute bottom-[10%] gap-5 flex p-10 justify-around items-center">
        <div className="relative  w-44 h-44">
          <Image src="/css.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative  w-44 h-44">
          <Image
            src="/javascript.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative  w-44 h-44">
          <Image src="/html.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative flex justify-center items-center  w-44 h-44">
          <Image src="/tailwind.png" alt="" width={300} height={30} />
        </div>
      </div>
    </div>
  );
};

export default About;
