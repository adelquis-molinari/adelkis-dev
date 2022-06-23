import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import styles from "./Card.module.css";

function CardProyect({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <a>
          <Image src={`/${image}.png`} height={200} width={200} alt={title} />
          <div className={styles.cardDescription}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default CardProyect;
