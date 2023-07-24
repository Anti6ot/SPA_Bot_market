import React from "react";
import { useParams } from "react-router-dom";
import UserEdit from "../components/common/pages/userEdit";
import UserPage from "../components/common/pages/userPage/userPage";

const User = () => {
    const params = useParams();
    const { edit } = params;
    return <>{edit ? <UserEdit /> : <UserPage />}</>;
};

export default User;
