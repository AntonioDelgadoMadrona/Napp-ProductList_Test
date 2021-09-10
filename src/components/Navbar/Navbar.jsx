// DEPENDENCIES
import React, { memo } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

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
            <span className={`${cartList?.length > 0 ? "" : "inactive"}`}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartList?.length > 0 && (
                <span className="cartListLength">{cartList?.length}</span>
              )}
            </span>
          </li>
        </ul>
      </LinksContainer>
    </StyledNavbar>
  );
});

Navbar.propTypes = {
  cartList: PropTypes.array,
};

Navbar.displayName = 'Navbar';

export default Navbar;
