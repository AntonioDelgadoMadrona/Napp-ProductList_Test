// DEPENDENCIES
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import Navbar from "../Navbar/Navbar";
import { Toast } from "../common/Toast/Toast";

// STYLES
import { Layout as Container, Wrapper } from "./styles";

const Layout = memo(({ cartList, toast, children }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Navbar cartList={cartList} />
      {toast && <Toast toast={toast} />}
      <Wrapper path={pathname}>{children}</Wrapper>
    </Container>
  );
});

Layout.propTypes = {
  cartList: PropTypes.array,
  toast: PropTypes.object,
  children: PropTypes.node,
};

const mapState = (state) => {
  const { productReducer, alertReducer } = state;
  return {
    cartList: productReducer?.cartList,
    toast: alertReducer?.toast,
  };
};

Layout.displayName = 'Layout';

export default connect(mapState)(Layout);
