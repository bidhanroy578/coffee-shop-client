import { useContext } from "react";
import { AuthContext } from "../context_provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <div className="text-center"> loading</div>
    if (!user) return <Navigate to="/login" state={location.pathname} />
    if (user) return children
};
PrivateRouter.propTypes = {
    children: PropTypes.node
}
export default PrivateRouter;