import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './BrowseTalent.css'

function BrowseTalent() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => navigate('/'), 300)
  }

  // Sample talent data
  const talents = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      title: 'Professional Chef & Cooking Instructor',
      category: 'Cooking',
      price: 45,
      rating: 4.9,
      reviews: 127,
      location: 'San Francisco, CA',
      image: '👩‍🍳',
      description: 'Specializing in Italian and Mediterranean cuisine with 10+ years experience.',
      skills: ['Italian Cooking', 'Mediterranean', 'Baking', 'Knife Skills']
    },
    {
      id: 2,
      name: 'David Chen',
      title: 'Guitar & Music Theory Teacher',
      category: 'Music',
      price: 35,
      rating: 4.8,
      reviews: 89,
      location: 'Los Angeles, CA',
      image: '🎸',
      description: 'Professional musician with experience in rock, blues, and classical guitar.',
      skills: ['Guitar', 'Music Theory', 'Rock', 'Blues', 'Classical']
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      title: 'Math & Science Tutor',
      category: 'Teaching',
      price: 40,
      rating: 5.0,
      reviews: 156,
      location: 'New York, NY',
      image: '👩‍🏫',
      description: 'PhD in Mathematics, specializing in calculus and physics tutoring.',
      skills: ['Mathematics', 'Physics', 'Calculus', 'Algebra', 'SAT Prep']
    },
    {
      id: 4,
      name: 'Alex Kim',
      title: 'Web Developer & Programming Mentor',
      category: 'Technology',
      price: 60,
      rating: 4.7,
      reviews: 203,
      location: 'Seattle, WA',
      image: '💻',
      description: 'Full-stack developer with expertise in React, Node.js, and Python.',
      skills: ['React', 'Node.js', 'Python', 'JavaScript', 'Web Development']
    },
    {
      id: 5,
      name: 'Emma Wilson',
      title: 'Personal Trainer & Fitness Coach',
      category: 'Fitness',
      price: 50,
      rating: 4.9,
      reviews: 78,
      location: 'Miami, FL',
      image: '🏋️‍♀️',
      description: 'Certified personal trainer specializing in strength training and nutrition.',
      skills: ['Strength Training', 'Cardio', 'Nutrition', 'Weight Loss', 'HIIT']
    },
    {
      id: 6,
      name: 'Michael Brown',
      title: 'Portrait & Event Photographer',
      category: 'Photography',
      price: 75,
      rating: 4.8,
      reviews: 92,
      location: 'Chicago, IL',
      image: '📸',
      description: 'Professional photographer with 8 years experience in portraits and events.',
      skills: ['Portrait Photography', 'Event Photography', 'Photo Editing', 'Lighting']
    }
  ]

  const categories = ['All', 'Cooking', 'Music', 'Teaching', 'Technology', 'Fitness', 'Photography', 'Art & Design', 'Writing']

  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         talent.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || talent.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="browse-talent-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <button className="back-btn" onClick={handleGoBack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
          <h1 className="page-title">Browse Talents</h1>
          <p className="page-description">
            Discover amazing talents in your area and book sessions with skilled professionals
          </p>
        </div>

        {/* Search & Filters */}
        <div className="search-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for talents, skills, or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-info">
          <p className="results-count">{filteredTalents.length} talents found</p>
        </div>

        {/* Talents Grid */}
        <div className="talents-grid">
          {filteredTalents.map(talent => (
            <div key={talent.id} className="talent-card">
              <div className="talent-header">
                <div className="talent-avatar">
                  {talent.image}
                </div>
                <div className="talent-info">
                  <h3 className="talent-name">{talent.name}</h3>
                  <p className="talent-title">{talent.title}</p>
                  <div className="talent-rating">
                    <span className="stars">⭐</span>
                    <span className="rating-score">{talent.rating}</span>
                    <span className="rating-count">({talent.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="talent-content">
                <p className="talent-description">{talent.description}</p>
                
                <div className="talent-skills">
                  {talent.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                  {talent.skills.length > 3 && (
                    <span className="skill-tag more">+{talent.skills.length - 3} more</span>
                  )}
                </div>

                <div className="talent-meta">
                  <div className="talent-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {talent.location}
                  </div>
                  <div className="talent-price">
                    <span className="price">${talent.price}/hr</span>
                  </div>
                </div>
              </div>

              <div className="talent-actions">
                <button className="btn-secondary contact-btn">
                  Message
                </button>
                <button className="btn-primary book-btn">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">No talents found</h3>
            <p className="no-results-description">
              Try adjusting your search terms or category filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseTalent