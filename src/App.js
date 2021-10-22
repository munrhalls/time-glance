import "./App.css";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App container h-screen flex flex-col">
      <Projects className="border-2 p-2 flex-1" />
    </div>
  );
}

export default App