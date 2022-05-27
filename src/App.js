import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tabs, Tab, TabPanel } from './components/tabs/tabs';
import BtnContainer from './components/buttons/buttons';
import "./App.css";
import { ActiveBtnContext } from './contexts/activeBtnContext';

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
  width: 1175px;
  margin: 0 auto;
  justify-content: space-between;
`;

const TabsTitle = styled.h1`
  margin-left: 10px;
  flex-grow: 7;
  text-align: left;
  font-size: 3.24rem;
  font-weight: 600;
`;

export default function App() {
  const [appState, setAppState] = useState({
    loading: true,
    tabs: {}
  });


  const [loadingTabData, setLoadingTabData] = useState(true);

  const activeBtnStored = localStorage.getItem('ACTIVE_BUTTON') || '';

  const [activeTab, setActiveTab] = useState('fonts_a');
  const [activeBtn, setActiveBtn] = useState(activeBtnStored);

  const [fontButtons, setFontButtons] = useState([]);
  const [fontCopywrite, setFontCopywrite] = useState();
  
  useEffect(() => {
    setAppState({ loading: true });
    
    const apiUrl = 'http://json.ffwagency.md/tabs';
    
    axios.get(apiUrl).then((tabs) => {
      const allTabs = tabs.data;
      setAppState({ loading: false, tabs: allTabs });
    });
  }, [setAppState]);

  useEffect(() => {
    setLoadingTabData(true);
      if (activeTab === 'fonts_a') {  
        const apiContentUrl = 'http://json.ffwagency.md/fonts_a';
        
        axios.get(apiContentUrl).then((btnValues) => {
          const allBtns = btnValues;
          setFontButtons(allBtns.data.content);
          setLoadingTabData(false);
        });
      } else if (activeTab === 'fonts_b') {
        const apiContentUrl = 'http://json.ffwagency.md/fonts_b';

        axios.get(apiContentUrl).then((apiData) => {
          const fontText = apiData;
          setFontCopywrite(fontText.data.content);
          setLoadingTabData(false);
        });
      } else {
        console.log('Error: Invalid endpoint.');
      }
  }, [activeTab]);
  
  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="App">
      { !appState.loading && (
        <ActiveBtnContext.Provider value={{ activeBtn, setActiveBtn }}>
          <TabsContainer>
            <TabsTitle>Please select one font</TabsTitle>
            <Tabs selectedTab={activeTab} onChange={handleChange}>
              <Tab label={appState.tabs[0].label} value={appState.tabs[0].content_endpoint}></Tab>
              <Tab label={appState.tabs[1].label} value={appState.tabs[1].content_endpoint}></Tab>
            </Tabs>
          </TabsContainer>
          { !loadingTabData && (
            <div>
            {/* My Fonts */}
            <TabPanel value={activeTab} selectedIndex="fonts_a">
              <BtnContainer buttons={fontButtons}/>
            </TabPanel>

            {/* Buy Fonts */}
            <TabPanel value={activeTab} selectedIndex="fonts_b">
              <div id='panelContainer'>
                <p className='panelText'>
                  {fontCopywrite}
                </p>
              </div>
            </TabPanel>
          </div>
          )}
        </ActiveBtnContext.Provider>
      )}
    </div>
  );
}