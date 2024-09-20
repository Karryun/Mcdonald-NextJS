import React from 'react';
import styles from './progressBar.module.css';

export default function ProgressBar({ name='사람', icon='😀', count=1 }) {
  return (
    <div
      style={{
        display: 'flex', 
        gap: '16px', 
        fontSize: 'large', 
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h2>{name}</h2>
      <div className={styles.progressBar}>
        {icon.repeat(count)}
      </div>
    </div>
  )
}