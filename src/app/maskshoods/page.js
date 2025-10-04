"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import blindfold from '../../../public/images/masks_hoods/blindfold.jpeg';
import fullhood from '../../../public/images/masks_hoods/full_hood.png';
import halfface from '../../../public/images/masks_hoods/half_face.jpeg';
import Link from "next/link";

export default function MaskHoods() {
  return (
    <div className="bg-black overflow-x-hidden">

      <Navbar />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full  mx-auto px-2 py-4 gap-y-6 md:gap-y-2 md:gap-x-4">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center 
                     text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Masks</p>
          <p className="text-white">&</p>
          <p className="text-white">Hoods</p>
        </motion.div>

        {/* 2 - Blindfolds */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <Image
            src={blindfold}
            alt="Blindfolds"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Blindfolds</p>
           <Link href="/categories/blindfolds">
              <button className="bg-white text-black font-semibold p-2 mt-2">
                See Collection
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center 
                     text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Masks</p>
          <p className="text-white">&</p>
          <p className="text-white">Hoods</p>
        </motion.div>

        {/* 4 - Full Hoods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <Image
            src={fullhood}
            alt="Full leather hoods"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Full leather hoods</p>
            <Link href="/categories/full-leather-hoods">
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
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center 
                     text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">LUSTCRAFT</p>
          <p className="text-white"></p>
          <p className="text-white">BDSM GOODS</p>
        </motion.div>

        {/* 6 - Half Face */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <Image
            src={halfface}
            alt="Half-face masks"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Half-face masks</p>
            <Link href="/categories/half-face-masks">
              <button className="bg-white text-black font-semibold p-2 mt-2">
                See Collection
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
