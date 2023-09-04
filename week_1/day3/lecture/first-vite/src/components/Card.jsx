import React from 'react';
import card from '../assets/static/card.css'

const Card = (props) => {
  const {name, diet, image, trait} = props
  return (
    <div>
        <div className="card">
            <img src={image} alt="dinoScreech" />
            <h2>Name: {name}</h2>
            <p>Diet: {diet}</p>
            <p>Trait: {trait}</p>
        </div>
    </div>
  );
}

export default Card;