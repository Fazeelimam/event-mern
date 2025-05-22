import React from 'react'

export default function ServiceSection() {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 7,
      url: "/pic1.jpg",
      title: "Concert Planning",
    },
    {
      id: 8,
      url: "/pic2.jpg",
      title: "Night-Out Planning",
    },
    {
      id: 9,
      url: "/pic3.jpg",
      title: "Evening Planning",
    },
  ];
  
  return (
    <>
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((element) => {
          return (
            <div className="item" key={element.id}>
              <h3>{element.title}</h3>
              <img src={element.url} alt={element.title} />
            </div>
          );
        })}
      </div>
    </div>
  </>
  )
}
