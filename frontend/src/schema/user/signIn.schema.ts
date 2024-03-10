import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password should be at least 8 characters")
  .max(100, "Password should be at most 100 characters")
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password should contain at least one uppercase letter",
  })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password should contain at least one lowercase letter",
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "Password should contain at least one number",
  })
  .refine((value) => /[@$!%*#?&]/.test(value), {
    message:
      "Password should contain at least one special character (@, $, !, %, *, #, ?, &)",
  });

const signInSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export type signInType = z.infer<typeof signInSchema>;

const defaultValues: signInType = {
  email: "",
  password: "",
};

export const SignInSchema = {
  signInSchema,
  defaultValues,
};
