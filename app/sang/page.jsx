"use client"

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Styles from "./sang.module.css";
import Components from "../components/progressBar.jsx";
import ProgressBar from "../components/progressBar.jsx";
import axios from 'axios'




export default function Sang() {
    const [my, setMy] = useState(1);
    const [others, setOthers] = useState({
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



//첫 랜더링시에 서버에서 데이터를 가져와서 (GET API 사용) my와 others를 그 값으로 초기화
    const SetAll = async () => {
    //여기랑 아래 set에 const안붙여줘도 error뜨는데 왜지....?
        const response = await fetch("/api/progress", {
            method: "GET"
        });
        const set = await response.json();

        setMy(set.sang.progress);
        setOthers(set);
    }
    useEffect(() => {
        SetAll();
    }, []);



    const AddSnowman = () => {
        if(my < 10) {
            setMy(my + 1);
            //console.log(my + 1);
        }
    }


    const ResetSnowman = () => {
        setMy(1);
        alert('Reset Snowman');
    }



    const GetOthers = async () => {
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

        //console.log(JsResponse);
        setOthers(JsResponse);
    }



    useEffect(()=>{
        GetOthers();
        //console.log("others값 갱신");
    }, [my])

    
    
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
        //console.log(result);
    }
    useEffect(()=>{
        PostingData();
    }, [my])

//여기서 부터 붙여 넣은 거
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
//여기까지 붙여 넣은 거




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

            <div>
                <input id="myText" type="text" onChange={onChange} value={tempText}/>
                <button onClick = {clicked}>눈사람</button>
                <h1>{text}</h1>
            </div>
        </div>
    )
}
