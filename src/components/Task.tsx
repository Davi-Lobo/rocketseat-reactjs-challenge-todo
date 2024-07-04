import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
    task: {
        id: number;
        text: string;
        isCompleted: boolean;
    };
    onToggleTask: ({ id, taskStatus }: { id: number; taskStatus: boolean }) => void;
    onDeleteTask: (id: number) => void;
};

export function Task({task, onToggleTask, onDeleteTask}: TaskProps) {
    const [taskStatus, setTaskStatus] = useState<boolean>(task.isCompleted);

    function handleToggleTask() {
        setTaskStatus(!task.isCompleted);
        onToggleTask({id: task.id, taskStatus: taskStatus});
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return(
        <li className={styles.taskItem}>
            <div className={`${styles.taskContent} ${task.isCompleted ? styles.completed : ''}`}>
                <label
                    className={styles.customCheckbox}
                    onClick={handleToggleTask}
                >
                    <input
                        readOnly
                        type="checkbox"
                        checked={task.isCompleted}
                    />

                    <span>
                        <Check size={12}/>
                    </span>
                </label>
                
                <p>{task.text}</p>

                <button type="button" onClick={handleDeleteTask}>
                    <Trash size={18}/>
                </button>
            </div>
        </li>
    );
}