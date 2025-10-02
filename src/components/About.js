"use client";
import Image from "next/image";
import img1 from "../../public/images/about/about1.jpg";
import img2 from "../../public/images/about/about2.jpg";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-white" id="about">
    <div className=" bg-black text-white flex flex-col w-full 2xl:px-20  px-6 pt-15 pb-10">
      {/* Top-left About Us heading */}
      <motion.h2
        initial={{ opacity: 0, x: -100 }} // start hidden, from left
        whileInView={{ opacity: 1, x: 0 }} // animate when visible
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl cabin  mb-8"
      >
        ABOUT US
      </motion.h2>

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Images */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }} // start hidden, from left
            whileInView={{ opacity: 1 }} // animate when visible
            transition={{ duration: 0.8 }}
            className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] overflow-hidden "
          >
            <Image
              src={img1}
              alt="about1"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden">
            <Image
              src={img2}
              alt="about2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col cabin text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -100 }} // start hidden, from left
            whileInView={{ opacity: 1, x: 0 }} // animate when visible
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl mb-4"
          >
            Expertise in the Future of Leather
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }} // start hidden, from left
            whileInView={{ opacity: 1, y: 0 }} // animate when visible
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] font-light"
          >
            We are more than manufacturers — we are artisans shaping the next
            chapter of leather craftsmanship in the BDSM world. Our expertise
            lies in blending timeless techniques with modern innovation,
            creating products that embody both luxury and resilience. Every item
            we craft is a statement of elegance, designed to empower and inspire
            connection.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -100 }} // start hidden, from left
            whileInView={{ opacity: 1, y: 0 }} // animate when visible
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] font-light mt-4"
          >
            Driven by a passion for perfection, we see the future of leather not
            just in its strength, but in the way it enhances experiences —
            transforming raw material into tools of artistry, intimacy, and
            self-expression.
          </motion.p>
        </div>
      </div>
    </div>
    </div>
  );
}
