import React, { useEffect } from 'react'
import chemicalImg from '../../images/applications/chemical/chemical.jpg'
import chemical2Img from '../../images/applications/chemical/chemical2.jpg'
import chemical3Img from '../../images/applications/chemical/chemical3.jpg'
import brushSvg from '../../images/brush.svg'

const Chemical = () => {
    useEffect(() => {
        document.title = "Chemical - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
      <h1 className="display-4 has-brush">
          <span>
              Paints for Chemical Plants
          </span>
      </h1>
      <span className="brush-container">
        <img className="brush" src={brushSvg} />
      </span>
      <div className="container-fluid">
          <div className="row">
              <div className="col-6 thumb p-1">
                  <a href={chemicalImg} data-fancybox="chemical">
                      <img src={chemicalImg} alt="Chemical 1" className="img-thumbnail zoom" />
                  </a>
              </div>
              <div className="col-6 thumb p-1">
                  <a href={chemical2Img} data-fancybox="chemical">
                      <img src={chemical2Img} alt="Chemical 2" className="img-thumbnail zoom" />
                  </a>
              </div>
              <div className="col-6 thumb p-1">
                  <a href={chemical3Img} data-fancybox="chemical">
                      <img src={chemical3Img} alt="Chemical 3" className="img-thumbnail zoom" />
                  </a>
              </div>
              <p className="container-fluid mt-2">In spite of continual growth in the use of corrosion resistance metal
                  and
                  alloy
                  to combat corrosion problems in chemical plant and structural steel working general, paint coatings
                  are
                  widely used. We have trained team of paint chemist which give excellent corrosion by tailoring the
                  paint
                  properties by choice of resins and pigment to reduce corrosion problems.</p>
          </div>
      </div>
    </div>
  )
}

export default Chemical