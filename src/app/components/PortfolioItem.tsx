import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

export default function PortfolioItem({ title, description, imageSrc, tags }: PortfolioItemProps): React.JSX.Element {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item-image">
        <Image 
          src={imageSrc} 
          alt={title}
          width={400}
          height={300}
          className="portfolio-image"
        />
      </div>
      
      <h3 className="portfolio-item-title">{title}</h3>
      
      <div className="portfolio-item-tags">
        {tags.map((tag, index) => (
          <span key={index} className="portfolio-tag">{tag}</span>
        ))}
      </div>
      
      <p className="portfolio-item-description">{description}</p>
    </div>
  );
} 