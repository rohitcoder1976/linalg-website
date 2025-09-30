"use client"

import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        x: -200
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1
        }
    }
};

function CTA() {
    return (
        <div id="contact" className="flex justify-center items-center min-h-[calc(100vh)] py-4 px-6">
            <motion.div variants={variants} initial="initial" whileInView="animate">
                <motion.div variants={variants} className="flex justify-center">
                    <div>
                        <h2 className="poppins font-bold text-4xl text-white">
                            Ready to Do <span className="text-[#d3a971]">Great Things?</span>
                        </h2>
                        <p className="text-lg w-160 mt-4">Apply now to gain invaluable practical experience in a field that will prepare you for any STEM college path.</p>
                    </div>
                </motion.div>
                <motion.div variants={variants} className="flex justify-center mt-2">
                    <div className="relative">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog">
                            <button
                                className="py-[10px] px-7 rounded-lg border-2 border-white poppins font-semibold text-md text-black
                                bg-white cursor-pointer hover:opacity-70 duration-100 mt-5 w-60"
                            >Apply Now</button>
                        </a>
                        <p className="text-white mt-3">
                            Or contact <a className="text-[#d3a971] hover:opacity-80 " href="mailto:cwentling@caravel.org">cwentling@caravel.org</a> for more info
                        </p>
                        <span className="absolute bg-white w-4 h-4 left-[-47px] top-[0] rounded-full"></span>
                        <span className="absolute bg-white left-[-40px] w-[2px] top-[8px] bottom-3"></span>
                        <span className="absolute bg-white left-[-40px] bottom-3 h-[2px] w-6"></span>
                        <span className="absolute bg-white left-[-40px] bottom-14 h-[2px] w-6"></span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CTA;