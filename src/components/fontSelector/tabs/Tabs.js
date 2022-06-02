import React from 'react';

import {
    TabsNavContainer,
    TabLabel,
    TabContent,
    TabsNav
} from './tabStyle';

export const Tab = ({label, active, onClick}) => {
    return (
        <TabLabel
            role="tab"
            active={active}
            onClick={onClick}
        >
            {label}
        </TabLabel>
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
        <TabsNavContainer>
            <TabsNav role="tablist">{tabs}</TabsNav>
        </TabsNavContainer>
    );
}

export const TabPanel = ({children, value, selectedIndex}) => {
    const hidden = value !== selectedIndex;

    return (
        <TabContent hidden={hidden} active={!hidden} role="tabpanel">
            {children}
        </TabContent>
    )
}