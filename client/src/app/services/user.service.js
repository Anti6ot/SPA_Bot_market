import httpService from "./http.service";

const userEndPoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndPoint);
        console.log(data);
        return data;
    }
};

export default userService;
