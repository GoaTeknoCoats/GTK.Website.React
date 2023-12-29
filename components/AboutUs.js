import React, { useEffect } from 'react'
import aboutUsImg from '../images/about-us.jpg'

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - Goateknocoats"
  });

  return (
    <div className="about-us container-fluid position-relative">
        <img src={aboutUsImg} alt="About Us" />
        <div className="position-absolute centered text-white text-center">
            <h1 className="display-4">Goateknocoats</h1>
            <p>Protective Coats To Help Structures Last Long</p>
        </div>
        <div className="more-details">
            <p>Goateknocoats has established itself as the leading manufacturer of protective coating for chemical plants,
                marine application, super structures, dams, marine and industrial floor coatings and pipeline projects.
                Goatecknocoats started in the year 2009 at corlim ilhas goa. Today company is growing very fast because of
                good
                product and better customer support. Today Goateknocoats is having well experienced technical staff and
                workmen
                who constantly develop new product and processes to suit specific applications and products in close
                interaction
                with customer to deliver the very best product and services.</p>
            <p>Goateknocoats have well established quality systems in line with ISO-9007-2015 standards and certified by
                IRQAO
                of UK.</p>
        </div>
    </div>
  )
}

export default AboutUs