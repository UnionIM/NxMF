import React from 'react';
import baseAxios from '../../api/apiBase';

const Home = () => {
  const handleGetData = () => {
    baseAxios.get('/auth/rbac/me/permissions').then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleGetData}>GetData</button>
    </div>
  );
};

export default Home;
