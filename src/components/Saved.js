import CardBody from "./CardBody"

const Saved = ({savedItems, deleteSavedItem}) => 
{
    
    const itemsMap=savedItems.map(savedItem =>
        {
            let {id, title , image}=savedItem
            return(
                <div key={id} className="child-flex card">
                    <CardBody id={id} title={title} image={image} />
                    <button className="btn btn-outline-danger col-12" onClick={()=>deleteSavedItem(id)}>Remove item</button>
                </div>
            )
        })
    return (  
        <>
            <h1>Saved items</h1>
            <div className="parent-flex">
                {itemsMap}
            </div>
        </>
    );
}
 
export default Saved;