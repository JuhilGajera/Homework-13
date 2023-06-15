import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './App.css';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log('res====>>>', res)
      setProducts(res.data)
    }).catch((err) => {
      console.log('err==>>', err)
    });
   
  }, [searchTerm]);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log('filteredProducts', filteredProducts)

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Product id={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
