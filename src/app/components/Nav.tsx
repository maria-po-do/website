import React from 'react';

export default function Nav(): React.JSX.Element {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <a href="#experience" className="nav-link">EXPERIENCE</a>
        <a href="#landing-pages" className="nav-link">
          LANDING<br/>PAGES
        </a>
        <a href="https://www.notion.so/podobrazhnykh/Hi-I-m-Mary-486614a0cb6741d3807e6519f9c29b69?pvs=4" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          NOTION
        </a>
      </div>
      <div className="nav-right">
        <a href="https://www.linkedin.com/in/mary-podobrazhnykh-2a7684234" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          LINKEDIN
        </a>
        <a href="https://t.me/mary_po" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          TELEGRAM
        </a>
        <a href="https://www.instagram.com/mariapodobrazhnykh/" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          INSTAGRAM
        </a>
        <a href="/" className="nav-link">RU</a>
      </div>
    </nav>
  );
} 