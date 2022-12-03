import { todoContextType } from './types';
import { ID } from '@config/generalTypes';
export const todoContext: todoContextType = {
    todo: '',
    isInvalid: false,
    createTodo: () => { },
    deleteTodo: (id: ID) => { },
    deleteCompletedTodos: () => { },
    handleActiveTodo: (id: ID) => { },
    showActiveTodos: () => { },
    showAllTodosState:true,
    handleShowingAllTodos:()=>{},
    handleOnChange: () => { },
    activeTodosArrLen: 0,
    isEmpty: true,
    todosArr: [],
    activeTodosArr:[]
}