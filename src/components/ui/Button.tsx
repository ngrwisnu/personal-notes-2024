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
        className="min-w-[40px] h-[40px] bg-indigo-50 rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`w-full flex justify-center items-center md:w-fit px-5 py-2 text-base font-medium rounded-md gap-2 ${
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
