import styles from './Tasks.module.css';
import { Task } from './Task'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiSpreadsheet } from 'react-icons/bi'
import { useState, useCallback } from 'react';

export function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [count, setCount] = useState(0)
    const [amountCompleted, setAmountCompleted] = useState(0);

function handleNewTask(){
    setNewTaskTitle(event.target.value);
}

function handAddNewTask(){ 
    setCount(count +1)              
    const newTask = {
        id: count,
        title: newTaskTitle,
        completed : false
        }
    setTasks([...tasks, newTask]);        
    setNewTaskTitle('');
}

function DeleteTask(taskToDelete){
    const taskWithoutDelete = tasks.filter(tasks => tasks.id !== taskToDelete);
    
    setTasks(taskWithoutDelete)

    const indTask = tasks.findIndex((tasks) => tasks.id === taskToDelete);

    const isCompleted = tasks[indTask].completed;
    if (isCompleted){
        setAmountCompleted(amountCompleted -1)    
    }
}

function CompletedTask(id){
    const taskIndex = tasks.findIndex((tasks) => tasks.id === id)
    const tempTasks = [...tasks]
    tempTasks[taskIndex].completed = !tempTasks[taskIndex].completed;

    setAmountCompleted(tasks.filter(t => t.completed).length)    
    setTasks(tempTasks);
}
//Focar curso no input
const newTaskInput = useCallback((inputElement) => {
    if (inputElement) {
        inputElement.focus();
    }})

const withTask = tasks.length != 0
const taskIsEmpty = newTaskTitle.length == 0
    return(
        <>
        <div className={styles.div}>
            <input 
                className={styles.input} 
                type="text" 
                ref={newTaskInput}
                placeholder='Adicione uma nova tarefa' 
                onChange={handleNewTask}
                value={newTaskTitle}
                required
                title='Nova tarefa'
                />
            <button 
            type='submit'
            disabled={taskIsEmpty}
            onClick={handAddNewTask}
            className={styles.buttonCreat} 
            title='Criar tarefa'> Criar <AiOutlinePlusCircle size={15}/>     
            </button>
                    <div className={styles.counts}>
                            <p className={styles.to}>Taferas criadas <span>{tasks.length}</span> </p>
                            <p className={styles.do}>Concluídas <span> {amountCompleted} de {tasks.length} </span></p>
                        </div>
                    <div className={styles.listTask}>  
                        {tasks.map(todo => {
                        return(
                            <Task 
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                onDeleteTask={DeleteTask}
                                onCompletedTask={CompletedTask}
                            />)
                        })}
                        <div className={styles.withoutTask} hidden={withTask}>
                            <BiSpreadsheet size={50}/>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    
                </div>
         </div>
        </>
    )
}