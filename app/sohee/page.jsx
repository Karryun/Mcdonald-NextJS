'use client'

import Link from "next/link";
import styles from './page.module.css';
import { useEffect, useState } from "react";
import ProgressBar from '../components/ProgressBar';
import axios from "axios";


export default function Sohee() {
    const [choco, setChoco ] = useState(1);

    const AddChoco = () => {
        if(choco < 22){
            setChoco(choco + 1);
            setPeopleProgress(icon + 1);
        }
    }

    const reset = () => {
        setChoco(1); // 초코 상태를 1로 초기화
    }
    

    const [peopleProgress, setPeopleProgress] = useState({
        jake: {
            progress: 1,
            icon: '',
        },
        hoon : {
            progress: 1,
            icon: '',
        },
        sang : {
            progress: 1,
            icon: '',
        },
        karryun: {
            progress : 1,
            icon: '',
            
        }
    }); // 객체라서 똑같이 객체로 초기화

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

    const dataFetcher = async () => { //api 핸들링하는 비동기 함수
        const res = await fetch('/api/progress',{
            method: 'GET',
        })

        const jsonData = await res.json(); //비동기

        setChoco(jsonData.sohee.progress);
        setPeopleProgress(jsonData);

        console.log(jsonData);
    }

    useEffect( () => {
        dataFetcher();
      }, []);


    return (
      <div className={styles.head}> Sweet Chocolate🍪
        <div className={styles.container}>
            <button className={styles.clickMe} onClick={AddChoco}>
                초코초코
            </button>
            <div className={styles.setBar}>
                {'🍫'.repeat(choco)}
            </div>
            <div className={styles.buttonBar}>
                <button className={styles.reset} onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
        <div className={styles.container}>
        <ProgressBar name = 'jake' icon = {peopleProgress.jake.icon}/>
        <ProgressBar name = 'hoon' icon = {peopleProgress.hoon.icon}/>
        <ProgressBar name = 'sang' icon = {peopleProgress.sang.icon}/>
        <ProgressBar name = 'karryun' icon = {peopleProgress.karryun.icon}/>

        </div>
        <div>
          <input id="myText" type="text" onChange={onChange} value={tempText}/>
          <button onClick = {clicked}>너굴 버튼</button>
          <h1>{text}</h1>
        </div>

      </div>

    );
};
