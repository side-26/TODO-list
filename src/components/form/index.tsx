import { inputEvent } from "./types";
import AppInput from "@components/appInput";
import AppButton from "@components/appButton";
import { Context } from "@context/index";
import { useContext } from "react";
export default function Form() {
  const { createTodo, todo, handleOnChange, isInvalid } =
    useContext(Context);
  const handleChange = (e: inputEvent) => {
    handleOnChange(e.target.value);
  };
  return (
    <div className="px-3 w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo(todo);
        }}
        className="lg:flex justify-center lg:h-[3.5rem] my-8 w-full md:w-6/12 mx-auto"
      >
        <AppInput
          type="text"
          name="text"
          placeholder="Title..."
          className="rounded-none w-full flex-grow bg-white h-full py-4 lg:py-0"
          isInvalid={isInvalid}
          value={todo}
          onChange={handleChange}
        />
        <AppButton
          type="submit"
          className="h-full capitalize bg-slate-300 py-4 lg:py-0 lg:px-16"
        >
          submit
        </AppButton>
      </form>
    </div>
  );
}
