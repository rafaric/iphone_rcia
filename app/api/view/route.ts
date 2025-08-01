import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  const { id } = await req.json();
  console.log("id RECIBIDO: ", id);
  if (!id || typeof id !== "string") {
    return new Response(
      JSON.stringify({ message: "Invalid ID", success: false }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  await client.patch(id).setIfMissing({ views: 0 }).inc({ views: 1 }).commit();
  return new Response(
    JSON.stringify({ message: "Views updated successfully", success: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
