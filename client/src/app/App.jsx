import NavBar from "./components/common/navBar";
import { Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Jess from "./layouts/jess";
import Kanki from "./layouts/kanki";
import Home from "./layouts/home";
import Login from "./layouts/modal/login";
import "./layouts/modal/login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loadUserslist } from "./store/users";
import ProtectedRoute from "./components/common/protectedRoute";
// import { loadDLClist } from "./store/dlc";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUserslist());
    }, []);

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <ProtectedRoute>
                <Route path="/jess" component={Jess} />
                <Route path="/kanki" component={Kanki} />
                </ProtectedRoute>
                <Route path="/login" component={Login} />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;
