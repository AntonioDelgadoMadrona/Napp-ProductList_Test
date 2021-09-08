// DEPENDENCIES
import { memo } from "react";
import { useHistory } from "react-router";

// REDUX
import { connect } from "react-redux";

// STYLED
import { StyledNavbar, ImgContainer, LinksContainer } from "./styles";

// IMAGES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/YouMobile.png";

const Navbar = memo(({ cartList }) => {
  const history = useHistory();

  return (
    <StyledNavbar>
      <ImgContainer onClick={() => history.push("/Products")}>
        <img src={logo} alt="youMobileLogo" />
      </ImgContainer>

      <LinksContainer>
        <ul>
          <li>
            <span
              className={`${cartList?.length > 0 ? "" : "inactive"}`}
              onClick={() => console.log()}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
          </li>
        </ul>
      </LinksContainer>
    </StyledNavbar>
  );
});

const mapState = (state) => {
  const { productReducer } = state;
  return {
    cartList: productReducer.cartList,
  };
};

export { Navbar };

const NavBarContainer = connect(mapState)(Navbar);

export default NavBarContainer;
