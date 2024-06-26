import { HomePageContainer } from "./homePage.styled";
import Logo from "helpers/icons/CraftworkHome.svg?react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <HomePageContainer>
      <NavLink className="LogoContainer" to={!isLoggedIn && "register"}>
        <img src={Logo} alt="logo" />
        <h2 className="LogoTitle">VocabBuilder</h2>
      </NavLink>
    </HomePageContainer>
  );
};

export default HomePage;
