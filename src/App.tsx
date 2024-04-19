import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { Task } from "./components/Task";

import './global.css';

import styles from './App.module.css';


export default function App() {
  return (
    <>
      <Header/>

      <main className={styles.pageMain}>
        <CreateTask/>

        <div className={styles.tasksContainer}>
          <header>
              <strong className={styles.createdTasks}>Tarefas criadas <span>5</span></strong>
              <strong className={styles.finishedTasks}>Tarefas concluídas <span>2 de 5</span></strong>
          </header>

          <ul className={styles.taskList}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </ul>
        </div>
      </main>
    </>
  )
}
