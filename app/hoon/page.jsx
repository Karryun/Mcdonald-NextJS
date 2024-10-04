"use client"

import Styles from "./hoon.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressBar from "../components/ProgressBar";

export default function Hoon() {
  const [drink, setDrink] = useState(1);
  const [peopleData, setPeopleData] = useState({
    jake: {
      progress: 1,
      icon: '',
    },
    karryun: {
      progress: 1,
      icon: '',
    },
    sang: {
      progress: 1,
      icon: '',
    },
    sohee: {
      progress: 1,
      icon: '',
    }
  });

  const dataFetcher = async () => {
    const res = await fetch('/api/progress', {
      method: 'GET',
    });

    const jsonData = await res.json();

    setDrink(jsonData.hoon.progress);
    setPeopleData(jsonData);

    console.log(jsonData);
  }

  useEffect(()=>{
    dataFetcher();
  },[]);

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

      <ProgressBar name='jake' icon={peopleData.jake.icon} count={peopleData.jake.progress} />
      <ProgressBar name='karryun' icon={peopleData.karryun.icon} count={peopleData.karryun.progress} />
      <ProgressBar name='sang' icon={peopleData.sang.icon} count={peopleData.sang.progress} />
      <ProgressBar name='sohee' icon={peopleData.sohee.icon} count={peopleData.sohee.progress} />
    </div>
  )
}