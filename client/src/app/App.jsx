import NavBar from "./components/common/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Jess from "./layouts/jess";
import Home from "./layouts/home";
import Login from "./layouts/modal/login";
import "./styles/login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/protectedRoute";
import User from "./layouts/user";
import AppLoader from "./components/ui/hoc/appLoader";
import LogOut from "./layouts/logOut";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/jess" component={Jess} />
                    <ProtectedRoute>
                        <Route path="/user/:userId?" component={User} />
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
