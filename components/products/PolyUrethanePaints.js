import React, { useEffect } from 'react'
import brushSvg from '../../images/brush.svg'

const PolyUrethanePaints = () => {
    useEffect(() => {
        document.title = "Poly Urethane Paints - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Poly Urethane Paints
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <p className="container-fluid mt-1">
            In paint, the polyurethane polymer offers a tough and durable coating that is highly resistant to extremes of
            weather – intense sun, wind and precipitation. The polyurethane also allows the paint to be formulated to higher
            gloss levels, offering a beautiful and consistent finish. The higher gloss level also allows improved
            “self-cleaning” – that is, dirt and dust washes off during rain, and residual dirt can be easily removed by
            detergent and water. Graffiti can also be removed from the smooth surface using proprietary cleaning agents.
            Therefore, a polyurethane based paint is generally the best option for the long-term protection and decoration
            of a wide range of substrates.
        </p>
        <h3 className="container-fluid mt-1">Merits of Polyurethane Paints</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>High gloss colour finishes that resist loss of colour and gloss</li>
                <li>Tough and abrasion-resistant – excellent in areas of high wear</li>
                <li>Excellent weatherability –resistant to extremes of UV and weather</li>
                <li>Suitable in a wide range of temperatures - up to around 110°C</li>
                <li>Chemically resistant and is thus inherently resistant to solvent based spray paints (graffiti) and to
                    the
                    harsh graffiti-removing agents used to remove them</li>
                <li>Readily recoatable (after appropriate surface preparation) – they don’t require removal, sanding or
                    surface re-activation with solvents</li>
            </ol>
        </div>
        <h3 className="container-fluid mt-1">Our Application Areas</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>Industrial machinaries</li>
                <li>Pipe line</li>
                <li>Grills</li>
                <li>Chemical plants</li>
            </ol>
        </div>
        <h3 className="container-fluid mt-1">Products</h3>
        <div className="container-fluid mt-1">
            <ol>
                <li>GTEK ARCRYLIC TWO PACK PU COATING(GLOSSY SEMI GLOSSYSEMI MATT SATIN AND MATT FINISH)</li>
                <li>GTEK ACRYLIC TWO PACK HIGH SOLIDS HIGH BUILD PAINT</li>
                <li>GTEK PU THINNER</li>
            </ol>
        </div>
    </div>
  )
}

export default PolyUrethanePaints