import React from 'react';
import styles from './buttons.module.css';
import { useState } from 'react' 

export default function BtnContainer({ buttons, OnChange }) {
    const [ActiveBtn, setActiveBtn] = useState('');

    function onClick(btn) {
        OnChange(btn)
        setActiveBtn(btn.id);
    }

    return <div className={styles.container}>
        {buttons.map((btn, btnKey) => {
            return <div 
                        key={btnKey}
                        onClick={() => onClick(btn)}
                        id={"btn" + btn.id}
                        className={styles.btn + " " + (ActiveBtn === btn.id ? styles.active : "")}
                    >
                        <div className='btnIcon'>
                            <div>
                                <span>{btn.code}</span>
                            </div>
                        </div>
                        <div className='btnText'>
                            <ul>
                                <li>
                                    {btn.desc}
                                </li>
                            </ul>
                        </div>
            </div>
        })}
    </div>;
}