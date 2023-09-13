"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata = {
    title: "Matees.net",
    description: "Matees' personal website",
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body className={`${poppins.className} min-h-screen `}>
          <div className="flex flex-col justify-between">
            <motion.div
              className="fixed top-0 left-0 right-0 w-screen h-1 origin-top-left rounded-full bg-slate-950"
              style={{ scaleX }}
            >
            </motion.div>
            <div className="px-10">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
