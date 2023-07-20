import NavBar from "./components/common/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Jess from "./layouts/jess";
import Kanki from "./layouts/kanki";
import Home from "./layouts/home";
import Login from "./layouts/modal/login";
import "./layouts/modal/login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { getDataStatus, loadUserslist } from "./store/users";
import ProtectedRoute from "./components/common/protectedRoute";
import User from "./layouts/user";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/jess" component={Jess} />
                        <Route path="/kanki" component={Kanki} />
                        <ProtectedRoute>
                            <Route path="/user/:userId?" component = {User} />
                        </ProtectedRoute>
                        <Route path="/login" component={Login} />
                        <Redirect to="/" />
                    </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
