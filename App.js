import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter, Link } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Chemical from './components/applications/Chemical'
import DamsAndPipeline from './components/applications/DamsAndPipeline'
import Floor from './components/applications/Floor'
import Industrial from './components/applications/Industrial'
import Marine from './components/applications/Marine'
import AlkydBasedPaints from './components/products/AlkydBasedPaints'
import EpoxyPaints from './components/products/EpoxyPaints'
import PolyUrethanePaints from './components/products/PolyUrethanePaints'
import gtkLogo from './images/gtk-logo.jpeg'

const AppLayout = () => {
    const [showNavItems, setShowNavItems] = useState(false);
    const [showNavItemProducts, setShowNavItemProducts] = useState(false);
    const [showNavItemApplications, setShowNavItemApplications] = useState(false);
    
    const toggleNavItems = () => {
        setShowNavItems(!showNavItems);
    }
    const toggleNavItemProducts = () => {
        setShowNavItemProducts(!showNavItemProducts);
    }
    const toggleNavItemApplications = () => {
        setShowNavItemApplications(!showNavItemApplications);
    }
    const hideNavItems = () => {
        hideNavItemProducts();
        hideNavItemApplications();
    }
    const hideNavItemProducts = () => {
        setShowNavItemProducts(false);
    }
    const hideNavItemApplications = () => {
        setShowNavItemApplications(false);
    }
    
  return (
    <>
        <header>
            <nav className="navbar navbar-expand-md navbar-toggleable-md navbar-light bg-transparent box-shadow p-md-0">
                <div className="container-fluid pr-sm-0">
                    <Link className="navbar-brand" to="/">
                        <img src={gtkLogo} />
                    </Link>
                    <button onClick={() => { toggleNavItems() }} className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={(showNavItems ? 'show' : '') + ' navbar-collapse collapse d-md-inline-flex flex-md-row-reverse'}>
                        <ul className="navbar-nav flex-grow-1 h4 text-center justify-content-end">
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link text-dark">About Us</Link>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li className="nav-item dropdown">
                                <a onClick={() => { toggleNavItemProducts() }} aria-expanded="false" aria-haspopup="true" className="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="ourProducts">Our Products</a>
                                <div className={(showNavItemProducts ? 'show' : '') + ' dropdown-menu rounded-0 text-center'} aria-labelledby="ourProducts">
                                    <Link onClick={() => { hideNavItems() }} to="/epoxypaints" className="dropdown-item">Epoxy Paints</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/polyurethanepaints" className="dropdown-item">Poly Urethane Paints</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/alkydbasedpaints" className="dropdown-item">Alkyd Based Paints</Link>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li className="nav-item dropdown">
                                <a onClick={() => { toggleNavItemApplications() }} aria-expanded="false" aria-haspopup="true" className="nav-link text-dark dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" id="applications">Applications</a>
                                <div className={(showNavItemApplications ? 'show' : '') + ' dropdown-menu rounded-0 text-center'} aria-labelledby="applications">
                                    <Link onClick={() => { hideNavItems() }} to="/marine" className="dropdown-item">Paints for Marine Application</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/damsandpipeline" className="dropdown-item">Paints for Dams and Pipeline</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/industrial" className="dropdown-item">Industrial Paints</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/chemical" className="dropdown-item">Paints for Chemical Plants</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link onClick={() => { hideNavItems() }} to="/floor" className="dropdown-item">Floor Coatings</Link>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link text-dark">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="container-fluid main-content">
            <main role="main" className="pb-3">
                <Outlet/>
            </main>
        </div>
        <footer className="border-top footer text-muted">
            <div className="container">
                &copy; 2020 Goateknocoats. All Rights Reserved.
            </div>
        </footer>
    </>
  )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/home/index",
                element: <Home />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/home/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/home/contactus",
                element: <ContactUs />
            },
            {
                path: "/applications",
                element: <Chemical />
            },
            {
                path: "/applications/chemical",
                element: <Chemical />
            },
            {
                path: "/chemical",
                element: <Chemical />
            },
            {
                path: "/applications/damsandpipeline",
                element: <DamsAndPipeline />
            },
            {
                path: "/damsandpipeline",
                element: <DamsAndPipeline />
            },
            {
                path: "/applications/floor",
                element: <Floor />
            },
            {
                path: "/floor",
                element: <Floor />
            },
            {
                path: "/applications/industrial",
                element: <Industrial />
            },
            {
                path: "/industrial",
                element: <Industrial />
            },
            {
                path: "/applications/marine",
                element: <Marine />
            },
            {
                path: "/marine",
                element: <Marine />
            },
            {
                path: "/alkydbasedpaints",
                element: <AlkydBasedPaints />
            },
            {
                path: "/products/alkydbasedpaints",
                element: <AlkydBasedPaints />
            },
            {
                path: "/products",
                element: <EpoxyPaints />
            },
            {
                path: "/epoxypaints",
                element: <EpoxyPaints />
            },
            {
                path: "/products/epoxypaints",
                element: <EpoxyPaints />
            },
            {
                path: "/polyurethanepaints",
                element: <PolyUrethanePaints />
            },
            {
                path: "/products/polyurethanepaints",
                element: <PolyUrethanePaints />
            }
        ]
    }
])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}></RouterProvider>);