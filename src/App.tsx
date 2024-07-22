// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import BoardgamePage from "./pages/BoardgamePage";
import ProfilePage from "./pages/ProfilePage";
import InsideGamePage from "./pages/InsideGamePage";
import AboutPage from "./pages/AboutPage";
import DataPage from "./pages/DataPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename={import.meta.env.VITE_PREFIX_URL}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/boardgame" element={<BoardgamePage />} />
          <Route path="/boardgame/:id" element={<InsideGamePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
