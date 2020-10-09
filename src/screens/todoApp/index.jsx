import React, {useRef, useEffect, useState } from "react";

export default function Index() {

    // let [list, setList] = useState([
    //   {
    //     title: "Công việc A",
    //     id: "1"
    //   },
    //   {
    //     title: "Công việc B",
    //     id: "2"
    //   },
    // ]);

    let [list, setList] = useState([]);

    useEffect(() =>{
        getNewsTask()
    }, []);

    let input = useRef(null);

    function _handleAdd() {
        if(input.current.value.trim()) {
            list.push({
                title: input.current.value.trim(),
                id: list[list.length - 1].id + 1
            })
            setList([...list])

            input.current.value = ''
        }
        else {
            alert('Vui lòng nhập giá trị');
        }
    }

    function _removeAction(id) {
        let obj = list.findIndex(e => e.id === id);
        if(obj !== -1) {
            list.splice(obj, 1);
            setList([...list]);
        }
    }

    function _changeAction(id) {
        let obj = list.find((e) => e.id === id);
        if (obj) {
          obj.completed = !obj.completed;
          setList([...list]);
        }
    }

    function getNewsTask() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((res) => res.json())
          .then(res => {
            setList(res);

            console.log(res);
          });
    }
        return (
          <div className="page-content page-conatainer" id="page-content">
            {/* <div className="padding"></div> */}
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12" style={{ margin: "0 auto" }}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Việc cần làm</h4>
                    <div className="add-items d-flex">
                      <input
                        type="text"
                        ref={input}
                        className="form-control todo-list-input"
                        placeholder="Những việc cần làm?"
                      />
                      <button className="btn main" onClick={_handleAdd}>
                        Thêm
                      </button>
                    </div>
                    <div className="list-wrapper">
                      <ul className="todo-list d-flex flex-column-reverse">
                        {list.map((e, i) => (  //trả về mảng
                          <Task
                            key={i}
                            {...e}
                            changeAction={_changeAction}
                            removeAction={_removeAction}
                          />
                        ))}
                        {list.forEach((e, i) => ( //không trả về mảng
                          <Task
                            key={i}
                            {...e}
                            changeAction={_changeAction}
                            removeAction={_removeAction}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

    function Task({ id, completed, title, removeAction, changeAction }) {
        console.log(title);
      return (
        <li className={completed ? "completed" : ""}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={completed}
                onClick={(e) => changeAction(id)}
              />
              {title}
              <i className="input-helper"></i>
            </label>
          </div>
          <i
            className="remove mdi mdi-close-circle-outline"
            onClick={() => removeAction(id)}
          ></i>
        </li>
      );
    }

