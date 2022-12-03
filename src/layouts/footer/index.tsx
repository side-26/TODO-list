import AppButton from "@components/appButton";
import { Context } from "@context/index";
import { useContext } from "react";
import { FooterPropsType } from "./types";
export default function Footer({ children }: FooterPropsType) {
  const {
    isEmpty,
    activeTodosArrLen,
    showAllTodosState,
    deleteCompletedTodos,
    handleShowingAllTodos,
    showActiveTodos,
  } = useContext(Context);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <footer className="py-2 lg:px-10 2xl:px-[10%] bg-red-400 bg-opacity-95">
        <div className="flex justify-between flex-wrap items-center">
          {isEmpty ? (
            <div>no item found!!</div>
          ) : (
            <div>{activeTodosArrLen} item left</div>
          )}

          <div className="flex capitalize">
            <AppButton
              className={`mx-2 ${showAllTodosState && "font-bold"}`}
              onClick={handleShowingAllTodos}
            >
              all
            </AppButton>
            <AppButton
              className={`mx-2 ${!showAllTodosState && "font-bold"}`}
              onClick={ showActiveTodos}
            >
              active
            </AppButton>
          </div>
          <div>
            <AppButton
              onClick={deleteCompletedTodos}
              className="bg-gray-300 border-[1px] border-gray-400 p-1"
            >
              clear completed
            </AppButton>
          </div>
        </div>
      </footer>
    </div>
  );
}
