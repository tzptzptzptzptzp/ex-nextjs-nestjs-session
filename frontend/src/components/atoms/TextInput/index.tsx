import { forwardRef } from "react";

import { clsx } from "clsx";
import { FieldError } from "react-hook-form";

import { InputType } from "../atoms.type";

export type TextInputType = {
  error?: FieldError;
  isError?: boolean;
  value?: string;
} & Omit<InputType, "value">;

export const TextInput = forwardRef<HTMLInputElement, TextInputType>(
  (
    {
      className = "",
      isError = false,
      onChange,
      type = "text",
      value,
      ...props
    },
    ref
  ) => {
    const defaultClass = "w-80 px-2 py-1 border";
    const errorClass = "border-red-400";
    return (
      <input
        className={clsx([defaultClass, className, isError && errorClass])}
        id={props.name}
        onChange={onChange}
        ref={ref}
        type={type}
        value={value}
        {...props}
      />
    );
  }
);
