import httpService from "./http.service";
const dlcEndpoint = "quality/";

const qualityService = {
    get: async () => {
        const { data } = await httpService.get(dlcEndpoint);
        return data;
    }
};
export default qualityService;
