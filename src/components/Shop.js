import { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop({setItemCart, itemCart}) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    async function fetchItems() {
        try {
            const url = `https://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/item.json`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(
                    `HTTP Error: response ${response.status}`
                );
            }
            let data = await response.json();
            setItems(data.data);
        } catch (err) {
            setError(err.message);
            setItems(null);
        } finally {
            setLoading(true);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [])
    return (
        <div>
            <h1 className="item-shop-title">Item Shop</h1>
            {error && <div>`There is a problem fetching the data - ${error}`</div>}
            <ul>
                {!loading && <span>Items loading ...</span>}
                {items && loading &&
                    <div className="items">
                        <div className="first-column column">
                            <Item key='3009' item={items['3009']} id='3009' desc={"Better than Nike's shoes"} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='3024' item={items['3024']} id='3024' desc={"Glows in the dark, heavy shield."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='3070' item={items['3070']} id='3070' desc={"Wash your tear's away with this blue tear."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                        </div>
                        <div className="second-column column">
                            <Item key='3075' item={items['3075']} id='3075' desc={"Spiky chestplate, you can hear screams from its previous owners."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='3862' item={items['3862']} id='3862' desc={"Highly sharp, and indestructible. Best for farming..."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='2420' item={items['2420']} id='2420' desc={"Not only does it give you the time, it can also stop it!."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                        </div>
                        <div className="third-column column">
                            <Item key='2052' item={items['2052']} id='2052' desc={"0 calories cookie, extremely delicious and promotes gains. Free on us!"} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='6653' item={items['6653']} id='6653' desc={"This facemask allows you to take the apperance of anyone for 5 minutes."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                            <Item key='4638' item={items['4638']} id='4638' desc={"Can grant you godly powers for a painful price.."} setItemCart={setItemCart} itemCart={itemCart}></Item>
                        </div>
                    </div>
                }
            </ul>
        </div>
    );
}