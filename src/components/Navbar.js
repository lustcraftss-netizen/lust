"use client";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { NavLinks } from "@/app/data";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // ✅ prevent hydration mismatch

  const { cartItemsCount, isLoaded } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const phoneNumber = "+923281359466"; // replace with your WhatsApp number
  const message = "Hello, I'm interested in your products!"; // default message

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div>
      {/* ✅ Fixed Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 shadow-md flex bg-white text-black items-center justify-between md:px-8 px-4 md:py-4 py-7">
        {/* Desktop Nav */}
        <div className="cabin hidden md:flex items-center justify-center gap-x-8 cursor-pointer transition-all">
          <div className="flex items-center gap-x-1 relative group hover:font-semibold">
            <span>Shop</span>
            <IoIosArrowDown className="w-3 group-hover:rotate-0 rotate-180 transition-all " />
            <div className="group-hover:grid grid-cols-4 w-[600px] top-6 bg-white text-black border-sh absolute z-50 hidden cursor-pointer gap-2">
              {NavLinks.map((item, index) => (
                <div key={index} className="cabin flex flex-col gap-y-1 px-1.5 ">
                  <Link href={item.link}>
                    <p className="font-bold hover:underline">{item.name}</p>
                  </Link>
                  <div className="ml-2 flex flex-col">
                    {item.sublinks.map((sub, i) => (
                      <Link href={sub.link} key={i}>
                        <p className="hover:font-bold transition-all text-sm">
                          {sub.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href={"/"}>
            <p className="hover:font-semibold">About</p>
          </Link>
          <Link href={url} target="_blank">
            <p className="hover:font-semibold">Contact</p>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-50">
          {isOpen ? (
            <ImCross
              className="size-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="size-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Logo (safe render after mount) */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute left-1/2 transform cursor-pointer -translate-x-1/2"
          >
            <p className="cabin md:text-[30px] text-[25px]">
              <Link href={"/"}>LUSTCRAFT</Link>
            </p>
          </motion.div>
        )}

        {/* Cart */}
        <Link
          href="/cart"
          className="cabin flex items-center justify-center relative hover:text-gray-600 transition"
        >
          {/* Cart Icon */}
          <ShoppingCart size={22} />

          {/* Cart Count Badge */}
          {isLoaded && cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </Link>
      </div>

      {/* ✅ Spacer to prevent content hiding behind navbar */}
      <div className="h-[80px] md:h-[90px]"></div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white cabin text-black overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-y-4 px-6 cabin">
          <p className="font-semibold mb-4">Shop</p>

          {/* Categories + Subcategories in 2 columns */}
          <div className="grid grid-cols-2 gap-6">
            {NavLinks.map((item, i) => (
              <div key={i} className="mb-2">
                <Link href={item.link}>
                  <p className="font-bold hover:underline">{item.name}</p>
                </Link>
                <div className="ml-2 flex flex-col gap-y-1 mt-1">
                  {item.sublinks.map((sub, j) => (
                    <Link href={sub.link} key={j}>
                      <p className="text-sm hover:underline">{sub.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other links */}
          <Link href="/" className="font-semibold mt-4">
            About
          </Link>
          <Link href={url} target="_blank" className="font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
