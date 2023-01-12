import { Route, Routes } from "react-router-dom";
import Main from "../src/Pages/main";


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