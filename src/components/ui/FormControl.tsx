import { ChangeEvent } from "react";

interface FormControlProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormControl = ({
  id,
  value,
  label,
  onChange,
  type = "text",
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
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-base font-normal" htmlFor={id}>
          {label}
        </label>
        {id === "title" && (
          <span className={`text-sm ${changeColor()}`}>
            {charactersLimit - value.length} left
          </span>
        )}
      </div>
      {id === "body" ? (
        <textarea
          id={id}
          className="bg-blue-50 text-lg rounded-md p-2"
          rows={5}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="bg-blue-50 text-lg rounded-md p-2"
          id={id}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormControl;
