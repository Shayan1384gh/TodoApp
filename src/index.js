import { createRoot } from "react-dom/client"
import Topform from "./topform";
import TodoApp from "./todo";
import React, {useState} from "react";
import {taskcontext, Taskprovider} from "./context";

const App = () => {
    return(
        <Taskprovider>
            <div>
                <Topform/>
                <TodoApp/>
            </div>
        </Taskprovider>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<App/>)