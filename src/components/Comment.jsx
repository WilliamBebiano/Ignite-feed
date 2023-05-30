import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import PropTypes from 'prop-types';
import { Avatar } from './Avatar'

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/WilliamBebiano.png" alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> William Bebiano</strong>
              <time title='23 de maio ás 11:08h' dateTime='2023-05-23 11:08:30'>
                Cerca de 1h atras
              </time>
            </div>
            <button title='Deletar Comentario'>
              <Trash size={24}/>
            </button>

          </header>

          <p>{content}</p>

        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}


Comment.propTypes = {
  content: PropTypes.object,
  
}
