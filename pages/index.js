import styles from '../styles/Home.module.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

export default function Home () {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings: ['Web Designer', 'Web Developer', 'React Developer', '.dev'],
      typeSpeed: 80,
      backSpeed: 100,
      showCursor: false
    }
    typed.current = new Typed(el.current, options)
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Adelkis<span className={styles.typed} ref={el}></span>
        </h1>

        <p className={styles.description}>
          I'm Adelkis a developer with a lot of passion for developing sofware
          on the web.
          <br />
          So in this blog I will expose all my coriosities and interests.
          <br />
          The technology that I fell in love with and that caused my curiosity
          is React, so I can Consider myself a react developer.
        </p>
      </main>
    </div>
  )
}
