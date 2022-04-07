import React, { useState } from "react";

const Todo = () => {

    const [task,settask] = useState("");
    const [todo,settodo] = useState([]);
    const [C,setcheck] = useState(true);
    const PutTask = (e) => {
        console.log("changing input",e.target.value);
        settask(e.target.value)
    }

    const addTask = () =>{
        if(task!==""){
        settodo([...todo,task]);
        }
    }

    const check_fuc = (e) => {
        console.log(e)
        if(e.target.checked){
            setcheck(e.target.checked = true);
        }else if(e.target.checked===false){
            setcheck(e.target.checked = false);
        }
    }

    console.log(todo)
    return (
        <>
        <h1>Todo</h1>
        <div id="container_list">
        {
            todo.map((el) => {
                return <div id="Task_list">
                    <div>
                    <h3>{el}</h3>
                    </div>
                    <div style={{height:'100',width:22}}>
                    <label class="container">
                        <input onClick={check_fuc} type="Checkbox" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                    </div>
                    </div>
            })
        }
        </div>
        <div id="input_div">
        <input id="task_input" type="text" value={task} placeholder="Wirte Something" onChange={PutTask} />
        <button id="add_btn" onClick={addTask}>+</button>
        </div>
        </>
    )
}

export default Todo