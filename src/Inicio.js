// Inicio.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '50px',
  };

  const menuStyle = {
    width: menuOpen ? '200px' : '0',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    backgroundColor: '#333',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
  };

  const menuItemStyle = {
    padding: '15px',
    textDecoration: 'none',
    fontSize: '20px',
    color: '#818181',
    display: 'block',
    transition: '0.3s',
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontSize: '30px', cursor: 'pointer' }} onClick={toggleMenu}>
        &#9776; Menú
      </div>

      <div style={menuStyle}>
        <Link to="/inicio" style={menuItemStyle}>
          Inicio
        </Link>
        <Link to="/perfil" style={menuItemStyle}>
          Perfil
        </Link>
        <Link to="/configuracion" style={menuItemStyle}>
          Configuraciones
        </Link>
        <Link to="/login" style={menuItemStyle}>
          Cerrar Sesión
        </Link>
        {/* Agrega más opciones según sea necesario */}
      </div>

      <div style={{ marginLeft: menuOpen ? '200px' : '0', transition: '0.5s' }}>
        <h2>Contenido de la Página de Inicio</h2>
        <p>¡Has iniciado sesión con éxito!</p>
      </div>
    </div>
  );
};

export default Inicio;
