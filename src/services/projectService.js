import api from "../api/axios";

export async function getProjects() {

    const response = await api.get("/projects/");

    return response.data;

}

export async function createProject(data) {

    const response = await api.post(

        "/projects/",

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function updateProject(id, data) {

    const response = await api.put(

        `/projects/${id}/`,

        data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

    );

    return response.data;

}

export async function deleteProject(id) {

    await api.delete(`/projects/${id}/`);

}