import pool from "@/app/lib/db";
import { notFound } from "next/navigation";

export default async function LeadDetailPage({ params }) {
  const { id } = await params;
  const { rows } = await pool.query("SELECT * FROM leads WHERE id = $1", [id]);
  const lead = rows[0];
  if (!lead) notFound();
  return (
    <main>
      <h1>{lead.name || lead.wa_phone}</h1>
      <p>Status: {lead.status}</p>
      {/* <p>Source: {lead.source}</p> */}
    </main>
  );
}