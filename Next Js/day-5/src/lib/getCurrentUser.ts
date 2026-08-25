import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Token not Found");
  }

  const decode = verifyToken(token);

  if (!decode) {
    throw new Error("Unauthorised");
  }

  return decode.userId;
}
