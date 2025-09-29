"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import artcle1201 from "../../../public/images/leather_straps/article-1201.jpg";
import artcle1202 from "../../../public/images/leather_straps/article-1202.jpg";
import artcle1203 from "../../../public/images/leather_straps/article-1203.jpg";
import artcle1204 from "../../../public/images/leather_straps/article-1204.jpg";
import artcle1205 from "../../../public/images/leather_straps/article-1205.jpg";
import artcle1206 from "../../../public/images/leather_straps/article-1206.jpg";
import artcle1207 from "../../../public/images/leather_straps/article-1207.jpg";

export default function Grid() {
  const array = [
    { name: "Rope & leather straps", article: "Article 1201", image: artcle1201, price: "250" },
    { name: "Rope & leather straps", article: "Article 1202", image: artcle1202, price: "260" },
    { name: "Rope & leather straps", article: "Article 1203", image: artcle1203, price: "250" },
    { name: "Rope & leather straps", article: "Article 1204", image: artcle1204, price: "250" },
    { name: "Rope & leather straps", article: "Article 1205", image: artcle1205, price: "250" },
    { name: "Rope & leather straps", article: "Article 1206", image: artcle1206, price: "250" },
    { name: "Rope & leather straps", article: "Article 1207", image: artcle1207, price: "250" },
  ];

  return (
    <div className="overflow-x-hidden bg-black min-h-screen flex flex-col">
      <Navbar />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl cinzel text-white mt-8 mb-6 px-4 max-w-6xl mx-auto border-b border-gray-800 pb-2"
      >
        Rope & Leather Straps
      </motion.h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 max-w-6xl mx-auto w-full">
        {array.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-white group"
          >
            {/* Image wrapper */}
            <motion.div
              className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Product details */}
            <div className="mt-3 text-center ">
              <p className="text-[10px] uppercase tracking-wide text-gray-400">{item.article}</p>
              <p className="text-sm md:text-base font-medium">{item.name}</p>
              <p className="text-[11px]  ">$ {item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
