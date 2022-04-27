import { Route, Routes, BrowserRouter } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
