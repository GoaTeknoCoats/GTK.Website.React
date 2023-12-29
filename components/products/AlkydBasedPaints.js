import React, { useEffect } from 'react'
import brushSvg from '../../images/brush.svg'

const AlkydBasedPaints = () => {
    useEffect(() => {
        document.title = "Alkyd Based Paints - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Alkyd Based Paints
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <p className="container-fluid mt-1">
            Alkyd Paints are cost effective single pack coating on oil or fatty acid based synthetic resin. These paints are
            the most commonly used industrial and decorative applications due to their ease in use, adequate performance and
            high compatibility. Various modifications to the resin structure can further help improve properties such as
            gloss, drying, adhesion and abrasion.
        </p>
        <h3 className="container-fluid mt-1">Merits of Alkyd Based Paints</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>Increased durability.</li>
                <li>Elasticity and durability.</li>
                <li>No shrinkage, and therefore minimization of cracks on the painted surface.</li>
                <li>The possibility of using both indoors and outdoors.</li>
                <li>High resistance to changing temperature regimes (maintained from low subzero temperature -50 to
                    extremely
                    high temperatures +50);</li>
                <li>Protective functions that paint endows painted surfaces</li>
            </ol>
        </div>
        <h3 className="container-fluid mt-1">Our Application Areas</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>Dredging ships</li>
                <li>and other marine applications</li>
            </ol>
        </div>
        <h3 className="container-fluid mt-1">Products</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>GTEK EPOXY HIGH BUILD ZINC CHROMATE PRIMERS</li>
                <li>GTEK EPOXY HIGH BUILD ZINC PHOSPHATE PRIMER (LEAD FREE)</li>
                <li>GTEK EPOXY FINISH GLOSSY PAINTS</li>
                <li>GTEK EPOXY HIGH SOLID PAINT</li>
                <li>GTEK SOLVENT FREE PAINT</li>
                <li>GTEK EPOXY ZINC RICH PRIMER</li>
                <li>GTEK EPOXY COAL TAR PAINT</li>
                <li>GTEK EPOXY THINNER</li>
                <li>GTEK EPOXY FLOOR COATS</li>
            </ol>
        </div>
    </div>
  )
}

export default AlkydBasedPaints