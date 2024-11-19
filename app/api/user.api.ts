import { urls } from "./urls";
import { generateClient } from "./client";
import { IUserAuthLoginRes, IParams } from "@/types/global";
import PocketBase from "pocketbase";

export async function userAuthLogin(
  iden: string,
  pass: string
): Promise<IUserAuthLoginRes | null> {
  const pb = new PocketBase("https://task-manager.pockethost.io");
  try {
    const authData = (await pb
      .collection("users")
      .authWithPassword(iden, pass)) as unknown as IUserAuthLoginRes;
    if (!authData.record || !authData.token) {
      throw new Error("Invalid response structure from server");
    }

    localStorage.setItem("authToken", authData.token);
    return authData;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}
