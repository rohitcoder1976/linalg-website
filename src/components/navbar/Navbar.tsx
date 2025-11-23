import Image from "next/image";
import styles from './navbar.module.scss';

interface Props {
    handleAboutScroll: () => void;
    handleMembersScroll: () => void;
}

function Navbar({ handleAboutScroll, handleMembersScroll }: Props) {

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
                <span onClick={handleAboutScroll} className={styles.aboutUs + " " + styles.link}>About Us</span>
                <span onClick={handleMembersScroll} className={styles.members + " " + styles.link}>Members</span>
                <a href="#contact" className={styles.contactUs}>
                    <button>Contact Us</button>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
