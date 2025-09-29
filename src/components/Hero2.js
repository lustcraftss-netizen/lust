"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import hero from "../../public/images/hero/img1.jpg";
import new1 from "../../public/images/hero/new1.webp";
import new2 from "../../public/images/hero/new2.jpg";

export default function Hero2() {
  return (
    <div>
      {/* Top scrolling text */}
      <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2 flex items-center">
        <motion.div
          className="inline-flex text-[15px] font-light"
          initial={{ x: 0 }} // ✅ ensures no hydration mismatch
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          <span className="block">
            - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION -
          </span>
          <span className="block">
            - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION -
          </span>
        </motion.div>
      </div>

      {/* Hero image */}
      <div className="w-full h-[400px]">
        <Image
          src={hero}
          alt="hero2"
          className="w-full h-full object-cover"
          priority // ✅ avoids Next.js warning for LCP image
        />
      </div>

      {/* Bottom scrolling text */}
      <div className="overflow-hidden whitespace-nowrap bg-black py-2 text-white flex items-center">
        <motion.div
          className="inline-flex text-[15px] font-light"
          initial={{ x: 0 }} // ✅ same hydration fix
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          <span className="block">
            ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE •
          </span>
          <span className="block">
            ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE • ★ LUXURY • ROYALTY • ELEGANCE •
          </span>
        </motion.div>
      </div>

      <div className=" hidden md:grid grid-cols-3 ">
        <div className=" h-[500px] flex flex-col justify-center gap-y-4 px-4">
          <h1 className="font-bold cabin">LustCraft – Redefining Quality in BDSM Manufacturing</h1>
          <p className="font-extralight cabin text-[12px]">
LustCraft is a manufacturing company dedicated to producing high-quality BDSM products with a strong focus on safety, durability, and craftsmanship. Every item is carefully designed and tested to ensure comfort, reliability, and long-lasting performance. From restraints and paddles to custom-designed accessories, LustCraft combines premium materials with modern manufacturing techniques to create products that meet the highest industry standards. The company values trust, consent, and responsibility, making it a dependable choice for customers who seek both quality and peace of mind.</p>
      </div>
      <div className=" h-[500px]">
          <Image
          src={new2}
          alt="New1"
          className="w-full h-full object-cover"
          />
      </div>
      <div className=" h-[500px]">
          <Image
          src={new1}
          alt="New1"
          className="w-full h-full object-cover"
          />
      </div>

      </div>

      <div className="md:hidden flex w-full">
             <div className="w-full h-[300px]">
          <Image
          src={new2}
          alt="New1"
          className="w-full h-full object-cover"
          />
      </div>
      <div className="w-full h-[300px]">
          <Image
          src={new1}
          alt="New1"
          className="w-full h-full object-cover"
          />
      </div>
      </div>
      <div className="px-4 py-2 md:hidden flex w-full flex-col mb-8">
        <h1 className="font-bold cabin">LustCraft – Redefining Quality in BDSM Manufacturing</h1>
          <p className="font-extralight pt-2 text-gray-600 cabin text-[12px]">
LustCraft is a manufacturing company dedicated to producing high-quality BDSM products with a strong focus on safety, durability, and craftsmanship. Every item is carefully designed and tested to ensure comfort, reliability, and long-lasting performance. From restraints and paddles to custom-designed accessories, LustCraft combines premium materials with modern manufacturing techniques to create products that meet the highest industry standards. The company values trust, consent, and responsibility, making it a dependable choice for customers who seek both quality and peace of mind.</p>
      </div>



    </div>
  );
}
