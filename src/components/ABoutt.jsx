import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ABoutt = () => {
  return (
    <div>
          <div className="site-wrap">
            <Header/>
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0">
            <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>{' '}
              <strong className="text-black">About</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section border-bottom" data-aos="fade">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="block-16">
                <figure>
                  <img src={require("../images/kodiaq_lrg.jpg")} alt="Imag placeholder" className="img-fluid rounded"  width={500}/>
                  <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo">
                    <span className="icon-md-play"></span>
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">About us : How We Started</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
                exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic
                fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.
              </p>
              <p>
                Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in,
                quibusdam cumque recusandae, laudantium minima repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section border-bottom" data-aos="fade">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
              <h2>The Team</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                      <div className="block-38-header">
                        <img src={require("../images/WhatsApp Image 2023-03-20 at 19.25.50.jpg")} alt="Imag placeholder" className="mb-4" />
                        <h3 className="block-38-heading h4">Ahmed</h3>
                        <p className="block-38-subheading">CEO/Co-Founder</p>
                      </div>
                      <div className="block-38-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                      <div className="block-38-header">
                        <img src={require("../images/8da7220a-5de7-4fde-b5ed-ae333ba5f1a6.png")} alt="Imag placeholder" className="mb-4" />
                        <h3 className="block-38-heading h4">Amenallah</h3>
                        <p className="block-38-subheading">CEO/Co-Founder</p>
                      </div>
                      <div className="block-38-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                      </div>
                  </div>
                </div>
              </div>
              {/* Team members go here */}
            </div>
        </div>
      </div>

      <div className="site-section mb-5 site-section-sm site-blocks-1 border-0" data-aos="fade">
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
      <Footer/>
    </div>
    </div>
  )
}

export default ABoutt