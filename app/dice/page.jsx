"use client"

import { useState } from "react"

export default function Dice() {
  const [dice, setDice] = useState(1);

  const diceRoller = async () => {
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 50);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 100);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 150);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 200);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 250);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 300);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 350);
    setTimeout(() => {
      setDice(Math.ceil(Math.random() * 6));
    }, 400);
  }
  return (
    <div style={{
      width: '100vw',
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '200px',
      fontWeight: '900',
      flexDirection: 'column',
    }}>
      {dice}
      <button 
        style={{
          padding: '10px 30px',
          fontSize: '30px',
          fontWeight: '700'
        }}
        onClick={diceRoller}
      >
        주사위 굴리기
      </button>
    </div>
  )
}