import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Typed from "typed.js";
import Link from "next/link";
import styles from "./header-home.module.css";

function HeaderHome() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["I'm marketing", "I'm designer", "developer-fullstack"],
      typeSpeed: 80,
      backSpeed: 100,
      showCursor: false,
    };
    typed.current = new Typed(el.current, options);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Adelkis<span className={styles.typed}>.dev</span>
      </h1>
      <div className={styles.contentTyped}>
        <span className={styles.typed} ref={el}></span>
      </div>
      <div className={styles.contentIcon}>
        <Link
          href="https://github.com/adelquis-molinari"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <a target="blank" rel="noopener noreferrer">
            <FaGithub className={styles.iconGit} />
          </a>
        </Link>

        <Link
          href="https://www.linkedin.com/in/molinari-adelquis/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <a target="blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.iconLinked} />
          </a>
        </Link>
        <Link href="https://twitter.com/adelkisDev">
          <a target="blank" rel="noopener noreferrer">
            <FaTwitterSquare className={styles.iconTwitter} />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default HeaderHome;
