import React, { useContext, useEffect } from 'react';
import {
    BtnContainer,
    FontBtn,
    BtnIcon,
    BtnIconBg,
    BtnIconAbbr,
    BtnText,
    ListStyle,
    ListText
} from './buttonStyles';
import { ActiveBtnContext } from '../../../../contexts/activeBtnContext';

export default function Buttons({ buttons }) {
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

    return <BtnContainer>
        {buttons.map((btn) => {
            return <FontBtn 
                        key={btn.id}
                        onClick={() => onClick(btn)}
                        isActive={activeBtn === btn.id ? true : false}
                        btnId={btn.id}
                    >
                        <BtnIcon btnId={btn.id}>
                            <BtnIconBg btnColor={btn.color}>
                                <BtnIconAbbr btnId={btn.id}>{btn.abbr}</BtnIconAbbr>
                            </BtnIconBg>
                        </BtnIcon>
                        <BtnText btnId={btn.id}>
                            <ListStyle>
                                <ListText>
                                    {btn.label}
                                </ListText>
                            </ListStyle>
                        </BtnText>
            </FontBtn>
        })}
    </BtnContainer>;
}