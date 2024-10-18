import FormInput from "./FormInput";
import { getInitialData } from "../../utils/index.ts";
import { useEffect, useState } from "react";
import NoteCard from "../ui/NoteCard.js";
import { NoteRequest } from "../../models/index.ts";

const MainContent = () => {
  const [notes, setNotes] = useState<NoteRequest[] | []>([]);

  useEffect(() => {
    const init: NoteRequest[] = getInitialData();

    setNotes(init);
  }, []);

  const formSubmitHandler = (data: NoteRequest) => {
    setNotes((prevState) => [...prevState, data]);
  };

  const deleteNoteHandler = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  };

  const archiveStatusHandler = (id: number) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }

      return note;
    });

    setNotes(updatedNotes);
  };

  return (
    <div className="flex flex-col gap-8 w-full pt-8 mb-8">
      <section id="form-notes" className="w-full">
        <h2 className="text-center">Create New Note</h2>
        <FormInput handleSubmit={formSubmitHandler} />
      </section>
      <section id="active-notes" className="w-full px-4">
        <h2>Active Notes</h2>
        {!notes.length && (
          <div className="w-full">
            <p className="w-full text-center">Let's write your first note</p>
          </div>
        )}
        <div className="w-full flex flex-wrap gap-4">
          {notes
            .map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
                isArchive={note.archived}
                handleDelete={deleteNoteHandler}
                handleArchiveStatus={archiveStatusHandler}
              />
            ))
            .reverse()}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
