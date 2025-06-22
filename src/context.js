import {createContext , useState} from "react"

export const taskcontext = createContext()
export const Taskprovider = ({children}) => {
    const [task, setTask] = useState([])
    return (
        <taskcontext.Provider value={[task, setTask]}>
            {children}
        </taskcontext.Provider>
    )
}
