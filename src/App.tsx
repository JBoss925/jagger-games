import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GamesPage from "./games/GamesPage";
import DomesPage from "./games/DomesPage";
import JordlePage from "./games/JordlePage";
import JolorPage from "./games/JolorPage";
import JinxPage from "./games/JinxPage";
import JudokuPage from "./games/JudokuPage";
import JigsawPage from "./games/JigsawPage";

export default function App() {
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<GamesPage />} />
      <Route path="/domes" element={<DomesPage />} />
      <Route path="/jordle" element={<JordlePage />} />
      <Route path="/jolor" element={<JolorPage />} />
      <Route path="/jinx" element={<JinxPage />} />
      <Route path="/judoku" element={<JudokuPage />} />
      <Route path="/jigsaw" element={<JigsawPage />} />
      <Route path="/jeardle" element={<Navigate to="/jolor" replace />} />
      <Route path="/games" element={<Navigate to="/" replace />} />
      <Route path="/games/domes" element={<Navigate to="/domes" replace />} />
      <Route path="/games/jordle" element={<Navigate to="/jordle" replace />} />
      <Route path="/games/jolor" element={<Navigate to="/jolor" replace />} />
      <Route path="/games/jinx" element={<Navigate to="/jinx" replace />} />
      <Route path="/games/judoku" element={<Navigate to="/judoku" replace />} />
      <Route path="/games/jigsaw" element={<Navigate to="/jigsaw" replace />} />
      <Route path="/games/jeardle" element={<Navigate to="/jolor" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
