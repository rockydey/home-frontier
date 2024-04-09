import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <p className='flex justify-center mt-60 mb-40'>
        <HashLoader size={50} color='#ff214f' />
      </p>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
