import React from 'react';
import '/src/index.css'; 

const pizzaImages = [
  { id: 'p001', name: 'Margarita', imgSrc: '/src/assets/imgs/pizza1.jpg' },
  { id: 'p002', name: 'Pepperoni', imgSrc: '/src/assets/imgs/pizza2.jpg' },
  { id: 'p003', name: 'Cuatro Quesos', imgSrc: '/src/assets/imgs/pizza3.jpg' },
  { id: 'p004', name: 'Hawaiana', imgSrc: '/src/assets/imgs/pizza4.jpg' },
  { id: 'p005', name: 'Vegetariana', imgSrc: '/src/assets/imgs/pizza5.jpg' },
  { id: 'p006', name: 'Barbacoa', imgSrc: '/src/assets/imgs/pizza6.jpg' },
];

const Pizza = () => {
  return (
    <div className="pizza-container">
      {pizzaImages.map(pizza => (
        <div className="pizza-item" key={pizza.id}>
          <img src={pizza.imgSrc} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>Deliciosa pizza con ingredientes frescos.</p>
          <button>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
