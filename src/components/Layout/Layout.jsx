// DEPENDENCIES
import React, { memo } from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";

// STYLES
import { Layout as Container, Wrapper } from "./styles";

const Layout = memo(({ children, }) => {

    const { pathname } = useLocation();

    return (
        <Container>
            <Navbar />
            <Wrapper path={pathname}>{children}</Wrapper>
        </Container>
    );
});

export { Layout };
