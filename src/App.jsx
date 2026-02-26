import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import CreateCapsule from "./pages/CreateCapsule";
import Memories from "./pages/Memories";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <Header />

          <div className="p-6">
            <Routes>
              <Route path="/" element={<CreateCapsule />} />
              <Route path="/memories" element={<Memories />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;