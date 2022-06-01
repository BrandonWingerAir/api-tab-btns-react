import React, { useContext, useEffect } from 'react';
import {
    BtnContainer,
    FontBtn,
    BtnIcon,
    BtnIconBg,
    BtnIconAbbr,
    BtnDesc,
    List,
    ListItem
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

    return <BtnContainer aria-labelledby="fontSelectForm" role="radiogroup">
        {buttons.map((btn) => {
            return <FontBtn 
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
                        <BtnDesc>
                            <List>
                                <ListItem>
                                    {btn.label}
                                </ListItem>
                            </List>
                        </BtnDesc>
            </FontBtn>
        })}
    </BtnContainer>;
}