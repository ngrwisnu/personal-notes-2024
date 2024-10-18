import { Menu } from "lucide-react";
import Archive from "./components/archive/Archive";
import MainContent from "./components/content/MainContent";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { NoteRequest } from "./models";
import { getInitialData } from "./utils";

function App() {
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
    <>
      <Header />
      <main
        className="w-screen flex relative"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <div className="absolute left-4 top-2">
          <Menu size={20} />
        </div>
        <Archive
          notes={notes}
          handleDelete={deleteNoteHandler}
          handleArchiveStatus={archiveStatusHandler}
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
