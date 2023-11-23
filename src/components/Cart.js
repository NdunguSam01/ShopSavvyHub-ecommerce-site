const Cart = ({cart, deleteCartItem}) => 
{
  const cartMap=cart.map(cartItem =>
    {
      let {id, image, title, quantity, unitPrice, totalPrice} = cartItem

      return(
        <tr key={id}>
          <td>
            <img src={image} alt={title} />
          </td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>{totalPrice}</td>
            <td>
              <button className="btn btn-outline-danger col-12" onClick={()=>deleteCartItem(id)}>Remove item from cart</button>
            </td>
        </tr>
      )
    })

  return (  
    <>
      <h1>Cart Page</h1>
      <table>
        <tr>
          <th>Image</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Total price</th>
          <th>Action</th>
        </tr>
        {cartMap}
      </table>
    </>
  );
}
 
export default Cart;