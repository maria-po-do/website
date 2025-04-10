import React from 'react';
import Image from 'next/image';

export default function Profile(): React.JSX.Element {
  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <Image
          src="/main/Group_1321315021.png"
          alt="Maria Podobrazhnykh"
          width={100}
          height={100}
          className="avatar-image"
          priority
        />
      </div>
      
      <div className="profile-title">
        UX/UI and Product Designer
      </div>
      
      <div className="name-container">
        <div className="yellow-dot" aria-hidden="true"></div>
        
        <h1 className="profile-name">
          Maria
          <span className="star-decoration">
            <Image
              src="/main/Group_1321315004.png"
              alt=""
              width={20}
              height={20}
              priority
            />
          </span>
          <br />
          Podobrazhnykh
        </h1>
      </div>
      
      <div className="profile-description">
        UI/UX Designer with an artistic education and over 7 years of experience. 
        I create designs that take into account both business and user goals.
      </div>
      
      <div className="highlighted-word">
        UI/UX Designer with an artistic education and over 7 years of experience. I
        create designs that take into account both business and user goals.
      </div>
    </div>
  );
} 