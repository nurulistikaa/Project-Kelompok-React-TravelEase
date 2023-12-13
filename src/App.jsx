import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Articles from "./routes/Articles";
import DetailArticle1 from './routes/DetailArticle1';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/articles-1" element={<DetailArticle1/>} />
      </Routes>
    </div>
  )
}

export default App
