import { NavLink } from "react-router-dom"
import CardBody from "./CardBody"

const Home = ({products}) => 
{
    const productMap=products.map(product =>
        {
            let {id, title , image}=product
            return(
                <div key={id} className="child-flex card">
                    <CardBody id={id} title={title} image={image} />
                    <NavLink to={`/${id}`} className="card-link btn btn-outline-primary col-12">View Item</NavLink>
                </div>
            )
        })
    
    return ( 
        <>
            <h1>Products Page</h1>
            <div className="parent-flex">
                {productMap}
            </div>
        </>
     );
}
 
export default Home;
