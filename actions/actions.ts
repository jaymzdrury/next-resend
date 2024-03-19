"use server";
import { post } from "@/lib/db";
import { DataSchema } from "@/types";

export async function postData(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const title = formData.get("title") as string;

  const { success } = DataSchema.safeParse({ email, title, message });

  if (!success) return { error: "invalid" };

  const err = await post({ email, title, message });

  if (err?.error) throw new Error(err.error);
}
