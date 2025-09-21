"use client"
import { motion } from "framer-motion";

const members = [
    {
        name: "Rohit Marath '26",
        title: "Founder",
        profilePicture: "/man.png"
    },
    {
        name: "Mrs. Wentling",
        title: "Sponsor",
        profilePicture: "/man.png"
    },
    {
        name: "Sajjan Subramanian '26",
        title: "Member",
        profilePicture: "/man.png"
    },
    {
        name: "Michael Tucker '26",
        title: "Member",
        profilePicture: "/man.png"
    },
    {
        name: "Jonathan Nguyen '26",
        title: "Member",
        profilePicture: "/man.png"
    },
    {
        name: "Robert Evans '26",
        title: "Member",
        profilePicture: "/man.png"
    },
];

const variants = {
    initial: {
        x: -50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.12
        }
    }
};

function OurTeam() {
    return (
        <div className="min-h-[calc(100vh_-_250px)] mt-10 py-4 px-6">
            <h2 className="text-center poppins font-bold text-4xl text-[#d3a971]">Our Team</h2>
            <motion.div variants={variants} initial="initial" whileInView="animate" className="mt-12 flex flex-wrap justify-center gap-20 m-auto w-[80%]">
                {members.map((member, index) => (
                    <motion.div
                        variants={variants}
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <img src={member.profilePicture} className="w-14 h-14 rounded-full border border-white" />
                        <p className="mt-2 poppins text-[#d3a971] text-md">{member.title}</p>
                        <p className="mt-[2px] poppins text-white text-lg">{member.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default OurTeam;