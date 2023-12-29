import React, { useEffect } from 'react'
import marineImg from '../../images/applications/marine/marine.jpg'
import marine2Img from '../../images/applications/marine/marine2.jpg'
import marine3Img from '../../images/applications/marine/marine3.jpg'
import marine4Img from '../../images/applications/marine/marine4.jpg'
import brushSvg from '../../images/brush.svg'

const Marine = () => {
    useEffect(() => {
        document.title = "Marine - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Paints for Marine Application
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 thumb p-1">
                    <a href={marineImg} data-fancybox="marine">
                        <img src={marineImg} alt="Marine 1" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={marine2Img} data-fancybox="marine">
                        <img src={marine2Img} alt="Marine 2" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={marine3Img} data-fancybox="marine">
                        <img src={marine3Img} alt="Marine 3" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={marine4Img} data-fancybox="marine">
                        <img src={marine4Img} alt="Marine 4" className="img-thumbnail zoom" />
                    </a>
                </div>
                <p className="container-fluid mt-2">We are expert in the marine field and have very effective protective coating
                    designed for ships. We use raw
                    material like zinc etc. so that it act as cathode and further protect ship from corrosion and help in
                    long
                    lasting of ship structure</p>
                <p className="container-fluid mt-2">The paint system applied to any part of a ship will be dictated by the
                    environment to which that part of the
                    structure is exposed. Traditionally the painting of the external ship structure was divided into three
                    regions.</p>
                <div className="container-fluid mt-2">
                    <ol>
                        <li>Below the water-line where the plates are continually immersed in sea water.</li>
                        <li>The water-line or boot topping region where immersion is intermittent and a lot of abrasion
                            occurs.
                        </li>
                        <li>The topsides and superstructure exposed to an atmosphere laden with salt spray, and subject to
                            damage
                            through cargo handling. However now that tougher paints are used for the ship’s bottom the
                            distinction
                            between regions need not be so well defined, one scheme covering the bottom and water-line
                            regions.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Marine