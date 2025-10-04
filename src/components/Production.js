"use client";
import Image from "next/image";
import hand from "../../public/images/hero/hand_st.jpg";
import hard from "../../public/images/hero/hardware.jpg";
import fin from "../../public/images/hero/fin.jpg";
import { motion } from "framer-motion";

export default function Production() {
  return (
    <section className="bg-black cabin text-white pt-16">
      <div className="max-w-[1800px] mx-auto  md:pb-5 px-4 md:px-10 2xl:px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           // ✅ animate only once
          className="text-3xl md:text-4xl  tracking-wide mb-12"
        >
          OUR PRODUCTION
        </motion.h2>

        {/* 3 columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Image
              src={hand}
              alt="Hand Stitching"
              className="w-full h-64 object-cover mb-4"
              priority
            />
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm md:text-[20px] font-light uppercase  tracking-wider mb-2"
            >
              Hand Stitching
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm leading-relaxed "
            >
              Hand stitching, especially the saddle stitch method, is one of the
              strongest techniques in leathercraft. It involves cutting the
              leather to the desired size, punching evenly spaced holes with a
              pricking iron or awl, and then sewing with two needles and waxed
              thread. 
            </motion.p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
            className="flex flex-col"
          >
            <Image
              src={hard}
              alt="Riveting and Hardware Setting"
              className="w-full h-64 object-cover mb-4"
            />
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm md:text-[20px] font-light uppercase  tracking-wider mb-2"
            >
              Riveting and Hardware Setting
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm leading-relaxed "
            >
              Riveting is another common method for creating leather products
              that need to handle pressure or movement. The process includes
              cutting and layering leather before attaching metal hardware such
              as rivets, snaps, O-rings, or D-rings using a press or hammer.
              
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
            className="flex flex-col"
          >
            <Image
              src={fin}
              alt="Cutting, Molding, and Finishing"
              className="w-full h-64 object-cover mb-4"
            />
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm md:text-[20px] font-light  uppercase tracking-wider mb-2"
            >
              Cutting, Molding, and Finishing
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              
              className="text-sm leading-relaxed mb-5 2xl:mb-16"
            >
              Cutting and shaping leather is the foundation of any product.
              Leather straps can be cut for cuffs, floggers, or harnesses, and
              wet molding can be used to form more structured pieces like masks
              or fitted collars.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Moving text bars */}
      
    </section>
  );
}
