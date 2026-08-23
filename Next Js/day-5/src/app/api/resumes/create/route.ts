import { connectDB } from "@/lib/mongodb";
import { NextRequest } from "next/server";

async function POST(req: NextRequest) {
  await connectDB();

  try {
  } catch (error) {
    console.log("Error in create resume : ", error);
  }
}
