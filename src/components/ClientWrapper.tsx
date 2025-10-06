"use client"

import Navbar from "@/components/navbar/Navbar";
import OurTeam from "@/components/OurTeam";
import About from "@/components/about/About";
import { useRef } from "react";
import Footer from "./footer/Footer";

export default function ClientWrapper() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const membersRef = useRef<HTMLDivElement>(null);

    const handleAboutScroll = () => {
        if (aboutRef.current) {
            const top = aboutRef.current.getBoundingClientRect().top + window.scrollY - 170;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const handleMembersScroll = () => {
        if (membersRef.current) {
            const top = membersRef.current.getBoundingClientRect().top + window.scrollY - 170;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };


    return (
        <div>
            <Navbar handleAboutScroll={handleAboutScroll} handleMembersScroll={handleMembersScroll} />
            <About aboutRef={aboutRef} />
            <OurTeam membersRef={membersRef} />
        </div>
    );
}