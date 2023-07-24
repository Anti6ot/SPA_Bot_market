import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserById } from "../../../../store/users";
import UserCart from "../../../ui/hoc/userCart/userCart";

const UserPage = () => {
    const currentUserId = useSelector(getCurrentUserId());
    const user = useSelector(getUserById(currentUserId));
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCart user={user} />
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

export default UserPage;
