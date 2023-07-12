import HeaderLogo from "../Components/Header/Header-components/HeaderLogo";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({ title, setTitle }) {
  useEffect(() => {
    setTitle("Home"); // Update the title using the setTitle function
  }, [setTitle]);

  return (
    <div>
      <HeaderLogo />
      <h1>{title}</h1>
      <div>
        <Link to="/Calculator">
          <button>Calculator</button>
        </Link>
      </div>
    </div>
  );
}
