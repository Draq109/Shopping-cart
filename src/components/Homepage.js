import logo from '../logo.png'

export default function Homepage() {

    return (
        <div className="homepage">
            <img src={logo} alt='Logo'></img>
            <div className='section-1'>
                <h1 className='title'>About</h1>
                <p className="about-paragraph">Welcome to Frank Fritz Finds, we sell old antiques and unique items.
                    We are a company looking to sell and buy, located at the heart of New Zeland.
                    At Frank Fritz Finds we take pride in our work, and prioritize our customers needs.
                    Take a look around and see if you find something you like, for inquirys for selling
                    contact us at XXX-XXX-XXXX.
                </p>
            </div>
        </div>
    );
}