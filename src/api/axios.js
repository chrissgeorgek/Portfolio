import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("access");

    const publicEndpoints = [
        "/hero/",
        "/skills/",
        "/projects/",
        "/experience/",
    ];

    const isPublicGet =
        config.method === "get" &&
        publicEndpoints.some((endpoint) =>
            config.url.startsWith(endpoint)
        );

    if (!isPublicGet && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;