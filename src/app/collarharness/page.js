"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

import classic_collar from "../../../public/images/collarsharness/classic_c.png";
import body_harness from "../../../public/images/collarsharness/body_harness.png";
import chest_harness from "../../../public/images/collarsharness/chest_harness.png";
import thigh_harness from "../../../public/images/collarsharness/thigh_harness.png";

export default function CollarHarness() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Navbar />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-4 md:px-2 py-4 md:py-10 gap-y-6 md:gap-y-6 md:gap-x-4">
        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Collars</p>
          <p className="text-white">&</p>
          <p className="text-white">Harnesses</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          <Image
            src={classic_collar}
            alt="Classic Collars"
            className="w-full h-[600px] md:h-[500px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="p-2 text-center cinzel md:text-left"
          >
            <p className="text-white text-[35px] md:text-[25px]">
              Classic Collars
            </p>
            <Link href={'/categories/classic-collars'}>
              <button className="bg-white text-black font-semibold p-2 mt-2">
              See Collection
            </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Collars</p>
          <p className="text-white">&</p>
          <p className="text-white">Harnesses</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col"
        >
          <Image
            src={thigh_harness}
            alt="Thigh & leg harnesses"
            className="w-full h-[600px] md:h-[500px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">
              Thigh & leg harnesses
            </p>
            <Link href="/categories/thigh-and-leg-harnesses">
              <button className="bg-white text-black font-semibold p-2 mt-2">
                See Collection
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">LUSTCRAFT</p>
          <p className="text-white">BDSM GOODS</p>
        </motion.div>

        {/* 6 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col"
        >
          <Image
            src={chest_harness}
            alt="Body harnesses"
            className="w-full h-[600px] md:h-[500px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Body harnesses</p>
            <Link href="/categories/body-harnesses">
              <button className="bg-white text-black p-2 mt-2 font-semibold">
                See Collection
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col cinzel md:flex-row justify-between max-w-7xl mx-auto py-4 gap-4"
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={body_harness}
            alt="Body harnesses"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
