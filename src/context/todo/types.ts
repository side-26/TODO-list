
import { ID } from '@config/generalTypes';
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
    todosArr: todoArrType[],
    activeTodosArr: todoArrType[]
}
export type todoArrType = {
    id: ID,
    todoName: string,
    isChecked: boolean
}