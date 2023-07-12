import HeaderLogo from "../Components/Header/HeaderLogo";
import React, { useEffect } from "react";


export default function Home({title, setTitle}){
    useEffect(() => {
      setTitle("Home"); // Update the title using the setTitle function
    }, [setTitle]);
    return(
        <div>
            <HeaderLogo/>
            <h1>{title}</h1>
            
        </div>
    )};
