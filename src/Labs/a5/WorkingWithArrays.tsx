import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<any[]>([]);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const deleteTodo = async (todo: { id: any; title?: string; description?: string; due?: string; completed?: boolean; }) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };
    const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const API = "http://localhost:4000/a5/todos";
    return (
        <div>
            <h2>Working with Arrays</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        <button onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                        <button onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <button onClick={createTodo} >
                Create Todo
            </button>
            <button onClick={() => deleteTodo(todo)}
                className="btn btn-danger float-end ms-2">
                Delete
            </button>

            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: Number(e.target.value)
                })} />
            <br />
            <input value={todo.title} type="text"
                onChange={(e) => setTodo({
                    ...todo,
                    title: e.target.value
                })} />
            <br />
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <label>
                <input type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <button onClick={postTodo}> Post Todo </button>
            <br />
            <button onClick={updateTodo}>
                Update Todo
            </button>
            <br />
            <button onClick={updateTitle} >
                Update Title
            </button>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>

            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>


            <h3> Editing the description in an Array</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Description with ID = {todo.id}
            </a>
            <input type="text"
                value={todo.description}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        description: e.target.value,
                    })}
            />
            <h3> Updating completed in an Array</h3>
            <a href={`${API}/${todo.id}/completed/${todo.completed}\t`}>
                Updated Completed with ID = {todo.id}
            </a>

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        completed: e.target.checked,
                    })}
            />



        </div>
    );
}
export default WorkingWithArrays;