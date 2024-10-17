import FormInput from "./FormInput";
import { getInitialData } from "../../utils/index.ts";
import { useEffect, useState } from "react";
import NoteCard from "../ui/NoteCard.js";

interface NoteDetails {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

const MainContent = () => {
  const [notes, setNotes] = useState<NoteDetails[] | []>([]);

  useEffect(() => {
    const init: NoteDetails[] = getInitialData();

    setNotes(init);
  }, []);

  return (
    <div className="flex flex-col gap-8 w-full pt-8 mb-8">
      <section id="form-notes" className="w-full">
        <h2 className="text-center">Create New Note</h2>
        <FormInput />
      </section>
      <section id="active-notes" className="w-full px-4">
        <h2>Active Notes</h2>
        <div className="w-full flex flex-wrap gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              isArchive={note.archived}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
