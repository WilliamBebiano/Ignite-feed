import { Comment } from './Comment'
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
        </p> 👉 {'  '}
        <a> https://github.com/WilliamBebiano</a>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'> #nlw </a>{' '}
          <a href='#'>#rocketseat</a>{' '}
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentario'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
        
      </div>
    </article>
  )
}
