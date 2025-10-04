import { Mail } from "lucide-react";
import styles from "./footer.module.scss";

const links = [
    { title: "About Us", href: "#about" },
    { title: "Members", href: "#members" },
    {
        title: "Apply Now",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdrT9iHyOZT5oHfemGs-B2LbQRZj2loL9bIz8Eq72fInzCIBw/viewform?usp=dialog"
    }
];

function Footer() {
    return (
        <div id="footer" className={styles.footer}>
            <div>
                <h3>About Us</h3>
                <p className={styles.aboutText}>
                    We empower students to gain undergraduate level of expertise in linear
                    algebra through practical data science experience.
                </p>
                <a href="mailto:cwentling@caravel.org">
                    <p className={styles.email}>
                        <Mail size={16} />
                        <span>cwentling@caravel.org</span>
                    </p>
                </a>
            </div>

            <div>
                <h3>Links</h3>
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <a key={index} href={link.href}>
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
