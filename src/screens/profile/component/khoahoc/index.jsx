import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    
};

function index(props) {
    return (
      <section className="course__section">
        <div className="course__section--content">
          <div className="course__section--infomation">
            <img
              src={require("../../../../images/code.jpg")}
              className="img-course"
              alt=""
            />
            <div className="course__section--title">
              <h3>FRONT-END CĂN BẢN</h3>
              <p className="subtitle">Khai giảng ngày 09/09/2020</p>
              <div className="course__section--time">
                <img src={require("../../../../images/clock-1.png")} alt="" />
                <p>54 giờ</p>
                <p>25 video</p>
                <img src={require("../../../../images/user.png")} alt="" />
                <p>20 học viên</p>
              </div>
              <div className="light-green round-large">
                <div
                  className="progessbar-green round-xlarge"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
                <div className="progessbar-number">30%</div>
              </div>
              <button className="btn btn--white">Tiếp tục học</button>
            </div>
          </div>
          <div className="course__section--infomation">
            <img
              src={require("../../../../images/img-10.jpg")}
              className="img-course"
              alt=""
            />
            <div className="course__section--title">
              <h3>FRONT-END NÂNG CAO</h3>
              <p className="subtitle">Khai giảng ngày 09/09/2020</p>
              <div className="course__section--time">
                <img src={require("../../../../images/clock-1.png")} alt="" />
                <p>54 giờ</p>
                <p>25 video</p>
                <img src={require("../../../../images/user.png")} alt="" />
                <p>20 học viên</p>
              </div>
              <div className="light-green round-large">
                <div
                  className="progessbar-green round-xlarge"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
                <div className="progessbar-number">30%</div>
              </div>
              <button className="btn btn--white">Tiếp tục học</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;