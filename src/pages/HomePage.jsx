import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate()
  
  const handleListTalent = () => {
    navigate('/list-talent')
  }

  const handleBrowseTalents = () => {
    navigate('/browse-talents')
  }

  const featuredCategories = [
    {
      id: 1,
      name: 'Cooking',
      icon: '👨‍🍳',
      description: 'Learn from professional chefs and home cooks',
      talents: 245
    },
    {
      id: 2,
      name: 'Teaching',
      icon: '👩‍🏫',
      description: 'Academic tutoring and skill development',
      talents: 189
    },
    {
      id: 3,
      name: 'Music',
      icon: '🎵',
      description: 'Musical instruments and vocal training',
      talents: 167
    },
    {
      id: 4,
      name: 'Art & Design',
      icon: '🎨',
      description: 'Creative arts and graphic design',
      talents: 134
    },
    {
      id: 5,
      name: 'Fitness',
      icon: '🏃‍♂️',
      description: 'Personal training and wellness coaching',
      talents: 98
    },
    {
      id: 6,
      name: 'Technology',
      icon: '💻',
      description: 'Programming, web development, and tech skills',
      talents: 156
    },
    {
      id: 7,
      name: 'Photography',
      icon: '📸',
      description: 'Photo shoots and photography lessons',
      talents: 87
    },
    {
      id: 8,
      name: 'Writing',
      icon: '✍️',
      description: 'Content writing and creative storytelling',
      talents: 76
    }
  ]

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover Amazing <span className="highlight">Talents</span> Near You
            </h1>
            <p className="hero-description">
              Connect with skilled professionals and passionate individuals who can help you learn, 
              create, and achieve your goals. From cooking to coding, find the perfect talent for your needs.
            </p>
            
            {/* Main Action Buttons */}
            <div className="hero-buttons">
              <button className="btn-primary list-talent-btn" onClick={handleListTalent}>
                <span className="btn-icon">🌟</span>
                List Your Talent
              </button>
              <button className="btn-secondary browse-talents-btn" onClick={handleBrowseTalents}>
                <span className="btn-icon">🔍</span>
                Browse Talents
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Active Talents</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-visual">
              <div className="floating-card card-1">
                <span className="card-icon">🍳</span>
                <span className="card-text">Cooking</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🎵</span>
                <span className="card-text">Music</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">💻</span>
                <span className="card-text">Tech</span>
              </div>
              <div className="floating-card card-4">
                <span className="card-icon">🎨</span>
                <span className="card-text">Art</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Categories</h2>
            <p className="section-description">
              Explore our most popular talent categories and find the perfect match for your needs
            </p>
          </div>

          <div className="categories-grid">
            {featuredCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-stats">
                  <span className="talent-count">{category.talents} talents</span>
                </div>
                <button className="category-btn">
                  Explore {category.name}
                </button>
              </div>
            ))}
          </div>

          <div className="view-all-container">
            <button className="view-all-btn">
              View All Categories
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How TalentHub Works</h2>
            <p className="section-description">
              Getting started is simple and straightforward
            </p>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Search & Discover</h3>
                <p className="step-description">
                  Browse through our diverse categories or search for specific talents and skills
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Connect & Chat</h3>
                <p className="step-description">
                  Message talented individuals directly and discuss your requirements
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Book & Enjoy</h3>
                <p className="step-description">
                  Schedule sessions and start learning or working with your chosen talent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Share Your Talent?</h2>
            <p className="cta-description">
              Join thousands of talented individuals already earning and helping others on TalentHub
            </p>
            <button className="cta-btn" onClick={handleListTalent}>
              Start Earning Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage