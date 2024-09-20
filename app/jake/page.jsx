"use client"
import { useState } from "react";
import Jangpoong from "./jangpoong";

export default function Page(){
    const [clickNum, setClickNum] = useState([0])
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column'

        }}>
            <button onClick = {() => {
              if (clickNum.length < 8)
                setClickNum([...clickNum, 1]);
            }}>
                장풍!
            </button>

            <div style = {{
            display: 'flex',
            flexDirection: 'row'
        }}>
          {clickNum.map((val, idx) => {
          return (<Jangpoong key={idx} />)
      })}</div>

            <div style = {{
            display: 'flex',
            flexDirection: 'row'}}>
              <button onClick = {() => {
              setClickNum([]);
            }}>
              Reset
            </button>
            <a href = "/">Home</a>
            </div>
        </div>
    )
}
