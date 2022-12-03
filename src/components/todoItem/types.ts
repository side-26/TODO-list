import { ID } from '@config/generalTypes';
export type todoItemType = {
    todoName: string,
    id: ID,
    isChecked: boolean,
    handleDeleteItem: (id: ID) => void,
    handleCheckItem: (id: ID) => void
}