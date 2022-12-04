import { useState, useEffect } from "react";
import { ID, todoItemType } from "@config/generalTypes";
export const useTodoList = () => {
  const [todo, setTodo] = useState("");
  const [activeTodosArr, setActiveTodos] = useState<todoItemType[]>([]);
  const [todosArr, setTodosArr] = useState<todoItemType[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const activeTodosArrLen = activeTodosArr.length;
  const [showAllTodosState, setshowAllTodosState] = useState(true);
  useEffect(() => {
    setActiveTodos([...todosArr].filter((todo) => !todo.isChecked));
    setIsEmpty(() =>
      (showAllTodosState && !todosArr.length) ||
      (!showAllTodosState && !activeTodosArrLen)
        ? true
        : false
    );
  }, [todosArr, activeTodosArrLen, showAllTodosState]);

  const [isInvalid, setIsInvalid] = useState(false);
  const setCreateTodo = (todoName: string): void => {
    if (!todoName.trim().length) setIsInvalid(true);
    else {
      setIsInvalid(false)
      const todoObj = {
        id: Date.now(),
        todoName: todo,
        isChecked: false,
      };
      setTodosArr([{ ...todoObj }, ...todosArr]);
      setOnChange("");
    }
  };
  const setDeleteTodo = (id: ID) => {
    const filterdTodo = [...todosArr].filter((todo) => todo.id !== id);
    setTodosArr(filterdTodo);
  };
  const setDeleteCompletedTodos = () => {
    setTodosArr([...todosArr].filter((todo) => !todo.isChecked));
  };
  const setActiveTodo = (id: ID) => {
    setTodosArr((current) =>
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
  const setShowCompletedTodos = () => {
    setshowAllTodosState(false);
  };
  const setShowAllTodos = () => {
    setshowAllTodosState(true);
  };
  return {
    todo,
    activeTodosArr,
    showAllTodosState,
    activeTodosArrLen,
    isEmpty,
    setshowAllTodosState,
    isInvalid,
    todosArr,
    setActiveTodo,
    setCreateTodo,
    setDeleteCompletedTodos,
    setDeleteTodo,
    setOnChange,
    setShowCompletedTodos,
    setShowAllTodos,
  };
};
