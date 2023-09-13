"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ContactInfoProps {
  image: string;
  desc: string;
  mainControls: any;
}

const ContactInfo: React.FC<ContactInfoProps> = (props: ContactInfoProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <>
      <div className="w-3/5 h-[0.5px] bg-slate-300"></div>
      <motion.div
        ref={ref}
        variants={{
          hidden: {
            opacity: 0,
            scaleX: 1,
            // scale: 0,
          },
          visible: {
            opacity: 1,
            scaleX: 1,
            // scale: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        animate={mainControls}
        transition={{
          duration: 2,
          delay: 0.5,
          type: "spring",
        }}
        className="flex flex-row items-center justify-between w-full max-sm:flex-col sm:max-lg:flex-col lg:px-96 "
      >
        <Image width={50} height={50} src={props.image} alt={props.desc} />
        <p className="text-2xl font-light text-left">{props.desc}</p>
      </motion.div>
      <div className="w-3/5 h-[0.5px] bg-slate-300"></div>
    </>
  );
};

export default ContactInfo;
