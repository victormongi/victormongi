import React from "react";

export default function Button({ name }: any) {
  return (
    <button className="h-[50px] w-[130px] relative z-20 -mt-12">
      <div className="bg-white text-black px-8 py-3 border-black border-2 hover:border-black hover:border-10 rounded-lg hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:bg-black active:text-white transition-all absolute w-full h-full z-20">
        {name}
      </div>
      <div className="w-full h-full bg-[#ecff69] absolute rounded-lg"></div>
    </button>
  );
}
