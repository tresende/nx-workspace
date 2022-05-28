import { useEffect, useState } from 'react';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    console.log('🚀 ~ file: app.tsx ~ line 11 ~ getTodos ~ todos', todos);
    setTodos(todos);
  };

  useEffect(() => {
    getTodos();
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
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
