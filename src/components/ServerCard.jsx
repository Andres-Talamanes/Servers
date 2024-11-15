import React from 'react';

export const ServerCard = ({ server }) => {
  const descriptions = server.descriptions || [];
  const managers = server.managers || [];

  return (
    <div className="server-card">
      <img src={server.image} alt={`${server.name} Image`} />
      <div className="server-card-content">
        <h3>{server.name}</h3>
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        {managers.length > 0 && (
          <div>
            <strong>Encargados:</strong>
            {managers.map((manager, index) => (
              <p key={index}>
                <a
                  href={manager.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manager-link"
                >
                  {manager.name}
                </a>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
