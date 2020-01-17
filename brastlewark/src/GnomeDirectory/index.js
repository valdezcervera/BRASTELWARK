import React from 'react';
import './GnomeDirectory.css'

export default ({gnomesList, filteredGnomes, onClick}) => {

  return (
    <div className="gnome_container">
      <div className="gnome_headline">
        <img className="gnome_img" alt="avatar" src={
          gnomesList.thumbnail
            ? gnomesList.thumbnail
            : <p>This Gnome has no picture yet!</p> } />
          <h3 className="gnome_name">{gnomesList.name}</h3>
          {/* <button className="gnome_headline_btn" onClick={()=>addMyList(gnome.id)}> {gnome.mylist ? '✓' : '+'}</button> */}
      </div>
    </div>
  );
}
