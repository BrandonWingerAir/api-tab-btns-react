import React from 'react';

import {
    TabHeaderContainer,
    StyledTab,
    StyledTabPanel,
    TabsNav
} from './tabStyles';

export const Tab = ({label, active, onClick, value}) => {
    return (
        <StyledTab
            role="tab"
            active={active}
            onClick={onClick}
            className={"tab-" + value}
        >
            {label}
        </StyledTab>
    )
}

export const Tabs = ({selectedTab, onChange, children}) => {
    const tabs = children.map((child) => {
        const handleClick = (e) => {
            onChange(e, child.props.value);
        }

        return React.cloneElement(child, {
            active: child.props.value === selectedTab,
            onClick: handleClick
        });
    });

    return (
        <TabHeaderContainer>
            <TabsNav>{tabs}</TabsNav>
        </TabHeaderContainer>
    );
}

export const TabPanel = ({children, value, selectedIndex}) => {
    const hidden = value !== selectedIndex;

    return (
        <StyledTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StyledTabPanel>
    )
}