import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className=" text-white py-16 px-6 text-center">
      <div className="flex flex-col items-center justify-between gap-2">
        
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Learn While You Listen 🎧
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-xl">
            Welcome to <span className="font-semibold text-[#471396]">PodTechCast</span> — your go-to audio platform for mastering tech skills, gaining career insights, and learning on the go.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={'/audio'} className="text-white border border-[#471396] hover:text-[#471396] font-semibold px-6 py-3 rounded-xl hover:bg-[#f6f0ff] transition cursor-pointer">
              Start Listening
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Hero;
