import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-backend-sc6t.onrender.com/api",
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