import React from 'react';
import photo from '../photo.jpg';

function Header() {
  return (
    <div className="infobox">
      <div className="title">
        <h2>Ihor Kotliar</h2>
        <h6>C++ Developer</h6>
      </div>
      <div className="info">
        <div className="column">
          <img src={photo} width="80%" className="photo" alt="Profile" />
        </div>
        <div className="column">
          <h5>Phone Number:</h5>
          <a href="tel:+380950410823"><p>+380950410823</p></a>
          <h5>Email:</h5>
          <a href="mailto:ikgovua@gmail.com"><p>ikgovua@gmail.com</p></a>
          <h5>LinkedIn:</h5>
          <a href="https://www.linkedin.com/in/ihor-kotliar/"><p>Ihor Kotliar</p></a>
          <h5>GitHub:</h5>
          <a href="https://github.com/govUA/"><p>govUA</p></a>
        </div>
      </div>
    </div>
  );
}

export default Header;