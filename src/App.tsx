import { Header } from "./components/Header"

import './global.css';
import styles from './App.module.css';
import { CreateTask } from "./components/CreateTask";

export default function App() {
  return (
    <>
      <Header/>

      <main className={styles.pageMain}>
        <CreateTask/>
      </main>
    </>
  )
}
