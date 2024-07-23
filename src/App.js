import React from "react";
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateApp from "./components/CreateApp";
import CardView from "./components/CardView";

const App = () => (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/new" element={<CreateApp />} />
        <Route path="/posts/:cId" element={<CardView />} />
      </Routes>
    </div>
);

export default App;
