import { Kanit } from "next/font/google";
import Image from "next/image";

import Button from "./components/Button";

const inter = Kanit({
  style: "normal",
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className={`bg-[#ecff69] w-9/12 h-5/6 border-2 border-black ${inter.className} flex  flex-col items-center justify-center gap-10 px-28 overflow-hidden relative rounded-xl`}>
        <div className="flex items-center gap-5">
          <Image src={"/vma.png"} width={"350"} height={"500"} alt="victor photo" className="bg-clip-border" />
          <div>
            <h1 className="text-3xl">Hey, I’m Victor Mongi, a full-stack web developer and DevOps. I live in Manado, Indonesia. I’ve been working with C#, Go, Javascript, CI/CD Pipeline</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-16 w-full bg-black rounded-full">
          <div className="flex gap-3">
            <Button name="About" />
            <Button name="Contacts" />
            <Button name="Resume" />
            <Button name="Portfolio" />
          </div>
        </div>
        {/* <div className="bg-black w-full h-56 absolute bottom-0"></div> */}
      </div>
    </div>
  );
}
