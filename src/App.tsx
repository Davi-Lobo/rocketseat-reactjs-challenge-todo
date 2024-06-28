import { Header } from "./components/Header";

import './global.css';

import styles from './App.module.css';
import { TasksContainer } from "./components/TasksContainer";


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
