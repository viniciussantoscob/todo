import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./styles";
import { MagicMotion } from 'react-magic-motion'

export function List(){

    const [taskList, setTaskList] = useState(localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [])
    const [newTask, setNewTask] = useState('')

    useEffect(() => {
        localStorage.setItem('taskList',JSON.stringify(taskList))
        }, [taskList]
    )

    function addTask(e){
        e.preventDefault(); //Evita que o comportamento padrão seja executado, ou seja, o refresh automático na página.

        setTaskList([{id: new Date().getTime(), title: newTask}, ...taskList])
        setNewTask('');
    }

    function removeTask(id){
        setTaskList(
            taskList.filter(task => (task.id !== id))
        )
    }

    return (
        <MagicMotion transition={{type: 'spring', bounce: 0.5}}>
            <StyledList>

                <form onSubmit={addTask}>
                    <input 
                        type="text" 
                        placeholder="Digite sua tarefa" 
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        disabled={!newTask}
                    >
                        Criar
                    </button>
                </form>

                {
                    taskList.map((task) => (
                        <Task title={task.title} id={task.id} key={task.id} onRemove={removeTask}/>
                    ))
                }

            </StyledList>
        </MagicMotion>
    )
}