import React , { useState } from "react";
import "./todo.css";

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
    <div className="outer">
        <div className="container">
            <div className="form">
                <h1>To Do App</h1> 
                <form onSubmit={addTodo}>
                    <input type="text" value={tasks} onChange={setTaskValue}/>
                    <br></br><br></br><button type="submit" className="submit">ADD</button>
                </form>
                <br></br>
            </div>
            <div className="box">
                <h3>To Do's</h3>
                <ol className="center-list"> 
                    {todos.map((item) => {
                        return (
                            <div key={item.id} className="todos">
                                <li>{item.todo + "   "} <button onClick={() => deleteTodo(item.id)} className="remove">X</button>  </li>
                                {/* <button onClick={() => deleteTodo(item.id)} className="remove">X</button> */}
                            </div>
                        );
                    })}
                </ol>
            </div>
        </div>
    </div>
    );
};

export default Main;