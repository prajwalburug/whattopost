import { useState, useRef, useEffect } from 'react';
import LightRays from './LightRays';
import TextType from './TextType';
import Carousel from './Carousel';
import './LandingPage.css';
import { FiCircle, FiEdit2, FiLayers, FiLayout, FiCode } from 'react-icons/fi';
import AboutResourcesTabs from './AboutResourcesTabs';
import SocialSelectorDemo from './SocialSelectorDemo';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    if (import.meta.env.DEV) console.debug('Email submitted');

    setIsSubmitted(true);
    setIsSubmitting(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setEmail('');
    }, 3000);
  };

  const carouselContainerStyle = {
    minHeight: '400px',
    height: '60vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="landing-page">
      {/* Light Rays Background */}
      <div className="light-rays-wrapper">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Header */}
        <header className="header">
          <div className="nav-bar">
            <AboutResourcesTabs />
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text-container">
            <TextType 
              as="h1"
              className="headline"
              text={["The app is coming soon.", "Stop Overthinking. Start Posting."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              loop={false}
            />
            <p className="subheadline">
              Until then, join our community and help shape it.
            </p>
          </div>

          {/* Email Form */}
          <form className="email-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <div className="form-wrapper">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
                aria-label="Email address"
                className="email-input"
              />
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
            {isSubmitted && (
              <p role="status" aria-live="polite" className="success-message">Thanks! We'll be in touch soon.</p>
            )}
          </form>
        </section>

        
        {/* Who Can Join Section */}
        <section className="who-section">
          <h3 className="section-title">Who Can Join?</h3>
          <div style={carouselContainerStyle}>
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
              items={[
                {
                  title: 'Solo Founders',
                  description: 'Building your startup and need content that converts',
                  id: 1,
                  icon: <FiCircle className="carousel-icon" />
                },
                {
                  title: 'Content Creators',
                  description: 'Creating engaging content that resonates with your audience',
                  id: 2,
                  icon: <FiEdit2 className="carousel-icon" />
                },
                {
                  title: 'Agency Owners',
                  description: 'Managing multiple clients and their content strategies',
                  id: 3,
                  icon: <FiLayers className="carousel-icon" />
                },
                {
                  title: 'Service Providers',
                  description: 'Showcasing your expertise through valuable content',
                  id: 4,
                  icon: <FiLayout className="carousel-icon" />
                },
                {
                  title: 'Value Creators',
                  description: 'Anyone who wants to create value from content',
                  id: 5,
                  icon: <FiCode className="carousel-icon" />
                }
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <SocialSelectorDemo />
          <p>&copy; {new Date().getFullYear()} whattopost. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
