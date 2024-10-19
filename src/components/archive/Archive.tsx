import { NoteRequest } from "../../models";
import NoteCard from "../ui/NoteCard";

interface ArchivedNotesProps {
  notes: NoteRequest[];
  handleDelete: (id: number) => void;
  handleArchiveStatus: (id: number) => void;
  archiveState: boolean;
}

const Archive = ({
  notes,
  handleDelete,
  handleArchiveStatus,
  archiveState,
}: ArchivedNotesProps) => {
  return (
    <aside
      className={`absolute bottom-0 top-0 z-10 w-full max-w-[360px] ${
        !archiveState && "-left-full lg:absolute"
      } ${archiveState && "left-0 lg:relative"}`}
    >
      <div className="h-full w-full overflow-y-auto bg-white px-4 pt-14">
        <h2>Archive Notes</h2>
        {!notes.some((note) => note.archived) && (
          <div className="w-full">
            <p className="w-full text-center">Archive is empty!</p>
          </div>
        )}
        <div className="flex w-full flex-col gap-4">
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
