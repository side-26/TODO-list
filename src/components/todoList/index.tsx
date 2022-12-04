import TodoItem from "@components/todoItem";
import { Context } from "@context/index";
import { useContext, useEffect, useState } from "react";
import { todoItemType } from "@config/generalTypes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
  const [todoArr, setTodoArr] = useState<todoItemType[]>([]);
  useEffect(() => {
    if (showAllTodosState) setTodoArr([...todosArr]);
    else setTodoArr([...activeTodosArr]);
  }, [showAllTodosState, todosArr, activeTodosArr]);

  return (
    <section>
      <div className="text-gray-300 p-3 lg:px-10 xl:px-14 border-b-2 border-gray-300">
        What needs to be done?
      </div>
      <div>{showAllTodosState}</div>
      <div>
        <TransitionGroup>
          {isEmpty ? (
            <CSSTransition timeout={500} classNames="fade">
              <div className="typing-demo mx-auto mt-16">
                there is no data to show!
              </div>
            </CSSTransition>
          ) : (
            todoArr.map((todo) => (
              <CSSTransition key={todo.id} timeout={300} classNames="fade">
                <TodoItem
                  id={todo.id}
                  isChecked={todo.isChecked}
                  todoName={todo.todoName}
                  handleCheckItem={handleActiveTodo}
                  handleDeleteItem={deleteTodo}
                  key={todo.id}
                />
              </CSSTransition>
            ))
          )}
        </TransitionGroup>
      </div>
    </section>
  );
}
