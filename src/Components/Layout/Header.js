import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
