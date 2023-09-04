import { Link } from "react-router-dom";
import logo1 from "../../App/RepWise-logologo.svg";

import "bootstrap/dist/css/bootstrap.css";


export default function HeaderLogo(){
return (
  <Link to="/">
    <header>
      <img src={logo1} alt="" className="img-fluid" />
    </header>
  </Link>
);};
