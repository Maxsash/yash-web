'use client';

import { useEffect, useRef } from 'react';
import styles from './CursorEffect.module.css';

export default function CursorEffect() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const cursor = cursorRef.current;
      if (!cursor) return;

      window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}
