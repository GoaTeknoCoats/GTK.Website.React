import React, { useEffect } from 'react'
import brushSvg from '../../images/brush.svg'

const EpoxyPaints = () => {
    useEffect(() => {
        document.title = "Epoxy Paints - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Epoxy Paints
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <p className="container-fluid mt-1">
            Epoxy Paints is a two part coatings that was developed to provide solution on metal substrates due to its high
            adhesion on various substrates. The system generally uses 4:1 by volume mixing ratio, and dry overnight
            providing a tough, protective coating with extremely excellent hardness. There strength against various acids,
            alkalis & solvents makes them useful for factory cast iron, aluminium, mild steel, Galvanised steel, cast steel
            and reduces exposure and flammability related issues vis-à-vis solvent based coatings. Epoxy paints only does
            not work for exterior application as they chalk out or turns yellow due to UV exposure.
        </p>
        <p className="container-fluid mt-1">
            We are the professional and experienced manufacturers, suppliers and service providers of world class epoxy
            paints. We are catering to some of the top notch Industries in India by doing customisation of Paints they
            require. Our exclusive epoxy paints are available in different colours, ratio & chemical constitutions which
            address the specific needs of the clients. With our epoxy paints, there is no need for getting through the costs
            of untimely repairing, which comes out to be quite expensive affair altogether.
        </p>
        <h3 className="container-fluid mt-1">Merits of Epoxy Paints</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>Excellent Adhesion.</li>
                <li>No Shrinkage.</li>
                <li>High Resistance to Abrasion & Impact.</li>
                <li>High Resistance to Acids, Alkalis & Solvents.</li>
                <li>Confirms IS Standards</li>
            </ol>
        </div>
        <h3 className="container-fluid mt-1">Our Application Areas</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>Industrial Application</li>
                <li>Industrial tooling & composites</li>
                <li>Consumer & marine applications</li>
                <li>Rusted Metal treatment</li>
                <li>Aerospace applications</li>
                <li>Electrical system & electronics</li>
                <li>Protection from Rust & Corrosion</li>
                <li>Concrete Walls</li>
                <li>Waterproofing applications</li>
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

export default EpoxyPaints