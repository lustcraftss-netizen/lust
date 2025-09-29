"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import img3 from '../../../public/images/hero/img3.jpg';
import Jacket from '../../../public/images/jackets/jacket.webp';
import Hooded from '../../../public/images/jackets/hooded.jpg';
import Link from "next/link";

export default function SpecialGear() {
  return (
    <div className="bg-black overflow-x-hidden"> {/* ✅ Prevent horizontal scroll */}

      <Navbar />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto px-2 py-4 gap-y-6 md:gap-y-2 md:gap-x-4">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-[200px] md:h-[600px] flex items-center justify-center text-[28px] md:text-[40px] cinzel flex-col"
        >
          <p className="text-white">Specialty</p>
          <p className="text-white">&</p>
          <p className="text-white">Fetish Gear</p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden"  // ✅ contain image
        >
          <Image
            src={Jacket}
            alt="Leashes & straight jackets"
            className="w-full h-[600px] md:h-[500px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-2 text-center cinzel md:text-left"
          >
            <p className="text-white text-[35px] md:text-[25px]">
              Leashes & straight jackets
            </p>
            <Link href="/categories/leashes-and-straight-jackets">
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
          <p className="text-white">Specialty</p>
          <p className="text-white">&</p>
          <p className="text-white">Fetish Gear</p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden"  // ✅ contain image
        >
          <Image
            src={Hooded}
            alt="Hooded restraints"
            className="w-full h-[600px] md:h-[600px] object-cover"
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
          className="flex flex-col overflow-hidden"  // ✅ contain image
        >
          <Image
            src={img3}
            alt="Half-face masks"
            className="w-full h-[600px] md:h-[600px] object-cover"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
