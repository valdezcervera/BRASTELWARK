// STRING FILTERING MODULE
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import './GnomeDirectory.css';

export default ({ gnomes, filter, renderGnomes }) => {
  const filteredList = gnomes.filter((gnome) => {
    return gnome.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    renderGnomes(filteredList);
  }, [filter]);

  return (
    <div
      className="filter_type"
    >
      filter by name
    </div>
  );
};
