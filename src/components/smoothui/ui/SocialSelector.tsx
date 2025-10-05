import React from 'react';
import './SocialSelector.css';

export interface Platform {
  name: string;
  domain: string;
  icon: React.ReactNode;
  url: string;
}

interface SocialSelectorProps {
  platforms: Platform[];
  handle: string;
  selectedPlatform: Platform;
  onChange: (platform: Platform) => void;
  buttonText?: string;
}

const SocialSelector: React.FC<SocialSelectorProps> = ({
  platforms,
  handle,
  selectedPlatform,
  onChange,
  buttonText,
}) => {
  const handleOptionClick = (platform: Platform) => {
    onChange(platform);
    window.open(platform.url, '_blank');
  };

  return (
    <div className="social-selector">
      <div className="social-selector-dropdown">
        <button className="social-selector-button">
          {selectedPlatform.icon}
          <span>{buttonText || selectedPlatform.name}</span>
        </button>
        <div className="social-selector-options">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              className={`social-selector-option ${
                selectedPlatform.name === platform.name ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(platform)}
            >
              {platform.icon}
              <span>{platform.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSelector;
