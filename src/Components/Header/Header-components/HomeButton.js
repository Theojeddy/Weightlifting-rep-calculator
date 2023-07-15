import { Link } from "react-router-dom";

export default function HeaderHomeButton() {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  );
}
