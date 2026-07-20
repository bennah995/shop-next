import pool from "@/app/lib/db";

export default async function LeadsPage() {
  await new Promise((r) => setTimeout(r, 1500));
  const { rows } = await pool.query(
    "SELECT id, name, wa_phone, status, source FROM leads ORDER BY created_at DESC LIMIT 50"
  );

  return (
    <main>
      <h1>Leads</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Phone</th><th>Status</th></tr>
        </thead>
        <tbody>
          {rows.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name || "--"}</td>
              <td>{lead.wa_phone}</td>
              <td>{lead.status}</td>
              {/* <td>{lead.source}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}