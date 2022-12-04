
import { ID, todoItemType } from '@config/generalTypes';
export type todoContextType = {
    todo: string,
    isInvalid: boolean
    createTodo: (todoName: string) => void,
    deleteTodo: (id: ID) => void,
    deleteCompletedTodos: () => void
    handleActiveTodo: (id: ID) => void,
    showActiveTodos: () => void,
    handleOnChange: (name: string) => void,
    handleShowingAllTodos: () => void,
    showAllTodosState: boolean
    activeTodosArrLen: number,
    isEmpty: boolean
    todosArr: todoItemType[],
    activeTodosArr: todoItemType[]
}