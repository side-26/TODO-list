import { todoContextType } from './types';
export const todoContext: todoContextType = {
    todo: '',
    isInvalid: false,
    setTodo: () => { },
    deleteTodo: () => { },
    deleteAllTodo: () => { },
    handleActiveTodo: () => { },
    todosArr: []
}