import { ChangeEvent, useState } from "react";
import Button from "../ui/Button";
import FormControl from "../ui/FormControl";

const FormInput = () => {
  const [titleVal, setTitleVal] = useState<string>("");
  const [bodyVal, setBodyVal] = useState<string>("");

  const titleChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length <= 50) {
      setTitleVal(e.target.value);
    }
  };

  const bodyChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBodyVal(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white rounded-lg basis-full max-w-[500px] mx-auto p-4 flex flex-col gap-4"
    >
      <FormControl
        id="title"
        label="Title"
        value={titleVal}
        onChange={titleChangeHandler}
      />
      <FormControl
        id="body"
        label="Description"
        value={bodyVal}
        onChange={bodyChangeHandler}
      />
      <div className="mt-4 flex justify-end">
        <Button type="primary" onClick={() => console.log("clicked")}>
          Add Note
        </Button>
      </div>
    </form>
  );
};

export default FormInput;
