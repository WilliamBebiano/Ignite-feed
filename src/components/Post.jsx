import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}> 
    <header>
        <div className={styles.author} >
          <img src="https://github.com/WilliamBebiano.png" alt='' />
          <div className={styles.authorInfo}>
            <strong>William Bebiano</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='23 de maio ás 11:08h' dateTime='2023-05-23 11:08:30'>
          Publicado há 1h
        </time>
    </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p> 
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design/doctorcare</p>

        <p>#novoprojeto #nlw #rocketseat</p>

      </div>
    </article>
  )
}
