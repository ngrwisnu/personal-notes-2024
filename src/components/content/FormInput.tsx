import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../ui/Button";
import FormControl from "../ui/FormControl";
import { NoteRequest } from "../../models";
import { Plus } from "lucide-react";

interface FormInputProps {
  handleSubmit: (data: NoteRequest) => void;
}

const FormInput = ({ handleSubmit }: FormInputProps) => {
  const [titleVal, setTitleVal] = useState<string>("");
  const [bodyVal, setBodyVal] = useState<string>("");

  const titleChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length <= 50) {
      setTitleVal(e.target.value);
    }
  };

  const bodyChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setBodyVal(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = new NoteRequest({
      title: titleVal,
      body: bodyVal,
    });

    handleSubmit(request);

    setTitleVal("");
    setBodyVal("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex max-w-[400px] flex-col gap-4 rounded-lg bg-white p-4"
    >
      <FormControl
        id="title"
        label="Title"
        value={titleVal}
        onChange={titleChangeHandler}
        required
      />
      <FormControl
        id="body"
        label="Description"
        value={bodyVal}
        onChange={bodyChangeHandler}
      />
      <div className="mt-4 flex w-full justify-end">
        <Button type="primary">
          <Plus size={20} /> Add Note
        </Button>
      </div>
    </form>
  );
};

export default FormInput;
