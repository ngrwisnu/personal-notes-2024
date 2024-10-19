import FormInput from "./FormInput";
import NoteCard from "../ui/NoteCard.js";
import { NoteRequest } from "../../models/index.ts";
import { Search } from "lucide-react";
import FormControl from "../ui/FormControl.tsx";
import { ChangeEvent } from "react";

interface MainContentProps {
  notes: NoteRequest[];
  search: string;
  handleSearch: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (data: NoteRequest) => void;
  handleDelete: (id: number) => void;
  handleArchiveStatus: (id: number) => void;
}

const MainContent = ({
  notes,
  search,
  handleSearch,
  handleSubmit,
  handleDelete,
  handleArchiveStatus,
}: MainContentProps) => {
  return (
    <div className="mb-8 flex w-full flex-col gap-8 pt-8 lg:mx-0">
      <section id="form-notes" className="mx-4">
        <h2 className="w-full text-center">Create New Note</h2>
        <FormInput handleSubmit={handleSubmit} />
      </section>
      <section className="mx-4 flex items-center gap-1 rounded-lg bg-white px-2">
        <Search size={20} color="#9CACCB" />
        <FormControl
          id="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by title"
          className="bg-white"
        />
      </section>
      <section id="active-notes" className="w-full px-4">
        <h2>Active Notes</h2>
        {!notes.some((note) => !note.archived) && (
          <div className="w-full">
            <p className="w-full text-center">Let's write your first note</p>
          </div>
        )}
        <div className="flex w-full flex-wrap gap-4">
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
