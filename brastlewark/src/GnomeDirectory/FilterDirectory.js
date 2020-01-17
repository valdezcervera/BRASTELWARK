import React, { useState, useContext, useEffect } from 'react';
import './GnomeDirectory.css'
import { GnomeContext } from '../App';

export default ({gnomes}) => {
  const [filter, setFilter] = useState('');
  const { updateList, setGnomeList,gnomeList } = useContext(GnomeContext);

  const handleChange = (e) => {
    setFilter(e.target.value)
    updateList(filteredList)
  };
  if(!gnomeList.length) setGnomeList(gnomes.Brastlewark)

  const filteredList = gnomes.Brastlewark.filter((gnome) => {
    return gnome.name.toLowerCase().includes(filter.toLocaleLowerCase())
  })
  
  return (
      <div>
        filter
        <input value={filter} onChange={handleChange} />
      </div>
  );
}
