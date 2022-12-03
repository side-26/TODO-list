import Form from "@components/form";
import { Context } from "@context/index";
import TodoListSec from '@components/todoList';
import { useMeta } from "@hooks/useMeta";
import {useContext} from 'react';
export default function TodoList() {
  const [setTitle] = useMeta();
  const {todo}=useContext(Context)
  
  setTitle("todo-list");
  return (
      <div>
        <section className="pt-24 lg:pb-4 bg-red-300 flex flex-col items-center">
          <div className="uppercase text-2xl font-bold">to do list</div>
          <div className="uppercase text-2xl font-bold">{todo}</div>
          <Form />
        </section>
        <section>
          <TodoListSec/>
        </section>
      </div>

  );
}
