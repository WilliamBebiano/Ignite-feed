import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import PropTypes from 'prop-types';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

  // esta variavel guarda o array de comentarios 
  const [comments,setComments] = useState([
    'Post muito Bacana, hein?!'
  ])
 
  // esta variavel guarda toda mudanca do input da text area
  const [newCommentText,  setNewCommentText ] = useState('')


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  
  
  //funcao que segura o evento de criacao de um novo comentario 
  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')//limpa a text area apos publicacao do post
    
   }
 
   //funcao que segura todas as mudancas dentro da text area
   function handleNewCommentChange() {

    setNewCommentText(event.target.value)
   }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author} >
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
      {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a href='#'>{line.content}</a>
              </p>
            );
          }
          return null; // Adicionado para tratar caso line.type não corresponda a 'paragraph' nem 'link'
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea
          name='comment'
          placeholder='Deixe um comentario'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
       {comments.map(comment => {
        return <Comment key={comment.id} content={comment}/>
       })}
      </div>
    </article>
  )
}

Post.propTypes = {
  author: PropTypes.object,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.array,
  line: PropTypes.string,
}
