"use client"
import { useState , useEffect } from "react";
import Link from "next/link";
import Get_Data from "./get_data";
import Post_Data from "./post_data";
import Styles from "./jake.module.css"
import { Honk } from "next/font/google";


export default function Page(){

    const [clickNum, setClickNum] = useState(0);
    useEffect(() => {Get_Data().then(data => setClickNum(data.jake.progress))}, []);

    const [hoonNum, setHoonNum] = useState(() => {Get_Data().then((data) => {setHoonNum(data.hoon.progress)})});
    const [soheeNum, setSoheeNum] = useState(() => {Get_Data().then((data) => {setSoheeNum(data.sohee.progress)})});
    const [karryunNum, setKarryunNum] = useState(() => {Get_Data().then((data) => {setKarryunNum(data.karryun.progress)})});
    const [sangNum, setSangNum] = useState(() => {Get_Data().then((data) => {setSangNum(data.sang.progress)})});

    
    return (
        <div>

            <button onClick = {() => {
              if (clickNum < 10) {
                setClickNum((clickNum) => clickNum + 1);
                Post_Data(clickNum + 1);
              }
            }}>
                장풍!
            </button>

            <div>
            {"🍃".repeat(clickNum)}
            </div>


            <div>
              <button onClick = {() => {
              setClickNum(1);
              }}>
              Reset
              </button>
              <Link href = "/">Home</Link>
            </div>


            <div className={Styles.Container}>
              이동훈
              <div>
              {"🍹".repeat(hoonNum)}
              </div>
            </div>
            <div className={Styles.Container}>
              안소희
              <div>🍫
              {"🍫".repeat(soheeNum)}
              </div>
            </div>
            <div className={Styles.Container}>
              곽도연
              <div>
              {"🦀".repeat(karryunNum)}
              </div>
            </div>
            <div className={Styles.Container}>
              박상훈
              <div>
              {"⛄".repeat(sangNum)}
              </div>
            </div>

            



        </div>
    )
}
