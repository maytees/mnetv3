"use client";

import ContactInfo from "../../components/Contactinfo";
import Image from "next/image";
import {
  LayoutGroup,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Service from "../../components/Service";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  const contactRef = useRef(null);
  const contactIsInView = useInView(contactRef, { once: false });
  const contactControls = useAnimation();

  useEffect(() => {
    isInView ? mainControls.start("visible") : mainControls.start("hidden");
    contactIsInView
      ? contactControls.start("visible")
      : contactControls.start("hidden");
  }, [isInView, mainControls, contactIsInView, contactControls]);

  return (
    <>
      <motion.div className="flex flex-row items-center justify-around px-48 pb-20 mt-48">
        <motion.div
          transition={{ delay: 1.2, type: "spring" }}
          whileInView="onScreen"
          viewport={{ once: false, amount: 1 }}
          initial="offScreen"
          variants={{
            offScreen: {
              x: -200,
              opacity: 0,
            },
            onScreen: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
          }}
          className="flex flex-col gap-5 sm:max-xl:justify-center max-sm:justify-center sm:max-xl:items-center max-sm:items-center"
        >
          <motion.h1
            animate={{
              x: 0,
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{ delay: 0.5, type: "spring" }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            className="z-10 text-8xl xl:text-7xl md:max-xl:text-centers max-sm:text-5xl"
          >
            Maytham
          </motion.h1>
          <motion.h1
            animate={{
              x: 0,
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              delay: 0.9,
              type: "spring",
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            className="w-full text-xl text-left sm:max-xl:text-center sm:max-sm:text-center max-sm:text-center max-sm:text-lg"
          >
            16 year old fullstack web developer, designer, <br />
            and cybersecurity enthusiast based in Northern Virginia
          </motion.h1>
          <motion.div
            animate={{
              x: 0,
              opacity: [0, 0.5, 0.8, 1],
            }}
            transition={{
              delay: 1.8,
              type: "spring",
            }}
            initial={{
              x: 100,
              opacity: 0,
            }}
          >
            <Button
              text={"View Projects"}
              onClick={() => router.push("/projects")}
            />
          </motion.div>
        </motion.div>
        <motion.div
          // animate={{
          //   x: 0,
          //   opacity: [0, 0.5, 0.8, 1],
          //   transitionEnd: {
          //     position: "static",
          //   },
          // }}
          transition={{ delay: 1.2, type: "spring" }}
          whileInView="onScreen"
          viewport={{ once: false, amount: 0.8 }}
          initial="offScreen"
          variants={{
            offScreen: {
              x: 200,
              opacity: 0,
            },
            onScreen: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
          }}
        >
          <Image
            width={550}
            height={443}
            className="z-0 visible md:max-xl:hidden xl:max-xl:w-96"
            src={"/portrait.svg"}
            alt={"portrait"}
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-start h-screen gap-5 mt-52">
        <motion.h1
          ref={ref}
          className="text-6xl font-medium"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.50, type: "spring" }}
        >
          Services
        </motion.h1>
        <div className="flex flex-col items-center justify-center w-full">
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
                scale: 0,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.75, type: "spring" }}
            className="text-xl font-light text-center md:max-xl:text-center xl:max-xl:text-center max-sm:text-center max-sm:max-xl:text-center"
          >
            Here are a few{" "}
            <span className="text-xl font-semibold animate-pulse">web</span>
            {" "}
            services I offer <br />
            <span className="text-lg font-extralight">
              (Click on title to visit link)
            </span>
          </motion.p>
          <motion.div
            transition={{ delay: 1.2, type: "spring" }}
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.8 }}
            initial="offScreen"
            variants={{
              offScreen: {
                x: -200,
                opacity: 0,
              },
              onScreen: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
            }}
            className="flex flex-col items-center justify-around w-full gap-5 mt-16"
          >
            <Service
              title={"Vikas"}
              link={"https://vikas.matees.net"}
              desc={"A link shortener"}
              mainControls={mainControls}
            />
            <Service
              title={"Git"}
              link={"https://git.matees.net"}
              desc={"A Git Tea server"}
              mainControls={mainControls}
            />
            <Service
              title={"Appwrite"}
              link={"https://appwrite.matees.net"}
              desc={"An appwrite server"}
              mainControls={mainControls}
            />
            <Service
              title={"Vizard"}
              link={"https://vizard.matees.net"}
              desc={"A web proxy (don't use illegally)"}
              mainControls={mainControls}
            />
            <Service
              title={"Stamp"}
              disabled
              link={"/"}
              desc={"WIP school management web app"}
              mainControls={mainControls}
            />
            <Service
              title={"Todo"}
              link={"https://todo.matees.net"}
              desc={"Bad todo application"}
              mainControls={mainControls}
            />
            <Service
              title={"Arcade"}
              link={"https://modrinth.com/plugin/arcade"}
              desc={"Minecraft minigames plugin"}
              mainControls={mainControls}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start h-screen gap-5 mt-52">
        <motion.h1
          ref={contactRef}
          className="text-6xl font-medium"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate={contactControls}
          transition={{ duration: 0.5, delay: 0.50, type: "spring" }}
        >
          Socials
        </motion.h1>

        <motion.div
          transition={{ delay: 1.2, type: "spring" }}
          whileInView="onScreen"
          viewport={{ once: false, amount: 0.8 }}
          initial="offScreen"
          variants={{
            offScreen: {
              x: -200,
              opacity: 0,
            },
            onScreen: {
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
          }}
          className="flex flex-col items-center justify-around w-full gap-5 mt-16"
        >
          <ContactInfo
            image={"/discord.svg"}
            desc={"maytees"}
            mainControls={contactControls}
          />
          <ContactInfo
            image={"/instagram.svg"}
            desc={"maytees21"}
            mainControls={contactControls}
          />
          <ContactInfo
            image={"/github-mark.svg"}
            desc={"maytees (main)"}
            mainControls={contactControls}
          />
          <ContactInfo
            image={"/github-mark.svg"}
            desc={"matees1 (old)"}
            mainControls={contactControls}
          />
        </motion.div>
      </div>
    </>
  );
}
