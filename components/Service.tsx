"use client";

import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface ServiceProps {
    title: string;
    link: string;
    desc: string;
    mainControls: any;
    disabled?: boolean;
}

const Service: React.FC<ServiceProps> = (props: ServiceProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) mainControls.start("visible");
    }, [isInView]);

    return (<>
        <div className="w-3/5 h-[0.5px] bg-slate-300"></div>
        <motion.div
            ref={ref}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 100,
                    scale: 0
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            className="flex flex-row items-center justify-between w-full max-sm:flex-col sm:max-lg:flex-col lg:px-96 ">
            <h1 className={`text-4xl font-medium text-left sm:max-lg:text-center max-sm:text-center ${props.disabled ? "text-slate-700" : ""}`}>
                {!props.disabled ? <a href={props.link} target='_blank'>{props.title}</a> : (props.title)}
            </h1>

            < p className="text-xl font-light text-left">{props.desc}</p>
        </motion.div>
        <div className="w-3/5 h-[0.5px] bg-slate-300"></div>
    </ >
    )
}

export default Service