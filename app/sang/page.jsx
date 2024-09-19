"use client"

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Styles from "./sang.module.css";




export default function Hoon() {
    const [ct, setCount] = useState(1);
        //ct는 현재 state이고
        //setCount는 setState() 즉 현재 state를 바꾸는 함수인 것같다 .
        //setCount는 

    const AddSnowman = () => {
        if(ct < 10) {
            setCount(ct + 1);
                //이때 괄호안의 값을 ct++이케 하면 컴파일 에러가 뜬다.
                //이걸로 유추해보아 const [ct, setCount]에서 setCount()의 작동방식은
                //괄호안의 값에 해당하는 변수를 새로 선언하고(그 변수를 위한 메모리를 새로 할당)
                //ct가 가리키는 곳을 새로 선언한 변수로 향하게 한다.
            console.log(ct + 1);
        }
    }

    const ResetSnowman = () => {
        setCount(1);
        alert('Reset Snowman');
        console.log(1);
    }

    return (
        <div className={Styles.box}>
            <button 
                onClick={AddSnowman}
                className={Styles.button}>
                snowman
            </button>
            <div
                className={Styles.snowman}>
                    {'☃️'.repeat(ct)}
            </div>
            <button 
                onClick={ResetSnowman}
                className={Styles.button}>
                Reset
            </button>
            <button
                className={Styles.button}>
                <Link href = "/" style={{color:"white"}}>
                    Home
                </Link>
            </button>
            
        </div>
    )
}