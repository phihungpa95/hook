import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../../MyContext';

function Index() {
    let context = useContext(MyContext);
    let [login, setLogin] = useState(null);
    function handleOnClick(e) {
        e.preventDefault();
        let input = document.loginForm.elements;
        let data ={}
        for(let i = 0; i < input.length ; i++){
            data[input[i].name] = input[i].value;
        }
        console.log(data);
        context.setLogin(true);
    }
    if (context.login) {
        return (
          <Redirect
            to={{
              pathname: "profile",
            }}
          />
        );
    }
    return (
      <div className="container py-4">
        <form name="loginForm">
          <div className="form-group">
            <label htmlFor="text">Tài khoản</label>
            <input
              type="text"
              className="form-control"
              id="text"
              aria-describedby="text"
              name="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Quên mật khẩu
            </label>
          </div>
          <button onClick={handleOnClick} className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    );
}

export default Index;