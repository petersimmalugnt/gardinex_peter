"use client"
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface DebugGridProps {
  columns?: number;
}

const DebugGrid = ({columns = 12}: DebugGridProps) => {
  const [isVisible, setIsVisible] = useState(false);

  function createGrid (amt: number) {
    return (<div> {Array.from({ length: amt }, (_, index) => <div key={index} />)} </div>)
  }

  useEffect(() => {
    const toggleVisibility = (event: KeyboardEvent) => {
      if (event.key === 'g') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', toggleVisibility);

    return () => {
      window.removeEventListener('keydown', toggleVisibility);
    };
  }, []);

  return (
    <>
        {isVisible && (
            <div className={styles.grids}>
                {createGrid(columns*2)}
                {createGrid(columns)}
            </div>
        )}
    </>
  );
}

export default DebugGrid;