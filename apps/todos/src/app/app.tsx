// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

type Todo = {
  title: string;
};

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'todo1' },
    { title: 'todo2' },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      { title: `New todo ${Math.floor(Math.random() * 1000)}` },
    ]);
  };

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li className="todo" key={todo.title}>
            {todo.title}
          </li>
        ))}
      </ul>
      <button id="add-todo" type="button" onClick={addTodo}>
        Add Todo
      </button>
      <div />
    </>
  );
}

export default App;
