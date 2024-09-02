import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pagesize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setprogress={setProgress} key="general" pageSize={pagesize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setprogress={setProgress} key="business" pageSize={pagesize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setprogress={setProgress} key="entertainment" pageSize={pagesize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setprogress={setProgress} key="general" pageSize={pagesize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setprogress={setProgress} key="health" pageSize={pagesize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setprogress={setProgress} key="science" pageSize={pagesize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setprogress={setProgress} key="sports" pageSize={pagesize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setprogress={setProgress} key="technology" pageSize={pagesize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
