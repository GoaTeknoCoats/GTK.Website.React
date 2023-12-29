import React, { useEffect } from 'react'
import floorImg from '../../images/applications/floor/floor.jpg'
import floor2Img from '../../images/applications/floor/floor2.jpg'
import brushSvg from '../../images/brush.svg'

const Floor = () => {
    useEffect(() => {
        document.title = "Floor - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Floor Coatings
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 thumb p-1">
                    <a href={floorImg} data-fancybox="floor">
                        <img src={floorImg} alt="Floor 1" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={floor2Img} data-fancybox="floor">
                        <img src={floor2Img} alt="Floor 2" className="img-thumbnail zoom" />
                    </a>
                </div>
                <p className="container-fluid mt-2">Epoxy floor coatings are commonly used for commercial, industrial and
                    marine
                    floorings. Epoxy coatings are normally applied over concrete floors and metal surface (Marine
                    Applications).to provide a high performance, smooth, that can last for many year and withstand heavy
                    loads.
                    Many industrial sites, warehouses, commercial buildings and ships rely on epoxy floors to maintain
                    clean
                    and
                    safe conditions for workers, equipment and inventory. We have specially designed floor coats for
                    above
                    mentioned applications. (Surface inspection is mandatory for floor coats for all applications).</p>
            </div>
        </div>
    </div>
    )
}

export default Floor