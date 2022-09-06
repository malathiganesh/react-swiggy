import './header.css';
// import swg from '../images/swgn.png';
import pic from '../images/briyani.jpg';

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-area">
                        {/* <img src={swg} width={100} /> */}
                            <div className="logo">SWIGGY</div>
                        </div>
                        <nav className="nav-area">
                            {/* <a className="nav-item" href="#">Investor Relations</a> */}
                            {/* <a className="nav-item" href="#">Add Restaurant</a> */}
                            <a className="nav-item" href="#">Log in</a>
                            <a className="nav-item" href="#">Sign up</a>
                        </nav>
                    </div>
                </div>
            </header>
            <div className='about'>Home / Tirunelveli / Collections / Non-veg / Veggie</div>
            <div className='imagehead'>
        <div className='images'>
          <img src={pic} width={1349} height={600} />
        </div>
        <div className='textonimg'><h1>Good Food Is The Foundation Of Genuine Happiness...</h1></div>
        </div>
        </div>
    );
}

export default Header;