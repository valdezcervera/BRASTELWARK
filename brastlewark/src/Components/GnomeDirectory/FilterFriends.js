// ARRAY FILTERING MODULE
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import './GnomeDirectory.css';

export default ({ gnomes, filter, renderGnomes }) => {
  const filteredList = gnomes.filter((gnome) => {
    return gnome.friends.map((item) => item.toLowerCase()).includes(filter.toLowerCase());
  });

  useEffect(() => {
    if (!filteredList.length) renderGnomes(gnomes);
    else {
      renderGnomes(filteredList);
    }
  }, [filter]);

  return (
    <div className="filter_type">
      filter by friends
    </div>
  );
};
