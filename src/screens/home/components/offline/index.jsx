import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    
};

function index(props) {
    return (
      <section className="offline">
        <h4 className="offline__course">Khóa học</h4>
        <h2 className="offline__title">OFFLINE</h2>
        <div className="offline__group">
          <div className="offline__group --item">
            <img src={require("./../../../../images/img-7.jpg")} alt="Front-end căn bản" />
            <h3>Front-end căn bản</h3>
            <p>One of the best corporate fashion brands in Sydney</p>
            <div className="offline__group --item --form">
              <div className="offline-group --item --form --avatar">
                <img src={require("./../../../../images/avt.png")} alt="avatar" />
                <p>Trần Nghĩa</p>
              </div>
              <div className="offline-group --item --form --button">
                <a href="#">Đăng ký</a>
              </div>
            </div>
          </div>
          <div className="offline__group --item">
            <img src={require("./../../../../images/img-8.jpg")} alt="Front-end căn bản" />
            <h3>Front-end nâng cao</h3>
            <p>One of the best corporate fashion brands in Sydney</p>
            <div className="offline__group --item --form">
              <div className="offline-group --item --form --avatar">
                <img src={require("./../../../../images/avt.png")} alt="avatar" />
                <p>Trần Nghĩa</p>
              </div>
              <div className="offline-group --item --form --button">
                <a href="#">Đăng ký</a>
              </div>
            </div>
          </div>
          <div className="offline__group --item">
            <img src={require("./../../../../images/img-9.jpg")} alt="Front-end căn bản" />
            <h3>Laravel framework</h3>
            <p>One of the best corporate fashion brands in Sydney</p>
            <div className="offline__group --item --form">
              <div className="offline-group --item --form --avatar">
                <img src={require("./../../../../images/avt.png")} alt="avatar" />
                <p>Trần Nghĩa</p>
              </div>
              <div className="offline-group --item --form --button">
                <a href="#">Đăng ký</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;