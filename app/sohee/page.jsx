'use client'

import Link from "next/link";
import styles from './page.module.css';
import { useState } from "react";

export default function Sohee() {
    const [choco, setChoco ] = useState(1);

    const AddChoco = () => {
        if(choco < 22){
            setChoco(choco + 1);
        }
    }

    const reset = () => {
        setChoco(1); // 초코 상태를 1로 초기화
    }

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
      </div>
    );
};
