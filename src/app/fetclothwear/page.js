"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import body_harness from '../../../public/images/collarsharness/body_harness.png';
import chest_harness from '../../../public/images/collarsharness/chest_harness.png';
import gloves from '../../../public/images/fetishcloth/gloves.jpg';
import lingere from '../../../public/images/fetishcloth/lingere.jpg';
import Link from "next/link";

export default function FetishCloth() {
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
          <p className="text-white">Fetish Clothing</p>
          <p className="text-white">&</p>
          <p className="text-white">Wearables</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          <Image
            src={gloves}
            alt="Black leather fetish gloves"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="p-2 text-center cinzel md:text-left"
          >
            <p className="text-white text-[35px] md:text-[25px]">Leather Gloves</p>
            <Link href="/categories/leather-gloves">
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
          <p className="text-white">Fetish Clothing</p>
          <p className="text-white">&</p>
          <p className="text-white">Wearables</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col"
        >
          <Image
            src={lingere}
            alt="Black leather lingerie fetish wear"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="p-2 text-center cinzel md:text-left">
            <p className="text-white text-[35px] md:text-[25px]">Leather Lingerie</p>
            <Link href="/categories/leather-lingerie">
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
            src={chest_harness}
            alt="Chest Harness"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
         
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col cinzel md:flex-row justify-between max-w-7xl mx-auto py-4 gap-4"
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden"> {/* ✅ Fix */}
          <Image
            src={body_harness}
            alt="Full body harness on model"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
