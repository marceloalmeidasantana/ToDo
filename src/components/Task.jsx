import styles from './Task.module.css'
import { CgTrash } from 'react-icons/cg'
import { MdRadioButtonUnchecked, MdOutlineCheckCircleOutline  } from 'react-icons/md'

export function Task( {id, title, completed, onDeleteTask, onCompletedTask} ){

    function handleDeleteTask(){
        onDeleteTask(id)
    }

    function handleCompeted(){
       onCompletedTask(id)
    }

    return(
        <div className={completed ?  styles.taskCompleted :  styles.task}>
            <div className={completed ? styles.checkCompleted : styles.check}>
              {completed ? <MdOutlineCheckCircleOutline size={22} onClick={handleCompeted}/> : <MdRadioButtonUnchecked size={22} onClick={handleCompeted} />} 
            </div>
            <div className={styles.title}>
            <p>{title}</p>
            </div>
            
            <div className={styles.traskButton}>
                <button onClick={handleDeleteTask}>
                    <CgTrash size={20} />
                </button>
            </div>
         </div>
    )
}