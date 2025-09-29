"use client";
import Image from "next/image";
import img1 from "../../public/images/social/img1.jpg";
import img2 from "../../public/images/social/img9.jpg";
import img3 from "../../public/images/social/img3.jpg";
import img4 from "../../public/images/social/img4.jpg";
import img5 from "../../public/images/social/img5.jpg";
import img6 from "../../public/images/social/img6.jpg";
import img7 from "../../public/images/social/img7.jpg";
import img8 from "../../public/images/social/img8.jpg";
import { motion } from "framer-motion";

export default function Insta() {
  return (
    <div className="max-w-6xl w-full mx-auto cabin bg-white text-black p-4 sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <motion.h2
          initial={{ opacity: 0, x: -100 }} // start hidden, from left
          whileInView={{ opacity: 1, x: 0 }} // animate when visible
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl    tracking-wide"
        >
          Our Craft & Legacy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }} // start hidden, from left
          whileInView={{ opacity: 1, x: 0 }} // animate when visible
          transition={{ duration: 0.8 }}
          className=" mt-1 barlow max-w-xl text-sm sm:text-base"
        >
          A glimpse into the artistry, tradition, and modern innovation that
          define our leather creations.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-8 gap-2 w-full">
        {/* 1: Video */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="col-span-2 row-span-2 overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
        >
          <video
            src="/images/social/vid2.mp4"
            controls
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img1} alt="image1" fill className="object-cover" />
        </motion.div>

        {/* 3: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img2} alt="image2" fill className="object-cover" />
        </motion.div>

        {/* 4: Video */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="col-span-2 row-span-2 relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
        >
          <video
            src="/images/social/vid1.mp4"
            controls
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 5: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img3} alt="image3" fill className="object-cover" />
        </motion.div>

        {/* 6: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img4} alt="image4" fill className="object-cover" />
        </motion.div>

        {/* 7: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img5} alt="image5" fill className="object-cover" />
        </motion.div>

        {/* 8: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img6} alt="image6" fill className="object-cover" />
        </motion.div>

        {/* 9: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative hidden sm:block overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img7} alt="image7" fill className="object-cover" />
        </motion.div>

        {/* 10: Image */}
        <motion.div
          initial={{ opacity: 0 }} // start hidden, from left
          whileInView={{ opacity: 1 }} // animate when visible
          transition={{ duration: 1 }}
          className="relative hidden sm:block overflow-hidden h-[150px] sm:h-[200px] md:h-[250px] lg:h-auto"
        >
          <Image src={img8} alt="image8" fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
}
