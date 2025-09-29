import { Mail } from "lucide-react";

const links = [
    {
        title: "About Us",
        href: "#about"
    },
    {
        title: "Members",
        href: "#members"
    },
    {
        title: "Apply Now",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog"
    },
]
function Footer() {
    return (
        <div className="bg-[#222222] w-full flex gap-30 px-16 pt-10 pb-14">
            <div>
                <h3 className="font-semibold text-xl">About Us</h3>
                <p className="w-100 text-md mt-3">We empower students to gain undergraduate level of expertise in linear algebra through practical data science experience.</p>
                <a href="">
                    <p className="mt-5 gap-[6px] flex items-center cursor-pointer hover:opacity-70">
                        <Mail size={16} />
                        <span>
                            cwentling@caravel.org
                        </span>
                    </p>
                </a>
                
            </div>
            <div>
                <h3 className="font-semibold text-xl">Links</h3>

                <div className="mt-3 flex flex-col gap-[6px]">
                    {links.map((link, index) => (
                        <a className="hover:opacity-70" key={index} href={link.href}>{link.title}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;