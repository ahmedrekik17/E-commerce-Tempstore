import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Cartt = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };
    const [quantityy, setQuantityy] = useState(1);

    const handleQuantityChangee = (amount) => {
      setQuantityy((prevQuantityy) => Math.max(1, prevQuantityy + amount));
    };
  return (
    <div>
      <div className="site-wrap">
        <Header/>
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0"><Link to="/" >Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Cart</strong></div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <img src={require("../images/5_series_lrg.jpg")} alt="Imag" className="img-fluid" />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">BMW Series 5</h2>
                      </td>
                      <td>$500.00</td>
                      <td>
                      <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-primary js-btn-minus" type="button"onClick={() => handleQuantityChangee(-1)}>-</button>
                          </div>
                          <input
                    type="text"
                    className="form-control text-center"
                    value={quantityy}
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                          <div className="input-group-append">
                            <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => handleQuantityChangee(1)}>+</button>
                          </div>
                        </div>
                      </td>
                      <td>$500.00</td>
                      <td><Link href="#" className="btn btn-primary btn-sm">X</Link></td>
                    </tr>

                    <tr>
                      <td className="product-thumbnail">
                        <img src={require("../images/3_series_lrg.jpg")} alt="Imag" className="img-fluid" />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">BMW Series 3</h2>
                      </td>
                      <td>$450.00</td>
                      <td>
                        <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-primary js-btn-minus" type="button"onClick={() => handleQuantityChange(-1)}>-</button>
                          </div>
                          <input
                    type="text"
                    className="form-control text-center"
                    value={quantity}
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                          <div className="input-group-append">
                            <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => handleQuantityChange(1)}>+</button>
                          </div>
                        </div>
                      </td>
                      <td>$450.00</td>
                      <td><Link href="#" className="btn btn-primary btn-sm">X</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-sm btn-block">Update Cart</button>
                </div>
                <div className="col-md-6">
                  <Link to="/shop"><button className="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-sm">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Frais</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$10.00</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$960.00</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary btn-lg py-3 btn-block" onClick={() => window.location='/cart/checkout'}>Proceed To Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default Cartt