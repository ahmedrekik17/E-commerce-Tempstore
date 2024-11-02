import React from 'react'
import { Link } from 'react-router-dom'

const ThankYoupage = () => {
  return (
    <div>
      <div className="site-wrap">
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0">
              <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong>
            </div>
          </div>
        </div>
      </div>
      {/* Content Start */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="icon-check_circle display-3 text-success"></span>
              <h2 className="display-3 text-black">Thank you!</h2>
              <p className="lead mb-5">Your order was successfully completed.</p>
              <p>
                <Link to="/shop" className="btn btn-sm btn-primary">
                  Back to shop
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content End */}
    </div>
    </div>
  )
}

export default ThankYoupage
