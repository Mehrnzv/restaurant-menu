import MenuItem from "../MenuItem/MenuItem";
import data from "../../data/MenuData";
import spoon from "../../assets/spoon.svg";
import menu from "../../assets/menu.png";
import "./menu.css";

const Menu = () => {
  return (
    <section className="special_menu" id="menu">
      <div className="container">
        <div className="special_menu-heading">
          <p>Menu That Fits You Palatte</p>
          <img src={spoon} alt="spoon" />
          <p className="special_menu-title">Today’s Special</p>
        </div>

        <div className="special_menu-content">
          <div className="spcial_menu-detial">
            <div className="menu_title-items">
              <p className="menu_title">Wine & Beer</p>
              {data.wines.map((item) => (
                <MenuItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>

          <div className="special_menu-image">
            <img src={menu} alt="Menu" />
          </div>

          <div className="spcial_menu-detial">
            <div className="menu_title-items">
              <p className="menu_title">Cocktails</p>
              {data.cocktails.map((item) => (
                <MenuItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="special_menu-btn">
          <button className="custom_btn">View More</button>
        </div>

      </div>
    </section>
  );
};

export default Menu;
