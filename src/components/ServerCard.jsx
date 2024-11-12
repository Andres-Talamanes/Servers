// src/components/ServerCard.jsx
import React from 'react';

export const ServerCard = ({ server }) => (
  <div className="server-card">
    <img src={server.image} alt={`${server.name} Image`} />
    <div className="server-card-content">
      <h3>{server.name}</h3>
      <p>{server.description}</p>
      <p>
        <strong>
          Encargados:
        </strong>  
          <p>{server.manager} </p> 
          <p>{server.manager1}</p>
          <p>{server.manager2}</p>
        </p>
    </div>
  </div>
);