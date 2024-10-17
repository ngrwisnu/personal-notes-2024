import Button from "../ui/Button";
import FormControl from "../ui/FormControl";

const FormInput = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white rounded-lg basis-full max-w-[500px] mx-auto p-4 flex flex-col gap-4"
    >
      <FormControl id="title" label="Title" />
      <FormControl id="body" label="Description" />
      <div className="mt-4 flex justify-end">
        <Button type="primary" onClick={() => console.log("clicked")}>
          Add Note
        </Button>
      </div>
    </form>
  );
};

export default FormInput;
