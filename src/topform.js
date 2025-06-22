import {useContext, useState} from "react";
import {taskcontext} from "./context";


const Topform = ()=>{
    const [input , setInput] = useState("")
    const [task , setTask] = useContext(taskcontext)

    const handleTaskAdd = ()=>{
        setTask([...task , { text : input , done: false}])
        setInput("")
    }
    return (
        <div className={"topform"}>
            <h2 className={"title"}>Welcome to TodoApp</h2>
            <div className={"container"}>
                <input className={"input"} placeholder={"Write your works ..."} value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className={"btn"} onClick={handleTaskAdd}>Add</button>
            </div>
        </div>
    )
}
export default Topform