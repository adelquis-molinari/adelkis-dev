import styles from "./Skills.module.css";

const skills = ["html-5", "css", "js", "react", "node-js", "express", "mdb"];

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div>
        {skills.map((skill) => (
          <img
            key={skill}
            src={`/${skill}.png`}
            alt={skill}
            className={styles.skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
