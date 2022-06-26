import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode) {
      setIsDark(true);
    }
  }, []);

  return (
    <nav
      className={
        isScrolled ? `${styles.Scrolled} ${styles.navbar} ` : styles.navbar
      }
    >
      <div>
        {isDark ? (
          <Image
            src="/logo-dark.png"
            alt="Adelkis Logo"
            width={132}
            height={24}
          />
        ) : (
          <Image
            src={isScrolled ? "/logo-dark.png" : "/logo.png"}
            alt="Adelkis Logo"
            width={132}
            height={24}
          />
        )}
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
