import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './components/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), text: todoText},
    ]);
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todos} onTodoDelete={deleteTodoHandler}/>
    </div>
  );
}

export default App;
