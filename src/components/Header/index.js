/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import './index.css'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleNavbar = () => {
        setMenuOpen(prevState => !prevState)
    }

    const closeNavbar = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(isMenuOpen){
                closeNavbar()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMenuOpen])

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
                className="food-munch-logo"
                alt="Food Munch Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Use toggle function
              aria-controls="navbarNavAltMarkup"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link active" id="navItem1" href="#wcuSection" onClick={closeNavbar}>
                  Why Choose Us? <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link" href="#exploreMenuSection" id="navItem2" onClick={closeNavbar}>
                  Explore Menu
                </a>
                <a className="nav-link" href="#deliveryPaymentSection" id="navItem3" onClick={closeNavbar}>
                  Delivery & Payment
                </a>
                <a className="nav-link" href="/contactus" id="navItem4" onClick={closeNavbar}>
                  Contact Us
                </a>
                <a className="nav-link" href="#followUsSection" id="navItem4" onClick={closeNavbar}>
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Header