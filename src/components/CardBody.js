const CardBody = ({id, title, image}) => 
{
    return ( 
        <>
            <img src={image} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title mt-2">{title}</h3>
            </div> 
        </>
     );
}
 
export default CardBody;