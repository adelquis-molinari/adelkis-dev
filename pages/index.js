import styles from "../styles/Home.module.css";

import HeaderHome from "../src/components/header/header-home";
import Form from "../src/components/form/form";
import AboutContent from "../src/components/about-content/about-content";
import Skills from "../src/components/skillls/skills";
import MyProyects from "../src/components/proyects/my-proyects";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderHome />
      <AboutContent />
      <Skills />
      <MyProyects />
      <section>
        <h2>Contact</h2>
        <Form />
      </section>
    </main>
  );
}
