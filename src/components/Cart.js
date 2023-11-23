import React from 'react';

const Cart = ({items}) =>{
    return(
<div>
    {items.map((item,index) =>(
  <div key ={index}>
<img src='item.image'>
  alt ={item.decription}  
  <p>Description:{item.Decription}</p>
  <p>Quantity:{item.Quantity}</p>
  <p>Unit Price:{item.unitPrice}</p>
  <p>Total:{item.total}</p>

</img>
  </div>    
    ))}
</div>
    );
}
export default Cart;
