import "../globals.css";
import Link from "next/link";


export default function ShopLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">Shop</Link>
          <nav className="space-x-4">
            <Link href="/products" className="hover:text-gray-300">All products</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </nav>
        </div>
      </header>
      <div className="max-w-6xl mx-auto p-4 flex-1 w-full">{children}</div>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">Mctaba Shop</footer>
    </div>
  );
}