import React from "react";
import { appInputPropsType } from "./types";
export default function AppInput({
  className,
  isInvalid,
  ...props
}: appInputPropsType) {
  return (
    <div className=" mb-6 lg:mb-0 w-full">
      <div
        className={`flex flex-col my-2 pl-1 lg:my-0  ${className} ${
          isInvalid ? "animate-shake border-2 border-red-600" : ""
        }`}
      >
        <input
          className={`lg:my-0 pl-1 lg:py outline-0 w-full h-full `}
          {...props}
          required
        />
      </div>
      {isInvalid && (
        <div className={`text-red-600 font-bold text-xs`}>
          please fill the input!!!
        </div>
      )}
    </div>
  );
}
