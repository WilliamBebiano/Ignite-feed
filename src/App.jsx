import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/> 
        <main>
          <Post
            author="William Bebiano"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sunt iusto perspiciatis earum molestiae deserunt sed architecto magni dolore iure minima, explicabo illum saepe, pariatur consectetur aperiam nisi ab quam! "
          />
          <Post
            author="Gabriel Buzzi"
            content="Um post muito legal"
          />
        </main>
      </div>
    </div>
  )
}


