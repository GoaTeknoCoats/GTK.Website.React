import React, { useEffect } from 'react'
import damsImg from '../../images/applications/damsandpipeline/dams.jpg'
import pipelineImg from '../../images/applications/damsandpipeline/pipeline.jpg'
import dams2Img from '../../images/applications/damsandpipeline/dams2.jpg'
import pipeline2Img from '../../images/applications/damsandpipeline/pipeline2.jpg'
import brushSvg from '../../images/brush.svg'

const DamsAndPipeline = () => {
    useEffect(() => {
        document.title = "Dams And Pipeline - Goateknocoats"
      });
    
    return (
    <div className="more-details position-relative row">
        <h1 className="display-4 has-brush">
            <span>
                Paints for Dams and Pipeline
            </span>
        </h1>
        <span className="brush-container">
            <img className="brush" src={brushSvg} />
        </span>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 thumb p-1">
                    <a href={damsImg} data-fancybox="damsandpipeline">
                        <img src={damsImg} alt="Dams 1" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={pipelineImg} data-fancybox="damsandpipeline">
                        <img src={pipelineImg} alt="Pipeline 1" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={dams2Img} data-fancybox="damsandpipeline">
                        <img src={dams2Img} alt="Dams 2" className="img-thumbnail zoom" />
                    </a>
                </div>
                <div className="col-6 thumb p-1">
                    <a href={pipeline2Img} data-fancybox="damsandpipeline">
                        <img src={pipeline2Img} alt="Pipeline 2" className="img-thumbnail zoom" />
                    </a>
                </div>
                <p className="container-fluid mt-2">We have specially designed paints for dam gates and Pipe line so that pipe
                    line and
                    gates don’t get corrode and don’t have to maintain again and again.</p>
                <p className="container-fluid mt-2">There are two type of surfaces commonly found in dams and pipe line </p>
                <div className="container-fluid mt-2">
                    <ol>
                        <li>Surface in contact with water.</li>
                        <li>Outer surface which is not in contact with water (Generally guniting is done for outer surface
                            some
                            cases we have specially designed paints)
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DamsAndPipeline