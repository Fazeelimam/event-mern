// import React from "react";

// export default function ServiceSection() {
//   const services = [
//     {
//       id: 1,
//       url: "/images/birthday.jpg",
//       title: "Birthday Planning",
//     },
//     {
//       id: 2,
//       url: "/images/anniversary.jpg",
//       title: "Anniversary Planning",
//     },
//     {
//       id: 3,
//       url: "/images/camping.jpg",
//       title: "Camping Trip Planning",
//     },
//     {
//       id: 4,
//       url: "/images/gamenight.jpg",
//       title: "Game Night Planning",
//     },
//     {
//       id: 5,
//       url: "/images/party.jpg",
//       title: "Party Planning",
//     },
//     {
//       id: 6,
//       url: "/images/wedding.jpg",
//       title: "Wedding Planning",
//     },
//     {
//       id: 7,
//       url: "/images/pic1.jpg",
//       title: "Concert Planning",
//     },
//     {
//       id: 8,
//       url: "/images/pic2.jpg",
//       title: "Night-Out Planning",
//     },
//     {
//       id: 9,
//       url: "/images/pic3.jpg",
//       title: "Evening Planning",
//     },
//   ];

//   return (
//     <>
//       <div className="services container">
//         <h2>OUR SERVICES</h2>
//         <div className="banner">
//           {services.map((element) => {
//             return (
//               <div className="item" key={element.id}>
//                 <h3>{element.title}</h3>
//                 <img src={element.url} alt={element.title} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ServiceSection() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      url: "/images/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/images/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/images/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/images/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/images/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/images/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 7,
      url: "/images/pic1.jpg",
      title: "Concert Planning",
    },
    {
      id: 8,
      url: "/images/pic2.jpg",
      title: "Night-Out Planning",
    },
    {
      id: 9,
      url: "/images/pic3.jpg",
      title: "Evening Planning",
    },
  ];

  const handleBookService = (serviceTitle) => {
    const isLoggedIn = !!localStorage.getItem("jwt");

    if (isLoggedIn) {
      // User is logged in, go to contact/booking page
      navigate("/contact");
      toast.success(`Booking ${serviceTitle}!`);
    } else {
      // User not logged in, prompt to login
      toast.info("Please login to book a service");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

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
                <button
                  onClick={() => handleBookService(element.title)}
                  className="book-btn"
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
