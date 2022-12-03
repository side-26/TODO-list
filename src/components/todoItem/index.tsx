// import AppInput from "@components/appInput";
import AppButton from "@components/appButton";
import { todoItemType } from "./types";
export default function TodoItem({
  todoName,
  id,
  isChecked,
  handleCheckItem,
  handleDeleteItem,
}: todoItemType) {
  return (
    <div
      className={`py-3 px-3 lg:px-10 xl:px-14 flex justify-between items-center border-b-2 border-gray-300 ${
        isChecked && "bg-gray-300"
      }`}
    >
      <div className="px-2">
        <input
          type="checkbox"
          name={`${id}`}
          id={`${id}`}
          checked={isChecked}
          onClick={() => handleCheckItem(id)}
        />
        <label
          htmlFor={`${id}`}
          className={`ml-1 cursor-pointer text-lg  w-[10rem] overflow-hidden text-ellipsis ${
            isChecked && "line-through"
          }`}
        >
          {todoName}
        </label>
      </div>
      <AppButton type="button" onClick={() => handleDeleteItem(id)}>
        x
      </AppButton>
    </div>
  );
}
