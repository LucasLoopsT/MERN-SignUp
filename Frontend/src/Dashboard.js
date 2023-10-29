// Dashboard.js
import React from 'react';

const Dashboard = ({ name, handleLogout }) => {
  return (
    <div className="dashboard">
      <h2>Bem-vindo, {name}!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
