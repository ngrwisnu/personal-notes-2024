/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "danger" | "default";
  children: ReactNode;
  onClick?: (...args: any[]) => void;
  iconOnly?: boolean;
}

const Button = ({
  type = "default",
  children,
  onClick,
  iconOnly = false,
}: ButtonProps) => {
  if (iconOnly) {
    return (
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-indigo-50"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-md px-5 py-2 text-base font-medium md:w-fit ${
        type === "primary" && "bg-indigo-600 text-white"
      } ${type === "secondary" && "bg-neutral-500 text-white"} ${
        type === "danger" &&
        "bg-rose-200 text-red-500 hover:bg-red-500 hover:text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
