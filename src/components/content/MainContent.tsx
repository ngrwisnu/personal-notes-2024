import FormInput from "./FormInput";
import NoteCard from "../ui/NoteCard.js";
import { NoteRequest } from "../../models/index.ts";

interface MainContentProps {
  notes: NoteRequest[];
  handleSubmit: (data: NoteRequest) => void;
  handleDelete: (id: number) => void;
  handleArchiveStatus: (id: number) => void;
}

const MainContent = ({
  notes,
  handleSubmit,
  handleDelete,
  handleArchiveStatus,
}: MainContentProps) => {
  return (
    <div className="flex flex-col gap-8 w-full pt-8 mb-8">
      <section id="form-notes" className="w-full">
        <h2 className="text-center">Create New Note</h2>
        <FormInput handleSubmit={handleSubmit} />
      </section>
      <section id="active-notes" className="w-full px-4">
        <h2>Active Notes</h2>
        {!notes.some((note) => !note.archived) && (
          <div className="w-full">
            <p className="w-full text-center">Let's write your first note</p>
          </div>
        )}
        <div className="w-full flex flex-wrap gap-4">
          {notes
            .map((note) => {
              if (!note.archived) {
                return (
                  <NoteCard
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}
                    isArchive={note.archived}
                    handleDelete={handleDelete}
                    handleArchiveStatus={handleArchiveStatus}
                  />
                );
              }
            })
            .reverse()}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
