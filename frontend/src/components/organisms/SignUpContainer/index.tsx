"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/form/Form";
import { FormTextInput } from "@/components/form/FormTextInput";

import { SignUpSchema } from "@/schema/user/signUp.schema";
import { SignUpType } from "@/reducks/users/types";
import { useSignUpVerifyDispatch } from "@/reducks/users/dispatches";

export const SignUpContainer = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: SignUpSchema.defaultValues,
    mode: "onChange",
    resolver: zodResolver(SignUpSchema.signUpSchema),
  });

  const handleClick = (req: SignUpType) => {
    useSignUpVerifyDispatch(req);
  };
  return (
    <div className="p-12 rounded-3xl shadow-lg">
      <h2 className="mb-4 text-3xl text-center">SignUp</h2>
      <Form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleClick)}
      >
        <div className="flex flex-col gap-4">
          <FormTextInput
            control={control}
            isRequired
            label={"username"}
            maxLength={20}
            name={"username"}
          />
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
          <FormTextInput
            control={control}
            isRequired
            label={"confirmPassword"}
            maxLength={100}
            name={"confirmPassword"}
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
