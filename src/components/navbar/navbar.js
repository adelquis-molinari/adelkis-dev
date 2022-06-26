import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      className={
        isScrolled ? `${styles.Scrolled} ${styles.navbar} ` : styles.navbar
      }
    >
      <div>
        <Image
          src={isScrolled ? "/logo-dark.png" : "/logo.png"}
          alt="Adelkis Logo"
          width={132}
          height={24}
        />
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
