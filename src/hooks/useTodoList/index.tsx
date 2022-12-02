import { useState } from "react";
export const useTodoList = () => {
  const [todo, setTodo] = useState("");
  const [todosArr, setTodoArr] = useState<
    { id: number; todoName: string; isChecked: boolean }[]
  >([]);
  let id: number = 0;
  const [isInvalid, setIsInvalid] = useState(false);
  const setCreateTodo = (todoName: string):void => {
    const todoObj = {
      id: id++,
      todoName: todo,
      isChecked: false,
    };
    if (!todoName.trim().length) setIsInvalid(true);
    else {
      setTodoArr([...todosArr, { ...todoObj }]);
      setOnChange("");
    }
  };
  const setDeleteTodo = (id: number) => {
    const filterdTodo = [...todosArr].filter((todo) => todo.id !== id);
    setTodoArr(filterdTodo);
  };
  const setDeleteAllTodos = () => {
    setTodoArr([]);
  };
  const setActiveTodo = (id: number) => {
    setTodoArr((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isChecked: !obj.isChecked };
        }
        return obj;
      })
    );
  };
  const setOnChange = (name: string) => {
    setTodo(name);
  };
  return {
    todo,
    isInvalid,
    todosArr,
    setActiveTodo,
    setCreateTodo,
    setDeleteAllTodos,
    setDeleteTodo,
    setOnChange,
  };
};
