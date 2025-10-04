import Image from "next/image";
import styles from './navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="/">
                <Image
                    src="/logo.png"
                    className={styles.logo}
                    alt="Caravel Academy Linear Algebra logo"
                    width={230}
                    height={38}
                    priority
                />
            </a>

            <div className={styles.links}>
                <a href="#about" className={styles.aboutUs}>About Us</a>
                <a href="#members" className={styles.members}>Members</a>
                <a href="#contact" className={styles.contactUs}>
                    <button>Contact Us</button>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
