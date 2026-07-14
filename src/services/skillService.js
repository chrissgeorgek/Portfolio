import api from "../api/axios";

export async function getSkills() {

    const response = await api.get("/skills/");

    return response.data;

}

export async function createSkill(data) {

    const response = await api.post(
        "/skills/",
        data
    );

    return response.data;

}

export async function updateSkill(id, data) {

    const response = await api.put(
        `/skills/${id}/`,
        data
    );

    return response.data;

}

export async function deleteSkill(id) {

    await api.delete(
        `/skills/${id}/`
    );

}