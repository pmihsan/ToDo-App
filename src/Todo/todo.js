import React from "react";
import { useState } from "react";

let globalId = 0;

const Main = () => {

    const[tasks, setTasks] = useState("");
    const[todos, setTodos] = useState([]);

    const setTaskValue = (event) => {
        setTasks(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        setTasks('');
        setTodos(oldTodo => {
            return [...oldTodo, {todo: tasks, id: globalId}];
        });
        globalId++;
    };

    const deleteTodo = (todoId) => {
        setTodos(oldTodo => oldTodo.filter(item => item.id !== todoId));
    }; 

    return (
    <div className="parent">
        <div className="child">
            <h1>To Do App</h1> 
            <form onSubmit={addTodo}>
                <input type="text" value={tasks} onChange={setTaskValue}/>
                <button type="submit">ADD</button>
            </form>
            <ol>
                <h3>To Do's</h3>
                {todos.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>{item.todo + "   "}</li>
                            <button onClick={() => deleteTodo(item.id)}>Remove</button>
                            
                        </div>
                    );
                })}
            </ol>
        </div>
    </div>
    );
};

export default Main;