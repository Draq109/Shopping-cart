import { GiOpenTreasureChest } from 'react-icons/gi'
import { Link } from "react-router-dom";
import logo from '../logo.png'


export default function Nav() {

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
                    <li className="cart-link">Cart</li>
                </Link>
            </ul>
        </nav>
    );
}