import api from "../api/axios";

export async function getExperiences() {

    const response = await api.get("/experience/");

    return response.data;

}

export async function createExperience(data) {

    const response = await api.post(

        "/experience/",

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function updateExperience(id, data) {

    const response = await api.put(

        `/experience/${id}/`,

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function deleteExperience(id) {

    await api.delete(`/experience/${id}/`);

}