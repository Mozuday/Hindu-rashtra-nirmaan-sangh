import { connectDB } from "@/lib/db";
import User from "@/lib/model";

export async function GET() {
  await connectDB();

  const count = await User.countDocuments();

  return Response.json({ count });
}