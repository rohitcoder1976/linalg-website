"use client"

import { motion } from "framer-motion";
import styles from "./cta.module.scss";

const variants = {
    initial: { opacity: 0, x: -200 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, staggerChildren: 0.1 }
    }
};

function CTA() {
    return (
        <div id="contact" className={styles.cta}>
            <motion.div variants={variants} initial="initial" whileInView="animate">
                <motion.div variants={variants} className={styles.inner}>
                    <div>
                        <h2 className={styles.title}>
                            Ready to Do <span>Great Things?</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Apply now to gain invaluable practical experience in a field that will prepare you for any STEM college path.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={variants} className={styles.apply}>
                    <div className={styles.box}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog">
                            <button>Apply Now</button>
                        </a>
                        <p>
                            Or contact <a href="mailto:cwentling@caravel.org">cwentling@caravel.org</a> for more info
                        </p>
                        <span className={styles.dot}></span>
                        <span className={styles.lineVertical}></span>
                        <span className={styles.lineBottom}></span>
                        <span className={styles.lineTop}></span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default CTA;
