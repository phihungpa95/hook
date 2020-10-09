import React from "react";

import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

function Index(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="tab-title">
        <Link to={`${path}`}>Thong tin tai khoan</Link>
        <Link to={`${path}/course`}>KHoa hoc</Link>
        <Link to={`${path}/project`}>du an</Link>
        <Link to={`${path}/history`}>Lich su thanh toan</Link>
      </div>
      <div className="tab-content">
        <Switch>
            <Route exact path={path}>
                <Profile />
            </Route>
            <Route path={`${path}/course`}>
                <Course />
            </Route>
            <Route path={`${path}/project`}>
                <Project />
            </Route>
            <Route path={`${path}/history`}>
                <History />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

function Profile() {
  return <div>Profile</div>;
}
function Course() {
  return <div>Khoa hoc</div>;
}
function Project() {
  return <div>Du an</div>;
}
function History() {
  return <div>Lich su</div>;
}

export default Index;
