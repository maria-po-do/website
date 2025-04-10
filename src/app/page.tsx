'use client';

import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Profile from './components/Profile';
import SailingCTA from './components/SailingCTA';
import Cursor from './components/Cursor';
import PortfolioItem from './components/PortfolioItem';

export default function HomePage(): React.JSX.Element {
  // Add effect to highlight the 'education' word in the description
  useEffect(() => {
    // This is just a placeholder - in a real implementation, we'd 
    // add the highlight to the "education" word using JS
    const highlighted = document.querySelector('.highlighted-word');
    if (highlighted && highlighted instanceof HTMLElement) {
      highlighted.style.display = 'none'; // Keep it hidden for now
    }
  }, []);
  
  return (
    <div className="white-bg">
      <Cursor />
      
      <div className="main-container">
        <Nav />
        <Profile />
        
        <section id="experience" className="portfolio-section">
          <h2 className="portfolio-heading">Experience</h2>
          <div className="portfolio-items">
            <PortfolioItem
              title="Settler Pro"
              description="A platform that connects clients, designers, agents, and workers, ensuring easy and effective communication."
              imageSrc="/main/Frame_1321315263.png"
              tags={["European market", "Admin panel", "AI"]}
            />
            {/* More portfolio items can be added here */}
          </div>
        </section>
        
        <section id="landing-pages" className="portfolio-section">
          <h2 className="portfolio-heading">Landing Pages</h2>
          <div className="portfolio-items">
            {/* Landing pages examples will go here */}
          </div>
        </section>
        
        <SailingCTA />
      </div>
    </div>
  );
}
