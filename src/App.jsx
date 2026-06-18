import { Routes, Route } from "react-router-dom";
import Sidnav from "./pages/sidnav";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Sidnav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;