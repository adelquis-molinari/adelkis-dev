import styles from "../styles/Home.module.css";

import CardProyect from "../src/components/card-proyect/card-proyect";
import HeaderHome from "../src/components/header/header-home";
import Form from "../src/components/form/form";
import AboutContent from "../src/components/about-content/about-content";
import Skills from "../src/components/skillls/skills";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("api/data")
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);
  return (
    <main className={styles.main}>
      <HeaderHome />
      <AboutContent />
      <Skills />
      <section className={styles.proyects}>
        <h2>My Proyects</h2>
        <div className={styles.proyectsItem}>
          {data.map((item) => (
            <CardProyect
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Contact</h2>
        <Form />
      </section>
    </main>
  );
}
