import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex-col flex min-h-screen font-sans">
      <div className="w-full min-h-screen relative">
        <Image src={"/abstract.jpg"} alt="" layout="fill" objectFit="cover" />
        <div className="absolute top-56 px-10 flex flex-col gap-16">
          <div>
            <p className="text-xl animate-fade-out">Hi, my name is</p>
          </div>
          <div className="flex-col mt-10 flex gap-20">
            <p className="text-8xl font-bold animate-fade-out">ALFREDO</p>
            <p className="text-8xl font-bold animate-fade-out">VETSERA</p>
          </div>
          <div>
            <p className="text-xl animate-fade-out">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
