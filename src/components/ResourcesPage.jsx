import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ResourcesPage.css';
import { MinimalCard, MinimalCardTitle, MinimalCardDescription } from './ui/minimal-card';
import '../components/ui/minimal-card.css'; // Import the CSS for minimal-card
import AboutResourcesTabs from './AboutResourcesTabs';
import { supabase } from '../lib/supabaseClient'; // Import the Supabase client
import SocialSelectorDemo from './SocialSelectorDemo';

const ResourcesPage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyCards = [
    {
      id: 1,
      title: 'Content Strategy Guide',
      description: 'A comprehensive guide to developing an effective content strategy for your business.',
      category: 'Guide',
      downloadLink: '#',
    },
    {
      id: 2,
      title: 'Social Media Toolkit',
      description: 'Tools and templates to boost your social media presence and engagement.',
      category: 'Toolkit',
      downloadLink: '#',
    },
    {
      id: 3,
      title: 'SEO Best Practices',
      description: 'Learn the latest SEO techniques to improve your search engine rankings.',
      category: 'Article',
      downloadLink: '#',
    },
    {
      id: 4,
      title: 'Email Marketing Templates',
      description: 'Ready-to-use email templates for various marketing campaigns.',
      category: 'Templates',
      downloadLink: '#',
    },
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from('resources') // Assuming a 'resources' table in Supabase
          .select('*');

        if (error) {
          throw error;
        }
        setCards(data.length > 0 ? data : dummyCards); // Use dummy data if no data from Supabase
      } catch (error) {
        console.error("Error fetching resources from Supabase:", error);
        setError(error.message);
        setCards(dummyCards); // Fallback to dummy data on error
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <div className="resources-page">Loading resources...</div>;
  }

  if (error && cards.length === 0) { // Only show error if no cards are displayed (even dummy ones)
    return <div className="resources-page">Error: {error}. Displaying fallback resources.</div>;
  }

  return (
    <div className="resources-page">
      <div style={{ position: 'absolute', top: '10px', right: '30px', zIndex: 1000 }}>
        <AboutResourcesTabs />
      </div>
      <div className="resources-content-container">
        <h1 className="resources-title">Our Resources</h1>
        <p className="resources-intro-paragraph">
          Curated insights and tools to sharpen your content, amplify your reach, and grow your business.
        </p>

        <div className="resources-cards-grid">
          {cards.map((card) => (
            <MinimalCard key={card.id}>
              {card.category && <span className="minimal-card-category">{card.category}</span>}
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>{card.description}</MinimalCardDescription>
              {card.downloadLink && (
                <Link to={card.downloadLink} className="minimal-card-button" target="_blank" rel="noopener noreferrer">
                  Download
                </Link>
              )}
            </MinimalCard>
          ))}
        </div>
      </div>
      <footer className="footer">
        <SocialSelectorDemo />
        <p>&copy; {new Date().getFullYear()} whattopost. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResourcesPage;
