import React, { useState, useEffect } from 'react';

function HookuseEffect() {
  // State for the list of todos and the current input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from localStorage when the component mounts
//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);
//     console.log("I am running on first render");
//   }, []); // Empty dependency array means this effect runs only once on mount
//   // Save todos to localStorage whenever the todos state changes
//   useEffect(() => {
//     console.log("I am running if todos array change");
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]); // This effect runs whenever the todos state changes
//   useEffect(() => {
//    console.log(inputValue);
//   }, ); 
    
  
  // Empty dependency array means this effect runs every time on mount

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, inputValue]);
    setInputValue(''); // Clear the input field
  };

  // Function to remove a todo by index
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)
        }//e=>event
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookuseEffect;