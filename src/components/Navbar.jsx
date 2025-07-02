import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Track user authentication status

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close categories dropdown when main menu closes
    if (isMenuOpen) {
      setIsMobileCategoriesOpen(false)
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleMobileCategories = (e) => {
    e.preventDefault()
    setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
  }

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Handle profile/logout functionality
      console.log('Profile clicked')
      // For demo purposes, you can uncomment the line below to toggle logout
      // setIsLoggedIn(false)
      // You can add profile dropdown or logout logic here
    } else {
      // Redirect to login page
      window.location.href = '/login'
    }
  }

  // Demo function to simulate login (remove this in production)
  const simulateLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      {/* Demo button - remove in production */}
      <div style={{position: 'fixed', top: '10px', right: '10px', zIndex: 9999}}>
        <button 
          onClick={simulateLogin} 
          style={{
            padding: '5px 10px', 
            background: '#4caf50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            fontSize: '12px'
          }}
        >
          {isLoggedIn ? 'Logged In ✓' : 'Test Login'}
        </button>
      </div>
      
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <div className="logo-icon">🌱</div>
            <span className="logo-text">TalentHub</span>
          </a>
        </div>

        {/* Desktop Search Bar */}
        <div className="navbar-search desktop-search">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search talents..." 
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-menu desktop-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle">
                Categories
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Web Development</a>
                <a href="#" className="dropdown-item">Mobile Apps</a>
                <a href="#" className="dropdown-item">UI/UX Design</a>
                <a href="#" className="dropdown-item">Data Science</a>
                <a href="#" className="dropdown-item">Marketing</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Auth Button */}
        <div className="navbar-auth desktop-auth">
          {isLoggedIn ? (
            <button className="auth-btn profile-btn" onClick={handleAuthClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Profile
            </button>
          ) : (
            <button className="auth-btn signup-btn" onClick={handleAuthClick}>
              Sign Up
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button className="mobile-search-btn" onClick={toggleSearch}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className={`mobile-search ${isSearchOpen ? 'open' : ''}`}>
        <div className="mobile-search-container">
          <input 
            type="text" 
            placeholder="Search for opportunities..." 
            className="mobile-search-input"
          />
          <button className="mobile-search-submit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav">
            <li className="mobile-nav-item">
              <a href="/" className="mobile-nav-link active">Home</a>
            </li>
            <li className="mobile-nav-item">
              <a href="#" className="mobile-nav-link" onClick={toggleMobileCategories}>
                Categories
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={`mobile-dropdown-arrow ${isMobileCategoriesOpen ? 'open' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`mobile-dropdown ${isMobileCategoriesOpen ? 'open' : ''}`}>
                <a href="#" className="mobile-dropdown-item">Web Development</a>
                <a href="#" className="mobile-dropdown-item">Mobile Apps</a>
                <a href="#" className="mobile-dropdown-item">UI/UX Design</a>
                <a href="#" className="mobile-dropdown-item">Data Science</a>
                <a href="#" className="mobile-dropdown-item">Marketing</a>
              </div>
            </li>
          </ul>
          <div className="mobile-auth">
            {isLoggedIn ? (
              <button className="mobile-auth-btn profile" onClick={handleAuthClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Profile
              </button>
            ) : (
              <button className="mobile-auth-btn signup" onClick={handleAuthClick}>
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar