import { useEffect, useState } from "react";
import CardProyect from "../card-proyect/card-proyect";
import styles from "./proyects.module.css";

function MyProyects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("api/data")
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);
  return (
    <section className={styles.proyectsConteiner}>
      <div className={styles.conteinerTitle}>
        <h2>My Proyects</h2>
      </div>
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
  );
}

export default MyProyects;
