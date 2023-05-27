import React, {useEffect} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [info, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getStartedCards()]).then(([profileInfo, card]) => {
      setUserInfo(profileInfo)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])


  
  return (
    <main className="content">
      <section className="profile">
          <div className="profile__avatar" style={{ backgroundImage: `url(${info.avatar})` }} onClick={props.onEditAvatar}></div>
        <div className="profile__info">
          <h1 className="profile__name">{info.name}</h1>
          <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={props.onEditProfile}/>
          <p className="profile__profession">{info.about}</p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить изображение в ленту" onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        
          {cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onDeleteCard={props.onDeleteCard}
            />
          ))}
      </section>
    </main>
  )
}

export default Main;
