import React from 'react'
import Header from './Header'

const Checkout = () => {
  return (
    <div>
          <div className="site-wrap">
            <Header/>
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
              <a href="cart.html">Cart</a> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Checkout</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border">
                <div className="form-group">
                  <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                  <select id="c_country" className="form-control">
                    <option value="1">Select a country</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_fname" name="c_fname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname" />
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">Company Name </label>
                    <input type="text" className="form-control" id="c_companyname" name="c_companyname" />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-12">
                    <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                    <label htmlFor="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="c_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
                    </div>
                </div>

                <div className="form-group row mb-5">
                    <div className="col-md-6">
                    <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                    <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
                </div>

                {/* ... (The rest of the billing details form) */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                  <div className="p-3 p-lg-5 border">
                  <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                    <div className="input-group w-75">
                        <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                        <button className="btn btn-warning btn-sm" type="button" id="button-addon2">Apply</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>BMW <strong className="mx-2">x</strong> 1</td>
                        <td>$500.00</td>
                        </tr>
                        <tr>
                        <td>BMW <strong className="mx-2">x</strong> 1</td>
                        <td>$450.00</td>
                        </tr>
                        <tr>
                        <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                        <td className="text-black font-weight-bold"><strong>$50.00</strong></td>
                        </tr>
                        <tr>
                        <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                        <td className="text-black font-weight-bold"><strong>$1000.00</strong></td>
                        </tr>
                    </tbody>
                    </table>
                    <div className="border p-3 mb-3">
                        <h3 className="h6 mb-0">
                            <a
                            className="d-block"
                            data-toggle="collapse"
                            href="#collapsebank"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsebank"
                            >
                            Direct Bank Transfer
                            </a>
                        </h3>

                        <div className="collapse" id="collapsebank">
                            <div className="py-2">
                            <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                Your order won’t be shipped until the funds have cleared in our account.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="border p-3 mb-3">
                        <h3 className="h6 mb-0">
                            <a
                            className="d-block"
                            data-toggle="collapse"
                            href="#collapsecheque"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsecheque"
                            >
                            Cheque Payment
                            </a>
                        </h3>

                        <div className="collapse" id="collapsecheque">
                            <div className="py-2">
                            <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                Your order won’t be shipped until the funds have cleared in our account.
                            </p>
                            </div>
                        </div>                                    
                    </div>

                    <div className="border p-3 mb-5">
                        <h3 className="h6 mb-0">
                            <a
                            className="d-block"
                            data-toggle="collapse"
                            href="#collapsepaypal"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsepaypal"
                            >
                            Paypal
                            </a>
                        </h3>

                        <div className="collapse" id="collapsepaypal">
                            <div className="py-2">
                            <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                Your order won’t be shipped until the funds have cleared in our account.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-warning btn-lg py-3 btn-block" onClick={() => window.location = '/cart/checkout/thank-you'}>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout
