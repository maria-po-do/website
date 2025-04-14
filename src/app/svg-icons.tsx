'use client';

import React from 'react';

export default function SvgIcons(): React.JSX.Element {
  return (
    <svg className="defs" style={{ position: 'fixed', display: 'none' }}>
      <defs>
        {/* Иконка стрелки для проигрывания */}
        <symbol id="play-arrow-ic" viewBox="0 0 14 14">
          <polygon points="3,2 11,7 3,12" fill="currentColor" />
        </symbol>
        
        {/* Иконка паузы */}
        <symbol id="pause-ic" viewBox="0 0 14 14">
          <rect x="3" y="2" width="3" height="10" fill="currentColor" />
          <rect x="8" y="2" width="3" height="10" fill="currentColor" />
        </symbol>
        
        {/* Иконка возврата */}
        <symbol id="return-ic" viewBox="0 0 40 40">
          <path d="M20,7c7.2,0,13,5.8,13,13c0,7.2-5.8,13-13,13c-2.8,0-5.4-0.9-7.5-2.4h4.7v-3H9v8.2h3v-3.2
          c2.8,2,6.1,3.2,9.8,3.2c9.3,0,16.8-7.5,16.8-16.8C38.6,11.5,31.1,4,21.8,4C14.6,4,8.5,8.2,6,14.1h3.4
          C11.5,10.6,15.4,8,20,8" fill="currentColor" />
        </symbol>
        
        {/* Иконка X для закрытия */}
        <symbol id="x-ic" viewBox="0 0 8 8">
          <line x1="1" y1="1" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="7" y1="1" x2="1" y2="7" stroke="currentColor" strokeWidth="1.5" />
        </symbol>
        
        {/* Тонкая иконка X для кнопки закрытия */}
        <symbol id="x-thin-ic" viewBox="0 0 25 26">
          <line x1="6" y1="6" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <line x1="19" y1="6" x2="6" y2="19" stroke="currentColor" strokeWidth="1.5" />
        </symbol>
      </defs>
    </svg>
  );
} 