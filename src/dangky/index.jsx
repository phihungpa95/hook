import React, { useState } from 'react';

function Index() {
    let [data, setData] = useState({
      lname: "",
      lnumber: "",
      lemail: "",
      lface: "",
      ltextarea: "",
    });
    function addData(e) {
      const input = e.target;
      setData({ ...data, [input.name]: input.value })
        console.log(data);  
    }
    function _handleregis(e) {
        e.preventDefault();
        validate();
        console.log(data);
    }

    const [err, setError] = useState({
      err: "",
    });

    const validate = () => {
      const lname = data.lname?.trim();
      const lnumber = data.lnumber?.trim();
      const lemail = data.lemail?.trim();
      const lface = data.lface?.trim();
      const hinhthuc = data.hinhthuc?.trim();
      const ltextarea = data.ltextarea?.trim();

      if (
        lname == "" ||
        lnumber == "" ||
        lemail == "" ||
        lface == "" ||
        hinhthuc == "" ||
        ltextarea == ""
      ) {
        setError({ err: "Vui lòng nhập không bỏ trống" });
      }
    };
    return (
      <section className="form__section">
        <div className="form__section--content">
          <h5>Đăng ký</h5>
          <h3>Thực Chiến Front-End Căn Bản</h3>
          <div className="form__section--register">
            <form action>
              <label htmlFor="lname">Họ và tên</label>
              <input
                type="text"
                id="lname"
                onChange={addData}
                name="lname"
                placeholder="Nhập họ tên của bạn"
              />
              <label htmlFor="lnumber">Số điện thoại</label>
              <input
                type="number"
                id="lnumber"
                name="lnumber"
                onChange={addData}
                placeholder="Số điện thoại"
              />
              <label htmlFor="lemail">Email</label>
              <input
                type="text"
                id="lemail"
                name="lemail"
                onChange={addData}
                placeholder="Email của bạn"
              />
              <label htmlFor="lface">URL Facebook</label>
              <input
                type="text"
                id="lface"
                name="lface"
                onChange={addData}
                placeholder="https://facebook.com"
              />
              <label htmlFor="hinhthuc">Hình thức thanh toán</label>
              <select id="hinhthuc" name="hinhthuc" onChange={addData}>
                <option value="ck">Chuyển khoản</option>
                <option value="tm">Thanh toán tiền mặt</option>
              </select>
              <label htmlFor="ltextarea">Ý kiến cá nhân</label>
              <input
                type="text"
                id="ltextarea"
                name="ltextarea"
                onChange={addData}
                placeholder="Định hướng và mong muốn của bạn"
              />
              {err != "" ? <p className="text-danger">{err.err}</p> : ""}
              <button onClick={_handleregis}>Đăng ký</button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Index;