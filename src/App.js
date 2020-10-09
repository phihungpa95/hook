import React, { useState } from "react";
import Home from "./screens/home";
import Header from "./components/header";
import Footer from "./components/footer";
import CFDTeam from "./screens/CFDTeam";
import KhoaHoc from "./screens/khoahoc";
import DuAn from "./screens/duan";
import DangKy from "./dangky";
import LienHe from "./screens/lienhe";
import Profile from "./screens/profile";
import Todo from "./screens/todoApp";
import DangNhap from "./screens/dangnhap";
import MyContext from "./MyContext";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./scss/style.scss";
function App() {

  let [login, setLogin] = useState(false)
  
  return (
    <MyContext.Provider value={{login, setLogin}}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/cfdteam">
              <CFDTeam />
            </Route>
            <Route path="/khoahoc">
              <KhoaHoc />
            </Route>
            <Route path="/duan">
              <DuAn />
            </Route>
            <Route path="/dangky">
              <DangKy />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/lienhe">
              <LienHe />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/dangnhap">
              <DangNhap />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
