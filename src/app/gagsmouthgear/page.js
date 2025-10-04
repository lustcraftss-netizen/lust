"use client"
import Navbar from "@/components/Navbar";
import gags from '../../../public/images/gags/ballgag.png';
import image1 from '../../../public/images/hero/img1.jpg';
import image2 from '../../../public/images/hero/img2.jpg';
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Gags() {
  return (
    <div className="bg-black overflow-x-hidden"> {/* ✅ Prevent horizontal scroll */}

      <Navbar />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full  mx-auto px-2 py-4 gap-y-6 md:gap-y-2 md:gap-x-4">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Gags</p>
          <p className="text-white">&</p>
          <p className="text-white">Mouth Gear</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden"
        >
          <Image
            src={gags}
            alt="Classic red ball gag"
            className="w-full h-[500px] md:h-[600px] object-cover object-left"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-2 text-center cinzel md:text-left"
          >
            <p className="text-white text-[35px] md:text-[25px]">Ball Gags</p>
            <Link href="/categories/ball-gags">
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
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Gags</p>
          <p className="text-white">&</p>
          <p className="text-white">Mouth Gear</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden"
        >
          <Image
            src={image1}
            alt="Leather open mouth gag"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
         
        </motion.div>

        {/* 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">LUSTCRAFT</p>
          <p className="text-white"></p>
          <p className="text-white">BDSM GOODS</p>
        </motion.div>

        {/* 6 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden"
        >
          <Image
            src={image2}
            alt="Bit gag with straps"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
     
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
