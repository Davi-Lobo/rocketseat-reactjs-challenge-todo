import styles from './CreateTask.module.css';

export function CreateTask() {
    return(
        <form className={styles.createTaskForm}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar</button>
        </form>
    );
}