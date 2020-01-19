import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GnomeDirectory from './Components/GnomeDirectory';
import MyGnomeList from './Components/MyGnomeList';
import Spinner from './Components/Spinner';

export const GnomeContext = React.createContext(null);

const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

function App() {
  const [status, setStatus] = useState(true);
  const [gnomes, setGnomes] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => setGnomes(response.data))
      .then(() => setStatus(false));
  }, []);

  const addGnomeToList = (gnome) => {
    if (!list.includes(gnome)) {
      setList((prevList) => [...prevList, gnome]);
    } else {
      setList((prevList) => prevList.filter((el) => el !== gnome));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>gnome directory</p>
        {/* <GnomeContext.Provider value={{updateList, setGnomeList, gnomeList}}> */}
        {!status
          ? (
            <div className="container">
              <MyGnomeList
                gnomeList={list}
              />
              <GnomeDirectory
                gnomeArray={gnomes.Brastlewark}
                addGnomeToList={addGnomeToList}
                gnomeList={list}
              />
            </div>
          )
          : (
            <div>
              <Spinner />
            Loading
            </div>
          )}
        {/* </GnomeContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
