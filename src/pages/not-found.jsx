import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-200 px-4 text-2xl font-semibold">
      <h1>404</h1>
      <h1 className="mt-1 text-center font-light">
        The page you&apos;re looking for was not found
      </h1>
      <Link to={`/`}>
        <h3
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm 
        text-gray-100 backdrop-blur transition-all hover:scale-110 active:scale-95 active:bg-blue-700"
        >
          Back to home
        </h3>
      </Link>
    </section>
  );
}
