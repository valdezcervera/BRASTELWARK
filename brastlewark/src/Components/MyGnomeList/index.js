/* eslint-disable arrow-body-style */
import React from 'react';
import './MyGnomes.css';

export default ({ gnomeList }) => {
  return (
    <div>
    My Gnomes
      <div className="my_gnomes_container">
        {
        gnomeList.map((gnome) => (
          <div className="gnome_thumb" key={gnome.id}>
            <img className="gnome_img" src={gnome.thumbnail} alt="gnomeAvatar" />
            <h3 className="gnome_name">{gnome.name}</h3>
          </div>
        ))
    }
      </div>
    </div>
  );
};
