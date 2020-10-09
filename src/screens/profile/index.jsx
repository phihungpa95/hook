import React from 'react';
import TaiKhoan from './component/taikhoan';
import KhoaHoc from './component/khoahoc';
import DuAn from './component/duan';
import LichSu from './component/lichsu';
import { NavLink, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';


function Index(props) {
    let { path, url } = useRouteMatch();
    return (
      <div>
        <div className="tab-content">
          <div className="tab-title">
            <NavLink to={`${path}`} active exact>
              Thông tin tài khoản
            </NavLink>
            <NavLink to={`${path}/khoahoc`}>Khóa học của bạn</NavLink>
            <NavLink to={`${path}/duan`}>Dự án đã làm</NavLink>
            <NavLink to={`${path}/lichsu`}>Lịch sử thanh toán</NavLink>
          </div>
          <Switch>
            <Route exact path={path}>
              <TaiKhoan />
            </Route>
            <Route path={`${path}/khoahoc`}>
              <KhoaHoc />
            </Route>
            <Route path={`${path}/duan`}>
              <DuAn />
            </Route>
            <Route path={`${path}/lichsu`}>
              <LichSu />
            </Route>
          </Switch>
        </div>
      </div>
    );
}

// function Taikhoan() {
//     return (
//         <TaiKhoan />
//     )
// }
// function Khoahoc() {
//     return <KhoaHoc />;
// }
// function Duan(props) {
//     return (
//       <DuAn />
//     );
// }
// function Lichsu() {
//     return <LichSu />;
// }

export default Index;