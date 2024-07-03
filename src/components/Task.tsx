import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
    task: {
        id: number;
        text: String;
        isCompleted: Boolean;
    };
    onDeleteTask: (id: Number) => void;
};

export function Task({task, onDeleteTask}: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return(
        <li className={styles.taskItem}>
            <div className={styles.taskContent}>
                <label className={styles.customCheckbox}>
                    <input type="checkbox" />
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