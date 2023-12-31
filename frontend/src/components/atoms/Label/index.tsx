import clsx from "clsx";
import { LabelType } from "../atoms.type";

export const Label = ({ className, htmlFor, isRequired, text }: LabelType) => {
  return (
    <label className={clsx([className, "pl-2"])} htmlFor={htmlFor}>
      {text}
      {isRequired && <span className="inline-block text-red-500">*</span>}
    </label>
  );
};
