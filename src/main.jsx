
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebLayout from './layouts/WebLayout.jsx';
import { createRoot } from "react-dom/client";
// import Home from './pages/Home.jsx';
import LoveStoryTimeline from "./components/Timeline.jsx";
import "./scss/pages/home.scss";
import "./scss/partials/NavBar.scss"
import "./scss/pages/LoveStoryTimeline.scss"




const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route element={<WebLayout />}>
        <Route path="" element={<LoveStoryTimeline/>} />
      </Route>
    </Routes>
  </Router>
);

