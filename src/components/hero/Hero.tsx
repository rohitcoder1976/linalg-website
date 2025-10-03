"use client"
import { motion } from "framer-motion";
import styles from './hero.module.scss';

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
        <div id="hero" className={styles.hero}>
            <motion.div variants={leftSideVariants} initial="initial" animate="animate" className={styles.leftSide}>
                <p className={styles.approved}>APPROVED BY CARAVEL ACADEMY</p>
                <p className={styles.tinyApproved}>CARAVEL ACADEMY'S</p>
                <p className={styles.dataScience}>
                    <b>Applied</b> Data Science
                </p>
                <p className={styles.club}>
                    & <span className="highlight">Linear Algebra</span> Club
                </p>
                <div className={styles.buttons}>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog">
                        <button className={styles.primaryButton}>Apply to Join</button>
                    </a>
                    <button className={styles.contactButton}>Contact Us</button>
                </div>
            </motion.div>
            <motion.div variants={rightSideVariants} initial="initial" animate="animate" className={styles.rightSide}>
                <img src="/hero.png" alt="" />
            </motion.div>
        </div>
    );
}

export default Hero;