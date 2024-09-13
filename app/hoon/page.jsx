"use client"

import Styles from "./hoon.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Hoon() {
  const [drink, setDrink] = useState(1);

  return (
    <div className={Styles.Container}>
      <button 
        className={Styles.Drink}
        onClick={() => {
          if (drink < 10) setDrink(drink + 1);
        }}
      >
        포카리 스윁
      </button>
      <input value={'🍹'.repeat(drink)} disabled />
      <div className={Styles.ButtonArea}>
        <button onClick={()=>setDrink(1)}>Reset</button>
        <Link href='/'>Home</Link>
      </div>

      <p className={Styles.toChange}>안녕하세요 css를 받고싶어요.</p>
    </div>
  )
}