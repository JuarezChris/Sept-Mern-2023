import React from 'react';
import card from '../assets/static/card.css'
import { useState } from 'react';

const Card = (props) => {
  const {name, diet, image, trait} = props
  const [ like, setLike ] = useState(0)

  const dislike = () => {
    like > 0
    ?  setLike(like-1) : pass 
    
  }

  return (
    <div>
        <div className="card">
            <img src={image} alt="dinoScreech" />
            <h2>Name: {name}</h2>
            <p>Diet: {diet}</p>
            <p>Trait: {trait}</p>
            {/* {5+5} we can type javaScript in curly braces */}
            {like > 5 ? <p>Title: Ultimate likes!!!</p> : ''}
        </div>
        <p>like: {like}</p>
        <button onClick={() => setLike(like +1)}>Like</button>
        <button onClick={dislike}>Dislike</button>
    </div>
  );
}

export default Card;