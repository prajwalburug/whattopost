import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AboutPage.css';
import AboutResourcesTabs from './AboutResourcesTabs';
import SocialSelectorDemo from './SocialSelectorDemo';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div style={{ position: 'absolute', top: '10px', right: '30px', zIndex: 1000 }}>
        <AboutResourcesTabs />
      </div>
      <div className="about-content-container">
        <h1 className="about-title">About WhatToPost</h1>
        <p className="about-paragraph">
          We’re on a mission to make content creation smooth.
        </p>
        <p className="about-paragraph">
          WhatToPost helps creators and founders express their ideas faster — without creative burnout or blank-screen anxiety.
          We believe creating content shouldn’t feel like a chore; it should feel like flow.
        </p>

        <h2 className="about-subtitle">Our Vision</h2>
        <p className="about-paragraph">
          We believe creativity shouldn’t be limited by tools or time.
          Our vision is to build a world where every idea — no matter how small — can turn into meaningful content that moves people.
        </p>
        <p className="about-paragraph">
          WhatToPost is designed to help you move from idea → structure → execution in minutes, not hours.
        </p>

        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-paragraph">
          To empower creators, founders, and brands to consistently share authentic stories online without overthinking or creative fatigue.
        </p>
        <p className="about-paragraph">
          We’re building an ecosystem that combines:
        </p>
        <ul className="about-list">
          <li>AI creativity</li>
          <li>Proven storytelling frameworks</li>
          <li>Peer accountability</li>
        </ul>
        <p className="about-paragraph">
          All inside one clean, minimal workspace designed to keep you creating — not overthinking.
        </p>

        <h2 className="about-subtitle">How We’re Different</h2>
        <ul className="about-features-list">
          <li>
            <span className="feature-icon">💡</span> <strong className="feature-title">AI with Context</strong>
            <p className="feature-description">Every recommendation adapts to your tone, goals, and story — not generic templates.</p>
          </li>
          <li>
            <span className="feature-icon">🏆</span> <strong className="feature-title">Community Challenges</strong>
            <p className="feature-description">Grow with other creators. Join weekly content challenges and track your progress on the leaderboard.</p>
          </li>
          <li>
            <span className="feature-icon">🔁</span> <strong className="feature-title">Remix Engine</strong>
            <p className="feature-description">Turn one idea into five. Remix proven content patterns with your unique voice and story.</p>
          </li>
          <li>
            <span className="feature-icon">🎯</span> <strong className="feature-title">Feedback AI</strong>
            <p className="feature-description">Get instant insights on clarity, structure, and engagement before you post.</p>
          </li>
        </ul>

        <h2 className="about-subtitle">Our Story</h2>
        <p className="about-paragraph">
          WhatToPost started with a simple frustration — spending hours wondering “what should I post next?”
        </p>
        <p className="about-paragraph">
          We realized creators didn’t need another complex tool — they needed a thinking partner.
          Something that makes idea generation, scripting, and feedback seamless.
        </p>
        <p className="about-paragraph">
          So we built WhatToPost as your creative companion — intuitive, smart, and community-driven.
        </p>

        <h2 className="about-subtitle">Join the Journey</h2>
        <p className="about-paragraph">
          We’re building the future of creator tools — and you can help shape it.
        </p>
        <p className="about-paragraph">
          Join the waitlist today to:
        </p>
        <ul className="about-list">
          <li>✅ Get early access</li>
          <li>✅ Join our first 30-day content sprint</li>
          <li>✅ Become part of a growing creator movement</li>
        </ul>
        <Link to="/" className="join-waitlist-button">
          👉 Join the Waitlist 🚀
        </Link>
      </div>
      <footer className="footer">
        <SocialSelectorDemo />
        <p>&copy; {new Date().getFullYear()} whattopost. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
