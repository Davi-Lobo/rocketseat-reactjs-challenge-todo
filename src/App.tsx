import { Header } from "./components/Header";
import { TasksContainer } from "./components/TasksContainer";

import './global.css';
import styles from './App.module.css';


export default function App() {
  return (
    <>
      <Header/>

      <main className={styles.pageMain}>
        <TasksContainer/>
      </main>
    </>
  )
}
