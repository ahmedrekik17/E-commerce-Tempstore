import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/style.css';
import '../styles/styles.css';
import '../styles/jq.css';
import '../styles/magnific-popup.css'
import '../styles/owl.carousel.min.css';
import '../styles/owl.theme.default.min.css';
import '../fonts/icomoon/style.css';
import '../styles/bootstrap.min.css';
import { products  } from './products';


const Shopes = () => {
  const [Fav,setFav]= useState({});
  const handleFavFilt = (productId) => {
    setFav((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const Products = selectedCategory
    ? products.filter((product) => product.type === selectedCategory)
    : products;



  // Sample product data
  return (
    <div>
        <div className="site-wrap">
            <Header/>
      <div className="py-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="path col-md-12 mb-0">
            <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-sectionn">
      <div className="catt">
        <Sidebar SelectCategory={(category) => setSelectedCategory(category)} />
        </div>
        <div className="containerr">
          <div className="row mb-5">
            <div className="col-md-9 order-2">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="float-md-left mb-4">
                    <h2 className="text-black h5">Shop All</h2>
                  </div>
                  <div className="d-flex">
                    <div className="dropdown mr-1 ml-md-auto">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Latest
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                        <Link className="dropdown-item" href="#">Big Cars</Link>
                        <Link className="dropdown-item" href="#">Sport Cars</Link>
                        <Link className="dropdown-item" href="#">Small Cars</Link>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">
                        Reference
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                        <Link className="dropdown-item" href="#">Relevance</Link>
                        <Link className="dropdown-item" href="#">Name, A to Z</Link>
                        <Link className="dropdown-item" href="#">Name, Z to A</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Price, low to high</Link>
                        <Link className="dropdown-item" href="#">Price, high to low</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rr row">
                {Products.map((product) => (
                  <div className="col-sm-6 col-lg-4 mb-4 p-1" data-aos="fade-up" key={product.id}>
                    <div className="block-4 text-center border">
                      <figure className="block-4-image">
                        <Link to={`/shop/single-product/${product.name}`}>
                          <img src={require(`../images/${product.image}`)} alt={product.name} height="160px" className="img-fluid" />
                        </Link>
                      </figure>
                      <div className="block-4-text">
                        <h3>
                          <Link to={`/shop/single-product/${product.name}`}>{product.name}</Link>
                        </h3>
                        <p className="mb-0"></p>
                        <p className="text-primary font-weight-bold">${product.price}</p>
                        <p>
                          <button id="fav-btn" onClick={() => handleFavFilt(product.id)}>
                            <i className={`bi ${Fav[product.id]&&[product.state="favorite"] ? 'bi-heart-fill text-danger' : 'bi-heart text-dark'}`}></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                

                {/* Add more product/BMW-Series-5 blocks as needed */}
              </div>

              <div className="row" data-aos="fade-up">
                <div className="col-md-12 text-center">
                  <div className="site-block-27">
                    <ul>
                      <li><Link href="#">&lt;</Link></li>
                      <li className="active"><span>1</span></li>
                      <li><Link href="#">2</Link></li>
                      <li><Link href="#">3</Link></li>
                      <li><Link href="#">4</Link></li>
                      <li><Link href="#">5</Link></li>
                      <li><Link href="#">&gt;</Link></li>
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

export default Shopes
