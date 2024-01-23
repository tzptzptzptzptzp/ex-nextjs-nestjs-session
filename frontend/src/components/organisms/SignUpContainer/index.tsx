"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/form/Form";
import { FormTextInput } from "@/components/form/FormTextInput";

import { UserSchema, signUpType } from "@/schema/user.schema";

export const SignUpContainer = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: UserSchema.defaultValues,
    mode: "onChange",
    resolver: zodResolver(UserSchema.signUpSchema),
  });

  const handleSubmitForm = async (req: signUpType) => {
    try {
      const response = await axios.post("http://localhost:8080/user/create", {
        email: req.email,
        password: req.password,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-12 rounded-3xl shadow-lg">
      <h2 className="mb-4 text-3xl text-center">SignUp</h2>
      <Form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(handleSubmitForm)}
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
