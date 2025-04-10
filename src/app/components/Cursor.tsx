import React, { useEffect } from 'react';

export default function Cursor(): React.JSX.Element {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const outline = document.querySelector('.cursor-dot-outline') as HTMLElement;
    
    if (!dot || !outline) return;
    
    let cursorVisible = true;
    let cursorEnlarged = false;
    
    const delay = 7;
    let _x = 0;
    let _y = 0;
    let endX = window.innerWidth / 2;
    let endY = window.innerHeight / 2;
    
    // Mouse move event
    document.addEventListener('mousemove', e => {
      cursorVisible = true;
      
      endX = e.clientX;
      endY = e.clientY;
      
      dot.style.opacity = '1';
      dot.style.top = `${endY}px`;
      dot.style.left = `${endX}px`;
      
      outline.style.opacity = '1';
    });
    
    // Links hover effects
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseover', () => {
        cursorEnlarged = true;
        dot.style.transform = 'translate(-50%, -50%) scale(1.92)';
        outline.style.transform = 'translate(-50%, -50%) scale(3.90)';
      });
      
      link.addEventListener('mouseout', () => {
        cursorEnlarged = false;
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
        outline.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
    
    // Click events
    document.addEventListener('mousedown', () => {
      cursorEnlarged = true;
      dot.style.transform = 'translate(-50%, -50%) scale(1.92)';
      outline.style.transform = 'translate(-50%, -50%) scale(3.90)';
    });
    
    document.addEventListener('mouseup', () => {
      cursorEnlarged = false;
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Mouse leave/enter events
    document.addEventListener('mouseenter', () => {
      cursorVisible = true;
      dot.style.opacity = '1';
      outline.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
      cursorVisible = true;
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    });
    
    // Animation loop
    const animate = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;
      outline.style.top = `${_y}px`;
      outline.style.left = `${_x}px`;
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mouseup', () => {});
      document.removeEventListener('mouseenter', () => {});
      document.removeEventListener('mouseleave', () => {});
    };
  }, []);
  
  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-dot-outline"></div>
    </>
  );
} 