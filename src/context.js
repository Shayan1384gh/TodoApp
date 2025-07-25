import {createContext , useState} from "react"

export const TaskContext = createContext()
export const Taskprovider = ({children}) => {
    const [task, setTask] = useState([])
    return (
        <TaskContext.Provider value={[task, setTask]}>
            {children}
        </TaskContext.Provider>
    )
}
