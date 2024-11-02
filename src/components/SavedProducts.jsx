import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { products } from './products'
const SavedProducts = () => {
  return (
    <div>
      <div className="site-wrap">
        <Header/>
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0">
              <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>{' '}
              <strong className="text-black">Saved Products</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4">
                    <h2 className="text-black h5">Saved Products</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Repeat the following block for each saved product */}
                {products.filter((product) => {
                    return product.state==="favorite";
                }).map((product) => (
                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={product.id}>
                    <div className="block-4 text-center border">
                      <figure className="block-4-image">
                        <a href="shop-single.html">
                          <img src={require(`../images/${product.image}`)} alt="Imag placeholder" className="img-fluid" />
                        </a>
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <a href="shop-single.html">{product.name}</a>
                        </h3>
                        <p className="mb-0">Finding perfect t-shirt</p>
                        <p className="text-primary font-weight-bold">$  {product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Repeat ends here */}
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li>
                        <Link href="#">&lt;</Link>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">&gt;</Link>
                      </li>
                    </ul>
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

export default SavedProducts
