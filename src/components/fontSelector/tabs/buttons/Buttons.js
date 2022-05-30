import React, { useContext, useEffect } from 'react';
import styles from './buttons.module.css';
import { ActiveBtnContext } from '../../../../contexts/activeBtnContext';

export default function BtnContainer({ buttons }) {
    const {activeBtn, setActiveBtn} = useContext(ActiveBtnContext);
    
    function onClick(btn) {
        setActiveBtn(btn.id);
    }

    useEffect(() => {
        if (activeBtn !== '') {
          setActiveBtn(JSON.parse(activeBtn));
        }
    }, [setActiveBtn, activeBtn]);

    useEffect(() => {
        window.localStorage.setItem('USER_FONT', JSON.stringify(activeBtn));
    }, [activeBtn]);

    return <div className={styles.container}>
        {buttons.map((btn, btnKey) => {
            return <div 
                        key={btnKey}
                        onClick={() => onClick(btn)}
                        className={styles.btn + " " + "btn" + btn.id + " " + (activeBtn === btn.id ? styles.active : "")}
                    >
                        <div className='btnIcon'>
                            <div style={{backgroundColor: btn.color}}>
                                <span>{btn.abbr}</span>
                            </div>
                        </div>
                        <div className='btnText'>
                            <ul>
                                <li>
                                    {btn.label}
                                </li>
                            </ul>
                        </div>
            </div>
        })}
    </div>;
}