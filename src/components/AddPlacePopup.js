import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit({
      ["input-name"]: name,
      ["input-url"]: link,
    });
    evt.target.reset();
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName("");
      setLink("");
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"card"}
      form={"placeData"}
      title={"Новое место"}
      buttonText={"Создать"}
      children={
        <>
          <input
            id="input-card-name"
            className="popup__input popup__input_el_image-name"
            type="text"
            name="input-name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            onChange={handleNameChange}
            value={name}
            required
          />
          <span className="input-card-name-error">
            Необходимо заполнить данное поле
          </span>
          <input
            id="input-card-url"
            className="popup__input popup__input_el_image-url"
            type="url"
            name="input-url"
            placeholder="Ссылка на картинку"
            onChange={handleLinkChange}
            value={link}
            required
          />
          <span className="input-card-url-error">
            Необходимо заполнить данное поле
          </span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
