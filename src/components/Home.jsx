import '../styles/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/style.css';
import '../styles/styles.css';
import '../styles/jq.css';
import '../styles/magnific-popup.css'
import '../styles/owl.carousel.min.css';
import '../styles/owl.theme.default.min.css';
import '../fonts/icomoon/style.css';
import '../styles/home.css';



const Home = () => {
  return (
    <div>
            <div class="site-wrap">
      <Header/>
      <div className="bg" data-aos="fade">
        <div className="container ">
          <div className="right-text">
            <div className="">
              <h1 className="mb-2 ">Find Your own car</h1>
              <div className="intro-text text-center text-md-">
                <Link to="/shop" className="btn btn-sm btn-warning">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section site-section-sm site-blocks-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
              <div className="icon mr-4 align-self-start">
                <span className="bi bi-truck text-warning"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Shipping</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
              <div className="icon mr-4 align-self-start">
                <span className="bi bi-arrow-clockwise text-warning"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Free Returns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
              <div className="icon mr-4 align-self-start">
                <span className="bi bi-question-circle-fill text-warning"></span>
              </div>
              <div className="text">
                <h2 className="text-uppercase">Customer Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="content">
          <div className="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae l
              abore temporibus a fuga explicabo facere quia, harum, dignissimos tempore
              quod minima. Quaerat sint nemo similique quod quas velit eos tempore!
            </p>
          </div>
          <div className="right">
            <figure className="image">
                  <img src={require("../images/car3.jpg")} alt="" className=""  />
            </figure>

          </div>
        </div>
        <div className="content">
        <div className="left">
            <figure className="image">
                  <img src={require("../images/car1.jpg")} alt="" className=""  />
            </figure>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae l
              abore temporibus a fuga explicabo facere quia, harum, dignissimos tempore
              quod minima. Quaerat sint nemo similique quod quas velit eos tempore!
            </p>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae l
              abore temporibus a fuga explicabo facere quia, harum, dignissimos tempore
              quod minima. Quaerat sint nemo similique quod quas velit eos tempore!
            </p>
          </div>
          <div className="right">
            <figure className="image">
                  <img src={require("../images/car2.jpg")} alt="" className=""  />
            </figure>

          </div>
        </div>

      </div>
      <div className="site-section site-blocks-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
              <Link to="/Shop" className="block-2-item">
                <figure className="image">
                  <img src={require("../images/5_series_lrg.jpg")} alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Sport Cars</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
              <Link to="/shop" className="block-2-item">
                <figure className="image">
                  <img src={require("../images/punto_lrg.jpg")} alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Small Cars</h3>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
              <Link to="/shop" className="block-2-item">
                <figure className="image">
                  <img src={require("../images/trafic_lrg.jpg")} alt="" className="img-fluid" />
                </figure>
                <div className="text">
                  <span className="text-uppercase">Collections</span>
                  <h3>Big Cars</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="site-section block-8">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>Big Sale!</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 mb-5">
              <Link to="/shop/single-product/Peugout%20208"><img src={require("../images/208_lrg.jpg")} alt="Img placeholder" className="img-fluid rounded" width="500px"/></Link>
            </div>
            <div className="col-md-12 col-lg-5 text-center pl-md-5">
              <h2 className="sale">50% less in all items</h2>
              <p className="post-meta mb-4">By <Link className="sale" to="">Tempsto</Link> <span className="block-8-sep">&bullet;</span> Janvier 1, 2024</p>
              <p><Link to="/shop" className="btn btn-warning btn-sm">Shop Now</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
