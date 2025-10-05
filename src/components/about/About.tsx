"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

const cards = [
    {
        title: "Real-World Projects",
        description: "Apply linear algebra to projects like image recognition and recommendations. Non-technical members can contribute with AI tools and gain hands-on experience."
    },
    {
        title: "Linear Algebra",
        description: "Learn matrices, determinants, and SVD through real data activities, building an intuitive and practical grasp of core math concepts."
    },
    {
        title: "Team Expertise",
        description: "Guided by a skilled student leader and teacher sponsor, our team provides mentorship so all members can learn and grow."
    },
    {
        title: "Resumé Builder",
        description: "Boost your college resumé with real projects, coding skills, and teamwork experience that showcase problem-solving and achievement."
    },
];

const leftVariants = {
    initial: { x: -100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, staggerChildren: 0.11 }
    }
};

const rightVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    return <>
        <div id="about" className={styles.about}>
            <h2 className={styles.heading}>About Us</h2>
            <div className={styles.container}>
                <motion.div
                    variants={leftVariants}
                    initial="initial"
                    whileInView="animate"
                    className={styles.left}
                >
                    {cards.map((card, index) => (
                        <motion.h2
                            key={index}
                            variants={leftVariants}
                            className={`${styles.option} ${activeIndex === index ? styles.active : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {"0" + (index + 1) + ". " + card.title}
                        </motion.h2>
                    ))}
                </motion.div>
                <motion.div
                    variants={rightVariants}
                    initial="initial"
                    whileInView="animate"
                    className={styles.right}
                >
                    <p className={styles.description}>
                        {cards[activeIndex].description}
                    </p>
                </motion.div>
            </div>
        </div>

        <div id="about" className={styles.mobileAbout}>
            <div>
                <h2 className={styles.heading}>About Us</h2>
                <motion.div
                    variants={rightVariants}
                    initial="initial"
                    whileInView="animate"
                    className={styles.right}
                >
                    <p className={styles.description}>
                        Learn matrices, determinants, and SVD through real data activities, building an intuitive and practical grasp of core math concepts.
                    </p>
                </motion.div>
            </div>

        </div>
    </>;
}

export default About;
