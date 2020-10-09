import React from 'react';
import Card from "./../../../../components/card";


function index(props) {
    return (
      <section className="card__studies">
        <div className="card__studies--members">
          <Card
            title="Furnitown"
            subtitle="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          />
          <Card
            title="GboxMB"
            subtitle="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          />
        </div>
      </section>
    );
}

export default index;