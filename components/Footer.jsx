"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const yVariants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: [0.45, 0, 0.55, 1],
        }
    }
}

const Footer = () => {

    const images = [
        '/assets/images/sand/0.jpg'
        ,'/assets/images/sand/1.jpg'
        , '/assets/images/sand/2.jpg'
        , '/assets/images/sand/3.jpg'
        , '/assets/images/sand/4.jpg'
        , '/assets/images/sand/5.jpg'];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const [isGithubHovering, setIsGithubHovering] = useState(false);
    const [isLinkedinHovering, setIsLinkedinHovering] = useState(false);

    return (    
    <motion.section className="footer flex flex-col font-sans" 
    variants={yVariants}
    initial="initial"
        whileInView="animate"
        viewport={{
            once: true,
    }}>
        <div className="flex md:flex-row flex-col justify-between items-center h-full my-5 gap-32">
                <div className="flex flex-col gap-5 relative">
                    <div className="flex flex-col gap-2 font-bold">
                        <div className="uppercase md:text-9xl sm:text-7xl text-5xl w-max flex flex-col gap-3 text-gray-700 z-0">
                            <span>Let's work</span>
                            <span>together</span>
                        </div>
                        <p className="text-3xl mt-2 ml-2 text-gray-500">johanrilke.fe@gmail.com</p>
                    </div>
                    <div className="red_sun z-10"></div>
                    <div className="orange_sun z-10"></div>
                    <div className="flex flex-col gap-2 font-semibold text-4xl mt-6 text-gray-800 z-20">
                        <Link href="/" 
                        onMouseEnter={() => setIsGithubHovering(true)}
                        onMouseLeave={() => setIsGithubHovering(false)}
                        >GitHub</Link>
                        <div className={`footer_line_github ${isGithubHovering ? "" : "hidden"}`}></div>
                        <Link href="/" onMouseEnter={() => setIsLinkedinHovering(true)}
                        onMouseLeave={() => setIsLinkedinHovering(false)}>LinkedIn</Link>
                        <div className={`footer_line_linkedin ${isLinkedinHovering ? "" : "hidden"}`}></div>
                    </div>
                </div>
                <Image 
                alt="" 
                src={images[currentImageIndex]}
                width={400}
                height={400}
                className="rounded-full md:order-last order-first"
                />
            </div>
    </motion.section>
  )
}

export default Footer