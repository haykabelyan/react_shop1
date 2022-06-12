

function GoodsItem  ( {el, addToBasket} ){
    //const {el} = props;

    return (
        <div className="Cart">
            <h3>{el.id}</h3>
            <h4>{el.name}</h4>
            <img src={el.image} width="100px" height="100px" />  
            <button className="" onClick={()=>addToBasket({
                id: el.id,
                name: el.name,
                price: el.price
            })  }> Add to Basket </button>  
            <hr />
        </div>
    );
}

export {GoodsItem};