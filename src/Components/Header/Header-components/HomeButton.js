import { Link } from "react-router-dom";

export default function HeaderHomeButton() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
