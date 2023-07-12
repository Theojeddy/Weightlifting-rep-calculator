import HeaderLogo from "../Components/Header/HeaderLogo";
import React, { useEffect } from "react";

export default function Calculator({ title, setTitle }) {
  useEffect(() => {
    setTitle("Calculator");
  }, [setTitle]);

  return (
    <div>
    <HeaderLogo/>
      <h1>{title}</h1>
    </div>
  );
}
