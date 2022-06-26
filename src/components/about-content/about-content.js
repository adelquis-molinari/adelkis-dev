import Image from "next/image";
import styles from "./about.module.css";

function AboutContent() {
  return (
    <section className={styles.desriptionAbout}>
      <div>
        <h2>About Me</h2>
        <p>
          I'm Adelkis a developer with a lot of passion for developing sofware
          on the web.
          <br />
          So in this blog I will expose all my coriosities and interests.
          <br />
          The technology that I fell in love with and that caused my curiosity
          is React, so I can Consider myself a react developer.
        </p>
      </div>
      <div className={styles.foto}>
        <Image src="/cara-cortada.png" height={380} width={260} alt="Adelkis" />
      </div>
    </section>
  );
}

export default AboutContent;
