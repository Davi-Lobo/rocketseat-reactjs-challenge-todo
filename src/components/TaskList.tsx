import { Task } from './Task';
import { TaskType } from './TasksContainer'

import styles from './TaskList.module.css';
import emptyImage from '../assets/clipboard.png';

interface TaskListProps {
    tasks: TaskType[];
    toggleTask: ({ id, taskStatus }: { id: number; taskStatus: boolean }) => void;
    deleteTask: (id: number) => void;
};

export function TaskList({tasks, toggleTask, deleteTask} : TaskListProps) {
    if (tasks.length > 0) {
        return(
            <ul className={styles.taskList}>
                
                {tasks.map( (task, index) => {
                    return(
                        <Task
                            key={task.id}
                            task={task}
                            onToggleTask={toggleTask}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </ul>
        );
    }

    return(
        <div className={styles.empty}>
            <img src={emptyImage} alt="Sem tarefas" />
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}