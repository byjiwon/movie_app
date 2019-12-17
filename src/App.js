import React from "react";

function Cakes({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const cakeILike = [
  {
    name: "HBD",
    image:
      "https://scontent-icn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/79993433_436095297069303_3563004049907381723_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=PzVXHH0PSJAAX-9W4ax&oh=41c4bbf8e110bb8199e910e970166b9d&oe=5E7689C6"
  },
  {
    name: "rabbit",
    image:
      "https://scontent-icn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/74661341_536689880246407_1873200380123642102_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=107&oh=fc0ec32d66c31273d579e7caca39d349&oe=5E7918DB"
  },
  {
    name: "baby",
    image:
      "https://scontent-icn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/79547231_192814345087641_6777028661666345261_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=109&oh=12096d8e2ab924187edd85f93873e6fa&oe=5E969B09"
  }
];

function App() {
  return (
    <div>
      {cakeILike.map(Cake => (
        <Cakes name={Cake.name} picture={Cake.image} />
      ))}
    </div>
  );
}

export default App;
