import pool from "@/app/lib/db";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { rows } = await pool.query(
    "SELECT name, description FROM products WHERE slug = $1",
    [slug]
  );
  const product = rows[0];

  if (!product) {
    return { title: "Not found | Mctaba Shop" };
  }

  return {
    title: `${product.name} | Mctaba Shop`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductsPage() {
  const { rows: products } = await pool.query(
    "SELECT id, slug, name, price_cents, image_url FROM products ORDER BY name"
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.slug}`}>
            <div className="relative border border-gray-200 rounded-lg p-3 bg-white hover:shadow-md transition-shadow">
              {/* Discount badge - only renders if you add discount data later */}
              {p.discount_percent && (
                <span className="absolute top-2 right-2 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
                  -{p.discount_percent}%
                </span>
              )}

              <div className="w-full h-40 rounded-md bg-indigo-100" />

              <h2 className="mt-3 text-sm text-gray-800 truncate">{p.name}</h2>

              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-bold text-gray-900">
                  KSh {(p.price_cents / 100).toLocaleString()}
                </p>
                {p.original_price_cents && (
                  <p className="text-xs text-gray-400 line-through">
                    KSh {(p.original_price_cents / 100).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}