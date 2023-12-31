import { useCallback } from "react";

import { Control, FieldValues, useController } from "react-hook-form";

import { TextInput, TextInputType } from "@/components/atoms/TextInput";
import { FormElement, FormElementType } from "../FormElement";

type Props<T extends FieldValues> = FormElementType<T> & TextInputType;

export const FormTextInput = <T extends FieldValues>({
  autoComplete = "off",
  className,
  control,
  disabled,
  errorOff,
  isError,
  isRequired,
  label,
  name,
  placeholder,
  maxLength = 250,
  type = "text",
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length <= maxLength) {
        field.onChange(e);
      }
    },
    [field, maxLength]
  );
  return (
    <FormElement
      control={control as Control<FieldValues, unknown>}
      errorOff={errorOff}
      isRequired={isRequired}
      label={label}
      name={name}
    >
      <TextInput
        autoComplete={autoComplete}
        className={className}
        {...control.register(name)}
        disabled={disabled}
        error={error}
        isError={isError}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={String(field.value)}
      />
    </FormElement>
  );
};
