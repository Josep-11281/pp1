import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Perfil from './Perfil';
import Configuracion from './Configuracion';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;



