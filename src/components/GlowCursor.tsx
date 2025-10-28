'use client';

import { useEffect } from 'react';

export default function GlowCursor() {
  useEffect(() => {
    // Create main cursor element
    const cursor = document.createElement('div');
    cursor.id = 'glow-cursor';
    document.body.appendChild(cursor);

    // Create trail dots (for the light tail effect)
    const trailCount = 8;
    const trailDots: HTMLDivElement[] = [];
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: radial-gradient(circle, #ffd700 0%, #c0c0c0 50%, transparent 70%);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(192, 192, 192, 0.4);
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity 0.1s ease;
      `;
      document.body.appendChild(trail);
      trailDots.push(trail);
    }

    // Track mouse positions for trail
    const mouseHistory: { x: number; y: number }[] = [];
    const maxHistoryLength = trailCount;

    // Default glow styles
    const defaultStyles = {
      shadow: `
        0 0 20px #ffd700,
        0 0 40px #ffd700,
        0 0 60px #c0c0c0,
        0 0 80px rgba(255, 215, 0, 0.6),
        0 0 100px rgba(192, 192, 192, 0.4)
      `,
    };

    // Hover styles (brighter glow, same size)
    const hoverStyles = {
      shadow: `
        0 0 30px #ffd700,
        0 0 60px #ffd700,
        0 0 90px #ffd700,
        0 0 120px rgba(255, 215, 0, 0.9),
        0 0 150px rgba(255, 215, 0, 0.7),
        0 0 180px rgba(255, 215, 0, 0.5),
        0 0 220px rgba(192, 192, 192, 0.4)
      `,
    };

    // Click styles (brightest glow, same size)
    const clickStyles = {
      shadow: `
        0 0 50px #ffd700,
        0 0 100px #ffd700,
        0 0 150px #ffd700,
        0 0 200px rgba(255, 215, 0, 1),
        0 0 250px rgba(255, 215, 0, 0.8),
        0 0 300px rgba(255, 215, 0, 0.6),
        0 0 350px rgba(192, 192, 192, 0.5)
      `,
    };

    const applyStyles = (styles: typeof defaultStyles) => {
      cursor.style.boxShadow = styles.shadow;
    };

    // Set initial cursor styles (fixed size)
    cursor.style.cssText = `
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: radial-gradient(circle, #ffd700 0%, #ffed4e 30%, #c0c0c0 60%, transparent 80%);
      box-shadow: ${defaultStyles.shadow};
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      display: block;
      opacity: 1;
    `;

    let isHovering = false;
    
    // Check if element is interactive
    const isInteractive = (element: Element): boolean => {
      const tagName = element.tagName.toLowerCase();
      const interactiveTags = ['button', 'a', 'input', 'textarea', 'select'];
      const isClickable = !!(element.getAttribute('onclick') || element.getAttribute('role') === 'button');
      const hasPointerCursor = getComputedStyle(element).cursor === 'pointer';
      return interactiveTags.includes(tagName) || isClickable || hasPointerCursor;
    };

    // Handle mouseover to detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && isInteractive(target)) {
        isHovering = true;
        applyStyles(hoverStyles);
      } else if (isHovering) {
        isHovering = false;
        applyStyles(defaultStyles);
      }
    };

    // Handle click
    const handleMouseDown = () => applyStyles(clickStyles);
    const handleMouseUp = () => {
      if (isHovering) {
        applyStyles(hoverStyles);
      } else {
        applyStyles(defaultStyles);
      }
    };

    // Update cursor position and trail on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update cursor position
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';

      // Add current position to history
      mouseHistory.unshift({ x, y });
      if (mouseHistory.length > maxHistoryLength) {
        mouseHistory.pop();
      }

      // Update trail dots with delay
      trailDots.forEach((trail, index) => {
        if (mouseHistory[index]) {
          const pos = mouseHistory[index];
          trail.style.left = pos.x + 'px';
          trail.style.top = pos.y + 'px';
          
          // Fade trail dots based on distance from cursor
          const opacity = 1 - (index / trailCount) * 0.8;
          const size = 6 - (index / trailCount) * 2;
          trail.style.opacity = String(opacity);
          trail.style.width = `${size}px`;
          trail.style.height = `${size}px`;
        }
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      trailDots.forEach((trail) => {
        if (trail && trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return null;
}
