import React from 'react';
import { Link,NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
                    

          <div className="row align-items-center">
          <img src={require("../images/fotor.png")} alt="Imag placeholder"  width="100px" />
            <div className=" order-2 order-md-1 site-search-icon text-left">
              <form action="" className="site-block-top-search d-flex">
                <i className="bi bi-search"></i>
              </form>
            </div>

            <div className="mb-3 mb-md-0 order-1 order-md-2 text-center">
              <div className="site-logo">
              <Link to="/" className="js-logo-clone">Tempstore</Link>
              </div>
            </div>

            <div className="order-3 order-md-3">
              <div className="site-top-icons">
                <ul>
                  <li><Link to="/login"><i className="bi bi-person text-dark"><span className=" t text-dark">Login</span></i></Link></li>
                  <li>
                    <Link to="/Saved-Products">
                      <i className="bi bi-heart text-dark"><span className="text-dark">Favorite</span></i>
                      <span className="count">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="site-cart">
                      <i className="bi bi-cart3 text-dark"> <span className="text-dark">Cart</span></i>
                      <span className="count">2</span>
                    </Link>
                  </li>
                  <li className="d-inline-block d-md-none ml-md-0">
                    
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li>
            <NavLink to="/" activeClassName="active text-primary">Home</NavLink>
            </li>
            <li>  
            <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li> <NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>

  );
};

export default Header;
