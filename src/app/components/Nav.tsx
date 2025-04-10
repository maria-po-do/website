import React from 'react';

export default function Nav(): React.JSX.Element {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <a href="#experience" className="nav-link">
          Experience
        </a>
        <a href="#landing-pages" className="nav-link">
          Landing pages
        </a>
        <a href="https://www.notion.so/podobrazhnykh/Hi-I-m-Mary-486614a0cb6741d3807e6519f9c29b69?pvs=4" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          Notion
        </a>
      </div>
      <div className="nav-right">
        <a href="https://www.linkedin.com/in/mary-podobrazhnykh-2a7684234" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          LinkedIn
        </a>
        <a href="https://t.me/mary_po" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          Telegram
        </a>
        <a href="https://www.instagram.com/mariapodobrazhnykh/profilecard/?igsh=MWh1bDdyN2Fsa3MzOQ==" 
           target="_blank" 
           rel="noreferrer noopener" 
           className="nav-link">
          Instagram
        </a>
        <a href="/" className="nav-link">
          Ru
        </a>
      </div>
    </nav>
  );
} 