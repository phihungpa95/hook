import React from 'react';
import PropTypes from 'prop-types';
Card.propTypes = {
    
};

function Card(props) {
    return (
      <div className="card__members--items1">
        <img src={require("../../images/img-1.jpg")} alt={props.title} className="img-card-top" />
        <div className="card__studies--detail">
          <h4>{props.title}</h4>
          <p>{props.subtitle}</p>
          <div className="items-avt">
            <img src={require("../../images/avt.png")} alt="Trần Nghĩa" />
            <span>Trần Nghĩa</span>
            <a href="#">Đăng ký</a>
          </div>
        </div>
      </div>
    );
}

export default Card;