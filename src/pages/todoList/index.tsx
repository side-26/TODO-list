import Form from "@components/form";
import TodoListSec from "@components/todoList";
import { useMeta } from "@hooks/useMeta";
export default function TodoList() {
  const [setTitle] = useMeta();
  setTitle("todo-list");
  return (
    <div>
      <section className="pt-24 lg:pb-4 bg-primary flex flex-col items-center">
        <div className="capitalize lg:mb-8 text-2xl md:text-3xl font-bold text-white">to do list</div>
        <Form />
      </section>
      <section>
        <TodoListSec />
      </section>
    </div>
  );
}
