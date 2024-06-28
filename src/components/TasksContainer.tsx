import { PlusCircle } from 'phosphor-react';

import styles from './TasksContainer.module.css';
import { TaskList } from './TaskList';

export function TasksContainer() {
    return(
        <>
            <form className={styles.createTaskForm}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button type="submit">Criar <PlusCircle size={20}/></button>
            </form>

            <div className={styles.tasksContainer}>
                <header>
                    <strong className={styles.createdTasks}>Tarefas criadas <span>5</span></strong>
                    <strong className={styles.finishedTasks}>Tarefas concluídas <span>2 de 5</span></strong>
                </header>

                <TaskList/>
            </div>
        </>
    );
}