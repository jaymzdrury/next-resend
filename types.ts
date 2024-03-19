import { z } from "zod";

export const parsedEnv = z
  .object({ RESEND: z.string().min(1) })
  .parse(process.env);

export const DataSchema = z.object({
  email: z.string().email(),
  title: z.string().min(1),
  message: z.string().min(1),
});

export type SchemaType = z.infer<typeof DataSchema>;
