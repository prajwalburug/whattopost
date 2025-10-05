import React from 'react';

const MinimalCard = ({ children }) => {
  return (
    <div className="minimal-card">
      {children}
    </div>
  );
};

const MinimalCardTitle = ({ children }) => {
  return <h3 className="minimal-card-title">{children}</h3>;
};

const MinimalCardDescription = ({ children }) => {
  return <p className="minimal-card-description">{children}</p>;
};

export { MinimalCard, MinimalCardTitle, MinimalCardDescription };
