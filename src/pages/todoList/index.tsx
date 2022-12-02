import { useState } from "react";
import Form from "@components/form";
import { Context } from "@context/index";
import { useTodoList } from "@hooks/useTodoList";
export default function TodoList() {
  const {
    todo,
    isInvalid,
    todosArr,
    setActiveTodo,
    setCreateTodo,
    setDeleteAllTodos,
    setDeleteTodo,
    setOnChange,
  } = useTodoList();
  
  return (
    <Context.Provider
      value={{
        todo,
        isInvalid,
        todosArr,
        setTodo: setCreateTodo,
        deleteTodo: setDeleteTodo,
        handleActiveTodo: setActiveTodo,
        deleteAllTodo: setDeleteAllTodos,
      }}
    >
      <div>
        <section className="pt-24 lg:pb-4 bg-red-300 flex flex-col items-center">
          <div className="uppercase text-2xl font-bold">to do list</div>
          <Form />
        </section>
      </div>
    </Context.Provider>
  );
}
