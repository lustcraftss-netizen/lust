"use client";

import { FaFacebookF, FaInstagram, FaEtsy, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

   const phoneNumber = "+923047110044"; // replace with your WhatsApp number
  const message = "Hello, I'm interested in your products!"; // default message

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="border-sh overflow-x-hidden">
        <div className="overflow-hidden whitespace-nowrap  bg-black text-white py-2  flex items-center">
      <motion.div
        className="inline-flex text-[15px] font-light"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {/* First set of text */}
        <span className="block">
          - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - 
        </span>
        {/* Duplicate set for seamless loop */}
        <span className="block">
          - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION - LUSTCRAFT - DESIRE - PASSION -
        </span>
      </motion.div>
    </div>
      
         {/* ✅ Fix added here */}
      <footer className="bg-black text-white">
        <motion.div
          className="mx-auto w-full max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Brand Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-white cabin text-3xl barlow font-bold">
                <p>LUSTCRAFT</p>
              </div>

              <p className="mt-4 max-w-xs barlow text-white">
                Every piece is made to honor the bond between you and your
                partner, with the royalty you deserve.
              </p>

              {/* Contact Info */}
              <div className="mt-6 space-y-2 barlow text-white text-sm">
                <p>Email: lustcraftss@gmail.com</p>
                <p>Phone: +92 304 7110044</p>
                <p>Address: Imam Sahib, Haji pura, Sialkot, Punjab </p>
              </div>

              {/* Social Icons */}
              <motion.ul
                className="mt-6 flex gap-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                
                <li>
                  <Link target="_blank" href={"https://www.instagram.com/lustcrafts?igsh=MWc2YTRwZGI1OGxzZQ=="} className="hover:opacity-75">
                    <FaInstagram size={22} />
                  </Link>
                </li>
                <li>
                  <Link href={'https://www.lustcraftsstore.etsy.com'} target="_blank" className="hover:opacity-75">
                    <FaEtsy size={22} />
                  </Link>
                </li>
                <li>
                  <Link href={url} target="_blank" className="hover:opacity-75">
                    <FaWhatsapp size={22} />
                  </Link>
                </li>
              </motion.ul>
            </motion.div>

            {/* Footer Links */}
            <motion.div
              className="grid barlow text-white grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Categories */}
              <div>
                <p className="font-medium">Categories</p>
                <ul className="mt-6 space-y-4 text-[15px]">
                  <li>
                    <Link href={'/restraints'} className="hover:opacity-75">
                      Restraints & Bondage Gear
                    </Link>
                  </li>
                  <li>
                    <Link href={'/collarharness'} className="hover:opacity-75">
                      Collars & Harnesses
                    </Link>
                  </li>
                  <li>
                    <Link href={'/impactplaygear'} className="hover:opacity-75">
                      Impact Play Gear
                    </Link>
                  </li>
                  <li>
                    <Link href={'/maskshoods'} className="hover:opacity-75">
                      Masks & Hoods
                    </Link>
                  </li>
                  <li>
                    <Link href={'/gagsmouthgear'} className="hover:opacity-75">
                      Gags & Mouth Gear
                    </Link>
                  </li>
                  <li>
                    <Link href={'/beltsstraps'} className="hover:opacity-75">
                      Belts & Straps
                    </Link>
                  </li>
                  <li>
                    <Link href={'/fetclothwear'} className="hover:opacity-75">
                      Fetish Clothing & Wearables
                    </Link>
                  </li>
                  <li>
                    <Link href={'/specialfetishgear'} className="hover:opacity-75">
                      Specialty & Fetish Gear
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="font-medium">Company</p>
                <ul className="mt-6 space-y-4 text-[15px]">
                  <li>
                    <a href="/" className="hover:opacity-75">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:opacity-75">
                      Production
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:opacity-75">
                      Home
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="font-medium">Legal</p>
                <ul className="mt-6 space-y-4 text-[15px]">
                  <li>
                    <Link href={'/coming'} className="hover:opacity-75">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href={'/return'} className="hover:opacity-75">
                      Returns Policy
                    </Link>
                  </li>
                  <li>
                    <Link href={'/return'} className="hover:opacity-75">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-gray-500 barlow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            &copy; 2025 LustCraft. All rights reserved.
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}
