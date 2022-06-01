import { useState, useEffect } from 'react';
import { Tabs, Tab, TabPanel } from './tabs/Tabs';
import {
    FontSelectContainer, 
    FontSelectorContent, 
    BuyFontContainer, 
    BuyFontText,
    TabsContainer,
    TabsTitle
} from './fontSelectorStyles';
import Buttons from './tabs/buttons/Buttons';
import { ActiveBtnContext } from '../../contexts/activeBtnContext';

function FontSelector() {
    const [appState, setAppState] = useState({
        loading: true,
        tabs: {}
      });

    const activeBtnStored = localStorage.getItem('USER_FONT_ID') || '';

    const [activeTab, setActiveTab] = useState('fonts_a');
    const [activeBtn, setActiveBtn] = useState(activeBtnStored);

    const [loadingTabData, setLoadingTabData] = useState(true);

    const [fontButtons, setFontButtons] = useState([]);
    const [buyFontText, setBuyFontText] = useState();

    // Development Configuration:
    useEffect(() => {
        const allTabs = [{
            "id": 101,
            "label": "My Fonts",
            "content_endpoint": "fonts_a"
            },
            {
            "id": 102,
            "label": "Buy Fonts",
            "content_endpoint": "fonts_b"
        }];

        setAppState({ loading: false, tabs: allTabs });
    }, [setAppState]);

    useEffect(() => {
    setLoadingTabData(true);
        if (activeTab === 'fonts_a') {  
            const allBtns = {
            "type": "Font selection",
            "content": [
                {
                "id": 112,
                "abbr": "M",
                "color": "#00A653",
                "color-blind-label": "green",
                "label": "Merriweather project is led by Sorkin Type"
                },
                {
                "id": 113,
                "abbr": "R",
                "color": "#FE7FC3",
                "color-blind-label": "pink",
                "label": "Roboto doesn't compromise, allowing letters"
                },
                {
                "id": 114,
                "abbr": "NS",
                "color": "#046DFF",
                "color-blind-label": "blue",
                "label": "Noto Sans covers over 30 scripts"
                }
            ]
            };

            setFontButtons(allBtns.content);
            setLoadingTabData(false);
        } else if (activeTab === 'fonts_b') {
            const fontText = {
            "type": "Text",
            "content": "Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor."
            };

            setBuyFontText(fontText.content);
            setLoadingTabData(false);
        } else {
        console.log('Error: Invalid endpoint.');
        }
    }, [activeTab]);

    // Production Configuration:
    // useEffect(() => {
    //   setAppState({ loading: true });
    
    //   const apiUrl = 'http://json.ffwagency.md/tabs';
    
    //   axios.get(apiUrl).then((tabs) => {
    //     const allTabs = tabs.data;
    //     setAppState({ loading: false, tabs: allTabs });
    //   });
    // }, [setAppState]);

    // useEffect(() => {
    //   setLoadingTabData(true);
    //     if (activeTab === 'fonts_a') {  
    //       const apiContentUrl = 'http://json.ffwagency.md/fonts_a';
        
    //       axios.get(apiContentUrl).then((btnValues) => {
    //         const allBtns = btnValues;
    //         setFontButtons(allBtns.data.content);
    //         setLoadingTabData(false);
    //       });
    //     } else if (activeTab === 'fonts_b') {
    //       const apiContentUrl = 'http://json.ffwagency.md/fonts_b';

    //       axios.get(apiContentUrl).then((apiData) => {
    //         const fontText = apiData;
    //         setBuyFontText(fontText.data.content);
    //         setLoadingTabData(false);
    //       });
    //     } else {
    //       console.log('Error: Invalid endpoint.');
    //     }
    // }, [activeTab]);

    const handleChange = (e, value) => {
        setActiveTab(value);
    }

    return (
        <FontSelectContainer>
            <FontSelectorContent>
                { !appState.loading && (
                    <ActiveBtnContext.Provider value={{ activeBtn, setActiveBtn }}>
                        <TabsContainer>
                            <TabsTitle>Please select one font</TabsTitle>
                            <Tabs selectedTab={activeTab} onChange={handleChange}>
                            <Tab label={appState.tabs[0].label} value={appState.tabs[0].content_endpoint}></Tab>
                            <Tab label={appState.tabs[1].label} value={appState.tabs[1].content_endpoint}></Tab>
                            </Tabs>
                        </TabsContainer>
                        <div>
                            <TabPanel value={activeTab} selectedIndex="fonts_a">
                                { !loadingTabData && (
                                    <Buttons buttons={fontButtons}/>
                                )}
                                { loadingTabData && (
                                    <p>Loading Data...</p>
                                )}
                            </TabPanel>

                            <TabPanel value={activeTab} selectedIndex="fonts_b">
                                { !loadingTabData && (
                                    <BuyFontContainer>
                                        <BuyFontText>
                                            {buyFontText}
                                        </BuyFontText>
                                    </BuyFontContainer>
                                )}
                                { loadingTabData && (
                                    <p>Loading Data...</p>
                                )}
                            </TabPanel>
                        </div>
                    </ActiveBtnContext.Provider>
                )}
                { appState.loading && (
                    <p>Loading Tabs...</p>
                )}
            </FontSelectorContent>
        </FontSelectContainer>
    )
}

export default FontSelector;