import { send } from "@/email/send";
import errMsg from "./errMsg";
import { SchemaType } from "@/types";

export async function post(props: SchemaType) {
  try {
    send({ email: props.email, title: props.title, message: props.message });
  } catch (error) {
    return { error: errMsg(error) };
  }
}
