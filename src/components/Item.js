import { useParams} from "react-router-dom";

const Item = ({products, addItemToCart, addItemToSaved}) => 
{
    const {id} = useParams()
    const findProduct=products.find(product => product.id === parseInt(id))
    let {title, price, description, category, image} = findProduct

    return ( 
        <>
            {findProduct ? 
            (
                <>
                    <div className="flex-container mt-5">
                        <div className="flex-item">
                            <img src={image} alt={title} />
                        </div>
                        <div className="flex-item">
                            <h2>{title}</h2>
                            <p className="m-1">{description}</p>
                            <p className="m-1">Price: USD. {price}</p>
                            <p className="m-1">Category: {category}</p>
                            <button type="button" onClick={()=>addItemToCart(id)} className="btn btn-success col-12 mt-3">Add to cart</button>
                            <button type="button" onClick={()=>addItemToSaved(id)} className="btn btn-secondary col-12 mt-3">Add to saved items</button>
                        </div>
                    </div>
                </>
            ): (<p>Item not found</p>)}  
        </>
     );
}
 
export default Item;