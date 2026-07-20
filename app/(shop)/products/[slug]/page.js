import pool from "@/app/lib/db";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { rows } = await pool.query("SELECT name FROM products WHERE slug = $1", [slug]);
  const product = rows[0];
  return { title: product ? product.name : "Not found" };
}

export async function generateStaticParams() {
  const { rows } = await pool.query("SELECT slug FROM products");
  return rows.map((row) => ({ slug: row.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const { rows } = await pool.query("SELECT * FROM products WHERE slug = $1", [slug]);
  const product = rows[0];
  if (!product) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-80 rounded-lg bg-indigo-100" />

        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

          <p className="mt-3 text-xl font-semibold text-gray-900">
            KSh {(product.price_cents / 100).toLocaleString()}
          </p>

          <p
            className={`mt-2 text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button
            disabled={product.stock === 0}
            className="mt-8 w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </main>
  );
}