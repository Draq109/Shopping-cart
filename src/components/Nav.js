import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png'


export default function Nav({ itemCart }) {
    const [count, setCount] = useState(0);
    function getCount() {
        let tempCount = 0;
        for (const item of itemCart) {
            tempCount += item.count;
        }
        setCount(tempCount);
    }

    useEffect(() => {
        getCount();
    }, [itemCart])
    

    return (
        <nav>
            <img className='nav-logo' src={logo} alt='logo'></img>
            <ul className="nav-links">
                <Link to="/">
                    <li className="homepage-link">Home</li>
                </Link>
                <Link to="/shop">
                    <li className="shop-link">Shop</li>
                </Link>
                <Link to="/cart">
                    <div className='cart-link-box'>
                        <li className="cart-link">Cart</li>
                        {count !== 0 && <span className='current-items-indicator'>{count}</span>}
                    </div>
                </Link>
            </ul>
        </nav>
    );
}