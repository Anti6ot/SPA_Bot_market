import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCurrentUserId, getDataStatus, loadUserslist } from "../store/users";
import UserListPage from "../components/ui/userListPage";
// import { Redirect } from "react-router-dom";

const User = () => {
    // const dispatch = useDispatch();
    // const userId = useSelector(getCurrentUserId());
    // const dataStatus = useSelector(getDataStatus());
    // useEffect(() => {
    //     if (!dataStatus) {
    //         dispatch(loadUserslist());
    //     }
    // }, []);
    return (
        <div>
           <UserListPage/>
        </div>
    );
};

export default User;
