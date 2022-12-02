import { useState } from "react";
import { formEvent, inputEvent } from "./types";
import AppInput from "@components/appInput";
import AppButton from "@components/appButton";
export default function Form() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [todoVal, setTodoVal] = useState("");
  const handleSubmit = (e: formEvent) => {
    e.preventDefault();
    alert(todoVal.trim());
    if (!todoVal.trim().length) setIsInvalid(true);
    else {
      setIsInvalid(false);
    }
  };
  const handleChange = (e: inputEvent) => {
    setTodoVal(e.target?.value);
  };
  return (
    <div className="px-3 w-full">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="lg:flex justify-center lg:h-[3.5rem] my-8 w-6/12 mx-auto"
      >
        <AppInput
          type="text"
          name="text"
          placeholder="Title..."
          className="rounded-none w-full flex-grow bg-white h-full py-4 lg:py-0"
          isInvalid={isInvalid}
          value={todoVal}
          onChange={handleChange}
        />
        <AppButton
          type="submit"
          className="h-full capitalize bg-slate-300 py-4 lg:py-0"
        >
          submit
        </AppButton>
      </form>
    </div>
  );
}
