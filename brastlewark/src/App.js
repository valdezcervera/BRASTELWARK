import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import GnomeDirectory from './GnomeDirectory';
import Spinner from './Spinner'

export const GnomeContext = React.createContext(null);

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

function App() {
  const [status, setStatus] = useState(true);
  const [gnomes, setGnomes] = useState({});
  // const [contacts, setContacts] = useState({myContacts:[]});
  
  useEffect(() => {
    axios.get(url)
    .then(response => setGnomes(response.data))
    .then(() => setStatus(false));
  }, []);

  console.log('fetch', gnomes.Brastlewark)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>gnome directory</p>
        {/* <GnomeContext.Provider value={{updateList, setGnomeList, gnomeList}}> */}
        <div className="container">
          {!status
            ? 
              <GnomeDirectory
              
                gnomeArray={gnomes.Brastlewark} />
            
            : <div>
              <Spinner/>
               Loading
            </div>}
        </div>
        {/* </GnomeContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
