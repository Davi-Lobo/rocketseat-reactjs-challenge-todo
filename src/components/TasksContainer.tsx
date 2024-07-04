import { useState, FormEvent, ChangeEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './TaskList';

import styles from './TasksContainer.module.css';

export interface TaskType {
    id: number;
    text: string;
    isCompleted: boolean;
}

export function TasksContainer() {
    const [ tasks, setTasks ] = useState<TaskType[]>([]);
    const [ newTaskText, setNewTaskText ] = useState('');

    const completedTasksCounter = tasks.reduce((accumulator, currentTask) => {
        if(currentTask.isCompleted) {
            return accumulator + 1;
        }

        return accumulator;
    }, 0);

    function handleCreateNewTask(e: FormEvent) {
        e.preventDefault();

        const newTask: TaskType = {
            id: new Date().getTime(),
            text: newTaskText,
            isCompleted: false
        }

        setTasks([
            ...tasks,
            newTask
        ]);

        setNewTaskText('');
    }

    function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
        e.target.setCustomValidity('');
        setNewTaskText(e.target.value);
    }

    function handleToggleTask({ id, taskStatus }: { id: number; taskStatus: boolean }) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isCompleted: taskStatus }
            }

            return { ...task }
        });

        setTasks(updatedTasks);
    }

      function handleDeleteTask(idToDelete: number) {
        const commentsWithoutDeletedOne = tasks.filter(task => {
            return task.id != idToDelete;
        });
    
        setTasks(commentsWithoutDeletedOne);
    }

    return(
        <>
            <form className={styles.createTaskForm} onSubmit={handleCreateNewTask}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    required
                />
                <button type="submit">Criar <PlusCircle size={20}/></button>
            </form>

            <div className={styles.tasksContainer}>
                <header>
                    <strong className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></strong>
                    <strong className={styles.finishedTasks}>Tarefas concluídas <span>{completedTasksCounter} de {tasks.length}</span></strong>
                </header>

                <TaskList
                    tasks={tasks}
                    toggleTask={handleToggleTask}
                    deleteTask={handleDeleteTask}
                />
            </div>
        </>
    );
}