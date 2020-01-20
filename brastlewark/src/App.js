import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GnomeDirectory from './Components/GnomeDirectory';
import MyGnomeList from './Components/MyGnomeList';
import Spinner from './Components/Spinner';
import './App.css';

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
    <div
      className="App"
    >
      <header
        className="App-header"
      >
        <h1>
          WELCOME TO BRASTELWARK
        </h1>
        {!status
          ? (
            <div
              className="container"
            >
              <nav
                className="navigation_menu"
              >
                <button
                  type="button"
                  className="leave_town__button"
                  // eslint-disable-next-line no-alert
                  onClick={() => alert('You left Brastelwark')}
                >
                  LEAVE TOWN
                </button>
                <div
                  className="population_container"
                >
                  <p
                    className="population_title"
                  >
                    LOCAL POPULATION
                  </p>
                  <span
                    className="population_count"
                  >
                    {gnomes.Brastlewark.length}
                  </span>
                </div>
              </nav>
              <MyGnomeList
                gnomeList={list}
                addGnomeToList={addGnomeToList}
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
      </header>
    </div>
  );
}

export default App;
