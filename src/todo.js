import {useContext} from "react";
import {taskcontext} from "./context";


const TodoApp = ()=>{
    const [task , setTask] = useContext(taskcontext)
    const RemoveHandler = (index)=>{
        const updateTask = [...task]
        updateTask.splice(index,1)
        setTask(updateTask)
    }

    const SetDoneHandler = (index)=>{
        const updateTask = [...task]
        updateTask[index].done = !updateTask[index].done
        setTask(updateTask)
    }
    return (
        <ul className={"list"}>
        {task.map((task , index)=>(
            <li className={`small-list ${task.done ? "done-list" : ""}`} key={index}>{task.text}
                <div className={"icons"}>
                    <span onClick={()=>SetDoneHandler(index)}>✅</span>
                    <span onClick={()=>RemoveHandler(index)}>❌</span>
                </div>
            </li>
            ))}
        </ul>
    )

}

export default TodoApp


