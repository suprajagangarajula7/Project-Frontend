import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8">⏳ Capsule</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-500">
          Create Memory
        </Link>

        <Link to="/memories" className="hover:text-blue-500">
          Your Memories
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;