import React from "react";
import Footer from "./footer";
import { childrenType } from "./types";
export default function Default({ children }: childrenType) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
