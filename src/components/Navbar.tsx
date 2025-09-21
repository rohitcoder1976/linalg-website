import Image from "next/image";

function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-black flex items-center justify-between py-5 px-10">
            <a href="/">
                <Image
                    src="/logo.png"
                    className="cursor-pointer hover:opacity-80"
                    alt="Caravel Academy Linear Algebra logo"
                    width={230}
                    height={38}
                    priority
                />
            </a>
            
            <div className="flex items-center gap-6">
                <a
                    className="poppins text-md hover:opacity-80 duration-50 cursor-pointer px-2 py-4"
                >About Us</a>
                <a
                    className="poppins text-md hover:opacity-80 duration-50 cursor-pointer px-2 py-4"
                >Members</a>
                <a
                    className="poppins text-md hover:opacity-80 duration-50 cursor-pointer px-2 py-4"
                >Resources</a>
                <button 
                    className="py-2 px-4 rounded-lg border-2 border-[#d3a971] poppins font-semibold text-md text-[#d3a971]
                    cursor-pointer bg-transparent hover:text-white hover:bg-[#d3a971] duration-100"
                >Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar;