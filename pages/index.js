import styles from "../styles/Home.module.css";

import Image from "next/image";
import CardProyect from "../src/components/cardProyect/card-proyect";
import Form from "../src/components/form/form";
import HeaderHome from "../src/components/header/header-home";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeaderHome />
        <section className={styles.desriptionAbout}>
          <div>
            <h2>About Me</h2>
            <p>
              I'm Adelkis a developer with a lot of passion for developing
              sofware on the web.
              <br />
              So in this blog I will expose all my coriosities and interests.
              <br />
              The technology that I fell in love with and that caused my
              curiosity is React, so I can Consider myself a react developer.
            </p>
          </div>
          <div className={styles.foto}>
            <Image src="/perfil.jpg" height={265} width={184} alt="Adelkis" />
          </div>
        </section>
        <section>
          <h2>My Skills</h2>
          <div className={styles.skills}>
            <Image src="/html-5.png" height={80} width={80} alt="Adelkis" />
            <Image src="/css.png" height={80} width={80} alt="Adelkis" />
            <Image src="/js.png" height={80} width={80} alt="js" />
            <Image src="/react.png" height={80} width={80} alt="react" />
            <Image src="/node-js.png" height={80} width={80} alt="node-js" />
            <Image src="/express.png" height={80} width={80} alt="express" />
            <Image src="/mdb.png" height={80} width={80} alt="mongodb" />
          </div>
        </section>
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
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
