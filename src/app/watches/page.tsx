import React from "react";
import Image from "next/image";


const Watches = () => {

  const watchData = [
    {
      id: 1, name: 'Rolex', price: 12000, description: 'luxury watch', image: '/pic1.jpg' },
    {
      id: 2,
      name: 'omega',price: 20000, description: 'luxury watch', image: '/pic2.jpg' },
    {
      id: 3,
      name: 'Adidas', price: 80000, description: 'luxury watch', image: '/pic5.jpeg'  },
    {
      id: 6,
      name: 'Beetling', price: 90000, description: 'luxury watch', image: '/pic9.jpg'  },
    {
      id: 7,
      name: 'Rado', price: 32000, description: 'luxury watch', image: '/pic10.jpg' },
    {
      id: 8, name: 'seiko', price: 175000, description: 'luxury watch', image: '/pic11.jpg' },
  ]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
            
              <Image
                src={watch.image} alt={watch.name}/>
              <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
   </div>
    
  );
};

export default Watches;
