"use client";

import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "../../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <motion.div className="flex flex-col justify-center items-center mt-56 gap-5">
        <motion.h1
          whileInView="onScreen"
          viewport={{ once: false, amount: 1 }}
          initial="offScreen"
          variants={{
            offScreen: {
              y: -100,
              opacity: 0,
            },
            onScreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
              },
            },
          }}
          className="text-5xl font-semibold "
        >
          I have worked on many projects
        </motion.h1>
        <motion.p
          whileInView="onScreen"
          viewport={{ once: false, amount: 0.2 }}
          initial="offScreen"
          variants={{
            offScreen: {
              y: 100,
              opacity: 0,
            },
            onScreen: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
          }}
        >
          Too many to list, so here are a few
        </motion.p>
      </motion.div>

      <div className="flex flex-row w-screen shrink-0 justify-center h-fit py-20 gap-10 flex-wrap items-center px-96">
        <ProjectCard
          name="Arcade"
          repo="https://github.com/maytees/arcade"
          link="https://modrinth.com/plugin/arcade"
          description="Minecraft minigame plugin"
          icon="/arcade.svg"
        />
        <ProjectCard
          name="Epsonia-rs"
          repo="https://github.com/epsonia/epsonia-rs"
          icon="/epsonia.svg"
          link="https://epsonia.matees.net"
          description="Epsonia rewritten in Rust"
        />
        <ProjectCard
          name="Epsonia"
          repo="https://github.com/epsonia/epsonia"
          icon="/epsonia.svg"
          link="https://epsonia.matees.net"
          description="Open source cybersecurity scoring engine."
        />
        <ProjectCard
          name="Whattocode"
          repo="https://github.com/maytees/whattocode"
          description="What to code ideas CLI"
        />
        <ProjectCard
          name="Whack a Hack"
          repo="https://github.com/maytees/whack-a-hack"
          description="Whack a mole but with bad desktop apps"
        />
        <ProjectCard
          name="Vikas"
          repo="https://github.com/maytees/vikas"
          icon="/vikas.svg"
          link="https://vikas.matees.net"
          description="Link shortener made with Deno"
        />
        <ProjectCard
          name="todot3"
          repo="https://github.com/maytees/todot3"
          link="https://todo.matees.net"
          description="Simple todo app"
        />
        <ProjectCard
          name="i3-distalker"
          repo="https://github.com/maytees/i3-distalker"
          description="Show what window you are on in Discord via the i3 IPC"
        />
        <ProjectCard
          name="Monki"
          repo="https://github.com/maytees/monki"
          description="Interpreter written in Rust"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
