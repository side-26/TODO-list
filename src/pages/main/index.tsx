import React from "react";
import Form from "@components/form";
export default function Main() {
  return (
    <div>
      <section className="pt-24 lg:pb-4 bg-red-300 flex flex-col items-center">
        <div className="uppercase text-2xl font-bold">
          to do list
        </div>
        
      <Form />
      </section>
    </div>
  );
}
