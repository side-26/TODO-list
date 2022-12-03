import TodoList from "@pages/todoList";
import FooterLayout from "@layouts/footer";
import { Context } from "@context/index";
import { useTodoList } from "@hooks/useTodoList";
function App() {
  const {
    todo,
    isInvalid,
    todosArr,
    setActiveTodo,
    setCreateTodo,
    setDeleteCompletedTodos,
    setDeleteTodo,
    activeTodosArrLen,
    setOnChange,
    activeTodosArr,
    setshowAllTodosState,
    setShowCompletedTodos,
    setShowAllTodos,
    showAllTodosState,
    isEmpty,
  } = useTodoList();
  return (
    <Context.Provider
      value={{
        todo,
        isInvalid,
        todosArr,
        activeTodosArr: activeTodosArr,
        createTodo: setCreateTodo,
        deleteTodo: setDeleteTodo,
        handleActiveTodo: setActiveTodo,
        handleShowingAllTodos: setShowAllTodos,
        deleteCompletedTodos: setDeleteCompletedTodos,
        showActiveTodos: setShowCompletedTodos,
        handleOnChange: setOnChange,
        showAllTodosState,
        activeTodosArrLen,
        isEmpty,
      }}
    >
      <>
        <FooterLayout>
          <TodoList />
        </FooterLayout>
      </>
    </Context.Provider>
  );
}

export default App;
