export const metadata = { title: "Shop", description: "Mctaba Shop" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}