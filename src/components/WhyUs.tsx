"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Real-World Projects",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
        title: "Linear Algebra",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
        title: "Team Expertise",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
        title: "Resumé Builder",
        description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
];

const leftVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.11
        }
    }
};

const rightVariants = {
    initial: {
        x: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        }
    }
}

function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="my-3 py-10 px-6"> 
            <h2 className="text-center poppins font-bold text-4xl text-[#d3a971]">Why Join?</h2>
            <div className="flex justify-evenly mt-12">
                <motion.div variants={leftVariants} initial="initial" whileInView="animate" className="space-y-5">
                    {cards.map((card, index) => (
                        <motion.h2 
                            key={index}
                            variants={leftVariants}
                            className={
                                `poppins cursor-pointer text-3xl ${activeIndex == index ? "text-white" : "text-gray-400 hover:text-gray-300"}`
                            }
                            onClick={() => {setActiveIndex(index)}}
                        >
                            {"0" + (index + 1) + ". " + card.title}
                        </motion.h2>
                    ))}
                </motion.div>
                <motion.div variants={rightVariants} initial="initial" whileInView="animate">
                    <p className="poppins w-100">
                        {cards[activeIndex].description}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default WhyUs;