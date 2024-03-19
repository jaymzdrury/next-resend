import { Resend } from "resend";
import Email from "@/email/email";
import { SchemaType, parsedEnv } from "@/types";

const resend = new Resend(parsedEnv.RESEND);

export const send = (props: SchemaType) =>
  resend.emails.send({
    from: "James Drury <onboarding@resend.dev>",
    to: props.email,
    subject: props.title,
    react: <Email message={props.message} />,
  });
