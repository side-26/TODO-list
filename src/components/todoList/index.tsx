import TodoItem from "@components/todoItem";
import { Context } from "@context/index";
import { useContext, useEffect, useState } from "react";
import { todoArrType } from "@context/todo/types";
import "./style.css";
export default function TodoListSec() {
  const {
    todosArr,
    deleteTodo,
    handleActiveTodo,
    isEmpty,
    showAllTodosState,
    activeTodosArr,
  } = useContext(Context);
  const [todoArr, setTodoArr] = useState<any>([]);
  useEffect(() => {
    if (showAllTodosState) setTodoArr([...todosArr]);
    else setTodoArr([...activeTodosArr]);
  }, [showAllTodosState, todosArr,activeTodosArr]);

  return (
    <section className="">
      <div className="text-gray-300 p-3 lg:px-10 xl:px-14">
        What needs to be done?
      </div>
      <div>{showAllTodosState}</div>
      <div>
        {!todoArr.length ? (
          <div className="typing-demo mx-auto">there is no data to show!</div>
        ) : (
          todoArr.map((todo: any,) => (
            <div>
              <TodoItem
                id={todo.id}
                isChecked={todo.isChecked}
                todoName={todo.todoName}
                handleCheckItem={handleActiveTodo}
                handleDeleteItem={deleteTodo}
                key={todo.id}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
