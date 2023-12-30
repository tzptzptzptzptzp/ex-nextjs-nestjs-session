import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLFormElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const Form = ({ children, className, onClick, onSubmit }: Props) => {
  return (
    <form
      className={className}
      noValidate
      onClick={onClick}
      onSubmit={(e) => {
        onSubmit(e);
        e.preventDefault();
        return false;
      }}
    >
      {children}
    </form>
  );
};
