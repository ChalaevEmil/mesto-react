import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isDeleteCardPopupOpen, setisDeleteCardPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteButtonClick() {
    setisDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setisDeleteCardPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onDeleteCard={handleDeleteButtonClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"profile"}
        form={"profileData"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        children={
          <>
            <input
              id="input-profile-name"
              className="popup__input popup__input_el_name"
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="input-profile-name-error">
              Необходимо заполнить данное поле
            </span>
            <input
              id="input-profile-profession"
              className="popup__input popup__input_el_profession"
              type="text"
              name="profession"
              placeholder="Вид деятельности"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="input-profile-profession-error">
              Необходимо заполнить данное поле
            </span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
              required
            />
            <span className="input-card-url-error">
              Необходимо заполнить данное поле
            </span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"avatar"}
        form={"placeData"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        children={
          <>
            <input
              type="url"
              placeholder="Ссылка на изображение"
              id="input-avatar-link"
              className="popup__input popup__input_el_avatar-url"
              name="input-description"
              required
            />
            <span className="input-avatar-link-error">
              Необходимо заполнить данное поле
            </span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        name={"delete-card"}
        title={"Вы уверены?"}
        buttonText={"Да"}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
