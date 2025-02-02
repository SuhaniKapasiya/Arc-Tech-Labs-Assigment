import React from "react";
import { Provider } from "react-redux";

import DataTable from "./components/DataTable";
import Counter from "./components/Counter";
import MindMap from "./components/MindMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/mindmap" element={<MindMap />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
