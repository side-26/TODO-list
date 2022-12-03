import { useState, useEffect } from "react";
import { ID } from "@config/generalTypes";
export const useTodoList = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState("");
  const [activeTodosArr, setActiveTodos] = useState<
    { id: ID; todoName: string; isChecked: boolean }[]
  >([]);

  const [todosArr, setTodosArr] = useState<
    { id: ID; todoName: string; isChecked: boolean }[]
  >([]);
  useEffect(() => {
    setActiveTodos([...todosArr].filter((todo) => !todo.isChecked));
  }, [todosArr]);
  const [showAllTodosState, setshowAllTodosState] = useState(true);
  const activeTodosArrLen = activeTodosArr.length
  const isEmpty = !activeTodosArrLen ? true : false;
  const [isInvalid, setIsInvalid] = useState(false);
  const setCreateTodo = (todoName: string): void => {
    if (!todoName.trim().length) setIsInvalid(true);
    else {
      setId(id + 1);
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
    console.log(todosArr);
  };
  const setShowAllTodos = () => {
    setshowAllTodosState(true);
    // alert("fuck u");
    console.log(todosArr);
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
