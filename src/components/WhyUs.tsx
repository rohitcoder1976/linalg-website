"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Real-World Projects",
        description: "Apply linear algebra to data science projects like image recognition and personalized recommendations. Non-technical members can use AI tools to contribute, gaining practical experience and seeing how core math concepts power modern technology."
    },
    {
        title: "Linear Algebra",
        description: "Demystify undergraduate-level linear algebra through hands-on activities, not just theory. We'll explore matrices, determinants, and SVD by applying them to real data, building an intuitive and practical understanding of these powerful concepts."
    },
    {
        title: "Team Expertise",
        description: "Our team, led by a student with strong data science and linear algebra skills, and our experienced teacher sponsor, offers a supportive learning environment. This mentorship ensures students of all levels get the guidance they need to succeed."
    },
    {
        title: "Resumé Builder",
        description: "Build an impressive college resumé with tangible data science projects and coding skills. Showcase your problem-solving and teamwork, gaining concrete accomplishments that will help you stand out to colleges and future employers."
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
        <div id="about" className="my-3 min-h-[calc(100vh_-_250px)] px-6"> 
            <h2 className="text-center poppins font-bold text-4xl text-[#d3a971]">About Us</h2>
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
                    <p className="poppins w-100 text-lg">
                        {cards[activeIndex].description}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default WhyUs;