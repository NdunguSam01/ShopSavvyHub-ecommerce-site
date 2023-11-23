import './App.css';
import './css/CardBody.css'
import './css/Item.css'
import './css/Navbar.css'
import { useEffect, useState } from 'react';

function App() 
{
  //Declaring the states to be used in this project
  const [products, setProducts]=useState([])
  const [cart, setCart]=useState([])
  const [savedItems, setSavedItems]=useState([])

  //Fetching products from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/products")
      .then(response => response.json())
      .then(products => setProducts(products))
  },[])

  //Fetching savedItems from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/savedItems")
      .then(response => response.json())
      .then(savedItems => 
        {
          setSavedItems(savedItems)
        })
  },[])

  //Fetching cartItems from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/cart")
      .then(response => response.json())
      .then(savedItems => setCart(savedItems))
  },[])
  return (
    <>
      
    </>
  );
}

export default App;
