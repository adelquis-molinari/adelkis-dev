import styles from "./Skills.module.css";
import Image from "next/image";
function Skills() {
  return (
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
  );
}

export default Skills;
