interface FormControlProps {
  id: string;
  label: string;
  type?: string;
}

const FormControl = ({ id, label, type = "text" }: FormControlProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-base font-normal" htmlFor={id}>
          {label}
        </label>
        {id === "title" && (
          <span className="text-neutral-500 text-sm">50 left</span>
        )}
      </div>
      <input
        className="bg-blue-50 text-lg rounded-md p-2"
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormControl;
