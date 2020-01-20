/* eslint-disable arrow-body-style */
import React from 'react';
import AddButton from '../AddGnomeToList';
import './Modal.css';

export default ({
  gnomeDetails, toggleModal, addGnomeToList, gnomeList
}) => {
  return (
    <dialog
      className="modal"
      open
    >
      <div
        className="modal_details"
      >
        <div
          className="modal_gnome"
        >
          <img
            src={gnomeDetails.thumbnail}
            alt="gnomeAvatar"
          />
          <h3>
            {gnomeDetails.name}
          </h3>
        </div>
        <div
          className="modal_details_list"
        >
          <p>
            <span>
              AGE:
              {' '}
            </span>
            {gnomeDetails.age}
          </p>
          <p>
            <span>
              WEIGHT:
              {' '}
            </span>
            {gnomeDetails.weight}
            {' '}
            Kg
          </p>
          <p>
            <span>
              HEIGHT:
              {' '}
            </span>
            {gnomeDetails.height}
            {' '}
            Cm
          </p>
          <p>
            <span>
              HAIR COLOR:
              {' '}
            </span>
            {gnomeDetails.hair_color}
          </p>
          <div
            className="modal_details_profession"
          >
            <p>
              PROFESSION:
              {' '}
              {gnomeDetails.professions.map((P) => (
                <span key={P}>
                  {P}
                ,
                  {' '}
                </span>
              ))}
            </p>
          </div>
          <div
            className="modal_details_friends"
          >
            <p>
              FRIENDS:
              {' '}
              {gnomeDetails.friends.length
                ? gnomeDetails.friends.map((P) => (
                  <span key={P}>
                    {P}
                  ,
                    {' '}
                  </span>
                ))
                : 'This Gnome has no friends'}
            </p>
          </div>
        </div>
      </div>
      <div
        className="buttons"
      >
        <AddButton
          key={gnomeDetails.id}
          addGnomeToList={addGnomeToList}
          gnomeList={gnomeList}
          gnome={gnomeDetails}
        />
        <button
          className="close_button"
          type="button"
          onClick={() => toggleModal()}
        >
        close
        </button>
      </div>
    </dialog>
  );
};
