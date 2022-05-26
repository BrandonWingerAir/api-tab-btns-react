import React, { useState, useContext, useEffect } from 'react';
import styles from './buttons.module.css';
import { ActiveBtnContext } from '../../contexts/activeBtnContext';

export default function BtnContainer({ buttons, OnChange }) {
    const {activeBtn, setActiveBtn} = useContext(ActiveBtnContext);

    function onClick(btn) {
        OnChange(btn)
        setActiveBtn(btn.id);
    }

    useEffect(() => {
        if (activeBtn !== '') {
          setActiveBtn(JSON.parse(activeBtn));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('ACTIVE_BUTTON', JSON.stringify(activeBtn));
    }, [activeBtn]);

    return <div className={styles.container}>
        {buttons.map((btn, btnKey) => {
            return <div 
                        key={btnKey}
                        onClick={() => onClick(btn)}
                        id={"btn" + btn.id}
                        className={styles.btn + " " + (activeBtn === btn.id ? styles.active : "")}
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