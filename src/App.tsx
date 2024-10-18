import { Menu } from "lucide-react";
import Archive from "./components/archive/Archive";
import MainContent from "./components/content/MainContent";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { NoteRequest } from "./models";
import { getInitialData } from "./utils";
import Button from "./components/ui/Button";

function App() {
  const [notes, setNotes] = useState<NoteRequest[] | []>([]);
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(true);

  useEffect(() => {
    const init: NoteRequest[] = getInitialData();

    const screenSize = window.innerWidth;

    if (screenSize < 768) {
      setIsArchiveOpen(false);
    } else {
      setIsArchiveOpen(true);
    }

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

  const archiveStateHandler = () => {
    setIsArchiveOpen(!isArchiveOpen);
  };

  return (
    <>
      <Header />
      <main
        className="w-screen flex relative"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="absolute left-4 top-2 z-50">
          <Button onClick={archiveStateHandler} iconOnly>
            <Menu size={20} />
          </Button>
        </div>
        <Archive
          notes={notes}
          handleDelete={deleteNoteHandler}
          handleArchiveStatus={archiveStatusHandler}
          archiveState={isArchiveOpen}
        />
        <MainContent
          notes={notes}
          handleSubmit={formSubmitHandler}
          handleDelete={deleteNoteHandler}
          handleArchiveStatus={archiveStatusHandler}
        />
      </main>
    </>
  );
}

export default App;
