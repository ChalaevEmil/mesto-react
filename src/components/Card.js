import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleDeleteClick() {
    props.onDeleteCard(props.card);
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
            title="Нравится"
          ></button>
          <p className="card__like-number">{props.likes}</p>
        </div>
      </div>
      <button className="card__delete-button" aria-label="Удалить." onClick={handleDeleteClick}></button>
    </div>
  );
}

export default Card;
