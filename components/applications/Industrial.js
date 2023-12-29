import React, { useEffect } from 'react'
import industrialImg from '../../images/applications/industrial/industrial.jpg'
import industrial2Img from '../../images/applications/industrial/industrial2.jpg'
import industrial3Img from '../../images/applications/industrial/industrial3.jpg'
import brushSvg from '../../images/brush.svg'

const Industrial = () => {
    useEffect(() => {
        document.title = "Industrial - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Industrial Paints
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 thumb p-1">
                    <a href={industrialImg} data-fancybox="industrial">
                        <img src={industrialImg} alt="Industrial 1" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={industrial2Img} data-fancybox="industrial">
                        <img src={industrial2Img} alt="Industrial 2" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={industrial3Img} data-fancybox="industrial">
                        <img src={industrial3Img} alt="Industrial 3" className="img-thumbnail zoom" />
                    </a>
                </div>
                <p className="container-fluid mt-2">Paint is an important part of equipment maintenance. It does not only
                    impact
                    the
                    outer look of the equipment but also prevent it from any harm. It is a protective coating that stops
                    damage,
                    scratch, and corrosion from weakening metal. Theses coating save equipment from mechanical, chemical
                    and
                    environmental degradation. Currently in these paint there is need for designing the paint according
                    to
                    applications like some articles need to dry quickly for mass production, some articles need high
                    impact
                    strength etc. We have qualified team for designing such paints.</p>
            </div>
        </div>
    </div>
  )
}

export default Industrial