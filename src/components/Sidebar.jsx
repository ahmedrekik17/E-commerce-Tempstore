import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({SelectCategory}) => {
  const [min, setMin] = useState(200);
  const [max, setMax] = useState(10000);

    const handleMinChange = (amount) => {
      setMin((prevMin) => Math.max(200, Math.min( parseInt(prevMin, 10) + amount,10000)));}
    const handleMaxChange=(amount)=>{
      setMax((prevMax) => Math.min(10000,Math.max(parseInt(prevMax, 10)+amount, 200)));
    };
  return (
    <div className="cat">
      <div className="bord rounded mb-4">
        <h3 className="h6catt mb-3 h6 text-uppercase text-black d-block">Categories</h3>
        <ul className="list-unstyled m-3">
        <li className="mb-1"><Link to="" className="d-flex"   onClick={() => SelectCategory('')}><span className="genre">All</span> <span className="text-black ml-auto">(10)</span></Link></li>
          <li className="mb-1"><Link to="" className="d-flex" onClick={() => SelectCategory('big')}><span className="genre">Big Cars</span> <span className="text-black ml-auto">(2)</span></Link></li>
          <li className="mb-1"><Link to="" className="d-flex" onClick={() => SelectCategory('sport')}><span className="genre">Sport Cars</span> <span className="text-black ml-auto">(4)</span></Link></li>
          <li className="mb-1"><Link to="" className="d-flex" onClick={() => SelectCategory('small')}><span className="genre">Small Cars</span> <span className="text-black ml-auto">(4)</span></Link></li>
        </ul>
      </div>

      <div className="bord rounded mb-4">
        <div className="mb-4">
          <h3 className="h6catt mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
          <div id="slider-range" className="border-primary"></div>
          <input type="text" name="text" id="amount" className="form-controlll text-center border-0 p-0 ml-3 mb-3" value={`$${min} - $${max}`}  />
          <div className="input-group m-3" style={{ maxWidth: '300px' }}>
                  <div className="input-group-prepend">
                    <h6>Min :&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    <button
                      className="btn btn-outline-primary js-btn-minus"
                      type="button"
                      onClick={() => handleMinChange(-100)}
                    >
                      &minus;
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary js-btn-plus"
                      type="button"
                      onClick={() => handleMinChange(100)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="input-group m-3" style={{ maxWidth: '300px' }}>
                  <div className="input-group-prepend">
                    <h6>Max :&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                    <button
                      className="btn btn-outline-primary js-btn-minus"
                      type="button"
                      onClick={() => handleMaxChange(-100)}
                    >
                      &minus;
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary js-btn-plus"
                      type="button"
                      onClick={() => handleMaxChange(100)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="btn filter-btn btn-warning">Filtrer</button>

        </div>
      </div>
      <div className="bord rounded mb-4">
        <div className="mb-4">
          <h3 className="h6catt mb-3 h6 text-uppercase text-black d-block">Size</h3>
          <div className="m-3">
          <label htmlFor="s_sm" className="d-flex">
            <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (9)</span>
          </label>
          <label htmlFor="s_md" className="d-flex">
            <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Sport (2)</span>
          </label>
          <label htmlFor="s_lg" className="d-flex">
            <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Big (5)</span>
          </label>
          </div>
        </div>
      </div>
      <div className="bord rounded mb-4">
        <div className="mb-4">
          <h3 className="h6catt mb-3 h6 text-uppercase text-black d-block">Color</h3>
          <div className="m-3">
          <Link href="#" className="d-flex color-item align-items-center" >
            <span className="bg-dark color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Black (6)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center" >
            <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (3)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center" >
            <span className="bg-dark color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Grey (10)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center" >
            <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (2)</span>
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
