import { useEffect, useState } from 'react';

interface Todo {
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const addTodo = async () => {
    const response = await fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
