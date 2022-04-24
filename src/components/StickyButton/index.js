import React from 'react';
import chat from '../../assets/chat.svg';
import web from '../../assets/web.svg';
import file from '../../assets/file.svg';
import camera from '../../assets/camera.svg';
import people from '../../assets/people.svg';
import cart from '../../assets/cart.svg';
import './sticky-button.css';

const StickyButton = () => {
  return (
    <div className="icon-bar">
      <img src={chat} alt="chat"/>
      <img src={web} alt="website"/>
      <img src={file} alt="document"/>
      <img src={camera} alt="camera"/>
      <img src={people} alt="people"/>
      <img src={cart} alt="cart"/>
    </div>
  )
}

export default StickyButton