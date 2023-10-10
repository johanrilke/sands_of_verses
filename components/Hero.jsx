"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { StarsIllustration } from '@components/Stars';
import { motion } from 'framer-motion';

const yVariants = {
    initial: {
        opacity: 0,
        y: -100,
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

const Hero = () => {

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

  return (
    <section className='hero'>
        <div>
            {providers &&
                Object.values(providers).map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                        signIn(provider.id);
                    }}
                    className='glass_btn'
                    >
                    Unearth poetic treasures
                    </button>
                ))}
        </div>

        <div className='w-full max-w-lg my-12'>
            <div className="pink_sun"></div>
            <div className="yellow_sun"></div>
            <div className="pink_sun"></div>
            <div className="yellow_sun"></div>
        </div>

       <StarsIllustration />

        <motion.div
        className="text-center w-full relative text-gray-700"
        variants={yVariants}
        initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
		}}
        >
            <h2 className="mb-6 text-6xl sm:mb-9 sm:text-8xl font-semibold">
                    In the desert
                    <br className="hidden sm:inline-block" /> 
                    <span className="text-5xl sm:text-7xl"> by Stephen Crane</span>
            </h2>
            <p className="mx-auto mb-12 max-w-[68rem] text-xl md:mb-7 md:text-2xl text-gray-700 flex flex-col gap-3">
            <span> </span>
            <span> </span>
            <span>In the desert</span>
            <span>I saw a creature, naked, bestial,</span>
            <span>Who, squatting upon the ground,</span>
            <span>Held his heart in his hands,</span>
            <span>And ate of it.</span>
            <span>I said, “Is it good, friend?”</span>
            <span>“It is bitter—bitter,” he answered;</span>

            <span>“But I like it</span>
            <span>“Because it is bitter,</span>
            <span>“And because it is my heart.”</span>
            </p>
        </motion.div>

        {/* <StarsIllustration />

        <motion.div 
        className="flex flex-row w-max ml-10 justify-center items-center"
        variants={yVariants}
        initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
		}}
        >
            <p className="basis-1/2 mt-10 ml-10 text-xl text-gray-800 font-bold sm:text-4xl max-w-5xl flex flex-col gap-1">
                <span>Inspired by </span>
                <span>the mystical essence of the Sonoran desert, </span>
                <span>the spellbinding pages of Paulo Coelho's "The Alchemist," </span>
                <span>and the timeless verses of Stephen Crane's "In the Desert" poem, </span>
                <span>Sonorhyme, </span>
                <span>a harmonious convergence of thoughts, poems, and lyrics </span>
                <span>awaits you.</span>
            </p>
            <div className="basis-1/4 pyramid"></div>
        </motion.div> */}

    <StarsIllustration />
        
    </section>
  )
}

export default Hero