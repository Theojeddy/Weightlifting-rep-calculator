import Dropdowns from "../Components/Dropdowns/Dropdown";
import Header from "../Components/Header/Header";
import React, { useEffect } from "react";

export default function Calculator({ title, setTitle }) {
  useEffect(() => {
    setTitle("Calculator");
  }, [setTitle]);

  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <Dropdowns />
    </div>
  );
}
