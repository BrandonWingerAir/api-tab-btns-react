import { useState, useEffect } from 'react';
import styled from 'styled-components';
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

let btnValues = [
  {id: 1, value: 'green', code: 'M', desc: 'Merriweather project is led by Sorkin Type' },
  {id: 2, value: 'pink', code: 'R', desc: 'Roboto doesn\'t compromise, allowing letters' },
  {id: 3, value: 'blue', code: 'NS', desc: 'Noto Sans covers over 30 scripts' },
];

export default function App() {
  const activeBtnStored = localStorage.getItem('ACTIVE_BUTTON') || '';

  const [activeTab, setActiveTab] = useState(1);
  const [activeBtn, setActiveBtn] = useState(activeBtnStored);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  function BtnUpdate(updatedBtn) {
    // console.log(updatedBtn);
  }

  return (
    <div className="App">
      <ActiveBtnContext.Provider value={{ activeBtn, setActiveBtn }}>
        <TabsContainer>
          <TabsTitle>Please select one font</TabsTitle>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label="MY FONTS" value={1}></Tab>
            <Tab label="BUY FONTS" value={2}></Tab>
          </Tabs>
        </TabsContainer>
        <div>
          <TabPanel value={activeTab} selectedIndex={1}>
              <BtnContainer buttons={btnValues} OnChange={BtnUpdate} />
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={2}>
            <div id='panelContainer'>
              <p>
                Donec sodales sagittis magna. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Mauris sollicitudin fermentum libero. Vestibulum fringilla pede sit amet augue. Donec vitae orci sed dolor rutrum auctor.
              </p>
            </div>
          </TabPanel>
        </div>
      </ActiveBtnContext.Provider>
    </div>
  );
}