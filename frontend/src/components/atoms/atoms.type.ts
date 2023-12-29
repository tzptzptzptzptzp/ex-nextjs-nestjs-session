export type InputAttributeType =
  | "text"
  | "checkbox"
  | "tel"
  | "password"
  | "email"
  | "address"
  | "time"
  | "number"
  | "date"
  | "datetime"
  | "datetime-local";

export type InputType = {
  autoComplete?: "off" | "on" | "email" | "current-password" | "new-password";
  className?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string | JSX.Element;
  maxLength?: number;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: InputAttributeType;
  value?: string | number | boolean;
};
