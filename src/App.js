import './App.css';
import './css/CardBody.css'
import './css/Item.css'
import './css/Navbar.css'
import './css/Cart.css'
import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Cart from './components/Cart'
import Saved from './components/Saved';
import Item from './components/Item';

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

  //Function to add item to saved items
  const addItemToSaved = id =>
  {
    const savedProduct=products.find(product => product.id === parseInt(id))

    //Making a POST request to the server
    fetch("https://phase-2-ecommerce-project-api.onrender.com/savedItems",
    {
      method: "POST",
      headers: 
      {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(savedProduct)
    })
    .then(alert("Item has been added to your saved items"))

    //Updating the saved items state
    setSavedItems([...savedItems, savedProduct])
  }

  //Function to remove item from saved items
  const deleteSavedItem = id =>
  {
    //Making the delete request
    fetch(`https://phase-2-ecommerce-project-api.onrender.com/savedItems/${id}`,
    {
      method: "DELETE",
      headers:
      {
        "Content-Type" : "application/json"
      }
    })
    .then(alert("Item removed from saved items"))

    //Updating the state
    const remainingSavedItems=savedItems.filter(savedItem => savedItem.id !== parseInt(id))
    setSavedItems(remainingSavedItems)
  }

  //Function to add item to cart
  const addItemToCart = id =>
  {
    //Checking if the item exists in the products state
    const addedItem=products.find(product => product.id === parseInt(id))
    let {image, title, price}=addedItem
    
    let quantity=1
    let totalPrice=quantity*price

    //Creating the object that will be added to the cart endpoint
    let cartData=
    {
      image: image,
      title: title,
      quantity: quantity,
      unitPrice: price,
      totalPrice: totalPrice,
    }
    
    //Making the POST request
    fetch("https://phase-2-ecommerce-project-api.onrender.com/cart",
    {
      method: "POST",
      headers:
      {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(cartData)
    })
    .then(response => response.json())
    .then(item => 
      {
        alert("Item has been added to cart")
        setCart([...cart, item])
      })
  }

  //Function to delete item from cart
  const deleteCartItem= id =>
  {

    //Making the delete request
    fetch(`https://phase-2-ecommerce-project-api.onrender.com/cart/${id}`,
    {
      method: "DELETE",
      headers:
      {
        "Content-Type" : "application/json"
      }
    })
    .then(alert("Item removed from cart"))

    //Updating the state
    const remainingSavedItems=cart.filter(cartItem => cartItem.id !== parseInt(id))
    setCart(remainingSavedItems)
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home products={products}/>}></Route>
      <Route path='/cart' element={<Cart cart={cart} deleteCartItem={deleteCartItem}/>}></Route>
      <Route path='/saved' element={<Saved savedItems={savedItems} deleteSavedItem={deleteSavedItem}/>}></Route>
      <Route path='/:id' element={<Item products={products} addItemToCart={addItemToCart} addItemToSaved={addItemToSaved}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
