import React, { useContext, useEffect } from 'react';
import {
    CardContainer,
    CardBtn,
    BtnIcon,
    BtnIconBg,
    BtnIconAbbr,
    BtnTextContainer,
    BtnText
} from './cardStyle';
import { ActiveBtnContext } from '../../../../contexts/activeBtnContext';

export default function Card({ buttons }) {
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
        window.localStorage.setItem('USER_FONT_ID', JSON.stringify(activeBtn));
    }, [activeBtn]);

    return <CardContainer aria-labelledby="fontSelectForm" role="radiogroup">
        {buttons.map((btn) => {
            return <CardBtn 
                        key={btn.id}
                        onClick={() => onClick(btn)}
                        isActive={activeBtn === btn.id ? true : false}
                        aria-label={btn['color-blind-label']}
                        role="radio"
                    >
                        <BtnIcon>
                            <BtnIconBg btnColor={btn.color}>
                                <BtnIconAbbr>
                                    {btn.abbr}
                                </BtnIconAbbr>
                            </BtnIconBg>
                        </BtnIcon>
                        <BtnTextContainer>
                            <BtnText>
                                {btn.label}
                            </BtnText>
                        </BtnTextContainer>
            </CardBtn>
        })}
    </CardContainer>;
}