import { useState } from "react";


export default function Item({ item, id, desc, setItemCart, itemCart }) {
    const [count, setCount] = useState(1);
    const imageURL = `http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${id}.png`

    function itemExists(name, array) {

        for (const item of array) {
            if (item !== {} && item.name === name) {
                setItemCart(Array.from(itemCart, item => {
                    if (item.name === name) {
                        item.count = item.count + count;
                    }
                    return item;
                }))
                return true;
            }
        }
        return false;
    }

    function handleMinusClick() {
        if (count > 1)
            setCount(count - 1);
    }

    function handlePlusClick() {
        if (count < 99)
            setCount(count + 1);
    }

    return (
        <div className="item">
            <div className="item-title">
                <h1 className="item-name">{item.name}</h1>
                <span className="item-cost">Cost: {item.gold.base / 10}$</span>
            </div>
            <div className="item-content">
                <img src={imageURL}>
                </img>
                <span className="item-description">{desc}</span>
                <div className="item-buttons">
                    <div className="item-counter">
                        <span className="minus" onClick={handleMinusClick}>-</span>
                        <span className="num">{count}</span>
                        <span className="plus" onClick={handlePlusClick}>+</span>
                    </div>
                    <button className="add-cart-btn" onClick={() => {

                        if (!itemExists(item.name, itemCart)) {
                            setItemCart([
                                ...itemCart,
                                {
                                    name: item.name,
                                    cost: item.gold.base / 10,
                                    image: imageURL,
                                    count: count
                                }
                            ]);
                        }
                        console.log(itemCart);
                    }}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}