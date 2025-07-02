
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './TalentListPage.css'

function TalentListPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => navigate('/'), 300)
  }

  return (
    <div className="talent-list-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <button className="back-btn" onClick={handleGoBack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
          <h1 className="page-title">List Your Talent</h1>
          <p className="page-description">
            Share your skills with the world and start earning money doing what you love
          </p>
        </div>

        {/* Talent Form */}
        <div className="talent-form-container">
          <form className="talent-form">
            <div className="form-section">
              <h2 className="section-title">Basic Information</h2>
              
              <div className="form-group">
                <label htmlFor="talent-title" className="form-label">
                  Talent Title *
                </label>
                <input
                  type="text"
                  id="talent-title"
                  className="form-input"
                  placeholder="e.g., Professional Guitar Lessons"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category" className="form-label">
                  Category *
                </label>
                <select id="category" className="form-select" required>
                  <option value="">Select a category</option>
                  <option value="cooking">Cooking</option>
                  <option value="teaching">Teaching</option>
                  <option value="music">Music</option>
                  <option value="art-design">Art & Design</option>
                  <option value="fitness">Fitness</option>
                  <option value="technology">Technology</option>
                  <option value="photography">Photography</option>
                  <option value="writing">Writing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  id="description"
                  className="form-textarea"
                  rows="5"
                  placeholder="Describe your talent, experience, and what you offer..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">Pricing & Availability</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price" className="form-label">
                    Price per Hour *
                  </label>
                  <div className="price-input">
                    <span className="currency">$</span>
                    <input
                      type="number"
                      id="price"
                      className="form-input"
                      placeholder="25"
                      min="1"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="form-input"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Service Type</label>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    In-person sessions
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Online sessions
                  </label>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="section-title">Contact Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={handleGoBack}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <span className="btn-icon">🌟</span>
                List My Talent
              </button>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="benefits-title">Why List Your Talent?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Earn Extra Income</h3>
              <p className="benefit-description">
                Turn your skills into a steady income stream
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🕐</div>
              <h3 className="benefit-title">Flexible Schedule</h3>
              <p className="benefit-description">
                Work when you want, where you want
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3 className="benefit-title">Meet New People</h3>
              <p className="benefit-description">
                Connect with interesting people in your community
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3 className="benefit-title">Grow Your Skills</h3>
              <p className="benefit-description">
                Teaching others helps you improve your own abilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalentListPage