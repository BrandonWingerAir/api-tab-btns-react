import { useState, useEffect } from 'react';
import { Tabs, Tab, TabPanel } from './Tabs/Tabs';
import axios from 'axios';
import {
    FontSelectContainer, 
    TabsLoading,
    TabContentLoading,
    BuyFontContainer, 
    BuyFontText,
    TabsHeader,
    TabsTitle
} from './fontSelectorStyle';
import Card from './Tabs/Card/Card';
import { ActiveBtnContext } from '../../contexts/activeBtnContext';

function FontSelector() {
    const [tabState, setTabState] = useState({
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

        setTabState({ loading: false, tabs: allTabs });
    }, [setTabState]);

    useEffect(() => {
        setLoadingTabData(true);
        
        switch(activeTab) {
            case 'fonts_a':
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
                break;

            case 'fonts_b':
                const fontText = {
                "type": "Text",
                "content": "Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor."
                };
    
                setBuyFontText(fontText.content);
                setLoadingTabData(false);

                break;
            default:
                console.log('Error: Invalid endpoint.');
        }
    }, [activeTab]);

    // Production Configuration:
    // useEffect(() => {
    //   setTabState({ loading: true });
    
    //   const apiUrl = 'http://json.ffwagency.md/tabs';
      
    //   axios.get(apiUrl)
    //     .then((tabs) => {
    //       const allTabs = tabs.data;
    //       setTabState({ loading: false, tabs: allTabs });
    //     })
    //     .catch(function (error) {
    //         if (error.response) {
    //           console.log(error.response.data);
    //           console.log(error.response.status);
    //           console.log(error.response.headers);
    //         } else if (error.request) {
    //           console.log(error.request);
    //         } else {
    //           console.log('Error ', error.message);
    //         }

    //         console.log(error.config);
    //       });
    // }, [setTabState]);
    
    // useEffect(() => {
    //     setLoadingTabData(true);
        
    //     let apiContentUrl = 'http://json.ffwagency.md/fonts_a';
    
    //     switch(activeTab) {
    //         case 'fonts_a':
    //             apiContentUrl = 'http://json.ffwagency.md/fonts_a';
        
    //             axios.get(apiContentUrl)
    //                 .then((btnValues) => {
    //                     const allBtns = btnValues;
    //                     setFontButtons(allBtns.data.content);
    //                     setLoadingTabData(false);
    //                 })
    //                 .catch(function (error) {
    //                     if (error.response) {
    //                     console.log(error.response.data);
    //                     console.log(error.response.status);
    //                     console.log(error.response.headers);
    //                     } else if (error.request) {
    //                     console.log(error.request);
    //                     } else {
    //                     console.log('Error: ', error.message);
    //                     }
                        
    //                     console.log(error.config);
    //             });

    //             break;
    //         case 'fonts_b':
    //             apiContentUrl = 'http://json.ffwagency.md/fonts_b';

    //             axios.get(apiContentUrl)
    //                 .then((apiData) => {
    //                     const fontText = apiData;
    //                     setBuyFontText(fontText.data.content);
    //                     setLoadingTabData(false);
    //                 })
    //                 .catch(function (error) {
    //                     if (error.response) {
    //                     console.log(error.response.data);
    //                     console.log(error.response.status);
    //                     console.log(error.response.headers);
    //                     } else if (error.request) {
    //                     console.log(error.request);
    //                     } else {
    //                     console.log('Error: ', error.message);
    //                     }
                        
    //                     console.log(error.config);
    //             });
    
    //             break;
    //         default:
    //             console.log('Error: Invalid endpoint.');
    //     }
    // }, [activeTab]);

    const handleChange = (e, value) => {
        setActiveTab(value);
    }

    return (
        <FontSelectContainer>
                { !tabState.loading && (
                    <ActiveBtnContext.Provider value={{ activeBtn, setActiveBtn }}>
                        <TabsHeader>
                            <TabsTitle id="fontSelectForm">Please select one font</TabsTitle>
                            <Tabs selectedTab={activeTab} onChange={handleChange}>
                                <Tab label={tabState.tabs[0].label} value={tabState.tabs[0].content_endpoint}/>
                                <Tab label={tabState.tabs[1].label} value={tabState.tabs[1].content_endpoint}/>
                            </Tabs>
                        </TabsHeader>
                        <div>
                            <TabPanel value={activeTab} selectedIndex="fonts_a">
                                { !loadingTabData && (
                                    <Card buttons={fontButtons}/>
                                )}
                                { loadingTabData && (
                                    <TabContentLoading>Loading Data...</TabContentLoading>
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
                                    <TabContentLoading>Loading Data...</TabContentLoading>
                                )}
                            </TabPanel>
                        </div>
                    </ActiveBtnContext.Provider>
                )}
                { tabState.loading && (
                    <TabsLoading>Loading Tabs...</TabsLoading>
                )}
        </FontSelectContainer>
    )
}

export default FontSelector;