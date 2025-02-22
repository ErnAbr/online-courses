import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];

  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, t.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
