
export default function Item({ item, id, desc, setItemCart, itemCart }) {
    const imageURL = `http://ddragon.leagueoflegends.com/cdn/13.7.1/img/item/${id}.png`

    function itemExists(name, array) {

        for (const item of array) {
            if (item != {} && item.name == name)
            {
                setItemCart(Array.from(itemCart, item => {
                    if(item.name == name)
                        {
                            item.count++;
                        }
                        return item;
                }))
                return true;
            }
        }
        return false;
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
                <button className="add-cart-btn" onClick={() => {

                    if (!itemExists(item.name, itemCart)) {
                        setItemCart([
                            ...itemCart,
                            {
                                name: item.name,
                                cost: item.gold.base / 10,
                                image: imageURL,
                                count: 1
                            }
                        ]);
                    }
                    console.log(itemCart);
                }}>Add To Cart</button>
            </div>
        </div>
    );
}