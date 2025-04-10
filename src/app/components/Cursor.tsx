import React, { useEffect } from 'react';

export default function Cursor(): React.JSX.Element {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    const outline = document.querySelector('.cursor-dot-outline') as HTMLElement;
    
    if (!dot || !outline) return;
    
    let cursorVisible = false;
    let cursorEnlarged = false;
    
    const endX = window.innerWidth / 2;
    const endY = window.innerHeight / 2;
    
    let _x = 0;
    let _y = 0;
    
    const delay = 8; // Cursor delay
    
    // Mouse move event
    document.addEventListener('mousemove', e => {
      cursorVisible = true;
      
      dot.style.opacity = '1';
      outline.style.opacity = '1';
      
      dot.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      
      _x += (e.clientX - _x) / delay;
      _y += (e.clientY - _y) / delay;
      
      outline.style.top = `${_y}px`;
      outline.style.left = `${_x}px`;
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
      cursorVisible = false;
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