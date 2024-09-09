import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex-col flex  min-h-screen font-sans">
      <div className="w-full min-h-screen relative">
        <Image src={"/abstract.jpg"} alt="" layout="fill" objectFit="cover" />
        <div className="absolute top-64 p-10">
          <p className="text-xl animate-fade-out">Hi, my name is</p>
          <p className="text-9xl animate-fade-out">ALFREDO VETSERA</p>
          <p className="text-xl animate-fade-out">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}
