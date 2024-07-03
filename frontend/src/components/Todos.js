// frontend/src/components/Todos.js
import React, { useState, useEffect } from 'react';

const Todos = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const response = await fetch('/api/todos');
//       const data = await response.json();
//       setTodos(data);
//     };
//     fetchTodos();
//   }, []);

  return (
    <div>
      <h2>Your Todos</h2>
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))} */}
        <li>Test</li>
      </ul>
    </div>
  );
};

export default Todos;
