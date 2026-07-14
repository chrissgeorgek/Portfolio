import api from "../api/axios";

export async function getEducations() {

    const response = await api.get("/education/");

    return response.data;

}

export async function createEducation(data) {

    const response = await api.post(

        "/education/",

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function updateEducation(id, data) {

    const response = await api.put(

        `/education/${id}/`,

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function deleteEducation(id) {

    await api.delete(`/education/${id}/`);

}