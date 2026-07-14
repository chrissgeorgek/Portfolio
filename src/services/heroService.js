import api from "../api/axios";

export const getHero = async () => {

    const response = await api.get("/hero/");

    return response.data;

};

export const updateHero = async (formData) => {

    const response = await api.put(
        "/hero/",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;

};