// src/components/ListaLivros.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ListaLivros = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        // Buscar livros do backend
        axios.get('http://localhost:5000/livros') // Ajuste a URL se necessário
            .then(response => setLivros(response.data))
            .catch(error => console.error('Erro ao buscar livros:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/livros/${id}`)
            .then(() => setLivros(livros.filter(livro => livro.id !== id)))
            .catch(error => console.error('Erro ao deletar livro:', error));
    };

    return (
        <div className="container mt-5">
            <h2>Listagem de Livros</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <tr key={livro.id}>
                            <td>{index + 1}</td>
                            <td>{livro.title}</td>
                            <td>{livro.author}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mr-2">Visualizar</button>
                                <button className="btn btn-warning btn-sm mr-2">Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(livro.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaLivros;
