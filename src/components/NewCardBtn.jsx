import { Link } from "react-router-dom";

export default function NewCardBtn() {
  return (
    <Link to="/new-card">
      <button className="bg-blue-500 text-white p-2 rounded-lg">
        New Card
      </button>
    </Link>
  );
}
