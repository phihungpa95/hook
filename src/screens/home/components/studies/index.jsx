import React, { useEffect, useState } from "react";

function Index() {
  let [list, setList] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),

      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    ]).then(([res1, res2]) => {
      console.log(res1, res2);
      setList(res1);
    });
  }, []);
    return (
      <section className="team__studies container">
        <h5>KHÓA HỌC</h5>
        <h1>ONLINE</h1>
        <div className="items row">
          {list.map((item, index) => {
          let image = "https://via.placeholder.com/468x460";
          let teacher = "Trần Nghĩa";
          return (
            <div className="team__studies--members col-12 col-md-4 col-lg-4">
              <div className="team__members--items1">
                <img src={image} alt={item.title} />
                <div className="team__studies--detail">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                  <div className="items-avt">
                    <img
                      src={require("./../../../../images/avt.png")}
                      alt="Trần Nghĩa"
                    />
                    <span>{teacher}</span>
                    <a href="#">Đăng ký</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>  
      </section>
    );
}

export default Index;