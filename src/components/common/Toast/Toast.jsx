// DEPENDENCIES
import { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast as customToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// STYLED
import { Container } from "./styled";

const Toast = memo(({ toast }) => {
  useEffect(() => {
    customToast(toast.message, {
      position: "top-right",
      hideProgressBar: false,
      autoClose: 3000,
      type: customToast.TYPE[toast.type],
      pauseOnHover: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
    });
  }, [toast]);

  return (
    <Container>
      <ToastContainer />
    </Container>
  );
});

Toast.propTypes = {
  toast: PropTypes.object,
};

export { Toast };
