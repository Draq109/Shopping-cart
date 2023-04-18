
export default function Cart({ setItemCart, itemCart }) {
    let itemsCost = 0;

    itemCart.forEach(item => {
        itemsCost += (item.cost * item.count);
    });

    // does not work with onClick as you need to pass a param
    // remove button appears doe
    function handleRemoveBtn(e) {
        setItemCart(itemCart.filter(object => {
            if (object.name === e.target.getAttribute("id"))
                return false;
            else
                return true;
        }))
    }

    if(itemCart !== undefined && itemCart.length !== 0)
    return (
        <>
            <h1 className="order-title">Cart</h1>
            <div className="order-box">
                <div className="order-items">
                    {
                        itemCart.map(item => {
                            return (
                                <div className="order-item">
                                    <h1>{item.name}</h1>
                                    <div className="order-image-cost">
                                        <img src={item.image} alt={item.name}></img>
                                        <span>
                                            Quantity: {item.count}<br />
                                            <button className="remove-btn" id={`${item.name}`} onClick={handleRemoveBtn}>Remove</button>
                                        </span>
                                        <span>Cost: ${item.cost}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="order-summary">
                    <p>
                        Order Summary <br />
                        Items: ${itemsCost.toFixed(2)} <br />
                        Shipping & handling: $14.79 <br />
                        Tax: ${(itemsCost * .0825).toFixed(2)} <br />
                        Total: ${(itemsCost + 14.79 + (itemsCost * .0825)).toFixed(2)}
                    </p>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </>
    );
    else
        return(
            <span className="empty-message">Please add an item to your cart</span>
        )
}