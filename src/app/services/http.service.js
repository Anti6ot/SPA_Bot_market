import axios from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
    function (config) {
        // настройка url по / и json
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url); // ищет / в конце
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json"; // если есть / в конце то вырезаем ссылку и доб.json для считывания БД в FB
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
function transformData(data) {
    return data
        ? Object.keys(data).map((key) => ({
              ...data[key]
          }))
        : [];
}

http.interceptors.response.use(
    (res) => {
        res.data = { content: transformData(res.data) };
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
    put: http.put,
    delete: http.delete
};
export default httpService;
