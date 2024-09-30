"use client"
import React, { useState , useEffect } from "react";
import Link from "next/link";
import Post_Data from "./post_data";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";

export default function Page(){

    const [jake, setJake] = useState({progress:0, icon:""});
    const [hoon, setHoon] = useState({progress:0, icon:""});
    const [sohee, setSohee] = useState({progress:0, icon:""});
    const [karryun, setKarryun] = useState({progress:0, icon:""});
    const [sang, setSang] = useState({progress:0, icon:""});
    const [text, setText] = useState("없어요");
    const clicked = () => {
      axios.get("http://127.0.0.1:8000/polls/get/", {
        params: {
          abc:tempText,
        },
      })
      .then((response) => setText(JSON.stringify(response.data)));
    }
    const [tempText, setTempText] = useState("");
    const onChange = (e) => {
      setTempText(e.target.value);
    }

    useEffect(() => {
      async function initialize() {
        const total_data = await fetch("../api/progress", {method:"GET"});
        const total_json = await total_data.json();
        setJake((prevState) => {return {...prevState, progress:total_json.jake.progress, icon:total_json.jake.icon}});
        setHoon((prevState) => {return {...prevState, progress:total_json.hoon.progress, icon:total_json.hoon.icon}});
        setSohee((prevState) => {return {...prevState, progress:total_json.sohee.progress, icon:total_json.sohee.icon}});
        setKarryun((prevState) => {return {...prevState, progress:total_json.karryun.progress, icon:total_json.karryun.icon}});
        setSang((prevState) => {return {...prevState, progress:total_json.sang.progress, icon:total_json.sang.icon}});
        
      }
      initialize();
    }, []);
    

    

    
    return (
        <div>

            <button onClick = {() => {
              if (jake.progress < 10) {
                setJake((prevState) => {return {...prevState, progress:(jake.progress + 1), icon:jake.icon}});
                Post_Data(jake.progress + 1);
              }
            }}>
                장풍!
            </button>

            
              <button onClick = {() => {
              setJake((prevState) => {return {...prevState, progress:1, icon:jake.icon}});
              Post_Data(1)
              }}>
              Reset
              </button>
              <Link href = "/">Home</Link>

            <ProgressBar name = "jake" icon = {jake.icon} count = {jake.progress}></ProgressBar>


            <div>
              <ProgressBar name="hoon" icon={hoon.icon} count = {hoon.progress}></ProgressBar> 
              <ProgressBar name="sohee" icon={sohee.icon} count = {sohee.progress}></ProgressBar> 
              <ProgressBar name="karryun" icon={karryun.icon} count = {karryun.progress}></ProgressBar> 
              <ProgressBar name="sang" icon={sang.icon} count = {sang.progress}></ProgressBar> 
            </div> 
        
        <div>
          <input id="myText" type="text" onChange={onChange}/>
          <button onClick = {clicked}>너굴 버튼</button>
          <h1>{text}</h1>
        </div>
        

        </div>
    
    )
}
