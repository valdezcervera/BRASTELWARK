/* eslint-disable arrow-body-style */
/* eslint-disable padded-blocks */
import React from 'react';
import './AddGnomeToList.css';

export default ({ addGnomeToList, gnomeList, gnome }) => {

  return (
    <button
      type="button"
      className="add_button"
      onClick={() => addGnomeToList(gnome)}
    >
      {gnomeList.includes(gnome)
        ? 'Remove'
        : 'Add'}
    </button>
  );
};
