export type todoContextType = {
    todo: string,
    isInvalid:boolean
    setTodo: (todoName:string) => void,
    deleteTodo: (id:number) => void,
    deleteAllTodo: () => void
    handleActiveTodo: (id:number) => void
    todosArr: todoArrType[]
}
type todoArrType = {
    id: number,
    todoName: string,
    isChecked: boolean
}