"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/form/Form";
import { FormTextInput } from "@/components/form/FormTextInput";

import { SignInSchema } from "@/schema/user/signIn.schema";
import { SignInType } from "@/reducks/users/types";
import { useSignInVerifyDispatch } from "@/reducks/users/dispatches";

export const SignInContainer = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: SignInSchema.defaultValues,
    mode: "onChange",
    resolver: zodResolver(SignInSchema.signInSchema),
  });

  const handleClick = (req: SignInType) => {
    useSignInVerifyDispatch(req);
  };
  return (
    <div className="p-12 rounded-3xl shadow-lg">
      <h2 className="mb-4 text-3xl text-center">SignIn</h2>
      <Form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleClick)}
      >
        <div className="flex flex-col gap-4">
          <FormTextInput
            control={control}
            isRequired
            label={"email"}
            maxLength={100}
            name={"email"}
            type="email"
          />
          <FormTextInput
            control={control}
            isRequired
            label={"password"}
            maxLength={100}
            name={"password"}
            type="password"
          />
        </div>
        <button
          className="w-2/3 h-8 mx-auto border bg-gray-700 hover:bg-white text-white hover:text-gray-700 duration-300"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
