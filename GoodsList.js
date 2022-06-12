import {GoodsItem} from "./GoodsItem";

function GoodsList({goods, addToBasket}){
    //const {goods, addToBasket} = props;
    
    if(!goods.length) return <h3>Nothing here</h3>;

    return (
        <div>
            {
                goods.map((el, index)=>{
                  return <GoodsItem key={index} el={el} addToBasket={addToBasket} />;
                })
            }
        </div>        
    );

}

export default GoodsList;