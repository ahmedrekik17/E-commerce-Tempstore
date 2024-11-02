import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { products } from './products';

const SingleProducts = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Filter the products array to find the selected product by name
    const selectedProduct = products.find((p) => p.name === productName);
    setProduct(selectedProduct);
  }, [productName]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="site-wrap">
        <Header />
        <div className="py-3 mb-5">
          <div className="container">
            <div className="row">
              <div className="path col-md-12 mb-0">
                <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
                <Link to="/shop">Shop</Link> <span className="mx-2 mb-0">/</span>{' '}
                <strong className="text-black">{product.name}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* Carousel code */}
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                  <img className="d-block w-100" src={require(`../images/${product.image}`)} alt="First slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                  <img className="d-block w-100" src={require("../images/bmw5.jpg")} alt="Second slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                  <img className="d-block w-100" src={require("../images/bmw-5.jpg")} alt="Third slide" />
                </div>
              </div>
              <Link className="carousel-control-prev" role="button" data-slide="prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only slide-left">Previous</span>
              </Link>
              <Link className="carousel-control-next"  role="button" data-slide="next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </Link>
            </div>

              </div>
              <div className="col-md-6">
                <h2 className="text-black">{product.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Beatae voluptatem, ducimus doloribus quae illo, repellat numquam perspiciatis
                  distinctio earum vel, facilis exercitationem tempore voluptas sapiente! Est
                   quis debitis repellat doloremque!</p>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Beatae voluptatem, ducimus doloribus quae illo, repellat numquam perspiciatis
                  distinctio earum vel, facilis exercitationem tempore voluptas sapiente! Est
                   quis debitis repellat doloremque!</p>
                <p>
                  <strong className="text-primary h4">${product.price}</strong>
                </p>
                <div className="size-btn mb-1 d-flex">
                  {/* Size buttons code */}
                    <label className={`btn ${selectedOption === 'small' ? 'btn-warning' : 'btn-outline-secondary'}`} htmlFor="btn-check-1">Small<input type="radio" className="btn-check" name="option" id="btn-check-1" hidden  onChange={() => handleOptionChange('small')}/></label>
                    <label className={`btn ${selectedOption==='Sport' ? 'btn-warning' : 'btn-outline-secondary'}`} htmlFor="btn-check-2">Sport<input type="radio" className="btn-check" name="option" id="btn-check-2" hidden onChange={()=>handleOptionChange('Sport')}/></label> 
                    <label className={`btn ${selectedOption==='Big' ? 'btn-warning' : 'btn-outline-secondary'}`} htmlFor="btn-check-3">Big<input type="radio" className="btn-check" name="option" id="btn-check-3" hidden onChange={()=>handleOptionChange('Big')}/></label>
                </div>
                <div className="mb-5">
                  {/* Quantity input code */}
                  <div className="input-group mb-3" style={{ maxWidth: '140px' }}>
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-primary js-btn-minus"
                                  type="button"
                                  onClick={() => handleQuantityChange(-1)}
                                >
                                  &minus;
                                </button>
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
                                <button
                                  className="btn btn-outline-primary js-btn-plus"
                                  type="button"
                                  onClick={() => handleQuantityChange(1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>

                </div>
                <p>
                  <Link to="/cart" className="buy-now btn btn-sm btn-warning">
                    Add To Cart
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleProducts;