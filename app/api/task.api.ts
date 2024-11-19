"use server";

import { ICreateTaskRes, IFetchTasksRes } from "@/types/global";
import PocketBase, { RecordModel } from "pocketbase";
import { urls } from "./urls";
import { generateClient } from "./client";
import { revalidatePath } from "next/cache";

export async function createTask(
  title: string,
  description: string,
  priority: string,
  completed: boolean
): Promise<any> {
  const pb = new PocketBase("https://task-manager.pockethost.io");
  try {
    const data = {
      Title: title,
      Description: description,
      Priority: priority,
      completed: completed,
    };

    const record = await pb.collection("tasks").create(data);
    revalidatePath("/dashboard");
    return record;
  } catch (error) {
    console.error("creat error:", error);
    return null;
  }
}

export async function fetchTasks(): Promise<ICreateTaskRes[]> {
  try {
    // const authToken = localStorage.getItem('authToken')

    // if (!authToken) {
    //   throw new Error("AuthToken not valid");
    // }

    const pb = new PocketBase("https://task-manager.pockethost.io");
    const records = await pb.collection("tasks").getFullList({
      sort: "-created",
    });
    console.log(records);

    return records;
  } catch (error) {
    console.error("fetch errorrrrr:", error);
    return null;
  }
}

export async function deleteTask(RECORD_ID): Promise<any> {
  const pb = new PocketBase("https://task-manager.pockethost.io");
  try {
    const response = await pb.collection("tasks").delete(RECORD_ID);
    revalidatePath("/dashboard");
    return response;
  } catch (error) {
    console.error("delete error:", error);
    return null;
  }
}

export async function updateTask(
  RECORD_ID: string,
  title: string,
  des: string,
  priority: string,
  complete: boolean
): Promise<any> {
  const pb = new PocketBase("https://task-manager.pockethost.io");
  try {
    const data = {
      Title: title,
      Description: des,
      Priority: priority,
      completed: complete,
    };

    const record = await pb.collection("tasks").update(RECORD_ID, data);
    return record;
  } catch (error) {
    console.error("update error:", error);
    return null;
  }
}

// export async function fetchTasks(): Promise<any> {
//   try {
//     const client = generateClient();
//     const response = await client.get<any>(urls.read);
//     return response;
//   } catch (error) {
//     console.error("fetch error:", error);
//     return null;
//   }
// }
