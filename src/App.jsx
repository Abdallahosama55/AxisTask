import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

import "./App.css";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
