import React, { useState } from "react";

function Index() {
  let [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    face: "",
    skype: "",
  });

  function handleOnChange(e) {
    const input = e.target;
    setData({
      ...data,
      [input.name]: input.value,
    });
    console.log(data);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    validate();
    console.log(data);
  }

  const [err, setError] = useState({
    err: "",
  });

  const validate = () => {
    const name = data.name?.trim();
    const number = data.number?.trim();
    const email = data.email?.trim();
    const face = data.face?.trim();
    const skype = data.skype?.trim();

    if (
      name == "" ||
      number == "" ||
      email == "" ||
      face == "" ||
      skype == ""
    ) {
      setError({ err: "Vui lòng nhập không bỏ trống" });
    }
  };

  return (
    <section className="form__section">
      <div className="form__section--content">
        <div className="form__section--register">
          <form>
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleOnChange}
              placeholder="Nhập họ tên của bạn"
            />
            <label htmlFor="number">Số điện thoại</label>
            <input
              type="number"
              id="number"
              name="number"
              onChange={handleOnChange}
              placeholder="0989596913"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              onChange={handleOnChange}
              name="email"
              placeholder="trannghia2018@gmail.com"
            />
            <label htmlFor="face">URL Facebook</label>
            <input
              type="text"
              id="face"
              name="face"
              onChange={handleOnChange}
              placeholder="https://facebook.com"
            />
            <label htmlFor="skype">Skype</label>
            <input
              type="text"
              id="skype"
              name="skype"
              onChange={handleOnChange}
              placeholder="trannghia2018"
            />
            {err!=""?<p className="text-danger">{err.err}</p>:""}
            <button onClick={handleOnSubmit}>Đăng ký</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Index;
