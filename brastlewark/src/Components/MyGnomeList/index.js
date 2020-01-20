/* eslint-disable arrow-body-style */
import React from 'react';
import AddButton from '../AddGnomeToList';
import './MyGnomeList.css';

export default ({ gnomeList, addGnomeToList }) => {
  return (
    <div>
    My Contacts (
      {gnomeList.length}
    )
      <div
        className="my_gnomes_container"
      >
        {
        gnomeList.map((gnome) => (
          <div
            className="my_gnome_thumb"
            key={gnome.id}
          >
            <img
              className="my_gnome_img"
              src={gnome.thumbnail}
              alt="gnomeAvatar"
            />
            <h3
              className="my_gnome_name"
            >
              {gnome.name}
            </h3>
            <AddButton
              key={gnome.id}
              addGnomeToList={addGnomeToList}
              gnomeList={gnomeList}
              gnome={gnome}
            />
          </div>
        ))
        }
      </div>
    </div>
  );
};
