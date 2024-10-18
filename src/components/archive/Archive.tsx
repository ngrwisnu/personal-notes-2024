import { NoteRequest } from "../../models";
import NoteCard from "../ui/NoteCard";

interface ArchivedNotesProps {
  notes: NoteRequest[];
  handleDelete: (id: number) => void;
  handleArchiveStatus: (id: number) => void;
}

const Archive = ({
  notes,
  handleDelete,
  handleArchiveStatus,
}: ArchivedNotesProps) => {
  return (
    <aside>
      <div className="bg-white w-4/5 md:w-[300px] pl-4 pt-8 h-full">
        <h2>Archive Notes</h2>
        {!notes.some((note) => note.archived) && (
          <div className="w-full">
            <p className="w-full text-center">Archive is empty!</p>
          </div>
        )}
        <div className="w-full flex flex-col gap-4">
          {notes.map((note) => {
            if (note.archived) {
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
          })}
        </div>
      </div>
    </aside>
  );
};

export default Archive;
