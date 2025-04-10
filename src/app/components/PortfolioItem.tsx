import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  date?: string;
  problem?: string;
  solution?: string;
  resultDescription?: string;
}

export default function PortfolioItem({ 
  title, 
  description, 
  imageSrc, 
  tags,
  date,
  problem,
  solution,
  resultDescription
}: PortfolioItemProps): React.JSX.Element {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item-content">
        <h3 className="portfolio-item-title">{title}</h3>
        
        <p className="portfolio-item-description">{description}</p>
        
        <div className="portfolio-item-tags">
          {tags.map((tag, index) => (
            <span key={index} className="portfolio-tag">{tag}</span>
          ))}
        </div>
        
        {date && <div className="portfolio-item-date">{date}</div>}
        
        {problem && (
          <div className="portfolio-item-problem">
            <h4>Problem:</h4>
            <p>{problem}</p>
          </div>
        )}
        
        {solution && (
          <div className="portfolio-item-solution">
            <h4>Solution:</h4>
            <p>{solution}</p>
          </div>
        )}
        
        {resultDescription && (
          <div className="portfolio-item-result">
            <p>{resultDescription}</p>
          </div>
        )}
      </div>
      
      <div className="portfolio-item-image">
        <Image 
          src={imageSrc} 
          alt={title}
          width={500}
          height={300}
          className="portfolio-image"
        />
      </div>
    </div>
  );
} 