"use client"
import { motion } from "framer-motion";

const leftSideVariants = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        }
    }
};

const rightSideVariants = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
        }
    }
}

function Hero() {
    return (
        <div className="h-[100vh] w-[100vw] p-4 flex items-center justify-evenly">
            <motion.div variants={leftSideVariants} initial="initial" animate="animate" className="space-y-2">
                <p className="poppins tracking-[0.17rem] text-[#d3a971]">APPROVED BY CARAVEL ACADEMY</p>
                <p className="text-4xl">
                    <b>Applied</b> Data Science
                </p>
                <p className="text-4xl">
                    & <span className="text-[#d3a971]">Linear Algebra</span> Club
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog">
                        <button
                            className="py-[10px] px-7 rounded-lg border-2 border-white poppins font-semibold text-md text-black
                            bg-white cursor-pointer hover:opacity-70 duration-100"
                        >Apply to Join</button>
                    </a>
                    <button
                        className="py-[10px] px-7 rounded-lg border-2 border-white poppins font-semibold text-md text-white
                    cursor-pointer bg-transparent hover:opacity-70 duration-100"
                    >Contact Us</button>
                </div>
            </motion.div>
            <motion.div variants={rightSideVariants} initial="initial" animate="animate">
                <img className="w-[400px]" src="/hero.png" alt="" />
            </motion.div>
        </div>
    )
}

export default Hero;