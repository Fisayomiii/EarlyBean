import { Route, Routes } from "react-router-dom";
import Main from "./Pages/main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </>
  );
}

export default App;