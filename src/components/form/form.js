import styles from "./form.module.css";
function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.form__container}>
        <div className={styles.form__container__title}>
          <h3>Hi, talking and coffee? ☕</h3>
        </div>
        <div className={styles.form__container__input}>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="email" placeholder="Email" />
          <input type="text" id="subject" placeholder="Subject" />
          <textarea id="message" />
          <button className={styles.form__button}> enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
