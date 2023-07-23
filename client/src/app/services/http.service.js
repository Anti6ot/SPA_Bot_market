import axios from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";
import localStorageService from "./localStorage.service";
import authService from "./auth.service";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(

    async function (config) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expiresDate < Date.now();
        // настройка url по / и json
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url); // ищет / в конце
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json"; // если есть / в конце то вырезаем ссылку и доб.json для считывания БД в FB
        } else {
            if (isExpired) {
                const data = await authService.refresh();
                localStorageService.setTokens(data);
            }
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`
                };
            }
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// function transformData(data) {
//     return data
//         ? Object.keys(data).map((key) => ({
//               ...data[key]
//           }))
//         : [];
// }

http.interceptors.response.use(
    (res) => {
        res.data = { content: res.data };
        return res;
    },
    function error(error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
            toast.error("Something was wrong. Try it later");
        }

        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    patch: http.patch,
    put: http.put,
    delete: http.delete
};
export default httpService;
