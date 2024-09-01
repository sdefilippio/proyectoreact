import React from 'react';
import Pizza from './Pizza'; 
import '/src/index.css'; 

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Pizzería Mamma Mía</h1>
      <p>Descubre nuestras deliciosas pizzas:</p>
      <Pizza /> 
    </div>
  );
};

export default Home;
