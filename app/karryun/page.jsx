'use client'
import Link from "next/link";
import { useState } from "react";

export default function Karryun() {
  
    const [up, setup] = useState(0);

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
        <div>
    <button onClick={UPclick}>
        UP!
      </button>

    <button onClick={ResetClick}>
        RESET
      </button>

      {'🦞'.repeat(up)}
    </div>   
  )
}