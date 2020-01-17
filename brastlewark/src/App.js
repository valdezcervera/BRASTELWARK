import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import GnomeDirectory from './GnomeDirectory';
import FilterDirectory from './GnomeDirectory/FilterDirectory'

export const GnomeContext = React.createContext(null);

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
function App() {
  const [status, setStatus] = useState(true);
  const [gnomes, setGnomes] = useState({});
  const [gnomeList, setGnomeList] = useState({});
  // const [contacts, setContacts] = useState({myContacts:[]});

  const updateList = (filteredList) => {
    setGnomeList(filteredList)
  };
  
  useEffect(() => {
    axios.get(url)
    .then(response => setGnomes(response.data))
    .then(() => setStatus(false));
  }, []);

  console.log('fetch', gnomes.Brastlewark)
  console.log('gnomeList', gnomeList)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>gnome directory</p>
        <GnomeContext.Provider value={{updateList, setGnomeList, gnomeList}}>
        <div className="container">
          {!status
          ? <FilterDirectory
            gnomes={gnomes} />
          : <div>
              loading ...
          </div>}
          {gnomeList.length
            ? gnomeList.map(gnome =>
              <GnomeDirectory
                key={gnome.id}
                gnomesList={gnome} />
            )
            : <div className="App_loader">
              loading ...
            </div>}
        </div>
        </GnomeContext.Provider>
      </header>
    </div>
  );
}

export default App;
