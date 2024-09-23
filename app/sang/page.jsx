"use client"

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Styles from "./sang.module.css";
import Components from "../components/progressBar.jsx";
import ProgressBar from "../components/progressBar.jsx";




export default function Hoon() {
//내 정보 갱신하는 useState. POST mehtod이용해서 my값이 갱신될때마다 서버에 저장해주자.
    const [my, setCount] = useState(1);

//다른 사람 정보 갱신하는 useState, GetData에서 갱신 
//여기서 왜 초기값을 지정해줘야지 밑에서 제대로 돌아가는지 모르겠음
    const [others, setOthersCount] = useState({
        hoon:{
            progress:1,
            icon: ' '
        },
        jake:{
            progress:1,
            icon: ' ',
        },
        karryun:{
            'progress':1,
            'icon': ' '
        },
        sohee:{
            progress:1,
            icon: ' '
        }
        
    });

    const AddSnowman = () => {
        if(my < 10) {
            setCount(my + 1);
            console.log(my + 1);
        }
    }

    const ResetSnowman = () => {
        setCount(1);
        alert('Reset Snowman');
        console.log(1);
    }


    const GetData = async () => {
        const response = await fetch("/api/progress", {
            method: "GET"
            //fetch method의 deafult값은 "GET"
            //async는 해당 함수가 비동기 함수임을 나타냄.
            //await은 이전 promise가 완료(fulfilled든지 rejected든지)될때까지 기다리라는 뜻
        });
        /** 
        그냥 response.json()하면 에러남 
            -> API이용해서 데이터를 불러오기 전까지 response는 텅빈 객체임
            -> 따라서 await을 이용해서 위의 fetch()가 완료될때까지 기다려 줘야함
        **/
        const JsResponse = await response.json();

        console.log(JsResponse);
        setOthersCount(JsResponse);
    }

    useEffect(()=>{
        GetData();
        console.log("others값 갱신");
    }, [my])
    /**
     * useEffect()의 첫번째 인자는 콜백함수 : 수행하고자 하는 작업 (함수)를 넣는다
     * useEffect()의 두번째 인자는 dependency : 배열안에 검사하고자 하는 값을 넣는다. 빈 배열을 넣으면 처음 페이지가 랜더링 될때 한번 수행
     */

    
    //bad request
    const PostingData = async () => {
        const post = await fetch("api/progress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": "sang",
                "progress": my
            })
            /**
             * 처음에 body를 
             * body: {
             *   "name": "sang",
             *   "progress": my
             * }  이렇게 했는데 500-internal server error가 뜸.
             * 왜 그렇게 됐는지 생각해보기
             */
        })
        const result = await post.json();
        console.log(result);
    }
    useEffect(()=>{
        PostingData();
    }, [my])

    

    return (
        <div>
            <div className={Styles.mybox}>
                <button 
                    onClick={AddSnowman}
                    className={Styles.button}>
                    snowman
                </button>
                <div 
                    className={Styles.snowman}>
                        {'☃️'.repeat(my)}
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

            <div className={Styles.otherbox}>
                <ProgressBar name="hoon" icon={others.hoon.icon} count={others.hoon.progress}/>
                <ProgressBar name="jake" icon={others.jake.icon} count={others.jake.progress}/>
                <ProgressBar name="karryun" icon={others.karryun.icon} count={others.karryun.progress}/>
                <ProgressBar name="sohee" icon={others.sohee.icon} count={others.sohee.progress}/>
            </div>
        </div>
    )
}
