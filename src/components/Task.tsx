import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
    return(
        <li className={styles.taskItem}>
            <div className={styles.taskContent}>
                <label className={styles.customCheckbox}>
                    <input type="checkbox" />
                    <span>
                        <Check size={12}/>
                    </span>
                </label>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="button">
                    <Trash size={18}/>
                </button>
            </div>
        </li>
    );
}