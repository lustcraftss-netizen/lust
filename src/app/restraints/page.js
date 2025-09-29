"use client"
import Navbar from "@/components/Navbar";
import handcuff from '../../../public/images/restraints/handcuff.png'
import spread from '../../../public/images/restraints/spreaders.webp';
import straps from '../../../public/images/restraints/strap.jpg';
import hogtie from '../../../public/images/restraints/hogtie.png'
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Restraints() {
  return (
    <div className="bg-black overflow-x-hidden"> {/* ✅ Fix horizontal scroll */}

      <Navbar />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-2 py-4 gap-y-6 md:gap-y-2 md:gap-x-4">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Restraints</p>
          <p className="text-white">&</p>
          <p className="text-white">Bondage Gear</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          <Image
            src={handcuff}
            alt="Handcuffs"
            className="w-full h-[600px] md:h-[500px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="p-2 text-center cinzel md:text-left cursor-pointer"
          >
            <p className="text-white text-[35px] md:text-[25px]">Handcuffs</p>
            <Link href={'/categories/handcuffs'}>
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
          <p className="text-white">Restraints</p>
          <p className="text-white">&</p>
          <p className="text-white">Bondage Gear</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col"
        >
          <Image
            src={hogtie}
            alt="Hogtie sets"
            className="w-full h-[600px] md:h-[500px] cursor-pointer object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Hogtie sets</p>

             <Link href={'/categories/hogtie-sets'}>
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
          <p className="text-white"></p>
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
            src={straps}
            alt="Rope & leather straps"
            className="w-full h-[600px] md:h-[500px] cursor-pointer object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Rope & leather straps</p>
            <Link href={'/categories/rope-and-leather-straps'}>
              <button className="bg-white text-black font-semibold p-2 mt-2">
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
        className="flex flex-col cinzel md:flex-row w-full justify-between max-w-7xl mx-auto py-4 gap-4"
      >
       

        <div className="relative w-full  aspect-[16/9] overflow-hidden"> {/* ✅ Fix */}
          <Image
            src={spread}
            alt="Spreaders (bars, belts, cuffs)"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 cursor-pointer md:bottom-16 left-4 md:left-10  text-white">
            <p className="text-[20px] md:text-[25px] cursor-pointer">Spreaders (bars, belts, cuffs)</p>
            <Link href={'/categories/spreaders-bars-belts-cuffs'}>
              <button className="bg-white text-black font-semibold p-2 mt-2">
              See Collection
            </button>
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer />

    </div>
  )
}
