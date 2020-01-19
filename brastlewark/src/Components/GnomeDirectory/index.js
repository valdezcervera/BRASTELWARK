import React, { useState } from 'react';
import './GnomeDirectory.css';
import FilterByName from './FilterName';
import FilterByProfession from './FilterProfessions';
import FilterByFriends from './FilterFriends';

export default ({ gnomeArray, addGnomeToList, gnomeList }) => {
  const [filterName, setFilterName] = useState('');
  const [filterProfessions, setFilterProfessions] = useState('');
  const [filterFriends, setFilterFriends] = useState('');
  const [filteredGnomeList, setFilteredGnomeList] = useState([]);
  const handleChangeName = (e) => {
    setFilterName(e.target.value);
  };
  const handleChangeProfession = (e) => {
    setFilterProfessions(e.target.value);
  };
  const handleChangeFriends = (e) => {
    setFilterFriends(e.target.value);
  };
  const handleList = (filteredData) => {
    setFilteredGnomeList(filteredData);
  };

  return (
    <div>
      <div className="filter_bar">
        <div className="filter">
          <input value={filterName} onChange={handleChangeName} />
          <FilterByName
            filter={filterName}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>
        <div className="filter">
          <input value={filterProfessions} onChange={handleChangeProfession} />
          <FilterByProfession
            filter={filterProfessions}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>
        <div className="filter">
          <input value={filterFriends} onChange={handleChangeFriends} />
          <FilterByFriends
            filter={filterFriends}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>

      </div>
      <div className="gnome_container">
        {
          filteredGnomeList.map((gnome) => (
            <div className="gnome_thumb" key={gnome.id}>
              <img className="gnome_img" src={gnome.thumbnail} alt="gnomeAvatar" />
              <h3 className="gnome_name">{gnome.name}</h3>
              <button type="button" className="gnome_headline_btn" onClick={() => addGnomeToList(gnome)}>
                {gnomeList.includes(gnome) ? 'remove  -' : 'add contact +'}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};
