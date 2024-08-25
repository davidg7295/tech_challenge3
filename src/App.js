// src/App.js
import React from 'react';
import HomePage from './components/HomePage';
import ListaLivros from './components/ListaLivros'; // Atualizado

const App = () => {
    return (
        <div>
            <HomePage />
            <ListaLivros />
        </div>
    );
};

export default App;

