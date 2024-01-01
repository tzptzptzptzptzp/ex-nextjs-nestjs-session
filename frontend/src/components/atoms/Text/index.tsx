import { forwardRef } from "react";

import clsx from "clsx";

import { TextType } from "../atoms.type";

export const Text = forwardRef<HTMLParagraphElement, TextType>(
  (
    { className, bold = false, children, color = "current", size = "1.6rem" },
    ref
  ) => {
    return (
      <p
        className={clsx([className, bold && "font-bold"])}
        ref={ref}
        style={{ color: color, fontSize: size }}
      >
        {children}
      </p>
    );
  }
);
