"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface ProjectCardProps {
  name: string;
  repo?: string;
  link?: string;
  description: string;
  icon?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      initial="hidden"
      whileInView="visible"
      animate={mainControls}
      transition={{
        duration: 2,
        delay: 0.2,
        type: "spring",
      }}
      className="flex flex-col justify-between items-center py-5 overflow-x-hidden"
    >
      {props.link
        ? (
          <a href={props.link} target="_blank">
            <Image
              width={200}
              height={200}
              src={props.icon ? props.icon : "/keinicon.svg"}
              alt={" test"}
              className="rounded-2xl"
            />
            <div className="ml-1">
              <h1 className="text-xl text-left  font-semibold mt-5">
                {props.name}
              </h1>
              <p className="text-left font-light">{props.description}</p>
            </div>
          </a>
        )
        : (
          <>
            <Image
              width={200}
              height={200}
              src={props.icon ? props.icon : "/keinicon.svg"}
              alt={" test"}
              className="rounded-2xl"
            />
            <div className="ml-1">
              <h1 className="text-xl text-left  font-semibold mt-5">
                {props.name}
              </h1>
              <p className="text-left font-light">{props.description}</p>
            </div>
          </>
        )}
    </motion.div>
  );
};

export default ProjectCard;
