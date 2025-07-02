import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import ankushImg from "@/assets/ankush6.jpg";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={ankushImg}
          alt="Ankush B Shetty"
          width={128}
          height={128}
          className="rounded-full w-32 h-32 object-cover object-center"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Ankush B Shetty{" "}
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer based in India.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am currently working as a full stack developer specializing in
        building scalable web applications using modern technologies like React,
        Node.js, and Next.js. I am passionate about creating seamless user
        experiences and writing clean, efficient code.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Ankush_shetty_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

//uplaod image

{
  /* <Image
  src="/profile/ankush.jpg" // ✅ use your actual file name
  alt="Ankush B Shetty"
  width={128}
  height={128}
  className="rounded-full w-32 h-32 object-cover"
/> */
}
