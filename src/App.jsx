import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts = [{
  id: 1,
  author: {
    avatarUrl: 'https://github.com/WilliamBebiano.png',
    name: 'William Bebiano',
    role: 'Web Developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},        
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'www.williambebiano.de'},
  ],
  publishedAt: new Date('2023-05-23 11:08:30')
},
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat'
  },
  content: [
    {type: 'paragraph', content: 'Fala pessoal 👋'},        
    {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '},
    {type: 'link', content: 'www.diego.rocketseat.com'},
  ],
  publishedAt: new Date('2023-05-23 11:08:30')
}
]



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/> 
        <main>
        {posts.map(post => {
          return (
          <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />)
        })}
        </main>
      </div>
    </div>
  )
}


