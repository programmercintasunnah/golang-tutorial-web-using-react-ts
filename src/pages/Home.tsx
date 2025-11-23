import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tutorial Golang</h1>

      <p className="text-lg mb-6">
        Selamat datang di situs tutorial Golang. Silakan mulai dari dasarnya.
      </p>

      <Link
        to="/install-golang"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Mulai Belajar Golang →
      </Link>
    </div>
  );
}
