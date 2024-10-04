'use client'
import Link from "next/link";
import Styles from "./karryun.module.css" 
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { Pretendard } from "next/font/google";


export default function Karryun() {
    const [up, setup] = useState(0); 
    const [peopleData, setPeopleData] = useState({
      jake: {
        progress: 1,
        icon: '-:|',
      },
      hoon: {
        progress: 1,
        icon: '🍹',
      },
      sang: {
        progress: 1,
        icon: '☃️',
      },
      sohee: {
        progress: 1,
        icon: '🍫',
      }
    });

    const [text, setText] = useState("없어요");
    const [tempText, setTempText] = useState("");

    const clicked = () => {
      axios.get("http://127.0.0.1:8000/polls/get/", {
        params: {
          abc:tempText,
        },
      })
      .then((response) => setText(JSON.stringify(response.data)))
      .then(() => {setTempText("")});
    }

    const onChange = (e) => {
      setTempText(e.target.value);
    }

    const dataFetcher = async () => {
      const res = await fetch('/api/progress', {
        method: 'GET',
      });
  
      const jsonData = await res.json();
  
      setup(jsonData.karryun.progress);
      setPeopleData(jsonData);
  
      console.log(jsonData);
    }
  
    useEffect(()=>{
      dataFetcher();
    },[]);
  

    const UPclick = () => {
        if (up < 10) 
        setup(up + 1); 
        console.log('Up:', up + 1); 
      };
    
      const ResetClick = () => {
        setup(1);
        console.log('0으로 돌아갑니다'); 
      };
  
    return (

      <div className={Styles.Container}>
        <button 
          className={Styles.Up} onClick={UPclick}>
          Up!
        </button>
        <div className={Styles.setBar}>
          {'🦞'.repeat(up)}
        </div>
        <button 
          className={Styles.Reset} onClick={ResetClick}>
          Reset
        </button>


        <ProgressBar name='jake' icon={peopleData.jake.icon} count={peopleData.jake.progress} />
        <ProgressBar name='hoon' icon={peopleData.hoon.icon} count={peopleData.hoon.progress} />
        <ProgressBar name='sang' icon={peopleData.sang.icon} count={peopleData.sang.progress} />
        <ProgressBar name='sohee' icon={peopleData.sohee.icon} count={peopleData.sohee.progress} />


        <div className={Styles.Racoon}>
          <input id="Text" className={Styles.input} type="text" onChange={onChange} value={tempText}/>    
          <button onClick={clicked}>
            너굴 버튼
          </button>
          <h1>{text}</h1>
        </div>
      </div>   


  )
}