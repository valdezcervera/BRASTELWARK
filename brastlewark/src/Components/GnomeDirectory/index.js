import React, { useState } from 'react';
import AddButton from '../AddGnomeToList';
import FilterByName from './FilterName';
import FilterByProfession from './FilterProfessions';
import FilterByFriends from './FilterFriends';
import Modal from '../Modal';
import './GnomeDirectory.css';

export default ({ gnomeArray, addGnomeToList, gnomeList }) => {
  const [filterName, setFilterName] = useState('');
  const [filterProfessions, setFilterProfessions] = useState('');
  const [filterFriends, setFilterFriends] = useState('');
  const [filteredGnomeList, setFilteredGnomeList] = useState([]);
  const [modal, setModal] = useState({ show: false, profile: null });

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
  const toggleModal = (gnome) => {
    setModal({ show: !modal.show, profile: gnome });
  };
  return (
    <div>
      <div
        className="filter_bar"
      >
        <div
          className="filter"
        >
          <input
            value={filterName}
            onChange={handleChangeName}
          />
          <FilterByName
            filter={filterName}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>
        <div
          className="filter"
        >
          <input
            value={filterProfessions}
            onChange={handleChangeProfession}
          />
          <FilterByProfession
            filter={filterProfessions}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>
        <div
          className="filter"
        >
          <input
            value={filterFriends}
            onChange={handleChangeFriends}
          />
          <FilterByFriends
            filter={filterFriends}
            gnomes={gnomeArray}
            renderGnomes={handleList}
          />
        </div>
      </div>
      <div
        className="gnome_container"
      >
        {
          filteredGnomeList.map((gnome) => (
            <div
              className="gnome_thumb"
              key={gnome.id}
            >
              <div
                className="clickable"
                onClick={() => toggleModal(gnome)}
                onKeyPress={() => toggleModal(gnome)}
                role="button"
                tabIndex="0"
              >
                <img
                  className="gnome_img"
                  alt="gnomeAvatar"
                  src={gnome.thumbnail}
                />
                <h3
                  className="gnome_name"
                >
                  {gnome.name}
                </h3>
              </div>
              <AddButton
                key={gnome.id}
                addGnomeToList={addGnomeToList}
                gnomeList={gnomeList}
                gnome={gnome}
              />
            </div>
          ))
        }
        {!modal.show
          ? null
          : (
            <Modal
              key={modal.profile.id}
              gnomeDetails={modal.profile}
              toggleModal={toggleModal}
              addGnomeToList={addGnomeToList}
              gnomeList={gnomeList}
            />
          )}
      </div>
    </div>
  );
};
