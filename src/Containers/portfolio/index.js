import React from "react";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "LogiRegiAuth",
    image: ImageOne,
    link: "https://github.com/mohiyaddeen7/login-register",
  },
  {
    id: 2,
    name: "Newsletter-Plugin",
    link: "https://github.com/Abhimaurya2526/Embeddable-Plugin-for-Newsletter",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "https://github.com/Abhimaurya2526/Todo-App",
  },
  {
    id: 3,
    name: "Portfolio",
    image: ImageFive,
    link: "https://github.com/Abhimaurya2526/Portfolio",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
    {/* ... (previous code) ... */}
    <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        </div>
    <div className="portfolio__content__cards">
      {filteredItems.map((item, index) => (
        <div
          className="portfolio__content__cards__item"
          key={`cardItem${item.name.trim()}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)}
        >
          <div className="portfolio__content__cards__item__img-wrapper">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img alt="dummy data" src={item.image} />
            </a>
          </div>
          <div className="overlay">
            {index === hoveredValue && (
              <div>
                <p>{item.name}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button>Visit</button>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
    
  );
};
export default Portfolio;