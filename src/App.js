import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from './composants/Home';
import Apropos from './composants/Apropos';
import Error from './composants/Error';
import Logement from './composants/Logement';
import Header from './composants/Header';
import Footer from './composants/Footer';

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </React.StrictMode>
      <Footer />
    </>
  );
}

export default App;
