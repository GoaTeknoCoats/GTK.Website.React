import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import marineImgLg from '../images/applications/marine/marine-lg.jpg'
import damsImgLg from '../images/applications/damsandpipeline/dams-lg.jpg'
import industrialImgLg from '../images/applications/industrial/industrial-lg.jpg'
import chemicalImgLg from '../images/applications/chemical/chemical-lg.jpg'
import floorImgLg from '../images/applications/floor/floor-lg.jpg'
import marineImgSm from '../images/applications/marine/marine-sm.jpg'
import damsImgSm from '../images/applications/damsandpipeline/dams-sm.jpg'
import industrialImgSm from '../images/applications/industrial/industrial-sm.jpg'
import chemicalImgSm from '../images/applications/chemical/chemical-sm.jpg'
import floorImgSm from '../images/applications/floor/floor-sm.jpg'

const Home = () => {
  useEffect(() => {
    document.title = "Home - Goateknocoats"
  });

  return (
    <Carousel nextIcon={null} prevIcon={null} nextLabel={null} prevLabel={null} slide={false} indicators={false}>
      <Carousel.Item interval={5000}>
        <img className="d-none d-md-inline" src={marineImgLg} alt="Paints for Marine Application" />
        <img className="d-inline d-md-none" src={marineImgSm} alt="Paints for Marine Application" />
        <Carousel.Caption>
          <h1>Paints for Marine Application</h1>
          <p>Protective coating designed for ships</p>
          <p>
              <Link to="/marine">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-none d-md-inline" src={damsImgLg} alt="Paints for Dam and Pipeline" />
        <img className="d-inline d-md-none" src={damsImgSm} alt="Paints for Dam and Pipeline" />
        <Carousel.Caption>
          <h1>Paints for Dam and Pipeline</h1>
          <p>Specially designed paints for pipelines and dams/superstructures</p>
          <p>
              <Link to="/damsandpipeline">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-none d-md-inline" src={industrialImgLg} alt="Industrial Paints" />
        <img className="d-inline d-md-none" src={industrialImgSm} alt="Industrial Paints" />
        <Carousel.Caption>
          <h1>Industrial Paints</h1>
          <p>Qualified team for designing industrial paints</p>
          <p>
              <Link to="/industrial">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-none d-md-inline" src={chemicalImgLg} alt="Paints for Chemical Plants" />
        <img className="d-inline d-md-none" src={chemicalImgSm} alt="Paints for Chemical Plants" />
        <Carousel.Caption>
          <h1>Paints for Chemical Plants</h1>
          <p>Tailoring the paint properties to reduce corrosion problems</p>
          <p>
              <Link to="/chemical">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-none d-md-inline" src={floorImgLg} alt="Floor Coatings" />
        <img className="d-inline d-md-none" src={floorImgSm} alt="Floor Coatings" />
        <Carousel.Caption>
          <h1>Floor Coatings</h1>
          <p>Epoxy floor coatings for industrial sites, warehouses, commercial buildings, ships</p>
          <p>
              <Link to="/floor">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home