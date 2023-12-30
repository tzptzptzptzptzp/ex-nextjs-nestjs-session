import { PropsWithChildren, memo } from "react";

import clsx from "clsx";
import {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  useController,
} from "react-hook-form";

import { Label } from "@/components/atoms/Label";
import { Text } from "@/components/atoms/Text";

export type FormElementType<T extends FieldValues> = {
  containerClassName?: string;
  control: Control<T, unknown>;
  errorOff?: boolean;
  errorClassName?: string;
  errors?: FieldErrors | FieldError;
  formClassName?: string;
  isRequired?: boolean;
  label?: string;
  labelClassName?: string;
  name: Path<T>;
};

const FormElementBase = <T extends FieldValues>({
  children,
  containerClassName,
  control,
  errorOff,
  errorClassName,
  formClassName,
  isRequired,
  label,
  labelClassName,
  name,
}: PropsWithChildren<FormElementType<T>>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });

  return (
    <div className={formClassName}>
      {label !== undefined && (
        <Label
          className={labelClassName}
          htmlFor={name}
          isRequired={isRequired}
          text={label}
        />
      )}
      <div className={containerClassName}>{children}</div>
      {!errorOff && (
        <Text
          bold
          className={clsx([errorClassName, "mt-2 pl-2"])}
          color="red-400"
          size="2rem"
        >
          {error?.message}
        </Text>
      )}
    </div>
  );
};

export const FormElement = memo(FormElementBase);
