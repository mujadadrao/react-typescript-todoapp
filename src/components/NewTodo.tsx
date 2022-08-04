import React, { useRef } from "react";

import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const text = inputRef.current!.value;
    props.onAddTodo(text);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label>Todo Text</label>
        <input ref={inputRef} type="text" id="todo-text"></input>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
