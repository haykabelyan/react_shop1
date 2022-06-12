import BasketItem from "./BasketItem";
 
function BasketList ({order, handleBasketShow, removeFromBasket, incQuantity, decQuantity}){
    

    const totalPrice = order.reduce((sum, el)=>{
        return sum + el.price*el.quantity;
    }, 0);

   console.log(order);

    return (
        <div className="BasketList">
            <h2>Karzina</h2>
            {
                order.map((el, index)=>{
                    return <BasketItem 
                    key={index}  
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    item={el}
                    />
                })
            }
            <div className="totalPrice">{totalPrice}</div>
        </div>
    );
}

export default BasketList;