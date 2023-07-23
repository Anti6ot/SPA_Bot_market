import httpService from "./http.service";
const dlcEndpoint = "dlc/";

const dlcService = {
    fetchAll: async () => {
        const { data } = await httpService.get(dlcEndpoint);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            dlcEndpoint,
            payload
        );
        return data;
    }
};
export default dlcService;
