import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tutorial Golang</h1>

      <p className="text-lg mb-6">
        Selamat datang di situs tutorial Golang. Silakan mulai dari dasarnya.
      </p>

      <div className="flex flex-col gap-3">
        <Link
          to="/install-golang"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Mulai Belajar Golang →
        </Link>

        <Link
          to="/create-project"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Tutorial Buat Project →
        </Link>

        <Link
          to="/env-database"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mt-3 block"
        >
          Tutorial Setup ENV Database →
        </Link>
      </div>
    </div>
  );
}
