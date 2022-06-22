import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.navbarContenier}>
      <nav className={styles.navbar}>
        <div>
          <Image src="/logo.png" alt="Adelkis Logo" width={132} height={24} />
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
    </div>
  );
}
