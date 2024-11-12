// src/pages/Home.jsx
import React from 'react';
import { ServerCard } from '../components/ServerCard';
import { servers } from '../data/servers';

export const Home = () => (
  <>
    <h1>Nuestros Servicios de Servidores</h1>
    <div className="server-cards-container">
      {servers.map(server => (
        <ServerCard key={server.id} server={server} />
      ))}
    </div>
    <footer>
      <p>&copy; 2024. Powered by AWS-style Design. Todos los derechos reservados.</p>
    </footer>
  </>
);
