import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import Profile from "./pages/profile";
import DetailJob from "./pages/detail-job";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/jobs/:id" element={<DetailJob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
