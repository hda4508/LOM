// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';
import Footer from './Footer';
import '../styles/Index.css'; // 상대경로 수정 주의

import Home from './Home';
import Page from '../Menu/Page';
import Reel from '../Menu/Reel';
import Scene from '../Menu/Scene';
import Inside from '../Menu/Inside';
import Versus from '..//Menu/Versus';
import Archive from '../Menu/Archive';

function App() {
  return (
    <Router>
      <div className="wrapper">
        {/* ==== 상단 내비게이션 ==== */}
        <nav className="nav">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>LOM</Link>
          </div>
          <div className="menu">
            <Link to="/page">Page</Link>
            <Link to="/reel">Reel</Link>
            <Link to="/scene">Scene</Link>
            <Link to="/inside">Inside</Link>
            <Link to="/versus">Versus</Link>
            <Link to="/archive">Archive</Link>
          </div>
        </nav>

        {/* ==== 라우팅 영역 ==== */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/reel" element={<Reel />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/inside" element={<Inside />} />
          <Route path="/versus" element={<Versus />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>

        {/* ==== 하단 영역 ==== */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
