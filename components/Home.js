import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import marineImg from '../images/applications/marine/marine-lg.jpg'
import damsImg from '../images/applications/damsandpipeline/dams-lg.jpg'
import industrialImg from '../images/applications/industrial/industrial-lg.jpg'
import chemicalImg from '../images/applications/chemical/chemical-lg.jpg'
import floorImg from '../images/applications/floor/floor-lg.jpg'

const Home = () => {
  useEffect(() => {
    document.title = "Home - Goateknocoats"
  });

  return (
    <Carousel nextLabel={null} prevLabel={null} slide={true}>
      <Carousel.Item interval={5000}>
        <img src={marineImg} />
        <Carousel.Caption>
          <h1>Paints for Marine Application</h1>
          <p>Protective coating designed for ships</p>
          <p>
              <Link to="/marine">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={damsImg} />
        <Carousel.Caption>
          <h1>Paints for Dam and Pipeline</h1>
          <p>Specially designed paints for pipelines and dams/superstructures</p>
          <p>
              <Link to="/damsandpipeline">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={industrialImg} />
        <Carousel.Caption>
          <h1>Industrial Paints</h1>
          <p>Qualified team for designing industrial paints</p>
          <p>
              <Link to="/industrial">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={chemicalImg} />
        <Carousel.Caption>
          <h1>Paints for Chemical Plants</h1>
          <p>Tailoring the paint properties to reduce corrosion problems</p>
          <p>
              <Link to="/chemical">Read More</Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={floorImg} />
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