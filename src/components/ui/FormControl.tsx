import { ChangeEvent } from "react";
import { cn } from "../../lib";

interface FormControlProps {
  id: string;
  label?: string;
  type?: string;
  value: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormControl = ({
  id,
  value,
  label,
  onChange,
  type = "text",
  placeholder,
  className,
  required = false,
}: FormControlProps) => {
  const charactersLimit = 50;

  const changeColor = () => {
    if (id === "title" && value.length > 40) {
      return `text-red-500`;
    } else {
      return `text-neutral-500`;
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <div className="flex w-full items-center justify-between">
          <label className="text-base font-normal" htmlFor={id}>
            {label}
          </label>
          {id === "title" && (
            <span className={`text-sm ${changeColor()}`}>
              {charactersLimit - value.length} left
            </span>
          )}
        </div>
      )}
      {id === "body" ? (
        <textarea
          id={id}
          className="w-full rounded-md bg-blue-50 p-2 text-lg"
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={cn(
            "w-full rounded-md bg-blue-50 p-2 text-lg focus:outline-none",
            className,
          )}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormControl;
