"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import g3 from "../../public/images/hero/g3.jpg";


import Navbar from "./Navbar";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative bg-white ">
      {/* Navbar */}
      <Navbar />

      <div className="flex w-full text-black  h-[500px]  mt-4 md:mt-[-10px]   px-4 md:px-8">
        {isMounted && (
          <motion.div
            className="relative w-full h-[500px]  overflow-hidden"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <Image
              src={g3}
              alt="Banner"
              priority
              className="object-cover w-full h-full"
            />
          </motion.div>
        )}
      </div>

      {isMounted && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            
            className="md:flex text-black w-full hidden  items-center text-[45px] font-light cabin mt-6 2xl:mt-7  px-4 md:px-8"
          >
            <p>YOUR NEW FAVOURITE HARNESS, MASTER.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex w-full text-black max-w-7xl md:hidden cabin  items-center text-[32.4px] mt-6 2xl:mt-7 mx-auto px-4 md:px-8"
          >
            <p>YOUR NEW FAVOURITE HARNESS, MASTER.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex w-full barlow  items-center text-[15px] mt-3 2xl:mt-4  px-4 md:px-8"
          >
            <p className="md:w-[50%] cabin text-black pb-10">
              Nothing defines elegance like handcrafted leather and steel.
              Explore our newest collection — designed to embody sophistication,
              power, and timeless desire. Every piece is made to honor the bond
              between you and your partner, with the royalty you deserve.
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}
