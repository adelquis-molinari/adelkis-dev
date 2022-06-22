import styles from "./Footer.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
function Footer() {
  const year = new Date().getFullYear();
  const [isDark, setIsDarck] = useState(false);
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode) {
      setIsDarck(true);
    }
  }, []);
  return (
    <footer className={styles.footer}>
      <a href="/" rel="noopener noreferrer">
        {year} || by{" "}
        <span className={styles.logo}>
          <Image
            src={isDark ? "/logo-dark.png" : "/logo.png"}
            alt="Adelkis.dev"
            width={88}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
