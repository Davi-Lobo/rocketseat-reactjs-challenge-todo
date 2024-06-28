import { Task } from './Task';

import styles from './TaskList.module.css';

export function TaskList() {
    return(
        <ul className={styles.taskList}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </ul>
    );
}