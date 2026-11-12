import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-4 border border-amber-400 p-4 bg-blue-700 h-30 pt-10 text-black">
      <Link
        href="/"
        className="block mx-auto bg-amber-500  text-green-100 hover:bg-green-500 w-15 h-10 py-2 px-4 rounded-lg"
      >
        Like
      </Link>
      <Link
        href="/counter"
        className="block mx-auto bg-emerald-500   text-green-100 hover:bg-green-500 w-20 h-10 py-2 px-4 rounded-lg"
      >
        counter
      </Link>
      <Link
        href="/products/1"
        className="block mx-auto bg-fuchsia-500   text-green-100 hover:bg-green-500 w-25 h-10 py-2 px-4 rounded-lg"
      >
        products
      </Link>
    </nav>
  );
}
