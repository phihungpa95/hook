import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    
};

function index(props) {
    return (
      <section className="video">
        <div className="video__img">
          <img
            src={require("./../../../../images/video.jpg")}
            className="video__img--video"
            alt="video"
          />
          <img
            src={require("./../../../../images/btn_play.jpg")}
            className="video__img--btn"
            alt="btnPlay"
          />
        </div>
      </section>
    );
}

export default index;