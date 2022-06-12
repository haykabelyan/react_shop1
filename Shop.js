import { useState,  useEffect} from "react";
import GoodsList from "./GoodsList";
import Loading from "./Loading";
import BasketList from "./BasketList";


function Shop(){

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item)=>{
        const itemIndex = order.findIndex(
            (el)=> el.id === item.id
        );

       if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1    
            };
            setOrder([ ...order, newItem ]);
       }else{
            const newOrder = order.map((el, index)=>{
                if(index === itemIndex){
                    return {
                        ...el,
                        quantity: el.quantity+1
                    };
                }else{
                    return el;
                }
            }); 
            setOrder(newOrder);
       }

    };

    const removeFromBasket = (id)=>{
        const newOrder = order.filter((el)=> el.id !== id);
        setOrder(newOrder);
    }

    const incQuantity = (id)=>{
        const newOrder = order.map((el)=>{
            if(el.id === id){
                return {
                    ...el,
                    quantity: el.quantity+1
                }
            }else{
                return el;
            }
        });
        setOrder(newOrder);
    }

    const decQuantity = (id)=>{
        const newOrder = order.map((el)=>{
            if(el.id === id){
                return {
                    ...el,
                    quantity: el.quantity >0 ? el.quantity-1: 0
                }
            }else{
                return el;
            }
        });
        setOrder(newOrder);
    }


    const handleBasketShow = ()=>{
        setBasketShow(!isBasketShow);
    }

    const closeAlert = ()=>{
        setAlertName('');
    }

    // useEffect(()=>{
    //     fetch('https://fortniteapi.io/v2/shop?lang=en',
    //        {
    //         headers: {
    //             Authorization: '015811d9-22f75ab8-a69b7fab-a7459eb7'
    //         }
    //        }
    //     )
    //     .then(response => response.json())
    //     .then(json => {
    //             json.shop && setGoods(json.shop);
    //             setLoading(false);
    //         }
    //     )
    //     .catch((error)=>{ console.log(error) });
    // }, []);


    useEffect(()=>{
        fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(json => {
                json && setGoods(json);
                setLoading(false);
            }
        )
        .catch((error)=>{ console.log(error) });
    }, []);


    return (
        <main>

        <div onClick={handleBasketShow}>MY ORDERS {order.length}</div>

        {
            isBasketShow && <BasketList 
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />
        }

          {loading ? <Loading />:
            <GoodsList goods={goods} addToBasket={addToBasket} />
          }
        </ main>
    );
}

export default Shop;

