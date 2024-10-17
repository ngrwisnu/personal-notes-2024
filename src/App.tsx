import { Menu } from "lucide-react";
import Archive from "./components/archive/Archive";
import MainContent from "./components/content/MainContent";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen flex relative">
        <div className="absolute left-4 top-2">
          <Menu size={20} />
        </div>
        <Archive />
        <MainContent />
      </main>
    </>
  );
}

export default App;
